import { ShieldCheck, Car, Users, Trophy, AlertTriangle, BookOpen, Clock, Activity, UserCheck, Settings, MapPin, Wrench, CloudRain, BrainCircuit } from "lucide-react";
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
    title: "Defensive Driving Course",
    description: "Our core 17-hour program covering theory and practical skills to anticipate hazards and drive proactively.",
    icon: Car,
    features: ["10 Hrs Theory / 7 Hrs Practical", "Plan Ahead & Speed Control", "Certificate of Completion"]
  },
  {
    id: "s2",
    title: "Driving Psychology",
    description: " specialized training to address aggressive driving, driver attitude, and stress management.",
    icon: BrainCircuit,
    features: ["Aggressive Driving Management", "Alcohol Effects Awareness", "Attitude Transformation"]
  },
  {
    id: "s3",
    title: "Car Care & Maintenance",
    description: "Technical training on vehicle inspection, tire maintenance, and preventive care schedules.",
    icon: Wrench,
    features: ["Pre/Post Trip Inspection", "Preventive Maintenance", "Tire Safety Procedures"]
  },
  {
    id: "s4",
    title: "Corporate Fleet Training",
    description: "Customized programs for organizations to reduce accident rates and operational costs.",
    icon: Users,
    features: ["Driver Competency Assessment", "Fuel Optimization", "Heavy Machinery/Forklift"]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "t1",
    name: "Mengistu Negatu",
    role: "Senior Instructor & Head of Training",
    image: "/images/m.jpg",
    bio: "Expert in defensive driving strategies with decades of experience on Ethiopian roads. He leads all training programs ensuring international safety standards are met.",
    credentials: [
      "Federal Transport Authority Approved",
      "Valid Invigilation License",
      "Light, Medium & Heavy Duty Trainer",
      "Certified Defensive Driving Expert"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tm1",
    name: "",
    role: "",
    company: "",
    quote: "Safe Ethiopia provided excellent competency assessments and defensive training for our drivers. Highly professional.",
    rating: 5,
    image: ""
  },
  {
    id: "tm2",
    name: "",
    role: "",
    company: "",
    quote: "The defensive driver training has significantly improved our fleet safety standards. The practical sessions were invaluable.",
    rating: 5,
    image: ""
  },
  {
    id: "tm3",
    name: "",
    role: "",
    company: "",
    quote: "Their testing and training methods are thorough. We've seen a positive shift in driver attitude and skill.",
    rating: 5,
    image: ""
  }
];

export const STATS: StatItem[] = [
  { id: "st1", label: "Drivers Trained", value: 10000, suffix: "+", icon: Users },
  { id: "st2", label: "Years Serving", value: 10, suffix: "+", icon: Clock }, // Est 2007 EC approx 10 years
  { id: "st3", label: "Human Error Red.", value: 85, suffix: "%", icon: Activity },
  { id: "st4", label: "Training Modules", value: 7, suffix: "", icon: BookOpen },
];

export const SAFETY_TIPS: SafetyTip[] = [
  {
    id: "tip1",
    title: "Expect the Unexpected",
    summary: "Always drive anticipating dangerous scenarios, from bad weather to erroring motorists.",
    category: "Mindset"
  },
  {
    id: "tip2",
    title: "Weather Adaptation",
    summary: "Adjust driving techniques for rainy, foggy, or flood conditions common in Ethiopia.",
    category: "Weather"
  },
  {
    id: "tip3",
    title: "Vehicle Inspection",
    summary: "Check vehicle components before driving, mid-trip, and post-trip to prevent mechanical failure.",
    category: "Maintenance"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "How long is the training course?",
    answer: "Based on Company Needed."
  },
  {
    id: "f2",
    question: "Are your instructors certified?",
    answer: "Yes. Unlike ordinary driving schools, all our instructors have valid approvals from the Federal Transport Authority to train and invigilate light, medium, and heavy-duty vehicle drivers."
  },
  {
    id: "f3",
    question: "Do you provide vehicles for practical training?",
    answer: "Generally, training is rendered using vehicles that the drivers are going to be assigned by their organization. This ensures they are comfortable with the specific machinery or vehicle they will operate."
  },
  {
    id: "f4",
    question: "What is covered in the methodology?",
    answer: "We use a mix of theoretical classroom sessions (charts, video demos, brainstorming) and practical on-road training. During practicals, one driver operates while others observe in the cabin to deepen understanding."
  },
  {
    id: "f5",
    question: "Where are you located?",
    answer: "We are located at 22 infront of Debre Damo Hotel, Addis Ababa. You can contact us at +251 912 033 366."
  }
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: "w1",
    title: "FTA Approved",
    description: "Legally established (Lic: /AA/14/673/40160912007) with Federal Transport Authority approved instructors.",
    icon: ShieldCheck
  },
  {
    id: "w2",
    title: "Tailored Methodology",
    description: "Training tailored to specific vehicle models, machinery, and forklift operators your drivers use.",
    icon: Settings
  },
  {
    id: "w3",
    title: "Comprehensive Curriculum",
    description: "From driving psychology and attitude change to technical car care and preventive maintenance.",
    icon: BookOpen
  },
  {
    id: "w4",
    title: "Proven Track Record",
    description: "Trusted by major multinationals like Coca-Cola, PepsiCo, and Habesha Breweries.",
    icon: Trophy
  }
];

export const PARTNERS: PartnerItem[] = [
  {
    id: "p1",
    name: "East Africa Bottling S.C",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Coca-Cola+EABSC"
  },
  {
    id: "p2",
    name: "Habesha Breweries",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Habesha+Beer"
  },
  {
    id: "p3",
    name: "PepsiCo / Sunselt",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=PepsiCo"
  },
  {
    id: "p4",
    name: "Holland Dairy",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Holland+Dairy"
  },
  {
    id: "p5",
    name: "Save the Children",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Save+The+Children"
  },
  {
    id: "p6",
    name: "Ambo Mineral Water",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Ambo+Water"
  },
  {
    id: "p7",
    name: "Awash Wine",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Awash+Wine"
  },
  {
    id: "p8",
    name: "National Transport",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=National+Transport"
  },
  {
    id: "p9",
    name: "Edomias Agency",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Edomias+Agency"
  },
  {
    id: "p10",
    name: "Moenco",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Moenco"
  },
  {
    id: "p11",
    name: "Derba Transport",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=Derba+Transport"
  },
  {
    id: "p12",
    name: "MSH",
    logo: "https://placehold.co/200x80/f8fafc/16a34a?text=MSH"
  }
];