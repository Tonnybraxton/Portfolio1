import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
}

export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    Python: "#3776AB",
    PHP: "#777BB4",
    HTML: "#E34F26",
    CSS: "#1572B6",
    Java: "#007396",
    "C++": "#00599C",
    Ruby: "#CC342D",
    Go: "#00ADD8",
    Rust: "#000000",
    Swift: "#F05138",
    Kotlin: "#7F52FF",
    Dart: "#00B4AB",
    Shell: "#89E051",
    SCSS: "#C6538C",
    Vue: "#4FC08D",
    Svelte: "#FF3E00",
  };
  return colors[language] || "#6B7280";
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.substring(0, length) + "...";
}
