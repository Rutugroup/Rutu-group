import projectsData from "./projectData";
import { LucideIcon } from "lucide-react";

// Add this to match the type used elsewhere
interface Landmark {
  name: string;
  icon: string | LucideIcon;
  distance: string;
}

// Then use this for your Project type
interface Project {
  title: string;
  subtitle: string;
  maharera: string;
  description: string;
  bannerVideo: string;
  bannerImage: string;
  projectImage: string | string[];
  amenities: {
    name: string;
    icon: string;
    frontImage: string;
    backImage: string;
  }[];
  floorPlanPdf: string;
  brochurePdf: string;
  location: {
    address: string;
    mapLink: string;
    mapSource?: { src: string };
    landmarks: Landmark[]; // Changed to use Landmark type
  };
  gallery: string[];
  qrCode: {
    image: string;
    maharera: string;
    website: string;
  };
  roomFeatures?: { name: string; features: string[] }[];
}

// Use type assertion to prevent conflict
const typedProjectsData = projectsData as unknown as Record<string, Project>;

// Export the function only once
export function generateStaticParams() {
  return Object.keys(typedProjectsData).map((slug) => ({ slug }));
}
