import p1 from "../assets/images/mypic.jpg";
import p2 from "../assets/images/lanadelrey.jpg";
import p3 from "../assets/images/mypic.jpg";
import p4 from "../assets/images/lanadelrey.jpg";
export const copy = {
  en: {
    brand: "Seum Sokneth",
    role: "React and Java Developer",
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      certificates: "Certificates",
      about: "About",
      contact: "Contact",
    },
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
    sourceCodeLabel: "View source code",
    projectsLabel: "Selected Work",
    certificatesLabel: "Credentials",
    skillsTitle: "Skills I use to build practical web apps",
    projectsTitle: "Projects that show both frontend and backend foundation",
    certificatesTitle: "Certificates that support my developer path",
    contactTitle: "Let's build something useful",
    contactText:
      "Open to freelance work, internships, and junior developer roles focused on React, Spring Boot, and product development.",
    location: "Based in Cambodia, available remotely",
    email: "Email",
    focus: "Focus",
    focusText: "React UI, REST API, Java backend",
    footer: "Portfolio for Seum Sokneth",
  },
  km: {
    brand: "Seum Sokneth",
    role: "អ្នកអភិវឌ្ឍន៍ React និង Java",
    nav: {
      home: "ទំព័រដើម",
      skills: "ជំនាញ",
      projects: "គម្រោង",
      certificates: "Certificates",
      about: "អំពីខ្ញុំ",
      contact: "ទំនាក់ទំនង",
    },
    ctaPrimary: "មើលគម្រោង",
    ctaSecondary: "ទាក់ទងខ្ញុំ",
    sourceCodeLabel: "មើលកូដប្រភព",
    projectsLabel: "គម្រោងសំខាន់ៗ",
    certificatesLabel: "Certificates",
    skillsTitle: "ជំនាញដែលខ្ញុំប្រើសម្រាប់បង្កើត web apps",
    projectsTitle: "គម្រោងដែលបង្ហាញពីមូលដ្ឋាន frontend និង backend",
    certificatesTitle: "Certificates that support my developer path",
    contactTitle: "តោះបង្កើតអ្វីមួយដែលមានប្រយោជន៍",
    contactText:
      "បើកទទួលការងារ freelance, internship និង junior developer roles ដែលផ្តោតលើ React, Spring Boot និង product development។",
    location: "ស្ថិតនៅកម្ពុជា និងអាចធ្វើការពីចម្ងាយ",
    email: "អ៊ីមែល",
    focus: "ជំនាញផ្តោត",
    focusText: "React UI, REST API, Java backend",
    footer: "ផតថលីយ៉ូរបស់ Seum Sokneth",
  },
};

export const certificates = {
  en: [
    {
      title: "Internship Front-End Development",
      issuer: "Online Learning",
      image: p3,
      year: "2026",
      status: "Completed",
     
    },
    {
      title: "Back-End Development",
      issuer: "University Coursework",
      image:
        "https://i.pinimg.com/736x/bd/6a/fc/bd6afccec721e72fb04ceef504929828.jpg",
      year: "2025",
      status: "Completed",
     
    },
    {
      title: "Front-End Web Design Essentials",
      issuer: "Self-Study",
      image: p2,
      year: "2025",
      status: "Completed",
      
    },
    {
      title: "Ui/UX Design and Prototyping",
      issuer: "Practice Projects",
      image: p4,
      year: "2025",
      status: "In Progress",
     
    },
    {
      title: "Hight School Diploma",
      issuer: "Practice Projects",
      image: p1,
      year: "2025",
      status: "In Progress",
      
    },
  ],
  km: [
    {
      title: "Internship in React Front-End Development",
      issuer: "Online Learning",
      image: p3,
      year: "2026",
      status: "Completed",
      focus: "Components, hooks, state, responsive UI",
    },
    {
      title: "Back-End Development with Java and Spring Boot",
      issuer: "University Coursework",
      image:
        "https://i.pinimg.com/736x/bd/6a/fc/bd6afccec721e72fb04ceef504929828.jpg",
      year: "2025",
      status: "Completed",
      focus: "OOP, collections, control flow, problem solving",
    },
    {
      title: "Front-End Web Design Essentials",
      issuer: "Self-Study",
      image: p2,
      year: "2025",
      status: "Completed",
      focus: "React.js, JavaScript, HTML, CSS, Tailwind CSS, layout systems",
    },
    {
      title: "Ui/UX Design and Prototyping",
      issuer: "Practice Projects",
      image: p4,
      year: "2025",
      status: "In Progress",
      focus:
        "User interface design, prototyping, wireframing, usability testing",
    },
    {
      title: "Hight School Diploma",
      issuer: "Practice Projects",
      image: p1,
      year: "2025",
      status: "In Progress",
      focus:
        "User interface design, prototyping, wireframing, usability testing",
    },
  ],
};

