// Personal Information
export const PERSONAL_INFO = {
  name: "Maaka Braxton Orioki",
  firstName: "Maaka",
  lastName: "Orioki",
  title: "Junior Developer | IT Professional | Web Application Developer",
  location: "Nairobi, Kenya",
  email: "braxtonmaaka1@gmail.com",
  phone: "0791677818",
  github: "https://github.com/Tonnybraxton",
  githubUsername: "Tonnybraxton",
  bio: "I am a developer and IT professional in Nairobi building web applications with Python, TypeScript, and PHP. My recent projects span document search with AI, a Django banking demo, e-commerce, and interactive learning tools. I work across React interfaces, backend APIs, relational databases, and automated tests.",
  tagline: "Building Reliable Digital Solutions That Matter",
  subTagline:
    "Junior Developer at Memey.AI building with React, Next.js, Django, and FastAPI. Recent projects explore AI document search, PostgreSQL, and automated testing.",
};

// Education
export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "KCA University",
    period: "2023 – 2025",
    status: "Completed",
    description:
      "Bachelor of Science program focused on software engineering, database management, networking, and system design.",
    icon: "🎓",
  },
];

// Certifications
export const CERTIFICATIONS = [
  {
    name: "MIT Software Development",
    issuer: "Emobilis Institute",
    period: "Aug – Nov 2025",
    description:
      "Certificate in MIT Software Development, covering practical software development tools and methodologies.",
    icon: "🏆",
  },
];

// Skills demonstrated in project code and documentation reviewed September 2026.
// Each category links to a repository where visitors can explore the work.
export const SKILLS = {
  Frontend: [
    { name: "React & Next.js", detail: "Responsive interfaces, routing, and reusable components." },
    { name: "TypeScript & JavaScript", detail: "Typed application code across web clients and APIs." },
    { name: "Tailwind CSS & Bootstrap", detail: "Responsive layouts, forms, and reusable UI styling." },
    { name: "React Query & React Hook Form", detail: "Server data, form state, and Zod validation." },
    { name: "HTML & CSS", detail: "Semantic pages, layouts, and storefront interfaces." },
  ],
  Backend: [
    { name: "Python, Django & FastAPI", detail: "Account workflows, document APIs, and request validation." },
    { name: "Node.js & Express", detail: "APIs for accounts, game sessions, and saved progress." },
    { name: "PHP & CodeIgniter 4", detail: "Business applications and marketplace workflows." },
    { name: "Authentication & Permissions", detail: "Staff permissions, cookie sessions, and workspace boundaries." },
  ],
  Database: [
    { name: "PostgreSQL & SQLite", detail: "Relational data for commerce, documents, and banking demos." },
    { name: "MySQL & MariaDB", detail: "Database-backed PHP applications and business records." },
    { name: "SQLAlchemy, Prisma & Django ORM", detail: "Data models, queries, constraints, and migrations." },
    { name: "Transactions & Data Integrity", detail: "Atomic balance updates, validation, and audit records." },
  ],
  "AI & Search": [
    { name: "Retrieval-Augmented Generation", detail: "Document question answering with retrieved passages and citations." },
    { name: "Embeddings & pgvector", detail: "Semantic search over stored document chunks." },
    { name: "Hybrid Search", detail: "Combine PostgreSQL keyword search with vector similarity." },
    { name: "Document Processing", detail: "Extract and index PDF, DOCX, Markdown, and text content." },
  ],
  Testing: [
    { name: "pytest", detail: "Backend tests for validation, permissions, and transactions." },
    { name: "Vitest & Testing Library", detail: "Unit, component, and API tests for TypeScript applications." },
    { name: "Playwright", detail: "Browser checks for user journeys on desktop and mobile." },
    { name: "GitHub Actions", detail: "CI workflows for linting, type checks, builds, and tests." },
  ],
  Tools: [
    { name: "Git & GitHub", detail: "Version control, repository documentation, and review workflows." },
    { name: "Docker Compose", detail: "Local stack configuration for applications and their services." },
    { name: "Redis & Background Jobs", detail: "Queues for document ingestion and asynchronous processing." },
    { name: "S3-Compatible Storage", detail: "Private document storage with an S3 service interface." },
  ],
};

export const SKILL_EVIDENCE: Record<keyof typeof SKILLS, { project: string; url: string; summary: string; color: string }> = {
  Frontend: { project: "SOLELINE", url: "https://github.com/Tonnybraxton/Shoes", summary: "A Next.js storefront with product filters, size selection, shopping bags, and account screens.", color: "#38BDF8" },
  Backend: { project: "PesaFlow", url: "https://github.com/Tonnybraxton/banking-transaction-interface", summary: "A Django banking demo with staff permissions, validated account operations, and transaction receipts.", color: "#A78BFA" },
  Database: { project: "PesaFlow", url: "https://github.com/Tonnybraxton/banking-transaction-interface/blob/main/banking/services.py", summary: "Atomic deposits, withdrawals, and transfers pair balance changes with ledger entries.", color: "#34D399" },
  "AI & Search": { project: "KnowledgePilot AI", url: "https://github.com/Tonnybraxton/knowledgepilot-ai", summary: "Upload documents, search by meaning or keyword, and inspect the passages cited in a conversation.", color: "#22D3EE" },
  Testing: { project: "MindForge", url: "https://github.com/Tonnybraxton/mindforge", summary: "Unit and API tests sit alongside Playwright journeys for puzzle and typing workflows.", color: "#FBBF24" },
  Tools: { project: "KnowledgePilot AI", url: "https://github.com/Tonnybraxton/knowledgepilot-ai/blob/main/docker-compose.yml", summary: "Compose configuration connects the frontend, API, worker, PostgreSQL, Redis, and private storage.", color: "#FB923C" },
};

