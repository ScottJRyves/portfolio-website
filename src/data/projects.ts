export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    title: "Project Ingress",
    description:
      "A Python and Flask pipeline that extracts online news articles, applies NLP preprocessing, TF-IDF keyword extraction and sentiment analysis, then exports structured CSV datasets.",
    technologies: ["Python", "Flask", "NLP", "TF-IDF"],
    githubUrl: "https://github.com/ScottJRyves/Project-Ingress",
    image: "/images/projects/project-ingress.png",
    imageAlt: "Project Ingress application interface",
  },
  {
    title: "Deprivation and Food Hygiene Analysis",
    description:
      "A Tableau analysis exploring relationships between deprivation and food-hygiene ratings across local authorities in England using a repeatable data-preparation workflow and interactive dashboard.",
    technologies: ["Tableau", "Data Cleaning", "Dashboards", "ETL"],
    githubUrl:
      "https://github.com/ScottJRyves/Deprivation-Food-Hygiene-Analysis",
    image: "/images/projects/deprivation-analysis.png",
    imageAlt: "Tableau dashboard for deprivation and food hygiene analysis",
  },
  {
    title: "Malware Classification ML Pipeline",
    description:
      "A supervised machine-learning project using memory-analysis data to compare classifiers and evaluate a tuned Random Forest pipeline for benign and malicious software samples.",
    technologies: ["Python", "scikit-learn", "pandas", "Machine Learning"],
    githubUrl:
      "https://github.com/ScottJRyves/malware-classification-ml-pipeline",
    image: "/images/projects/malware-classification.png",
    imageAlt: "Confusion matrix for malware classification model",
  },
  {
    title: "ScottishGlen Asset Tracking System",
    description:
      "A C# WinUI 3 application using MVVM, Entity Framework Core and MariaDB with role-based access control, automated hardware collection and NVD vulnerability scanning.",
    technologies: ["C#", ".NET", "WinUI 3", "MVVM"],
    githubUrl:
      "https://github.com/ScottJRyves/scottishglen-asset-tracking-system",
    image: "/images/projects/scottishglen.png",
    imageAlt: "ScottishGlen asset tracking system diagram",
  },
];