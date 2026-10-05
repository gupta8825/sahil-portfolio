export const portfolioData = {
  name: 'Sahil Gupta',
  role: 'MERN Stack Full Stack Developer',
  tagline:
    'I build responsive, dynamic, and scalable web applications with MongoDB, Express.js, React, and Node.js — focused on clean code and great user experience.',
  email: 'sahilgupta8825@gmail.com',
  phone: '+91 88252 60192',
  location: 'Roorkee, Uttarakhand, India',
  github: 'https://github.com/gupta8825',
  linkedin: 'https://www.linkedin.com/in/sahil-gupta-744a09302/',
  resumePath: '/Sahil-Gupta-Resume.pdf',

  about: {
    intro:
      'I am a MERN Stack Web Developer proficient in MongoDB, Express.js, React, and Node.js, with a B.Tech in Computer Science Engineering (AI-ML) from Uttrakhand Technical University.',
    body:
      'I enjoy turning ideas into full-stack products — from designing clean, responsive interfaces to building robust REST APIs and integrating third-party services like AI, OAuth, and payments. I care about clean code, attention to detail, and continuous learning.',
    highlights: [
      'Full-stack MERN development',
      'RESTful API design',
      'Responsive UI engineering',
      'AI-integrated web apps',
    ],
  },

  skills: [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'Python', 'Java', 'C++'],
    },
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Redux Toolkit', 'React Router'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
    },
    {
      category: 'Database',
      items: ['MongoDB', 'Mongoose', 'MySQL'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel'],
    },
  ],

  projects: [
    {
      title: 'AI Interview Agent',
      stack: 'MERN Stack',
      date: 'June 2025',
      description:
        'An AI-powered interview platform that allows users to upload their resume, select a job role and experience level, generate interview questions, conduct interviews and receive performance feedback.',
      tech: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'OpenRouter'],
      frontend: {
        technologies: ['React.js', 'Vite', 'JavaScript', 'CSS/Tailwind CSS'],
        github: 'https://github.com/gupta8825/ai-interview-agent',
        live: 'https://ai-interview-agent-coral.vercel.app/',
      },
      backend: {
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'JWT', 'OpenRouter'],
        github: 'https://github.com/gupta8825/ai-interview-agent-backend',
      },
      github: 'https://github.com/gupta8825/ai-interview-agent',
      live: 'https://ai-interview-agent-coral.vercel.app/',
      icon: 'robot',
    },
    {
      title: 'E-commerce Website',
      stack: 'MERN Stack',
      date: 'July 2024',
      description:
        'A full-stack e-commerce application with user authentication, a product catalog, shopping cart, and secure checkout. Responsive UI across devices, with RESTful APIs for product management and order processing.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs'],
      github: 'https://github.com/gupta8825',
      live: null,
      icon: 'store',
    },
  ],

  education: [
    {
      degree: 'B.Tech in Computer Science Engineering (AI-ML)',
      institution: 'Uttrakhand Technical University',
      location: 'Roorkee, Uttarakhand',
      period: 'Sep 2022 – July 2026',
    },
  ],

  training: [
    {
      title: 'IBM Training — Data Science',
      role: 'Software Engineer Intern',
      location: 'Roorkee, Uttarakhand',
      period: 'April 2023',
      points: [
        'Completed IBM Training in Data Science with hands-on project experience.',
        'Worked with Python libraries NumPy, Pandas, Matplotlib, and Scikit-learn.',
        'Performed data analysis, visualization, and machine learning model building.',
        'Gained practical experience solving real-world classification and prediction problems.',
      ],
    },
  ],

  certifications: [
    {
      title: 'Python 101 for Data Science',
      courseCode: 'PY0101EN',
      provider: 'IBM Developer Skills Network',
      issuedBy: 'Etrain Education',
      recipient: 'Sahil Gupta',
      date: 'April 21, 2023',
      certificateId: '60b3a5f185b5437d85eb08f6adc479a9',
      verifyUrl:
        'https://courses.etrain.skillsnetwork.site/certificates/60b3a5f185b5437d85eb08f6adc479a9',
      file: '/certificates/IBM-Python-101-Data-Science-Certificate.pdf',
    },
  ],

  softSkills: [
    'Strong communication and team collaboration',
    'Problem-solving with critical thinking',
    'Highly adaptable, quick to learn new tools',
    'Time management and attention to detail',
  ],

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Education', href: '#education' },
    { label: 'Training', href: '#training' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Contact', href: '#contact' },
  ],
}
