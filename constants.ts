import { ExperienceItem, ProjectItem, ContactInfo, SkillCategory } from './types';

export const CONTACT: ContactInfo = {
  email: "zane.ch.tsai@gmail.com",
  phone: "+886 953751359",
  location: "Taipei City, Taiwan",
  linkedin: "https://www.linkedin.com/in/zane-tsai"
};

export const SUMMARY = "Innovative and detail-oriented software engineer with an academic background in mechanical engineering and hands-on experience in robotics and automation. Experienced in designing UI for robotic arms and developing software for manufacturing automation flow and systems. Contributed to visual algorithm design during graduate studies. Passionate about transitioning into autonomous vehicles and robotic system design, leveraging a solid foundation in automation, control systems, and software.";

export const SKILLS: SkillCategory[] = [
  { category: "Languages", skills: ["C#", "C++", "Python"] },
  { category: "Tools & Frameworks", skills: ["Git", "ROS", "ROS2", "React", "TypeScript"] },
  { category: "Spoken Languages", skills: ["English (Advanced, TOEIC 900)", "Japanese (Intermediate, JLPT N1)", "Chinese (Native)"] }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "delta",
    role: "Software Engineer",
    company: "Delta Electronics Inc.",
    companyUrl: "https://www.deltaww.com/en-US/index",
    location: "Taipei, Taiwan",
    period: "2023 – Present",
    type: "work",
    description: "Designed and developed a smart manufacturing platform to enable customers in diverse machining applications to quickly generate machining programs."
  },
  {
    id: "syntec",
    role: "HMI Software Engineer",
    company: "Syntec Technology Inc.",
    companyUrl: "https://www.syntecclub.com/",
    location: "Hsinchu, Taiwan",
    period: "2021 – 2023",
    type: "work",
    description: "Developed software for robotic arm teach pendants, including designing user interfaces, integrating UI with backend logic, functional testing, and writing technical documentation for development and operations."
  },
  {
    id: "ms-ntu",
    role: "Master of Science in\nMechanical Engineering",
    company: "National Taiwan University",
    companyUrl: "https://www.ntu.edu.tw/english/",
    labName: "APRILab",
    labUrl: "https://aprilabntu.wixsite.com/website",
    location: "Taipei, Taiwan",
    period: "2018 – 2021",
    type: "education",
    description: "Specialized in visual algorithm design and robotics."
  },
  {
    id: "bs-ntu",
    role: "Bachelor of Science in Mechanical Engineering",
    company: "National Taiwan University",
    companyUrl: "https://www.ntu.edu.tw/english/",
    location: "Taipei, Taiwan",
    period: "2013 – 2017",
    type: "education",
    description: "Acquired a solid foundation in automation, control systems, and software engineering principles through rigorous academic coursework and projects."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "simple-control",
    title: "Simple Control",
    subtitle: "Industrial Automation",
    year: "2025",
    description: "SimpleControl is a Qt/QML-based interface for assembling automation devices and creating operation flows. It demonstrates a flexible, modular approach to building and editing automation scripts without rewriting code for each machine configuration.",
    tags: ["C++", "Qt", "UI/UX"],
    imageUrl: "bosch.jpg",
    links: [
      { label: "GitHub Repository", url: "https://github.com/zane-space/SimpleControl" }
    ],
    media: [
      { 
        type: 'image', 
        url: "https://github.com/user-attachments/assets/07cf49c6-0238-4122-9b32-16fce5281a7b",
        caption: "SimpleControl Demo" 
      }
    ],
    details: [
      "Enabled dynamic combination of robots, conveyors, and other automation devices.",
      "Implemented a command-based scripting system for reusable, modular actions.",
      "Built a visual QML workflow interface for editing scripts without code."
    ]
  },
  {
    id: "smart-mfg",
    title: "Smart Manufacturing Platform",
    subtitle: "Industrial Automation",
    year: "2024 - 2025",
    description: "Developed at Delta Electronics, this product is also known as the Rapid Transform Machine (RTM). It is a smart manufacturing platform that enables customers in diverse machining applications to quickly generate machining programs, streamlining the integration of hardware and software.",
    tags: ["C#", ".NET", "API Design"],
    imageUrl: "Mahcine-Control.png",
    links: [
      { label: "News Article", url: "https://www.deltaww.com/en-us/news/39167" }
    ],
    media: [
      { type: 'youtube', url: "Hx2FI22npww", caption: "RTM Short Intro" },
      { type: 'youtube', url: "0XxiHX5WWiw", caption: "RTM Detailed Overview (Chinese)" }
    ],
    details: [
      "Designed enabling customers to generate machining programs rapidly.",
      "Implemented robust design patterns for scalability.",
      "Simplified hardware APIs to streamline third-party integration."
    ]
  },
  {
    id: "dynamic-slam",
    title: "Dynamic SLAM for Teleoperation",
    subtitle: "Computer Vision",
    year: "2021",
    description: "A research project conducted during my Master's at APRILab. This system integrates deep-learning object detection with real-time SLAM to enable robust 3D reconstruction in dynamic settings where moving objects traditionally degrade SLAM performance.",
    tags: ["C++", "Python", "ROS", "Deep Learning", "SLAM", "Computer Vision"],
    imageUrl: "TurtleBot4.jpg",
    links: [
      { label: "APRILab Project Page", url: "https://aprilabntu.wixsite.com/website/immversive-reality" }
    ],
    media: [
      { type: 'youtube', url: "-LHpVEYVkAU", caption: "Dynamic SLAM Demo" }
    ],
    details: [
      "Integrated deep-learning object detection with real-time SLAM.",
      "Evaluated system performance using RealSense RGB-D cameras, demonstrating improved trajectory accuracy.",
      "Solved challenges in dynamic environments using C++ and Python under ROS."
    ]
  }
];
