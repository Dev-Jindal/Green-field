import {
  Box,
  Workflow,
  Cpu,
  Mountain,
  Leaf,
  Code,
  Briefcase,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

export const products = [
  {
    icon: Box,
    name: "SandMaster",
    tagline: "Advanced Sand Management",
    description:
      "Comprehensive software solution for sand management in oil and gas operations. Monitor, predict, and optimize sand control strategies with real-time analytics.",
    features: [
      "Real-time sand production monitoring",
      "Predictive analytics",
      "Automated reporting",
      "Risk assessment tools",
    ],
    video:
      "https://player.vimeo.com/video/637143154?autoplay=1&muted=1&loop=1&background=1",
  },
  {
    icon: Workflow,
    name: "AutoWellz",
    tagline: "Well Operation Workflow",
    description:
      "Streamline your well operations with automated workflow management. From planning to execution, manage every aspect efficiently.",
    features: [
      "Workflow automation",
      "Real-time collaboration",
      "Document management",
      "Compliance tracking",
    ],
    video:
      "https://player.vimeo.com/video/686737424?autoplay=1&muted=1&loop=1&background=1",
  },
  {
    icon: Cpu,
    name: "AutoPro",
    tagline: "Engineering Process Digitization",
    description:
      "Transform your engineering processes with digital solutions. Automate routine tasks, enhance accuracy, and improve efficiency.",
    features: [
      "Process automation",
      "Digital workflows",
      "Data integration",
      "Performance optimization",
    ],
    // IMPORTANT: Ensure file exists at public/videos/autopro.mp4
    video: "/video/autopro.mp4",
  },
  {
    icon: Mountain,
    name: "RockMaster",
    tagline: "Rock Mechanical Stability",
    description:
      "Advanced rock mechanics analysis tool for evaluating wellbore stability, formation integrity, and geomechanical risks.",
    features: [
      "Wellbore stability analysis",
      "Geomechanical modeling",
      "Risk prediction",
      "Formation evaluation",
    ],
    image: "/images/rockmaster.png",
  },
  {
    icon: Leaf,
    name: "GREEN",
    tagline: "GHG Emissions Calculator",
    description:
      "Calculate, track, and reduce your carbon footprint with our comprehensive emissions calculator.",
    features: [
      "Emissions calculation",
      "Carbon footprint tracking",
      "Sustainability reporting",
      "Reduction strategies",
    ],
    image: "/images/green.png",
  },
];

export const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Customized software solutions tailored to industry needs.",
  },
  {
    icon: Briefcase,
    title: "Engineering Consultancy",
    description: "Expert consultancy services with global engineering team.",
  },
  {
    icon: Users,
    title: "Customized Training",
    description: "Professional training programs for industry professionals.",
  },
];

export const newsEvents = [
  {
    title: "Greenfield Energy at SPE Conference 2025",
    date: "March 15, 2025",
    location: "Abu Dhabi",
    description:
      "Presented our latest research on production optimization and carbon reduction strategies.",
    image:
      "https://images.pexels.com/photos/247318/pexels-photo-247318.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "New Training Program for Reservoir Engineers",
    date: "January 28, 2025",
    location: "Online",
    description:
      "Launched a comprehensive training series for young professionals in the oil and gas industry.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Partnership for Sustainable Energy",
    date: "December 10, 2024",
    location: "Global",
    description:
      "Announced a strategic partnership to deliver integrated sustainability solutions.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const blogPosts = [
  {
    title: "5 Ways Digital Tools Are Transforming the Energy Sector",
    readTime: "7 min read",
    category: "Digital Transformation",
    description:
      "Explore how data-driven solutions are improving efficiency, safety, and sustainability.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Optimizing Production in Brownfields",
    readTime: "6 min read",
    category: "Engineering Insights",
    description:
      "Key strategies and techniques for maximizing recovery in mature fields.",
    image:
      "https://images.pexels.com/photos/296086/pexels-photo-296086.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Designing Software for Subsurface Engineers",
    readTime: "8 min read",
    category: "Product Design",
    description:
      "Best practices for building tools that subsurface teams actually love to use.",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const partnerLogos = [
  "/images/partners/P1.png",
  "/images/partners/P2.png",
  "/images/partners/P3.png",
  "/images/partners/P4.png",
  "/images/partners/P5.png",
  "/images/partners/P6.png",
];

export const statsData = [
  { icon: Briefcase, label: "Successful Projects", value: 15, unit: "+" },
  { icon: Users, label: "Happy Clients", value: 10, unit: "+" },
  { icon: Award, label: "Years Experience", value: 9, unit: "+" },
  { icon: TrendingUp, label: "Carbon Reduction", value: 344, unit: " MT" },
];