export const skills = {
  en: {
    groups: [
      {
        id: "frontend",
        title: "Front-End",
        icon: "</>",
        items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap"],
        barsTitle: "Front-End",
        bars: [
          { name: "HTML5", level: 95 },
          { name: "CSS3", level: 85 },
          { name: "Bootstrap", level: 80 },
          { name: "Tailwind CSS", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "React.js", level: 80 },
        ],
      },
      {
        id: "backend",
        title: "Back-End",
        icon: "{ }",
        items: ["Java", "Spring Boot", "REST API", "MySQL", "PostgreSQL", "PHP", "Laravel"],
        barsTitle: "Back-End",
        bars: [
          { name: "Java", level: 90 },
          { name: "Spring Boot", level: 88 },
          { name: "REST API", level: 86 },
          { name: "MySQL", level: 90 },
          { name: "PostgreSQL", level: 80 },
          { name: "PHP", level: 78 },
          { name: "Laravel", level: 90 },
        ],
      },
      {
        id: "programming",
        title: "Programming",
        icon: "://",
        items: ["C", "C++", "Java", "JavaScript", "OOP"],
        barsTitle: "Programming",
        bars: [
          { name: "C", level: 76 },
          { name: "C++", level: 74 },
          { name: "Java", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "OOP", level: 86 },
        ],
      },
      {
        id: "tools",
        title: "Tools",
        icon: "[~]",
        items: ["Git", "GitHub", "VS Code", "Docker", "Figma"],
        barsTitle: "Tools",
        bars: [
          { name: "Git", level: 85 },
          { name: "GitHub", level: 84 },
          { name: "VS Code", level: 90 },
          { name: "Figma", level: 85 },
        ],
      },
    ],
  },
  km: {
    groups: [
      {
        id: "frontend",
        title: "ផ្នែកខាងមុខ",
        icon: "</>",
        items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap"],
        barsTitle: "ផ្នែកខាងមុខ",
        bars: [
          { name: "HTML5", level: 95 },
          { name: "CSS3", level: 90 },
          { name: "Bootstrap", level: 90 },
          { name: "Tailwind CSS", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "React.js", level: 85 },
        ],
      },
      {
        id: "backend",
        title: "ផ្នែកខាងក្រោយ",
        icon: "{ }",
        items: ["Java", "Spring Boot", "REST API", "PostgreSQL", "MySQL", "PHP", "Laravel"],
        barsTitle: "ផ្នែកខាងក្រោយ",
        bars: [
          { name: "Java", level: 90 },
          { name: "Spring Boot", level: 88 },
          { name: "REST API", level: 86 },
          { name: "MySQL", level: 82 },
          { name: "PostgreSQL", level: 80 },
          { name: "PHP", level: 78 },
          { name: "Laravel", level: 90 },
        ],
      },
      {
        id: "programming",
        title: "ភាសាកម្មវិធី",
        icon: "://",
        items: ["C", "C++", "Java", "JavaScript", "OOP"],
        barsTitle: "ភាសាកម្មវិធី",
        bars: [
          { name: "C", level: 76 },
          { name: "C++", level: 74 },
          { name: "Java", level: 88 },
          { name: "JavaScript", level: 85 },
          { name: "OOP", level: 86 },
        ],
      },
      {
        id: "tools",
        title: "ឧបករណ៍",
        icon: "[~]",
        items: ["Git", "GitHub", "VS Code", "Docker", "Figma"],
        barsTitle: "ឧបករណ៍",
        bars: [
          { name: "Git", level: 85 },
          { name: "GitHub", level: 84 },
          { name: "VS Code", level: 92 },
          { name: "Figma", level: 85 },
        ],
      },
    ],
  },
};

export const projects = {
  en: [
    
    {
      name: "Student Attendance System",
      type: "React.js + Spring Boot",
      link: "https://seum-sokneth.github.io/System_Attendance/#/login",
      sourceCode: "https://github.com/Seum-Sokneth/System_Attendance",
      description:
        "A backend service for managing student data with CRUD endpoints, validation, and PostgreSQL persistence.",
    },
 
  ],
  km: [
    {
      name: "Student Attendance System",
      type: "React.js + Spring Boot",
      link: "https://minet2943-byte.github.io/System_Attendance/#/login",
      sourceCode: "https://github.com/minet2943-byte/System_Attendance",
      description:
        "សេវា backend សម្រាប់គ្រប់គ្រងទិន្នន័យសិស្ស ជាមួយ CRUD endpoints, validation និង PostgreSQL។",
    },
   
  ],
};
