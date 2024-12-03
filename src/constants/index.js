import {
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
} from "../assets";

import heroicon1 from "../assets/hero/heroicon1.svg";
import heroicon2 from "../assets/hero/heroicon2.svg";
import heroicon3 from "../assets/hero/heroicon3.svg";
import heroicon4 from "../assets/hero/heroicon4.svg";
import exterior from "../assets/exterior.jpg";

import services1 from "../assets/services/services1.svg";
import services2 from "../assets/services/services2.svg";
import services3 from "../assets/services/services3.svg";
import services4 from "../assets/services/services4.svg";
import services5 from "../assets/services/services5.svg";
import services6 from "../assets/services/services6.svg";

import serviceImg1 from "../assets/services/serviceImg1.jpg";
import serviceImg2 from "../assets/services/serviceImg2.jpg";
import serviceImg3 from "../assets/services/serviceImg3.jpg";
import serviceImg4 from "../assets/services/serviceImg4.jpg";
import serviceImg5 from "../assets/services/serviceImg5.jpg";
import serviceImg6 from "../assets/services/serviceImg6.jpg";

import processMainLogo from "../assets/process/processMainLogo.svg";
import process1 from "../assets/process/process1.svg";
import process2 from "../assets/process/process2.svg";
import process3 from "../assets/process/process3.svg";
import process4 from "../assets/process/process4.svg";
import process5 from "../assets/process/process5.svg";
import process6 from "../assets/process/process6.svg";
import process7 from "../assets/process/process7.svg";
import process8 from "../assets/process/process8.svg";


import aboutIcon1 from "../assets/about/aboutIcon1.svg";
import aboutIcon2 from "../assets/about/aboutIcon2.svg";
import aboutIcon3 from "../assets/about/aboutIcon3.svg";
import aboutIcon4 from "../assets/about/aboutIcon4.svg";
import aboutIcon5 from "../assets/about/aboutIcon5.svg";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
  },
  {
    id: "1",
    title: "Portfolio",
    url: "#portfolio",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "About us",
    url: "#aboutus",
  },
  {
    id: "4",
    title: "+1 416 123 4567",
    url: "#contactus",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Get a Quote",
    url: "#getaquote",
    onlyMobile: true,
  },
];

export const heroIcons = [heroicon4, heroicon2, heroicon1, heroicon3];

export const notificationImages = [notification4, notification3, notification2];

export const stats = [
  { end: 250, operator: "+", description: "Projects Delivered" },
  { end: 100, operator: "+", description: "Families Served" },
  { end: 25, operator: "%", description: "Repeat Business" },
  { end: 8, operator: "+", description: "Years of Experience" },
];



export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const aboutUsIcons = [
aboutIcon1,
aboutIcon2,
aboutIcon5,
aboutIcon4,
aboutIcon3
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const processText =  
  "From initial consultation to project completion, we ensure a seamless and stress-free experience for our clients.";  

export const processContent = [  
  {  
    id: "0",  
    title: "Initial Consultation",  
    text: "Discuss your vision, requirements, and budget with our experts to set the foundation for your project.",  
  },  
  {  
    id: "1",  
    title: "Design and Planning",  
    text: "Our team crafts detailed designs and plans tailored to your needs, ensuring everything is aligned before construction begins.",  
  },  
  {  
    id: "2",  
    title: "Approval and Permits",  
    text: "We handle all necessary approvals and permits, so you can focus on envisioning your dream space.",  
  },  
  {  
    id: "3",  
    title: "Construction and Remodeling",  
    text: "Skilled professionals bring your project to life with precision and care, keeping you updated throughout the process.",  
  },  
  {  
    id: "4",  
    title: "Final Walkthrough",  
    text: "Join us for a comprehensive walkthrough to ensure every detail meets your expectations.",  
  },  
  {  
    id: "5",  
    title: "Project Completion",  
    text: "Enjoy your newly remodeled space, backed by our commitment to quality and satisfaction.",  
  },  
];  


export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const processIcons = [
  {
    id: "0",
    title: "Process1",
    icon: process1,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Process2",
    icon: process2,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Process3",
    icon: process3,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Process4",
    icon: process4,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Process5",
    icon: process5,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Process6",
    icon: process6,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Process7",
    icon: process7,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Process8",
    icon: process8,
    width: 38,
    height: 32,
  }
];


export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const services = [
  {
    id: "0",
    title: "Custom Home Building",
    text: "We bring your dream home to life with personalized designs and expert craftsmanship.",
    backgroundUrl: exterior,
    iconUrl: services1,
    imageUrl: serviceImg1,
  },
  {
    id: "1",
    title: "Kitchen Remodeling",
    text: "Transform your kitchen into a functional and stylish space tailored to your needs.",
    backgroundUrl: exterior,
    iconUrl: services2,
    imageUrl: serviceImg2,
    light: true,
  },
  {
    id: "2",
    title: "Bathroom Renovations",
    text: "Upgrade your bathroom with modern fixtures, elegant designs, and superior finishes.",
    backgroundUrl: exterior,
    iconUrl: services3,
    imageUrl: serviceImg3,
  },
  {
    id: "3",
    title: "Room Additions",
    text: "Expand your living space seamlessly with expertly designed and constructed additions.",
    backgroundUrl: exterior,
    iconUrl: services4,
    imageUrl: serviceImg4,
    light: true,
  },
  {
    id: "4",
    title: "Exterior Improvements",
    text: "Enhance curb appeal with new siding, roofing, decks, and other exterior upgrades.",
    backgroundUrl: exterior,
    iconUrl: services5,
    imageUrl: serviceImg5,
  },
  {
    id: "5",
    title: "Commercial Renovations",
    text: "Revitalize your business space to align with your brand and operational needs.",
    backgroundUrl: exterior,
    iconUrl: services6,
    imageUrl: serviceImg6,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
