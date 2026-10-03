export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  features: string[];
};

export const allProjects: Project[] = [
  {
    title: "Careerminds",
    category: "Education Platform",
    description:
      "A comprehensive cybersecurity learning and career development platform supporting students, facilitators, partners, and organizations in one unified ecosystem. I designed and developed a responsive, scalable web application featuring role-based experiences, self-paced courses, live masterclasses, corporate training, certification preparation, and career development resources across GRC and AI-enabled cybersecurity.",
    image: "/images/careerminds.png",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "",
    live: "https://www.thecareerminds.org/",
    features: [
      "Multi-user platform",
      "Role-based experiences",
      "Course and learning content",
      "Live masterclasses",
      "Corporate programmes",
      "Certification preparation",
    ],
  },

  {
    title: "RCCG Glasgow",
    category: "Church Platform",
    description:
      "A modern church website and digital platform designed to connect the church with its community online. The platform brings together church information, leadership, events, resources, sermons, and contact information, with direct YouTube integration for displaying the church's latest video content.",
    image: "/images/rccgglasgow.png",
    tech: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    github: "",
    live: "https://www.beautifulgateglasgow.org/",
    features: [
      "Church information",
      "Events management",
      "Sermon resources",
      "YouTube integration",
      "Content management",
      "Admin dashboard",
    ],
  },
  {
    title: "Grace Kpou",
    category: "E-Commerce & Fashion",
    description:
      "A thoughtfully designed e-commerce platform for a modern lifestyle brand inspired by African heritage. Built on Shopify, the website offers a seamless shopping experience for curated African print apparel and home goods. It features comprehensive product collections, secure purchasing, blog content, and clear policy pages, all while communicating a brand ethos of quality craftsmanship and intentional design.",
    image: "/images/gracekpou.png",
    tech: ["Shopify", "Liquid", "Tailwind CSS"],
    github: "",
    live: "https://gracekpou.org/",
    features: [
      "E-commerce storefront",
      "Curated product collections",
      "Secure shopping cart & checkout",
      "Blog & editorial content",
      "Contact & inquiry forms",
      "Policy & terms pages",
      "Responsive mobile experience",
    ],
  },
  {
    title: "Hivenify",
    category: "Advertising Platform",
    description:
      "An AI-driven, crowd-powered advertising platform connecting advertisers with a community of earners who promote brands and campaigns through authentic personal recommendations. The platform supports both sides of the ecosystem, enabling advertisers to create campaigns while earners discover promotional opportunities and participate in campaigns.",
    image: "/images/hivenify.png",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "",
    live: "https://hivenify.com/",
    features: [
      "Advertiser ecosystem",
      "Campaign discovery",
      "Earner participation",
      "Responsive dashboards",
      "Campaign-focused UI",
      "Two-sided platform experience",
    ],
  },

  {
    title: "Pryme Nursing",
    category: "Healthcare",
    description:
      "A modern healthcare services platform developed for a nursing startup providing professional and personalized nursing care services. The website communicates the company's services and provides an accessible digital experience for individuals and families looking for reliable nursing support.",
    image: "/images/prymenursing.png",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "",
    live: "https://www.prymenursing.com/",
    features: [
      "Healthcare services",
      "Responsive design",
      "Service presentation",
      "Clear navigation",
      "Mobile-friendly experience",
    ],
  },

  // {
  //   title: "Qooks",
  //   category: "Startup / Waitlist",
  //   description:
  //     "A modern waitlist platform for a UK-based grocery startup, designed to build early customer interest ahead of launch. The experience introduces the grocery service, communicates its value, and provides a streamlined way for prospective customers to join the waitlist.",
  //   image: "/images/qooks.png",
  //   tech: ["React", "Next.js", "Tailwind CSS"],
  //   github: "",
  //   live: "https://qooqs.co.uk/",
  //   features: [
  //     "Pre-launch experience",
  //     "Waitlist journey",
  //     "Responsive interface",
  //     "Startup landing page",
  //     "Mobile-first design",
  //   ],
  // },

  {
    title: "Trendz Social",
    category: "Social Platform",
    description:
      "A modern social media platform built for creators, communities, and everyday users to share content, express themselves, build an audience, and connect with others. I developed the responsive web experience that introduces the platform and provides access to its mobile applications.",
    image: "/images/trendzsocial.png",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "",
    live: "https://trendzsocial.net/",
    features: [
      "Social platform landing page",
      "Creator-focused experience",
      "Responsive web design",
      "App Store integration",
      "Google Play integration",
    ],
  },

  {
    title: "SixteenSands",
    category: "Research & Technology",
    description:
      "A professional technology and research-focused website for a UK-registered special purpose company collaborating with the University of Surrey on vision-based AI techniques for combining UAV and satellite hyperspectral imagery for sustainable agricultural management.",
    image: "/images/sixteensands.png",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/NwekeGoddy/sixteensands",
    live: "https://sixteeensands.netlify.app/",
    features: [
      "Company profile",
      "Research presentation",
      "Team section",
      "Technology-focused content",
      "Professional corporate UI",
    ],
  },

  {
    title: "Uncloudy",
    category: "Wellness / Startup",
    description:
      "A pre-launch waitlist website for a personalized emotional wellness app featuring journey-based tools and resources tailored to individual experiences. I developed a clean, responsive web experience that introduces the product, communicates its vision, and provides an intuitive way for interested users to join the waitlist.",
    image: "/images/uncloudy.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/NwekeGoddy/Uncloudy",
    live: "https://uncloudy.netlify.app/",
    features: [
      "Product introduction",
      "Waitlist experience",
      "Responsive design",
      "Startup landing page",
      "Product-focused UX",
    ],
  },

  {
    title: "Ruthdandave",
    category: "Logistics Platform",
    description:
      "A comprehensive logistics and courier services platform designed to simplify shipping, cargo handling, and delivery services across local and international routes. The platform showcases import and export, air cargo, container clearing, customs brokerage, door-to-door delivery, and courier services with dedicated booking flows.",
    image: "/images/ruthdandave.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Ruthdandav/ruthdandav-logistics",
    live: "https://ruthdandave.netlify.app/",
    features: [
      "Logistics services",
      "Courier services",
      "Cargo services",
      "Service booking",
      "Custom brokerage",
      "Delivery services",
    ],
  },

  {
    title: "Food Fusion",
    category: "AI / Food",
    description:
      "An interactive recipe discovery and meal planning platform designed to help users discover new meals, explore recipes, and plan what to cook based on their preferences. The application features AI-powered recommendations for more personalized recipe suggestions.",
    image: "/images/food-fusion.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/NwekeGoddy/foodfusion",
    live: "https://food-fusion.netlify.app/",
    features: [
      "Recipe discovery",
      "AI recommendations",
      "Meal planning",
      "Firebase integration",
      "Responsive interface",
    ],
  },

  {
    title: "MyShup",
    category: "E-commerce UI",
    description:
      "A modern e-commerce interface project created to explore and practice polished, responsive online shopping experiences. The project focuses on clean product presentation, intuitive navigation, reusable components, and a user-friendly shopping interface.",
    image: "/images/myshup.png",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/NwekeGoddy/totalitycorp-frontend-challenge",
    live: "https://myshup.netlify.app/",
    features: [
      "Product interface",
      "Shopping experience",
      "Responsive layout",
      "Reusable components",
      "Modern UI patterns",
    ],
  },

  {
    title: "Estate Manage",
    category: "Real Estate",
    description:
      "A lightweight property management web application designed to provide a simple and organized interface for managing and viewing real estate information. The project focuses on clean navigation, structured property information, and a responsive user experience.",
    image: "/images/estate-manage.png",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/NwekeGoddy/Shortly",
    live: "https://estatemanage.netlify.app/",
    features: [
      "Property information",
      "Responsive interface",
      "Property management UI",
      "Clean navigation",
    ],
  },
];
