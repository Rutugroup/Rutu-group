"use client";

import { useRef } from "react";
import { notFound } from "next/navigation";
import ProjectBanner from "@/components/sections/Projects/ProjectBanner";
import ProjectAbout from "@/components/sections/Projects/ProjectAbout";
import ProjectAmenities from "@/components/sections/Projects/ProjectAmenities";
import ProjectFloorPlan from "@/components/sections/Projects/ProjectFloorPlan";
import ProjectLocation from "@/components/sections/Projects/ProjectLocation";
import ProjectGallery from "@/components/sections/Projects/ProjectGallery";
import ProjectQrCode from "@/components/sections/Projects/ProjectQrCode";
import RoomFeatures from "@/components/sections/Projects/RoomFeatures";
import projectsData from "@/app/[slug]/projectData";

// Define the type for projectsData
interface ProjectData {
  title: string;
  subtitle: string;
  maharera: string;
  description: string;
  bannerVideo: string;
  bannerImage: string;
  projectImage: string | string[]; // Updated to support array of images
  amenities: {
    name: string;
    icon: string;
    frontImage: string;
    backImage: string;
  }[];
  roomFeatures?: { name: string; features: string[] }[]; // Add room features type
  floorPlanPdf: string;
  brochurePdf: string;
  location: {
    mapLink: string;
    address: string;
    mapSource?: { src: string }; // Make it optional
    landmarks: { name: string; icon: string; distance: string }[];
  };
  gallery: string[];
  qrCode: {
    image: string;
    maharera: string;
    website: string;
  };
}

// Ensure TypeScript knows projectsData structure
const typedProjectsData: Record<string, ProjectData> =
  projectsData as unknown as Record<string, ProjectData>;

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!Object.prototype.hasOwnProperty.call(typedProjectsData, slug)) {
    notFound();
  }

  const project = typedProjectsData[slug];

  // Create refs for section navigation
  const overviewRef = useRef(null);
  const amenitiesRef = useRef(null);
  const roomFeaturesRef = useRef(null); // Added room features ref
  const floorPlanRef = useRef(null);
  const locationRef = useRef(null);
  const galleryRef = useRef(null);

  // Ensure amenities have frontImage and backImage values
  const updatedAmenities = project.amenities.map((amenity) => ({
    ...amenity,
    frontImage: amenity.frontImage || "/placeholder-front.jpg",
    backImage: amenity.backImage || "/placeholder-back.jpg",
  }));

  return (
    <main className="min-h-screen">
      <ProjectBanner
        title={project.title}
        videoSrc={project.bannerVideo}
        imageSrc={project.bannerImage} // Added this line to pass the banner image
        sectionRefs={{
          overview: overviewRef,
          amenities: amenitiesRef,
          floorPlan: floorPlanRef,
          location: locationRef,
          gallery: galleryRef,
        }}
      />

      <div ref={overviewRef} id="overview-section">
        <ProjectAbout
          title={project.title}
          subtitle={project.subtitle}
          maharera={project.maharera}
          description={project.description}
          image={project.projectImage}
        />
      </div>

      <div ref={amenitiesRef} id="amenities-section">
        <ProjectAmenities title={project.title} amenities={updatedAmenities} />
      </div>

      {project.roomFeatures && project.roomFeatures.length > 0 && (
        <div ref={roomFeaturesRef} id="room-features-section">
          <RoomFeatures
            categories={project.roomFeatures.map(({ name, features }) => ({
              name,
              features,
            }))}
          />
        </div>
      )}

      <div ref={floorPlanRef} id="floorplan-section">
        <ProjectFloorPlan
          floorPlanPdf={project.floorPlanPdf}
          brochurePdf={project.brochurePdf}
        />
      </div>

      <div ref={locationRef} id="location-section">
        <ProjectLocation
          title={project.title}
          address={project.location.address}
          mapSource={project.location.mapSource}
          mapLink={project.location.mapLink}
          landmarks={project.location.landmarks.map((landmark) => ({
            ...landmark,
            type:
              typeof landmark.icon === "string" && landmark.icon.includes("/")
                ? "image"
                : "lucide",
          }))}
        />
      </div>

      <div ref={galleryRef} id="gallery-section">
        <ProjectGallery images={project.gallery} />
      </div>

      <ProjectQrCode
        qrCode={project.qrCode.image}
        maharera={project.qrCode.maharera}
        website={project.qrCode.website}
      />
    </main>
  );
}
