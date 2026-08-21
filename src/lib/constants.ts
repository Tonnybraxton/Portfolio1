// Personal Information
export const PERSONAL_INFO = {
  name: "Maaka Braxton Orioki",
  firstName: "Maaka",
  lastName: "Orioki",
  title: "Software Developer | IT Student | Web Application Developer",
  location: "Nairobi, Kenya",
  email: "braxtonmaaka1@gmail.com",
  phone: "0791677818",
  github: "https://github.com/Tonnybraxton",
  githubUsername: "Tonnybraxton",
  bio: "Motivated Information Technology student with hands-on experience in PHP, MySQL, Python 3, and CodeIgniter 4. Passionate about web application development, problem-solving, and building efficient, user-friendly systems.",
  tagline: "Building Digital Solutions That Matter",
  subTagline:
    "Software Developer passionate about creating scalable web applications using PHP, Python, MySQL and modern technologies.",
};

// Education
export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "KCA University",
    period: "2023 – Present",
    status: "Current",
    description:
      "Studying core IT concepts including software engineering, database management, networking, and system design.",
    icon: "🎓",
  },
];

// Certifications
export const CERTIFICATIONS = [
  {
    name: "MIT Software Development",
    issuer: "Emobilis",
    period: "2024",
    description:
      "Comprehensive software development program covering modern development practices, tools, and methodologies.",
    icon: "🏆",
  },
];

// Stats
export const STATS = [
  { label: "Projects Completed", value: 3, suffix: "+" },
  { label: "GitHub Repositories", value: 10, suffix: "+" },
  { label: "Technologies Used", value: 12, suffix: "+" },
  { label: "Years Learning", value: 3, suffix: "+" },
];

// Skills
export const SKILLS = {
  Frontend: [
    { name: "HTML5", level: 90, color: "#E34F26" },
    { name: "CSS3", level: 85, color: "#1572B6" },
    { name: "JavaScript", level: 75, color: "#F7DF1E" },
    { name: "Tailwind CSS", level: 80, color: "#06B6D4" },
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
    { name: "VS Code", level: 90, color: "#007ACC" },
  ],
};

// Projects
export const PROJECTS = [
  {
    id: 1,
    title: "Loyalty Point Management System",
    description:
      "A comprehensive loyalty program platform that enables businesses to manage customer registrations, track point accumulation, and handle rewards redemption seamlessly.",
    features: [
      "Customer registration & profile management",
      "Automated point accumulation system",
      "Rewards redemption & catalog",
      "Admin dashboard with analytics",
    ],
    tech: ["CodeIgniter 4", "MySQL", "PHP", "Bootstrap", "JavaScript"],
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
      "A full-featured real estate platform for property listing, client management, and database integration, streamlining property transactions for agents and clients.",
    features: [
      "Property listing & search",
      "Client management system",
      "Database integration",
      "Property inquiry handling",
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
      "A healthcare solution for patient prescription tracking and medical record management, helping healthcare providers streamline patient care and medication management.",
    features: [
      "Patient prescription tracking",
      "Medical record management",
      "Doctor & patient portals",
      "Prescription history logs",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/Tonnybraxton",
    live: null,
    gradient: "from-green-600 to-teal-500",
    icon: "💊",
    category: "Healthcare",
  },
];

// Experience
export const EXPERIENCE = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "Mzawadi Technologies",
    type: "Internship",
    period: "2024",
    duration: "3 months",
    description:
      "Contributed to software development projects, built and maintained web systems, and provided technical support to the development team.",
    responsibilities: [
      "Developed and maintained web-based systems using PHP and MySQL",
      "Collaborated with senior developers on feature implementation",
      "Provided technical support and bug fixing",
      "Participated in code reviews and team meetings",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
    icon: "💼",
  },
  {
    id: 2,
    role: "Software Development Intern",
    company: "Memey AI",
    type: "Internship",
    period: "2024",
    duration: "3 months",
    description:
      "Led the development of Dawa Track — a patient prescription tracking system — from design through testing and database implementation.",
    responsibilities: [
      "Designed and developed the Dawa Track prescription management system",
      "Conducted comprehensive system testing and QA",
      "Designed and optimized MySQL database schema",
      "Implemented patient and doctor portal features",
    ],
    tech: ["PHP", "MySQL", "CodeIgniter", "Bootstrap"],
    color: "from-purple-500 to-pink-500",
    icon: "🚀",
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
