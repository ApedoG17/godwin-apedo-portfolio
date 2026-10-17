import { NextRequest, NextResponse } from "next/server";
import { ContactFormValues, ContactFormResponse } from "@/types/contact";

// In-memory rate limiting store (IP -> { count, resetAt })
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5; // max 5 submissions
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "127.0.0.1";
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean old entries if map grows large
  if (rateLimitMap.size > 1000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (val.resetAt < now) rateLimitMap.delete(key);
    }
  }

  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rateLimit = checkRateLimit(ip);

    if (!rateLimit.allowed) {
      return NextResponse.json<ContactFormResponse>(
        {
          success: false,
          message:
            "Too many messages received from this connection. Please wait 10 minutes before submitting again, or send an email directly.",
        },
        { status: 429 }
      );
    }

    let body: Partial<ContactFormValues>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json<ContactFormResponse>(
        { success: false, message: "Invalid request payload format." },
        { status: 400 }
      );
    }

    const { fullName, email, subject, message, botField } = body;

    // Honeypot check: automated bots frequently populate hidden fields
    if (botField && botField.trim().length > 0) {
      // Silently reject bot submissions
      return NextResponse.json<ContactFormResponse>(
        { success: false, message: "Spam detected." },
        { status: 400 }
      );
    }

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      errors.fullName = "Please provide your full name (at least 2 characters).";
    } else if (fullName.trim().length > 100) {
      errors.fullName = "Full name cannot exceed 100 characters.";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    } else if (email.trim().length > 254) {
      errors.email = "Email address is too long.";
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 2) {
      errors.subject = "Please enter a subject (at least 2 characters).";
    } else if (subject.trim().length > 150) {
      errors.subject = "Subject cannot exceed 150 characters.";
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Please write a message with at least 10 characters.";
    } else if (message.trim().length > 3000) {
      errors.message = "Message cannot exceed 3,000 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json<ContactFormResponse>(
        {
          success: false,
          message: "Validation failed. Please correct the highlighted errors.",
          errors,
        },
        { status: 422 }
      );
    }

    const destinationEmail =
      process.env.CONTACT_DESTINATION_EMAIL || "likekodji@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    // Check if delivery service is configured
    if (!resendApiKey) {
      // Explicitly notify the client that delivery is pending setup
      return NextResponse.json<ContactFormResponse>(
        {
          success: false,
          configured: false,
          message:
            "The contact form delivery service requires RESEND_API_KEY to be configured in the environment. Please reach out directly to likekodji@gmail.com.",
        },
        { status: 503 }
      );
    }

    // Deliver email via Resend API
    const sanitizedName = sanitize(fullName!.trim());
    const sanitizedEmail = sanitize(email!.trim());
    const sanitizedSubject = sanitize(subject!.trim());
    const sanitizedMessage = sanitize(message!.trim()).replace(/\n/g, "<br/>");

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #071414; color: #ffffff; border-radius: 16px; border: 1px solid rgba(0, 212, 170, 0.2);">
        <div style="border-bottom: 1px solid rgba(0, 212, 170, 0.2); padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #00d4aa; margin: 0 0 6px 0; font-size: 20px;">New Portfolio Inquiry</h2>
          <p style="color: #82a8a8; margin: 0; font-size: 13px;">Received via godwinapedo dedicated contact page</p>
        </div>

        <div style="background: rgba(10, 28, 28, 0.7); border-radius: 12px; padding: 18px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="color: #82a8a8; padding: 6px 0; width: 100px;">Sender:</td>
              <td style="color: #ffffff; font-weight: bold; padding: 6px 0;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="color: #82a8a8; padding: 6px 0;">Email:</td>
              <td style="color: #00ffcc; padding: 6px 0;"><a href="mailto:${sanitizedEmail}" style="color: #00ffcc; text-decoration: none;">${sanitizedEmail}</a></td>
            </tr>
            <tr>
              <td style="color: #82a8a8; padding: 6px 0;">Subject:</td>
              <td style="color: #ffffff; padding: 6px 0;">${sanitizedSubject}</td>
            </tr>
          </table>
        </div>

        <div style="padding: 16px 0;">
          <h3 style="color: #c0d8d8; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px 0;">Message Content</h3>
          <div style="background: #030808; padding: 18px; border-radius: 10px; border-left: 3px solid #00d4aa; color: #f0f6f6; line-height: 1.6; font-size: 14px;">
            ${sanitizedMessage}
          </div>
        </div>

        <div style="border-top: 1px solid rgba(0, 212, 170, 0.1); padding-top: 16px; margin-top: 24px; font-size: 12px; color: #82a8a8;">
          <p style="margin: 0;">Reply directly to this email to respond to ${sanitizedName} (${sanitizedEmail}).</p>
        </div>
      </div>
    `;

    const textContent = `
New Inquiry from Godwin Apedo Portfolio:

Sender: ${fullName!.trim()}
Email: ${email!.trim()}
Subject: ${subject!.trim()}

Message:
${message!.trim()}

---
Reply directly to this email to respond to ${email!.trim()}.
    `.trim();

    const fromAddress =
      process.env.CONTACT_FROM_EMAIL ||
      "Godwin Apedo Portfolio <onboarding@resend.dev>";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [destinationEmail],
        reply_to: email!.trim(),
        subject: `[Portfolio Inquiry] ${subject!.trim()} — from ${fullName!.trim()}`,
        html: htmlContent,
        text: textContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Resend API delivery error:", errorData);
      return NextResponse.json<ContactFormResponse>(
        {
          success: false,
          message:
            "Delivery service was unable to send the email. Please send a direct email to likekodji@gmail.com.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json<ContactFormResponse>(
      {
        success: true,
        message:
          "Thank you! Your message has been delivered to Godwin Apedo. You will receive a response shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API unhandled error:", error);
    return NextResponse.json<ContactFormResponse>(
      {
        success: false,
        message:
          "An unexpected error occurred while processing your request. Please email likekodji@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
