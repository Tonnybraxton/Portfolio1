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
  bio: "Motivated Information Technology professional with practical experience in software development, application support, system testing, troubleshooting, documentation, and DevOps practices. I build reliable, database-backed web solutions and contribute to healthcare and business software projects.",
  tagline: "Building Reliable Digital Solutions That Matter",
  subTagline:
    "Junior Developer at Memey.AI with hands-on experience in PHP, Python, MySQL, CodeIgniter 4, TypeScript, and web application development.",
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

// Stats
export const STATS = [
  { label: "Featured Projects", value: 5, suffix: "" },
  { label: "Professional Internships", value: 2, suffix: "" },
  { label: "Core Technologies", value: 14, suffix: "+" },
  { label: "Years in IT", value: 3, suffix: "+" },
];

// Skills
export const SKILLS = {
  Frontend: [
    { name: "HTML5", level: 90, color: "#E34F26" },
    { name: "CSS3", level: 85, color: "#1572B6" },
    { name: "JavaScript", level: 75, color: "#F7DF1E" },
    { name: "TypeScript", level: 75, color: "#3178C6" },
    { name: "Form Validation & UI Design", level: 80, color: "#06B6D4" },
  ],
  Backend: [
    { name: "PHP", level: 85, color: "#777BB4" },
    { name: "Python", level: 80, color: "#3776AB" },
    { name: "CodeIgniter 4", level: 75, color: "#EF4223" },
  ],
  Database: [
    { name: "MySQL", level: 85, color: "#4479A1" },
    { name: "MariaDB", level: 75, color: "#003545" },
  ],
  Tools: [
    { name: "Git", level: 80, color: "#F05032" },
    { name: "GitHub", level: 85, color: "#181717" },
    { name: "DevOps: Deployment & Monitoring", level: 70, color: "#007ACC" },
    { name: "Application Testing & Debugging", level: 85, color: "#A855F7" },
  ],
};

// Projects
export const PROJECTS = [
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
    github: "https://github.com/Tonnybraxton",
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
    github: "https://github.com/Tonnybraxton",
    live: null,
    gradient: "from-purple-600 to-pink-500",
    icon: "🏠",
    category: "Web App",
  },
  {
    id: 3,
    title: "Dawa Track",
    description:
      "A healthcare prescription management solution for tracking patient medication records, improving access to prescription history and reducing manual record-keeping.",
    features: [
      "Patient prescription tracking",
      "Medical record management",
      "Application testing and issue resolution",
      "Prescription history logs",
    ],
    tech: ["TypeScript", "Healthcare Systems", "Application Testing", "DevOps"],
    github: "https://github.com/Tonnybraxton",
    live: null,
    gradient: "from-green-600 to-teal-500",
    icon: "💊",
    category: "Healthcare",
  },
  {
    id: 4,
    title: "Jersey Sport Management System",
    description:
      "A web-based system for managing sports jersey sales and inventory, designed to streamline business operations and improve stock management efficiency.",
    features: [
      "Product catalogue management",
      "Customer order processing",
      "Inventory tracking",
      "Database record management",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Tonnybraxton",
    live: null,
    gradient: "from-orange-500 to-amber-500",
    icon: "👕",
    category: "Web App",
  },
  {
    id: 5,
    title: "Responsive UI & Form Validation",
    description:
      "Responsive interface components with secure form validation, built to improve usability, data accuracy, and the overall user experience across web applications.",
    features: [
      "Responsive interface components",
      "Secure form validation",
      "Improved data accuracy",
      "User-focused application flows",
    ],
    tech: ["HTML", "CSS", "JavaScript", "UI Design"],
    github: "https://github.com/Tonnybraxton",
    live: null,
    gradient: "from-fuchsia-500 to-rose-500",
    icon: "🧩",
    category: "Frontend",
  },
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
  { name: "PHP", color: "#777BB4", emoji: "🐘" },
  { name: "Python", color: "#3776AB", emoji: "🐍" },
  { name: "MySQL", color: "#4479A1", emoji: "🗄️" },
  { name: "GitHub", color: "#181717", emoji: "🐙" },
  { name: "HTML", color: "#E34F26", emoji: "🌐" },
  { name: "CSS", color: "#1572B6", emoji: "🎨" },
];
