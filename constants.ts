import { ShieldCheck, Car, Users, Trophy, AlertTriangle, BookOpen, Clock, Activity, UserCheck, Settings, MapPin } from "lucide-react";
import { ServiceItem, TeamMember, Testimonial, StatItem, SafetyTip, FAQItem, FeatureItem, PartnerItem } from "./types";

export const COMPANY_NAME = "Safe Ethiopia";
export const COMPANY_FULL_NAME = "Safe Ethiopia Defensive Driving Plc";

export const NAVIGATION_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#process" },
  { name: "Tips", href: "#tips" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Defensive Driving",
    description: "Comprehensive training for individuals to anticipate hazards and drive proactively.",
    icon: Car,
    features: ["Theory & Practical", "Certificate Provided", "Addis Ababa Traffic Scenarios"]
  },
  {
    id: "s2",
    title: "Corporate Fleet Training",
    description: "Specialized programs for companies to reduce accident rates and maintenance costs.",
    icon: Users,
    features: ["Driver Assessment", "Fuel Efficiency", "Risk Report"]
  },
  {
    id: "s3",
    title: "Hazard Recognition",
    description: "Advanced visual training to identify and react to potential road dangers instantly.",
    icon: AlertTriangle,
    features: ["Reaction Time Testing", "Night Driving Safety", "Pedestrian Awareness"]
  },
  {
    id: "s4",
    title: "Risk Management",
    description: "Consultancy and workshops for fleet managers to implement safety policies.",
    icon: ShieldCheck,
    features: ["Policy Creation", "Incident Analysis", "Safety Audits"]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "t1",
    name: "Abebe Kebede",
    role: "Head Instructor",
    image: "https://picsum.photos/id/1005/400/400",
    bio: "Certified Master Trainer with 15 years of experience in defensive driving instruction.",
    credentials: [
      "Certified Master Defensive Driving Trainer (UK)",
      "15+ Years Professional Instruction",
      "Advanced First Aid Certified",
      "Former Rally Driver"
    ]
  },
  {
    id: "t2",
    name: "Sara Tesfaye",
    role: "Road Safety Analyst",
    image: "https://picsum.photos/id/1011/400/400",
    bio: "Expert in traffic psychology and accident reconstruction techniques.",
    credentials: [
      "PhD in Transport Psychology",
      "Certified Accident Investigator",
      "Road Safety Audit Specialist",
      "Published Author on Urban Mobility"
    ]
  },
  {
    id: "t3",
    name: "Yonas Alemu",
    role: "Fleet Operations Lead",
    image: "https://picsum.photos/id/1025/400/400",
    bio: "Specializes in heavy vehicle safety and corporate fleet management.",
    credentials: [
      "Heavy Goods Vehicle (HGV) Master Instructor",
      "Certified Fleet Manager (NAFA)",
      "Eco-Driving Specialist",
      "Logistics Safety Consultant"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tm1",
    name: "Dawit Haile",
    role: "Logistics Manager",
    company: "TransEthiopia Logistics",
    quote: "Since training with Safe Ethiopia, our fleet accident rate dropped by 40%. The instructors are world-class.",
    rating: 5,
    image: "https://picsum.photos/id/1062/200/200"
  },
  {
    id: "tm2",
    name: "Helen Bekele",
    role: "Private Student",
    quote: "I used to be nervous driving in Addis. This course gave me the confidence to handle any situation safely.",
    rating: 5,
    image: "https://picsum.photos/id/349/200/200"
  },
  {
    id: "tm3",
    name: "Mohammed Ahmed",
    role: "Transport Coordinator",
    company: "Global NGO",
    quote: "Professional, punctual, and highly effective. Best investment for our field drivers.",
    rating: 5,
    image: "https://picsum.photos/id/237/200/200"
  }
];

export const STATS: StatItem[] = [
  { id: "st1", label: "Drivers Trained", value: 5000, suffix: "+", icon: Users },
  { id: "st2", label: "Years Experience", value: 12, suffix: "+", icon: Clock },
  { id: "st3", label: "Accident Reduction", value: 45, suffix: "%", icon: Activity },
  { id: "st4", label: "Certified Courses", value: 20, suffix: "", icon: BookOpen },
];

export const SAFETY_TIPS: SafetyTip[] = [
  {
    id: "tip1",
    title: "The 3-Second Rule",
    summary: "Maintain a safe following distance to allow reaction time for sudden stops.",
    category: "Basics"
  },
  {
    id: "tip2",
    title: "Roundabout Etiquette",
    summary: "Understanding right-of-way in Addis Ababa's busy roundabouts prevents gridlock.",
    category: "Local"
  },
  {
    id: "tip3",
    title: "Rainy Season Driving",
    summary: "Reduce speed and turn on lights during heavy 'Kiremt' rains to improve visibility.",
    category: "Weather"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "How long is the defensive driving course?",
    answer: "Our standard defensive driving course runs for 3 days, including 1 day of theory and 2 days of practical on-road training. Advanced and refresher courses can be completed in 1 day."
  },
  {
    id: "f2",
    question: "Do you provide vehicles for training?",
    answer: "Yes, we have a fleet of modern, dual-control vehicles for all practical training sessions. Corporate clients can also opt to use their own fleet vehicles for specific training requirements."
  },
  {
    id: "f3",
    question: "Is the certificate recognized?",
    answer: "Absolutely. Our certificates are recognized by major insurance companies, corporate employers, and local transport authorities in Ethiopia."
  },
  {
    id: "f4",
    question: "Can I schedule weekend classes?",
    answer: "Yes, we understand that many of our students work during the week. We offer flexible scheduling options, including weekend intensive batches."
  },
  {
    id: "f5",
    question: "What is the cost of the training?",
    answer: "Pricing varies depending on the specific course (Individual, Corporate, or Advanced). Please contact us directly or request a quote via the form below for the most up-to-date pricing."
  }
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: "w1",
    title: "Safety First",
    description: "Our top priority is reducing accidents and ensuring road safety through proactive driving techniques.",
    icon: ShieldCheck
  },
  {
    id: "w2",
    title: "Certified Instructors",
    description: "Learn from industry experts with verified credentials and years of professional teaching experience.",
    icon: UserCheck
  },
  {
    id: "w3",
    title: "Customized Training",
    description: "We tailor our courses to match your skill level, whether you're a beginner or a corporate fleet driver.",
    icon: Settings
  },
  {
    id: "w4",
    title: "Local Expertise",
    description: "Training specifically designed for Addis Ababa's unique traffic conditions and road challenges.",
    icon: MapPin
  }
];

export const PARTNERS: PartnerItem[] = [
  {
    id: "p1",
    name: "Ethio Telecom",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Ethio+Telecom"
  },
  {
    id: "p2",
    name: "TotalEnergies",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=TotalEnergies"
  },
  {
    id: "p3",
    name: "Ethiopian Insurance",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Ethiopian+Ins"
  },
  {
    id: "p4",
    name: "Anbessa Bus",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Anbessa+Bus"
  },
  {
    id: "p5",
    name: "Ride",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Ride"
  },
  {
    id: "p6",
    name: "Midroc Group",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Midroc+Group"
  },
  {
    id: "p7",
    name: "DHL Ethiopia",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=DHL"
  }
];