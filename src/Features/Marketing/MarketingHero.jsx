import { FaBullhorn, FaHashtag, FaTag } from "react-icons/fa";
import CategoryExplore from "../../Ui/CategoryExplore";
const marketingPaths = [
    {
      title: "Digital Marketing",
      description:
        "Master online marketing strategies and digital campaign management",
      icon: FaBullhorn,
      path: "/marketing/digital-marketing",
      strategies: ["SEO/SEM", "Email Marketing", "Analytics"],
    },
    {
      title: "Social Media Marketing",
      description:
        "Build engaging social media presence and drive audience growth",
      icon: FaHashtag,
      path: "/marketing/social-media-marketing",
      strategies: [
        "Content Strategy",
        "Influencer Marketing",
        "Community Management",
      ],
    },
    {
      title: "Branding",
      description:
        "Create powerful brand identities and develop brand strategies",
      icon: FaTag,
      path: "/marketing/branding",
      strategies: ["Brand Identity", "Positioning", "Brand Guidelines"],
    },
  ];
export default function MarketingHero() { return <CategoryExplore title="Marketing" description="Learn to build a brand, reach an audience, and make meaningful connections." paths={marketingPaths} />; }
