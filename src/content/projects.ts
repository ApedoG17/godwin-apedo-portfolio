import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "mensah",
    title: "MENSAH",
    subtitle: "Luxury Tailoring & Spatial Logistics",
    tagline: "Bespoke luxury menswear couture, measurement-based virtual fitting & spatial logistics engine",
    shortDescription:
      "A luxury menswear e-commerce prototype exploring measurement-based fitting, bespoke customisation, WhatsApp checkout, and animated courier dispatch visualisation.",
    category: "Luxury E-Commerce & Logistics",
    scope: "Hackathon Project",
    role: "Sole Creator & Frontend Engineer",
    contributionSummary:
      "Developed as a hackathon project exploring luxury menswear couture with bespoke monogram customisation, an interactive conversational sizing assistant, and Haversine spatial courier matching.",
    individualContributions: [
      "Engineered luxury digital atelier with React 19, Vite, GSAP timelines, and a custom Vanilla CSS design system",
      "Built conversational virtual fitting assistant utilizing validated body measurements and deterministic sizing formulas",
      "Implemented great-circle courier proximity engine using the mathematical Haversine formula across Accra locations",
      "Constructed animated vector grid map visualizing multi-stage courier dispatch routes to the atelier and delivery destinations",
      "Designed two-stage checkout modal generating pre-formatted WhatsApp order manifests directly to the boutique",
      "Architected resilient offline catalog fallback ensuring luxury garments and campaigns display even when external APIs are unreachable",
    ],
    problemStatement:
      "Standard e-commerce platforms cater only to off-the-rack sizing and lack workflows for custom tailoring notes, monogram embroidery, and localized last-mile courier coordination.",
    architectureOverview:
      "Dual-view architecture transitioning between an editorial brand runway and transactional boutique, backed by an offline-resilient catalog, GSAP animation timeline, and Haversine proximity calculations.",
    techStack: {
      frontend: ["React", "Vite", "JavaScript", "GSAP", "CSS"],
      tooling: ["Git", "GitHub", "Vercel"],
    },
    links: {
      github: "https://github.com/ApedoG17/MENSAH-LEX",
      live: "https://mensah-lex.vercel.app/",
    },
    images: [
      "/images/mensah-preview.png",
    ],
    subsystems: [
      {
        id: "storefront",
        name: "Editorial Runway",
        badge: "Brand Experience",
        description: "Cinematic brand presentation showcasing sartorial craftsmanship, Accra textile heritage, and private consult booking.",
        screenshots: [
          {
            src: "/images/mensah-preview.png",
            alt: "MENSAH Luxury Bespoke Tailoring & E-Commerce Storefront: Sartorial Dignity",
            label: "Brand Runway & Atelier",
            route: "mensah-lex.vercel.app",
            caption: "Savile Row structure meets West African sartorial heritage",
          },
        ],
      },
      {
        id: "fitting",
        name: "Virtual Fitting Room",
        badge: "Algorithmic Sizing",
        description: "Conversational digital tailor collecting chest, waist, and hip metrics in cm to calculate tailored fit coordinates and confidence score.",
        screenshots: [
          {
            src: "/images/mensah-preview.png",
            alt: "MENSAH Measurement-Based Virtual Fitting Room",
            label: "Conversational Sizing Assistant",
            route: "mensah-lex.vercel.app/fitting",
            caption: "Deterministic measurement-based fit scoring & tailor notes",
          },
        ],
      },
      {
        id: "logistics",
        name: "Spatial Courier Dispatch",
        badge: "Haversine Proximity",
        description: "Mathematical great-circle distance matching calculating closest Accra courier with animated vector route map.",
        screenshots: [
          {
            src: "/images/mensah-preview.png",
            alt: "MENSAH Spatial Courier Proximity Dispatcher",
            label: "Logistics Proximity Map",
            route: "mensah-lex.vercel.app/admin/logistics",
            caption: "Haversine distance calculation & multi-stage delivery animation",
          },
        ],
      },
    ],
    isFeatured: true,
    isProvisional: false,
    accentColor: "amber",
  },
  {
    slug: "chef-apedo-foods",
    title: "Chef Apedo Foods",
    subtitle: "Full-Cycle Food Platform & Operations",
    tagline: "Full-cycle food ordering, real-time kitchen operations & courier dispatch platform",
    shortDescription:
      "Independent commercial initiative unifying customer ordering, a Supabase WebSocket kitchen display, financial ledger auditing, and a dedicated courier dispatch portal.",
    category: "Commercial Platform",
    scope: "Solo Product Designer & Developer",
    role: "Solo Product Designer & Developer",
    contributionSummary:
      "Independent commercial initiative encompassing product planning, multi-role user interfaces, real-time event subscriptions, and end-to-end operational workflows.",
    individualContributions: [
      "Conceived and designed the customer ordering workflow with dynamic menu item selection and cart handling",
      "Architected real-time kitchen operations dashboard with live Supabase subscriptions for instant ticket updates",
      "Engineered financial ledger module auditing food revenue, courier fee allocations, and Mobile Money (MoMo) channels",
      "Built dedicated courier logistics portal (/rider) enabling real-time delivery queue tracking and fulfillment",
    ],
    problemStatement:
      "Eliminating third-party aggregator commissions by connecting customers, kitchen operations, and delivery riders through a unified, real-time digital system.",
    architectureOverview:
      "Three-tier architecture uniting customer storefront, Supabase-backed kitchen management with WebSocket subscriptions, and a lightweight courier dispatch portal.",
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Supabase", "Realtime WebSockets"],
      tooling: ["Git", "GitHub", "Vercel"],
    },
    links: {
      live: "https://chefapedofoods.vercel.app",
    },
    images: [
      "/images/chef-apedo-foods.png",
      "/images/chef-apedo-foods-menu.png",
    ],
    subsystems: [
      {
        id: "storefront",
        name: "Storefront",
        badge: "Customer Portal",
        description: "Mobile-first ordering interface featuring item customization, order review, and direct checkout inquiries.",
        screenshots: [
          {
            src: "/images/chef-apedo-foods.png",
            alt: "Chef Apedo Foods landing page hero: Ghanaian Food, Made to Order",
            label: "Landing & Brand Experience",
            route: "chefapedofoods.vercel.app",
            caption: "Value proposition & mobile-first entry",
          },
          {
            src: "/images/chef-apedo-foods-menu.png",
            alt: "Chef Apedo Foods interactive signature rice dishes catalog and ordering",
            label: "Interactive Menu & Cart",
            route: "chefapedofoods.vercel.app/menu",
            caption: "Dynamic item selection & real-time cart handling",
          },
        ],
      },
      {
        id: "admin",
        name: "Kitchen & Backoffice",
        badge: "Operations Admin",
        description: "Live kitchen display system backed by Supabase WebSocket subscriptions, financial ledger auditing, and SMS marketing.",
        screenshots: [
          {
            src: "/images/chef-apedo-foods-admin-dashboard.png",
            alt: "Chef Apedo Foods Kitchen Overview Admin Dashboard with real-time Supabase subscriptions",
            label: "Kitchen Display & Live Orders",
            route: "chefapedofoods.vercel.app/admin",
            caption: "Live Supabase subscriptions & order status dispatch",
          },
          {
            src: "/images/chef-apedo-foods-admin-finance.png",
            alt: "Chef Apedo Foods Financial Ledger auditing food revenue and MoMo splits",
            label: "Financial Ledger & MoMo Audit",
            route: "chefapedofoods.vercel.app/admin/finance",
            caption: "Food revenue, MoMo channel breakdown & courier fees",
          },
          {
            src: "/images/chef-apedo-foods-admin-marketing.png",
            alt: "Chef Apedo Foods SMS Marketing Broadcast Console via Agoo SMS",
            label: "SMS Marketing Broadcast",
            route: "chefapedofoods.vercel.app/admin/marketing",
            caption: "Customer retention campaigns via Agoo SMS API",
          },
        ],
      },
      {
        id: "rider",
        name: "Rider Logistics",
        badge: "Courier Dispatch",
        description: "Dedicated real-time delivery queue portal for dispatch couriers to accept and complete orders across Accra.",
        screenshots: [
          {
            src: "/images/chef-apedo-foods-rider.png",
            alt: "Chef Apedo Foods Kwame Dispatch Courier Logistics Portal",
            label: "Courier Dispatch Portal",
            route: "chefapedofoods.vercel.app/rider",
            caption: "Active delivery queue for courier fulfillment",
          },
        ],
      },
    ],
    isFeatured: true,
    isProvisional: false,
    accentColor: "purple",
  },
  {
    slug: "raku-vehicle-rental",
    title: "Raku Vehicle Rental Management System",
    subtitle: "Fleet Inventory & Backoffice Engine",
    tagline: "Fleet inventory, client reservations & backoffice management engine",
    shortDescription:
      "University software engineering group project centralizing vehicle availability tracking, customer reservations, and approval workflows to eliminate double-booking errors.",
    category: "Academic Software Engineering",
    scope: "University Group Project",
    role: "Product/Client Manager & Primary Contributor",
    contributionSummary:
      "Developed as part of a university software engineering group project, with primary responsibility for driving much of the planning, requirements, and implementation work.",
    individualContributions: [
      "Led product and client management responsibilities, structuring core system requirements and user stories",
      "Designed and modeled the database entity-relationship schema for fleet and booking records",
      "Engineered management backoffice features including reservation approval workflows and fleet pricing engine",
      "Coordinated Git team workflows, branch conventions, and maintained consistent project documentation",
    ],
    problemStatement:
      "Centralizing fleet availability tracking, customer reservations, and vehicle turnaround workflows to eliminate double-booking errors.",
    architectureOverview:
      "Structured multi-tier software architecture separating user interaction, business reservation logic, and persistent vehicle records.",
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      database: ["SQL", "Relational Modeling"],
      tooling: ["Git", "GitHub", "Vercel"],
    },
    links: {
      live: "https://raku-rentals.vercel.app",
    },
    images: [
      "/images/raku-rentals img.png",
      "/images/raku-rentals-booking.png",
    ],
    subsystems: [
      {
        id: "client",
        name: "Client Booking",
        badge: "Public Client",
        description: "Vehicle class browsing, date-based availability checking, and instant quote reservation pipeline.",
        screenshots: [
          {
            src: "/images/raku-rentals img.png",
            alt: "Raku Vehicle Rentals discovery hero: Drive Beyond Ordinary",
            label: "Vehicle Fleet Portal & Discovery",
            route: "raku-rentals.vercel.app",
            caption: "Fleet discovery & vehicle class categorization",
          },
          {
            src: "/images/raku-rentals-booking.png",
            alt: "Raku Vehicle Rentals live fleet booking cards",
            label: "Fleet Inventory & Booking Flow",
            route: "raku-rentals.vercel.app/vehicles",
            caption: "Instant reservation calculation & vehicle selection",
          },
        ],
      },
      {
        id: "manager",
        name: "Fleet Manager",
        badge: "Operations Admin",
        description: "Centralized administrative backoffice for live fleet analytics, reservation approval queues, and pricing controls.",
        screenshots: [
          {
            src: "/images/raku-rentals-admin-dashboard.png",
            alt: "Raku Vehicle Rentals Operations & Analytics Dashboard",
            label: "Operations & Analytics Dashboard",
            route: "raku-rentals.vercel.app/manager",
            caption: "Fleet status, revenue tracking & approval queues",
          },
          {
            src: "/images/raku-rentals-admin-fleet.png",
            alt: "Raku Vehicle Rentals Fleet and Pricing Engine",
            label: "Fleet & Pricing Engine",
            route: "raku-rentals.vercel.app/manager/fleet",
            caption: "Vehicle inventory controls, status toggles & daily rates",
          },
        ],
      },
    ],
    isFeatured: true,
    isProvisional: false,
    accentColor: "blue",
  },
];
