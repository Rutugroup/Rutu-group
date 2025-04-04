// Define types for different sections
import { LucideIcon } from "lucide-react";

import {
  Hospital,
  ShoppingCart,
  School,
  Train,
  Bus,
  TrainFront,
} from "lucide-react";

interface Amenity {
  name: string;
  icon: string;
  frontImage: string;
  backImage: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Landmark {
  name: string;
  icon: string | LucideIcon;
  type: "image" | "lucide";
  distance: string;
  category: "Connectivity" | "Health" | "Shopping" | "Education";
}

interface Location {
  mapLink: string;
  address: string;
  mapSource?: { src: string };
  landmarks: {
    name: string;
    icon: string | LucideIcon;
    type: "image" | "lucide";
    distance: string;
    category: "Connectivity" | "Health" | "Shopping" | "Education";
  }[];
}

interface QRCode {
  image: string;
  maharera: string;
  website: string;
}

interface Project {
  title: string;
  subtitle: string;
  maharera: string;
  description: string;
  bannerVideo: string;
  bannerImage: string;
  mobileBannerImage: string;
  projectImage: string | string[];
  amenities: Amenity[];
  floorPlanPdf: string;
  brochurePdf: string;
  location: Location;
  gallery?: string[];
  qrCode: QRCode;
  roomFeatures?: { name: string; features: string[] }[];
}

// Define the main projects data type
const projectsData: Record<string, Project> = {
  "rutu-heights": {
    title: "Rutu Heights",
    subtitle: "1, 2 & 3 BHK Homes at Rutu Heights, Kalyan West",
    maharera: "P51700020213",
    description:
      "Rutu Heights is a premium residential project offering 1, 2 & 3 BHK residences with spacious balconies and convenient access to the upcoming Durgadi metro and Kalyan railway station.",
    bannerVideo: "",
    bannerImage:
      "/images/projects/rutu-heights-kalyan/banners/heights-banner.png",
    mobileBannerImage:
      "/images/projects/rutu-heights-kalyan/banners/mob-banner.jpg",
    projectImage: [
      "/images/projects/rutu-heights-kalyan/elevations/rutu-heights.webp",
      "/images/projects/rutu-heights-kalyan/elevations/elevation-1.webp",
      "/images/projects/rutu-heights-kalyan/elevations/elevation-2.webp",
      // Add as many images as you want for the carousel
    ],
    amenities: [
      {
        name: "Gym",
        icon: "/images/projects/rutu-heights-kalyan/amenities/gym.svg",
        frontImage: "/images/projects/rutu-heights-kalyan/amenities/gym.jpg",
        backImage: "/images/projects/rutu-heights-kalyan/amenities/gym.jpg",
      },
      {
        name: "Ample Parking",
        icon: "/images/projects/rutu-heights-kalyan/amenities/parking.svg",
        frontImage:
          "/images/projects/rutu-heights-kalyan/amenities/parking.jpg",
        backImage: "/images/ample-parking-back.jpg",
      },
      {
        name: "Garden",
        icon: "/images/projects/rutu-heights-kalyan/amenities/garden.svg",
        frontImage: "/images/projects/rutu-heights-kalyan/amenities/garden.jpg",
        backImage: "/images/lift-access-back.jpg",
      },
      {
        name: "Devotional Temple",
        icon: "images/projects/rutu-heights-kalyan/amenities/temple.svg",
        frontImage: "/images/projects/rutu-heights-kalyan/amenities/temple.jpg",
        backImage: "/images/devotional-temple-back.jpg",
      },
      {
        name: "Balcony",
        icon: "/images/projects/rutu-heights-kalyan/amenities/balconies.svg",
        frontImage:
          "/images/projects/rutu-heights-kalyan/amenities/balconies.jpg",
        backImage: "/images/ventilation-points-back.jpg",
      },
      {
        name: "High Ceilings",
        icon: "/images/projects/rutu-heights-kalyan/amenities/high-ceiling.svg",
        frontImage:
          "/images/projects/rutu-heights-kalyan/amenities/ceilings.jpg",
        backImage: "/images/high-ceilings-back.jpg",
      },
    ],
    floorPlanPdf: "/pdfs/rutu-heights-floor-plan.pdf",
    brochurePdf: "/pdfs/rutu-heights-brochure.pdf",
    location: {
      address: "Rutu Heights, Kolivali, Khadakpada, Kalyan, Maharashtra 421301",
      mapLink:
        "https://www.google.com/maps/place/Rutu+Heights/@19.2669948,73.135003,934m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7970036c46f9f:0x14e4adc82e2c4da1!8m2!3d19.2669948!4d73.135003!16s%2Fg%2F11lcll98dl?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",

      mapSource: {
        src: "/images/projects/rutu-heights-kalyan/map/rh-map.jpg",
      },
      landmarks: [
        {
          name: "Kalyan Railway Station",
          icon: Train,
          type: "lucide",
          distance: "",
          category: "Connectivity",
        },
        {
          name: "Durgadi Metro Station",
          icon: TrainFront,
          type: "lucide",
          distance: "",
          category: "Connectivity",
        },
        {
          name: "Kalyan Bus Depot",
          icon: Bus,
          type: "lucide",
          distance: "",
          category: "Connectivity",
        },
        {
          name: "Vedant Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "",
          category: "Health",
        },
        {
          name: "Century Rayon Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "",
          category: "Health",
        },
        {
          name: "Fortis Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "",
          category: "Health",
        },
        {
          name: "D-Mart",
          icon: ShoppingCart,
          type: "lucide",
          distance: "",
          category: "Shopping",
        },
        {
          name: "Reliance Smart",
          icon: ShoppingCart,
          type: "lucide",
          distance: "",
          category: "Shopping",
        },
        {
          name: "Metro Junction Mall",
          icon: ShoppingCart,
          type: "lucide",
          distance: "",
          category: "Shopping",
        },
        {
          name: "Vibgyor School",
          icon: School,
          type: "lucide",
          distance: "",
          category: "Education",
        },
        {
          name: "BK Birla College Of Arts & Science",
          icon: School,
          type: "lucide",
          distance: "",
          category: "Education",
        },
        {
          name: "St. Lawrence International School",
          icon: School,
          type: "lucide",
          distance: "",
          category: "Education",
        },
      ],
    },
    gallery: [
      // "/images/projects/rutu-heights-kalyan/gallery/gallery-1.jpg",
      // "/images/projects/rutu-heights-kalyan/gallery/gallery-2.jpg",
      // "/images/projects/rutu-heights-kalyan/gallery/gallery-3.jpg",
    ],
    qrCode: {
      image:
        "/images/projects/rutu-heights-kalyan/rera/rutu-heights-qr-rera.png",
      maharera: "P51700050215",
      website: "https://maharera.maharashtra.gov.in",
    },
    roomFeatures: [
      {
        name: "Kitchen",
        features: [
          "Modular kitchen",
          "Electrical point for water filter",
          "Provision for exhaust fan in kitchen",
          "Stainless steel kitchen sink",
          "Refrigerator point",
        ],
      },
      {
        name: "Living Room",
        features: [
          "Good quality internal paints",
          "Gypsum finished internal walls",
          "Television point",
          "Intercom system",
          "Good quality flooring tiles",
          "Wooden frames for doors",
          "Concealed wiring",
          "Laminated doors",
          "Powder coated aluminum windows",
        ],
      },
      {
        name: "Bedroom",
        features: [
          "Good quality internal paints",
          "Concealed wiring",
          "Wooden frames for doors",
          "Laminated doors",
          "Powder coated aluminum windows",
          "Good quality flooring tiles",
        ],
      },
      {
        name: "Bathrooms",
        features: [
          "Good quality CP fittings",
          "Good quality sanitary fittings",
          "Geysers in toilets",
          "Inverters",
          "Good quality electrical fittings",
          "Good quality bathroom tiles",
        ],
      },
    ],
  },

  "rutu-samruddhi": {
    title: "Rutu Samruddhi",
    subtitle:
      "Elevate Your Living: Discover 2 & 3 BHK Homes at Rutu Samruddhi, Thane",
    maharera: "P51700077718",
    description:
      "Projected in the serene yet vibrant Thane, Rutu Samruddhi offers a unique blend of luxury and calmness. With its prime location near Thane Station, Eastern Express Highway, this residential haven ensures easy connectivity to the city's core. Rutu Samruddhi presents thoughtfully designed 2BHK and 3BHK homes, giving you the perfect balance of comfort and convenience. Surrounded by fine dining, cafes, shopping hubs, entertainment venues, healthcare facilities, and top educational institutions, it's the ideal place to embrace a sustainable and minimalist lifestyle. Designed to be both inviting and sophisticated, this space sets the tone for the luxurious living that awaits you.",
    bannerVideo: "",
    bannerImage:
      "/images/projects/rutu-samruddhi-thane/banners/samruddhi-banner.jpg",
    mobileBannerImage:
      "/images/projects/rutu-samruddhi-thane/banners/mob-banner.jpg",
    projectImage: [
      "/images/projects/rutu-samruddhi-thane/elevations/homesamruddhi.webp",
      "/images/projects/rutu-samruddhi-thane/elevations/elevation-2.jpg",
      "/images/projects/rutu-samruddhi-thane/elevations/elevation-3.jpg",
      "/images/projects/rutu-samruddhi-thane/elevations/elevation-4.jpg",
    ],

    amenities: [
      {
        name: "Landscape garden",
        icon: "/images/projects/rutu-samruddhi-thane/amenities/garden-icon.png",
        frontImage:
          "/images/projects/rutu-samruddhi-thane/amenities/amenities-1.jpg",
        backImage: "/images/living-spaces-back.jpg",
      },
      {
        name: "World Class Fitness Centre",
        icon: "/images/projects/rutu-samruddhi-thane/amenities/gym.png",
        frontImage:
          "/images/projects/rutu-samruddhi-thane/amenities/amenities-2.jpg",
        backImage: "/images/ample-parking-back.jpg",
      },
      {
        name: "Open Sky Terrace",
        icon: "/images/projects/rutu-samruddhi-thane/amenities/terrace-icon.png",
        frontImage:
          "/images/projects/rutu-samruddhi-thane/amenities/amenities-3.jpg",
        backImage: "/images/lift-access-back.jpg",
      },
      {
        name: "Children’s Play Area",
        icon: "/images/projects/rutu-samruddhi-thane/amenities/playing-area.png",
        frontImage:
          "/images/projects/rutu-samruddhi-thane/amenities/amenities-4.jpg",
        backImage: "/images/devotional-temple-back.jpg",
      },
      {
        name: "Indoor Games",
        icon: "/images/projects/rutu-samruddhi-thane/amenities/indoor-games.png",
        frontImage:
          "/images/projects/rutu-samruddhi-thane/amenities/amenities-5.jpg",
        backImage: "/images/devotional-temple-back.jpg",
      },
      {
        name: "Library with Wifi",
        icon: "/images/projects/rutu-samruddhi-thane/amenities/library-icon.png",
        frontImage:
          "/images/projects/rutu-samruddhi-thane/amenities/amenities-6.jpg",
        backImage: "/images/devotional-temple-back.jpg",
      },
    ],
    floorPlanPdf: "/pdfs/rutu-samruddhi-floor-plan.pdf",
    brochurePdf: "/pdfs/rutu-samruddhi-brochure.pdf",
    location: {
      address:
        "Rutu Samruddhi, Runwal Nagar Rd,D N Nagar, Runwal Nagar, Thane West, Maharashtra 400601",
      mapLink:
        "https://www.google.com/maps/place/RUTU+SAMRUDDHI/@19.207277,72.9746846,822m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7b9002c642e67:0x7008efeed69e34ab!8m2!3d19.207277!4d72.9746846!16s%2Fg%2F11ln2ymf5_?entry=tts&g_ep=EgoyMDI1MDMxMC4wIPu8ASoASAFQAw%3D%3D",
      mapSource: {
        src: "/images/projects/rutu-samruddhi-thane/map/samruddhimap.jpg",
      },

      landmarks: [
        {
          name: "Castle Mill Bus Stop",
          icon: Bus, // Lucide React icon
          type: "lucide",
          distance: "1 mins",
          category: "Connectivity",
        },
        {
          name: "Eastern Express Highway",
          icon: Bus, // Lucide React icon
          type: "lucide",
          distance: "1 mins",
          category: "Connectivity",
        },
        {
          name: "Proposed Metro station",
          icon: TrainFront, // Lucide React icon
          type: "lucide",
          distance: "1 mins",
          category: "Connectivity",
        },
        {
          name: "Viviana Mall",
          icon: ShoppingCart,
          type: "lucide",
          distance: "3 Mins",
          category: "Shopping",
        },
        {
          name: "Koram Mall",
          icon: ShoppingCart,
          type: "lucide",
          distance: "5 Mins",
          category: "Shopping",
        },
        {
          name: "R Mall",
          icon: ShoppingCart,
          type: "lucide",
          distance: "10 Mins",
          category: "Shopping",
        },
        {
          name: "Lake City",
          icon: ShoppingCart,
          type: "lucide",
          distance: "6 Mins",
          category: "Shopping",
        },
        {
          name: "Goenka School",
          icon: School,
          type: "lucide",
          distance: "5 Mins",
          category: "Education",
        },
        {
          name: "Singhania School",
          icon: School,
          type: "lucide",
          distance: "5 Mins",
          category: "Education",
        },
        {
          name: "Vasant Vihar School & College",
          icon: School,
          type: "lucide",
          distance: "6 Mins",
          category: "Education",
        },
        {
          name: "Majiwada Bus Stop",
          icon: Bus, // Image icon
          type: "lucide",
          distance: "4 Mins",
          category: "Connectivity",
        },
        {
          name: "Thane Law College",
          icon: School, // Lucide React icon
          type: "lucide",
          distance: "10 Mins",
          category: "Education",
        },
        {
          name: "Thane Railway Station",
          icon: Train,
          type: "lucide",
          distance: "10 Mins",
          category: "Connectivity",
        },
        {
          name: "Jupiter Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "3 Mins",
          category: "Health",
        },
        {
          name: "Bethany Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "11 Mins",
          category: "Health",
        },
        {
          name: "ESIC Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "11 Mins",
          category: "Health",
        },
        {
          name: "Hiranandani Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "17 Mins",
          category: "Health",
        },
      ],
    },
    gallery: [],
    qrCode: {
      image:
        "/images/projects/rutu-samruddhi-thane/rera/rutu-samruddhi-qr-rera.png",
      maharera: "P51700077718",
      website: "https://maharera.maharashtra.gov.in",
    },
    roomFeatures: [
      {
        name: "Kitchen",
        features: [
          "Provision For Water Purifier System",
          "Utility area in Kitchen",
          "Waterproofing in sink",
          "Marble - Granite - Quartz - Tiles Platforms",
          "Concealed plumbing in Kitchen",
        ],
      },
      {
        name: "Living Area & Bedroom",
        features: [
          "Ampie Sunlight And Cross Ventilation",
          "Flooring Finished with high Quality Vitrified tiles in all rooms",
          "Provision For Air Conditioning, Television, Wi Fi etc",
        ],
      },
      {
        name: "Bathroom",
        features: [
          "Branded Designer Bathroom Fittings & Sanitary Ware",
          "Concealed Plumbing With Premium Quality CP Fittings",
          "Specialized water Proofing Treatment in All Bathrooms",
          "Provision for Exhaust Fan and Geyser",
        ],
      },
      {
        name: "Doors & Windows",
        features: [
          "Thick Laminated Wooden Flush Door",
          "High Quality Wooden Main Door Frames",
          "Premium powder coated windows",
          "Branded Door Handles And Locks",
        ],
      },
    ],
  },
  "rutu-apartments": {
    title: "Rutu Apartments",
    subtitle: "Introducing 1 & 2 BHK homes with deck areas.",
    maharera: "P51700053264",
    description:
      "Rutu Apartments stands as a magnificent tower, exuding brilliance and grandeur. Within its premises, you'll find 1 and 2 BHK residences, each featuring expansive balconies and roomy interiors, promising a lifestyle of opulence. Strategically located, Rutu Apartments provides convenient access to the forthcoming Durgadi metro station and the Kalyan railway station, along with a plethora of other amenities and facilities, elevating the overall convenience and connectivity of your daily life.",
    bannerVideo: "",
    bannerImage: "/images/projects/rutu-apartment/banners/apartment-banner.png",
    mobileBannerImage:
      "/images/projects/rutu-apartment/banners/apartments-banner-mob.jpg",
    projectImage: [
      "/images/projects/rutu-apartment/elevations/rutu-apartments.webp",
      "/images/projects/rutu-apartment/elevations/ra-elevation-1.webp",
      "/images/projects/rutu-apartment/elevations/ra-elevation-2.webp",
      // Add as many images as you want for the carousel
    ],
    amenities: [
      {
        name: "Apartments with balcony",
        icon: "/images/projects/rutu-apartment/amenities/icon-1.png",
        frontImage: "/images/projects/rutu-apartment/amenities/amenities-1.jpg",
        backImage: "/images/ample-parking-back.jpg",
      },
      {
        name: "24/7 CCTV system",
        icon: "/images/projects/rutu-apartment/amenities/icon-2.png",
        frontImage: "/images/projects/rutu-apartment/amenities/amenities-2.jpg", // Example front image URL
        backImage: "/images/living-spaces-back.jpg", // Example back image URL
      },
      {
        name: "RG Floor",
        icon: "/images/projects/rutu-apartment/amenities/icon-3.avif",
        frontImage:
          "/images/projects/rutu-apartment/amenities/amenities-3.avif",
        backImage: "/images/lift-access-back.jpg",
      },
      {
        name: "Gated Community",
        icon: "/images/projects/rutu-apartment/amenities/icon-4.png",
        frontImage: "/images/projects/rutu-apartment/amenities/amenities-4.jpg",
        backImage: "/images/devotional-temple-back.jpg",
      },
      {
        name: "Intra-city Road Connectivity",
        icon: "/images/projects/rutu-apartment/amenities/icon-5.avif",
        frontImage:
          "/images/projects/rutu-apartment/amenities/amenities-5.avif",
        backImage: "/images/devotional-temple-back.jpg",
      },
      {
        name: "Durgadi Metro Station",
        icon: "/images/projects/rutu-apartment/amenities/icon-6.png",
        frontImage:
          "/images/projects/rutu-apartment/amenities/amenities-6.avif",
        backImage: "/images/devotional-temple-back.jpg",
      },
    ],
    floorPlanPdf: "/pdfs/rutu-apartments-floor-plan.pdf",
    brochurePdf: "/pdfs/rutu-apartments-brochure.pdf",
    location: {
      address:
        "Rutu Apartments, Kolivali, Khadakpada, Kalyan, Maharashtra 421301",
      mapLink:
        "https://www.google.com/maps/place/Rutu+Apartment/@19.2652646,73.1348142,934m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be797007b860631:0x47e3bf4776b108e8!8m2!3d19.2652646!4d73.1348142!16s%2Fg%2F11lcq1t35v?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
      mapSource: { src: "/images/projects/rutu-apartment/map/ra-map.jpg" },
      landmarks: [
        {
          name: "Kalyan Railway Station",
          icon: Train,
          type: "lucide",
          distance: "",
          category: "Connectivity",
        },
        {
          name: "Durgadi Metro Station",
          icon: TrainFront,
          type: "lucide",
          distance: "",
          category: "Connectivity",
        },
        {
          name: "Kalyan Bus Depot",
          icon: Bus,
          type: "lucide",
          distance: "",
          category: "Connectivity",
        },
        {
          name: "Vedant Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "",
          category: "Health",
        },
        {
          name: "Century Rayon Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "",
          category: "Health",
        },
        {
          name: "Fortis Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "",
          category: "Health",
        },
        {
          name: "D-Mart",
          icon: ShoppingCart,
          type: "lucide",
          distance: "",
          category: "Shopping",
        },
        {
          name: "Reliance Smart",
          icon: ShoppingCart,
          type: "lucide",
          distance: "",
          category: "Shopping",
        },
        {
          name: "Metro Junction Mall",
          icon: ShoppingCart,
          type: "lucide",
          distance: "",
          category: "Shopping",
        },
        {
          name: "Vibgyor School",
          icon: School,
          type: "lucide",
          distance: "",
          category: "Education",
        },
        {
          name: "BK Birla College Of Arts & Science",
          icon: School,
          type: "lucide",
          distance: "",
          category: "Education",
        },
        {
          name: "St. Lawrence International School",
          icon: School,
          type: "lucide",
          distance: "",
          category: "Education",
        },
      ],
    },
    gallery: [],
    qrCode: {
      image: "/images/projects/rutu-apartment/rera/rutu-apartments-qr-rera.png",
      maharera: "P51700053264",
      website: "https://maharera.maharashtra.gov.in",
    },
    roomFeatures: [
      {
        name: "Kitchen",
        features: [
          "Modular kitchen",
          "Electrical point for water filter",
          "Provision for exhaust fan in kitchen",
          "Stainless steel kitchen sink",
          "Refrigerator point",
        ],
      },
      {
        name: "Living Room",
        features: [
          "Good quality internal paints",
          "Gypsum finished internal walls",
          "Television point",
          "Intercom system",
          "Good quality flooring tiles",
          "Wooden frames for doors",
          "Concealed wiring",
          "Laminated doors",
          "Powder coated aluminum windows",
        ],
      },
      {
        name: "Bedroom",
        features: [
          "Good quality internal paints",
          "Concealed wiring",
          "Wooden frames for doors",
          "Laminated doors",
          "Powder coated aluminum windows",
          "Good quality flooring tiles",
        ],
      },
      {
        name: "Bathrooms",
        features: [
          "Good quality CP fittings",
          "Good quality sanitary fittings",
          "Geysers in toilets",
          "Inverters",
          "Good quality electrical fittings",
          "Good quality bathroom tiles",
        ],
      },
    ],
  },
  "rutu-city": {
    title: "Rutu City",
    subtitle: "Township with 2 BHK Spacious Homes, in Thane",
    maharera: "P51700079569",
    description:
      "Rutu City is a premium township project offering 1, 2 & 3 BHK homes with world-class amenities and excellent connectivity to major parts of Mumbai and Thane.",
    bannerVideo: "",
    bannerImage: "",
    mobileBannerImage: "",
    projectImage: "",
    amenities: [
      {
        name: "Modern Wellness Centre",
        icon: "/images/projects/rutu-samruddhi-thane/amenities/gym.png",
        frontImage:
          "/images/projects/rutu-samruddhi-thane/amenities/amenities-2.jpg", // Example front image URL
        backImage: "/images/living-spaces-back.jpg", // Example back image URL
      },
      {
        name: "Landscaped Gardens",
        icon: "/images/projects/rutu-samruddhi-thane/amenities/garden-icon.png",
        frontImage:
          "/images/projects/rutu-samruddhi-thane/amenities/amenities-1.jpg",
        backImage: "/images/ample-parking-back.jpg",
      },
      {
        name: "Children Play Area",
        icon: "/images/projects/rutu-samruddhi-thane/amenities/playing-area.png",
        frontImage:
          "/images/projects/rutu-samruddhi-thane/amenities/amenities-4.jpg",
        backImage: "/images/lift-access-back.jpg",
      },
      {
        name: "Basement & Podium Parking",
        icon: "/images/projects/rutu-heights-kalyan/amenities/parking.svg",
        frontImage:
          "/images/projects/rutu-heights-kalyan/amenities/parking.jpg",
        backImage: "/images/devotional-temple-back.jpg",
      },
      {
        name: "CCTV Surveillance",
        icon: "/images/projects/rutu-apartment/amenities/icon-2.png",
        frontImage: "/images/projects/rutu-apartment/amenities/amenities-2.jpg",
        backImage: "/images/devotional-temple-back.jpg",
      },
      {
        name: "Business Centre With Wi-Fi Zone/Library",
        icon: "/images/projects/rutu-samruddhi-thane/amenities/library-icon.png",
        frontImage:
          "/images/projects/rutu-samruddhi-thane/amenities/amenities-6.jpg",
        backImage: "/images/devotional-temple-back.jpg",
      },
    ],
    floorPlanPdf: "/pdfs/rutu-city-floor-plan.pdf",
    brochurePdf: "/pdfs/rutu-city-brochure.pdf",
    location: {
      address:
        "Rutu City, Main Gate Rd, Sanghavi Hills, Parkwoods, Thane West, Mumbai, Thane, Maharashtra 400607",
      mapLink:
        "https://www.google.com/maps/place/Rutu+City/@19.2584375,72.9602401,934m/data=!3m1!1e3!4m6!3m5!1s0x3be7bbb8ef783f4f:0x1b10612d75c5bbf8!8m2!3d19.2584375!4d72.962815!16s%2Fg%2F1tfcltg6?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
      mapSource: { src: "/images/projects/rutu-city/map/rutu-city-map.png" },
      landmarks: [
        {
          name: "Thane Borivali Tunnel",
          icon: Train,
          type: "lucide",
          distance: "8 Mins",
          category: "Connectivity",
        },
        {
          name: "Metro Station",
          icon: TrainFront,
          type: "lucide",
          distance: "2 Mins",
          category: "Connectivity",
        },
        {
          name: "Eastern/Western Express Highway",
          icon: Bus,
          type: "lucide",
          distance: "10 Mins",
          category: "Connectivity",
        },
        {
          name: "Ghodbunder Road",
          icon: Bus,
          type: "lucide",
          distance: "2 Mins",
          category: "Connectivity",
        },
        {
          name: "Jupiter Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "15 Mins",
          category: "Health",
        },
        {
          name: "Hiranandani Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "7 Mins",
          category: "Health",
        },
        {
          name: "Bethany Hospital",
          icon: Hospital,
          type: "lucide",
          distance: "30 Mins",
          category: "Health",
        },
        {
          name: "D-Mart",
          icon: ShoppingCart,
          type: "lucide",
          distance: "2 Mins",
          category: "Shopping",
        },
        {
          name: "Viviana Mall",
          icon: ShoppingCart,
          type: "lucide",
          distance: "15 Mins",
          category: "Shopping",
        },
        {
          name: "Korum Mall ",
          icon: ShoppingCart,
          type: "lucide",
          distance: "20 Mins",
          category: "Shopping",
        },
        {
          name: "R Mall",
          icon: ShoppingCart,
          type: "lucide",
          distance: "10 Mins",
          category: "Shopping",
        },
        {
          name: "HyperCity",
          icon: ShoppingCart,
          type: "lucide",
          distance: "5 Mins",
          category: "Shopping",
        },
        {
          name: "DG International School",
          icon: School,
          type: "lucide",
          distance: "2 Mins",
          category: "Education",
        },
        {
          name: "Eva World School",
          icon: School,
          type: "lucide",
          distance: "2 Mins",
          category: "Education",
        },
        {
          name: "Gautam Singhania School",
          icon: School,
          type: "lucide",
          distance: "4 Mins",
          category: "Education",
        },
        {
          name: "Seven Square Academy",
          icon: School,
          type: "lucide",
          distance: "4 Mins",
          category: "Education",
        },
      ],
    },
    gallery: [],
    qrCode: {
      image: "/images/Projects/rutu-city/rera/Rera-rutu-city.png",
      maharera: "P51700079569",
      website: "https://maharera.maharashtra.gov.in",
    },
    roomFeatures: [
      {
        name: "Kitchen",
        features: [
          "Modular kitchen",
          "Granite Platform With Branded SS Sink",
          "Wall Tiles Up To Beam Bottom",
          "Chimney & Gas Stove",
          "Water Purifier",
        ],
      },
      {
        name: "Living Room & BedRoom",
        features: [
          "Good quality internal paints",
          "Television point",
          "Good quality flooring tiles",
          "Concealed wiring",
          "Powder coated aluminum windows",
        ],
      },
      {
        name: "Doors & Windows",
        features: [
          "Granite Sills",
          "Teakwood Door Frames",
          "Decorative Laminates",
          "Premium Quality Hardware Fittings",
          "Aluminium Sliding Windows",
          "Heat Control Glass",
        ],
      },
      {
        name: "Bathrooms",
        features: [
          "Floor-To-Ceiling Tiling",
          "Geysers",
          "Concealed Premium CP Fittings",
          "Premium Quality Sanitaryware",
          "Both Sides Laminated Doors",
        ],
      },
    ],
  },
};

export default projectsData;
