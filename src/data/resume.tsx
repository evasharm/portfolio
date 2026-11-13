import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Docker } from "@/components/ui/svgs/docker";

// Edit this file to update your site. Everything on the homepage reads from DATA.
export const DATA = {
  name: "Eva Sharma",
  initials: "ES",
  url: "https://evasharma.vercel.app", // update after your first deploy if Vercel gives you a different URL
  location: "Philadelphia, PA",
  locationLink: "https://www.google.com/maps/place/philadelphia+pa",
  description:
    "AI student at the University of Pennsylvania building machine learning for medical imaging, genomics, and public-interest tools.",
  summary:
    "I'm studying Artificial Intelligence at the University of Pennsylvania (B.S.E. 2029). I build ML pipelines for real world research problems: predicting kidney transplant failure from 166K patient records and segmenting liver tumors in CT/MRI scans, with results that supported a successful NIH grant. Outside the lab, I've worked on autonomous navigation for the Penn Mars Rover, aircraft design optimization for Design Build Fly, and hackathon projects like a bilingual AI voice assistant for SNAP enrollment. I'm looking for internships in software engineering, machine learning, data science, and product.",
  avatarUrl: "/picofme2.jpg", // replace public/picofme.png with your own photo (square works best)
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About Me" },
    work: { order: 2, enabled: true, heading: "Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    research: { order: 4.5, enabled: true, heading: "Research" },
    projects: {
      order: 5, enabled: true,
      label: "Projects & Leadership",
      heading: "Things I've built",
      text: "Research pipelines, robots, aircraft, and tools for people who need them. A few highlights from my work at Penn.",
    },
    hackathons: {
      order: 6, enabled: true,
      heading: "Hackathons",
      text: "Highlights from the hackathons I've competed in.",
    },
    photos: {
      order: 7, enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8, enabled: true,
      label: "Reach Out to Me",
      heading: "Let's Connect!",
      text: "I'm recruiting for internships and would love to connect over email or LinkedIn.",
    },
  },
  photos: [],
  skills: [
    { name: "Python", icon: Python },
    { name: "PyTorch" },
    { name: "TensorFlow" },
    { name: "scikit-learn" },
    { name: "NumPy / Pandas" },
    { name: "Java", icon: Java },
    { name: "C++" },
    { name: "SQL" },
    { name: "TypeScript", icon: Typescript },
    { name: "OCaml" },
    { name: "R" },
    { name: "AWS" },
    { name: "Docker", icon: Docker },
    { name: "ROS2" },
    { name: "Git" },
    { name: "CNNs" },
    { name: "RAG" },
    { name: "Generative AI" },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "eshar28@engineering.upenn.edu",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/evasharm",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/evashar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:eshar28@engineering.upenn.edu",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "University of Pennsylvania",
      href: "https://www.upenn.edu",
      badges: [],
      location: "Philadelphia, PA",
      title: "Machine Learning Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=upenn.edu&sz=128",
      start: "May 2026",
      end: undefined,
      description:
        "Predicting high-risk proteins associated with kidney transplant failure by building and benchmarking 3 Python ML pipelines on 166K patient records. Engineered features from raw transplant data to identify HLA mismatches tied to high failure risk, surfacing candidates for follow-up genetic analysis. Present findings weekly to genetics, statistics, and ML researchers.",
    },
    {
      company: "Perelman School of Medicine",
      href: "https://www.med.upenn.edu",
      badges: [],
      location: "Philadelphia, PA",
      title: "Machine Learning Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=med.upenn.edu&sz=128",
      start: "January 2026",
      end: "August 2026",
      description:
        "Built a Python data pipeline and computational method for hepatocellular carcinoma (HCC) liver tumor segmentation in PyTorch, contributing preliminary results to a successful NIH grant application. Fine-tuned nnU-Net segmentation models, improving Dice score by 30% over baseline on 50+ CT/MRI scans.",
    },
  ],
  education: [
    {
      school: "University of Pennsylvania",
      href: "https://catalog.upenn.edu/undergraduate/programs/artificial-intelligence-bse/",
      degree: "B.S.E. in Artificial Intelligence. Coursework: Algorithms, Data Structures, Big Data Analytics, Computer Vision, Statistics & Probability, Technology Ethics",
      logoUrl: "https://www.google.com/s2/favicons?domain=upenn.edu&sz=128",
      start: "2025",
      end: "2029",
    },
  ],
   research: {
    title: "ML Methods to Predict Amino Acid Positions Leading to Kidney Graft Failure",
    subtitle: "Summer 2026 · University of Pennsylvania",
    description: "Over summer 2026, I conducted research with ",
    image: "/poster.png",
  },
  projects: [
    {
      title: "Kidney Transplant Failure Prediction",
      href: "",
      dates: "May 2026 - Present",
      active: true,
      description:
        "Three benchmarked ML pipelines on 166K patient records to predict transplant failure risk, with engineered features that isolate high-risk HLA mismatches for follow-up genetic analysis.",
      technologies: ["Python", "scikit-learn", "Pandas", "NumPy"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "HCC Liver Tumor Segmentation",
      href: "",
      dates: "January 2026 - August 2026",
      active: true,
      description:
        "Fine-tuned nnU-Net models for liver tumor segmentation on 50+ CT/MRI scans, improving Dice score by 30% over baseline. Preliminary results supported a successful NIH grant application.",
      technologies: ["PyTorch", "nnU-Net", "Python", "Medical Imaging"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Mars Rover Autonomy",
      href: "",
      dates: "September 2025 - May 2026",
      active: true,
      description:
        "Autonomous navigation in ROS2 using A* pathfinding for real-time obstacle avoidance, inverse kinematics for a 6-DOF robotic arm, and sensor fusion across LiDAR, IMU, and ultrasonic sensors with computer vision.",
      technologies: ["ROS2", "C++", "Python", "Computer Vision"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Aircraft Design Optimization",
      href: "",
      dates: "September 2025 - Present",
      active: true,
      description:
        "Python and CFD optimization framework that evaluated 15+ aircraft configurations for Penn Design Build Fly, quantifying tradeoffs between aerodynamics, payload, and competition score. Also managed a $5,000 budget and timelines for a 30-member team.",
      technologies: ["Python", "CFD", "Optimization"],
      image: "",
      video: "",
    },
  ],
    hackathons: [
    {
      title: "Oh, Snap! | Penn x Anthropic Hackathon",
      dates: "April 2026",
      description:
        "Bilingual AI voice assistant that guides citizens through SNAP enrollment. Integrated Claude LLM parsing, OpenAI Whisper for speech, and grounded LLM answers in ~100 pages of real SNAP policy with a vector index.",
      image: "",
      win: "Top 5, Democracy & Governance Track",
      links: [
        {
          title: "GitHub",
          href: "https://github.com/ishabh-24/oh-snap",
        },
      ],
    },
    {
      title: "Skin Journey | HackPrinceton",
      dates: "April 2026",
      description:
        "Mobile skincare app that tracks skin health with a phone camera, flags patterns over time, and personalizes skincare routine recommendations. Used a U-Net segmentation model trained to estimate acne, eczema, and inflammation severity, with OpenAI Vision as a double-checker and retrieval-augmented routine generation with OpenAI.",
      image: "",
      links: [
        {
          title: "GitHub",
          href: "https://github.com/ishabh-24/skin-journey",
        },
      ],
    },
  ],
} as const;