// Projects
export const PROJECTS = [
  {
    id: 6,
    title: "KnowledgePilot AI",
    description: "A private document workspace for uploading files, searching their content, and asking questions with references to source passages.",
    features: ["Semantic and keyword search with pgvector", "Document chat with source citations", "Background ingestion and workspace permissions"],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Redis"],
    github: "https://github.com/Tonnybraxton/knowledgepilot-ai",
    image: "https://raw.githubusercontent.com/Tonnybraxton/knowledgepilot-ai/main/docs/screenshots/02-dashboard.png",
    imageAlt: "KnowledgePilot AI document workspace dashboard",
    imageLabel: "App screenshot",
    live: null,
    gradient: "from-cyan-600 to-blue-600",
    icon: "📚",
    category: "AI & Search",
  },
  {
    id: 7,
    title: "PesaFlow Banking Demo",
    description: "An educational Django application for staff-operated accounts, deposits, withdrawals, transfers, and demo loans using fictional records.",
    features: ["Atomic balance updates and audit receipts", "Staff permissions and input validation", "pytest coverage of transaction workflows"],
    tech: ["Python", "Django", "SQLite", "Bootstrap", "pytest"],
    github: "https://github.com/Tonnybraxton/banking-transaction-interface",
    image: "https://raw.githubusercontent.com/Tonnybraxton/banking-transaction-interface/main/docs/screenshots/dashboard.png",
    imageAlt: "PesaFlow banking dashboard with fictional demo accounts",
    imageLabel: "App screenshot",
    live: null,
    gradient: "from-emerald-600 to-teal-500",
    icon: "🏦",
    category: "Banking Demo",
  },
  {
    id: 8,
    title: "SOLELINE Storefront",
    description: "A shoe commerce demo pairing a responsive Next.js storefront with Django and PostgreSQL, from product discovery to simulated checkout.",
    features: ["Catalogue filters, colourways, and size stock", "Inventory reservations and customer orders", "Unit, API, and browser tests"],
    tech: ["Next.js", "React", "Django", "PostgreSQL", "Playwright"],
    github: "https://github.com/Tonnybraxton/Shoes",
    image: "https://raw.githubusercontent.com/Tonnybraxton/Shoes/main/docs/screenshots/storefront-preview.png",
    imageAlt: "SOLELINE shoe storefront",
    imageLabel: "App screenshot",
    live: null,
    gradient: "from-orange-600 to-rose-500",
    icon: "👟",
    category: "E-Commerce",
  },
  {
    id: 9,
    title: "MindForge",
    description: "A puzzle and typing practice application with local guest play, saved progress, and an Express API for connected accounts.",
    features: ["Interactive puzzles and Typing Academy", "PostgreSQL accounts and validated game replays", "Vitest and Playwright test suites"],
    tech: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL"],
    github: "https://github.com/Tonnybraxton/mindforge",
    image: "https://raw.githubusercontent.com/Tonnybraxton/mindforge/main/docs/screenshots/overview.png",
    imageAlt: "MindForge puzzle and practice dashboard",
    imageLabel: "App screenshot",
    live: null,
    gradient: "from-violet-600 to-fuchsia-500",
    icon: "🧩",
    category: "Interactive Learning",
  },
  {
    id: 1,
    title: "Loyalty Point Management System",
    description:
      "A customer loyalty platform for registration, points accumulation, and reward redemption, with database-backed records and form validation for reliable transaction processing.",
    features: [
      "Customer registration & profile management",
      "Automated point accumulation system",
      "Rewards redemption & catalog",
      "Form validation and application testing",
    ],
    tech: ["CodeIgniter 4", "MySQL", "PHP", "JavaScript"],
    github: "https://github.com/Tonnybraxton/Loyalty-points-system",
    image: "https://opengraph.githubassets.com/portfolio/Tonnybraxton/Loyalty-points-system",
    imageAlt: "Loyalty-points-system GitHub repository preview",
    imageLabel: "Repository preview",
    live: null,
    gradient: "from-blue-600 to-cyan-500",
    icon: "🏆",
    category: "Web App",
  },
  {
    id: 2,
    title: "Real Estate Management System",
    description:
      "A property management platform that centralizes listings, client information, and transaction records to simplify real estate operations.",
    features: [
      "Property listing & search",
      "Client management system",
      "Database integration",
      "Transaction record management",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tonnybraxton/real-estate-management",
    image: "https://opengraph.githubassets.com/portfolio/Tonnybraxton/real-estate-management",
    imageAlt: "real-estate-management GitHub repository preview",
    imageLabel: "Repository preview",
    live: null,
    gradient: "from-purple-600 to-pink-500",
    icon: "🏠",
    category: "Web App",
  },
  {
    id: 3,
    title: "Dawa Track",
    description:
      "A full-stack medication and prescription management platform with role-specific tools for patients, doctors, pharmacists, caregivers, and administrators.",
    features: [
      "Patient prescription tracking",
      "Medication reminders and drug-interaction checks",
      "Pharmacy inventory and dispensing records",
      "Role-based access and prescription history",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "SQL.js"],
    github: "https://github.com/Tonnybraxton/Dawa",
    image: "https://raw.githubusercontent.com/Tonnybraxton/Dawa/main/Screenshot%202026-08-16%20233359.png",
    imageAlt: "Dawa Track application interface",
    imageLabel: "App screenshot",
    live: null,
    gradient: "from-green-600 to-teal-500",
    icon: "💊",
    category: "Healthcare",
  },
  {
    id: 4,
    title: "Jersey Sport Management System",
    description:
      "A Kenyan jersey storefront prototype built with Next.js and TypeScript, featuring product imagery, promotional sections, and sample match listings.",
    features: [
      "Product catalogue management",
      "Promotional storefront sections",
      "Sample match listings",
      "Responsive product presentation",
    ],
    tech: ["Next.js", "TypeScript", "React", "CSS"],
    github: "https://github.com/Tonnybraxton/JerseySport_KE",
    image: "https://opengraph.githubassets.com/portfolio/Tonnybraxton/JerseySport_KE",
    imageAlt: "JerseySport_KE GitHub repository preview",
    imageLabel: "Repository preview",
    live: null,
    gradient: "from-orange-500 to-amber-500",
    icon: "👕",
    category: "Web App",
  },
  {
    id: 5,
    title: "KicksCultureKE Marketplace",
    description:
      "A Kenyan sneaker marketplace prototype with seller tools, M-Pesa integration code, delivery workflows, and a keyword-based shopping assistant.",
    features: [
      "M-Pesa integration code",
      "County-based delivery across Kenya",
      "Seller dashboard and order management",
      "Keyword-based shopping assistant",
    ],
    tech: ["CodeIgniter 4", "PHP", "MySQL", "M-Pesa Daraja"],
    github: "https://github.com/Tonnybraxton/kickscultureke",
    image: "https://opengraph.githubassets.com/portfolio/Tonnybraxton/kickscultureke",
    imageAlt: "kickscultureke GitHub repository preview",
    imageLabel: "Repository preview",
    live: null,
    gradient: "from-lime-500 to-emerald-600",
    icon: "👟",
    category: "E-Commerce",
  },
];

// Derived counts stay aligned with the content shown on the page.
export const STATS = [
  { label: "Featured Projects", value: PROJECTS.length, suffix: "" },
  { label: "GitHub Repositories", value: 17, suffix: "" },
  { label: "Professional Internships", value: 2, suffix: "" },
  { label: "Skill Areas", value: Object.keys(SKILLS).length, suffix: "" },
];

// Experience
export const EXPERIENCE = [
  {
    id: 1,
    role: "Junior Developer Intern",
    company: "Memey.AI",
    type: "Internship",
    period: "Jan 2026 – Present",
    duration: "Current role",
    description:
      "Contributing to AI-driven healthcare solutions, including Dawa Track, through development, testing, troubleshooting, and deployment support.",
    responsibilities: [
      "Contributed to Dawa Track prescription and patient medication tracking",
      "Built and maintained front-end components using TypeScript",
      "Applied DevOps practices for deployment, monitoring, and workflow automation",
      "Performed AI prompt engineering and resolved issues found during testing",
    ],
    tech: ["TypeScript", "DevOps", "AI Prompt Engineering", "Healthcare Systems"],
    color: "from-purple-500 to-pink-500",
    icon: "🚀",
  },
  {
    id: 2,
    role: "Software Development Intern",
    company: "Mzawadi Technologies",
    type: "Internship",
    period: "Aug 2025 – Dec 2025",
    duration: "5 months",
    description:
      "Assisted with developing and maintaining web-based business solutions, particularly the Loyalty Management System.",
    responsibilities: [
      "Implemented application features with PHP, MySQL, HTML, and CSS",
      "Participated in debugging, testing, and system documentation",
      "Supported the identification and resolution of software defects",
      "Collaborated to improve user experience, functionality, and reliability",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "Testing"],
    color: "from-blue-500 to-cyan-500",
    icon: "💼",
  },
];

// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

// Tech icons for hero floating
export const TECH_ICONS = [
  { name: "React", color: "#61DAFB", emoji: "⚛️" },
  { name: "Python", color: "#3776AB", emoji: "🐍" },
  { name: "PostgreSQL", color: "#336791", emoji: "🗄️" },
  { name: "GitHub", color: "#A78BFA", emoji: "🐙" },
  { name: "Next.js", color: "#38BDF8", emoji: "🌐" },
  { name: "FastAPI", color: "#009688", emoji: "⚡" },
];
