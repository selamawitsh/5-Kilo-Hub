
import {
    software,
    civil,
    electrical,
    chemical,
    biomedical,
    mechanical,
  } from '../assets/image';
  
  const departments = [
    {
      title: "Software Engineering",
      description: "Software engineers create applications and systems that help users perform tasks more efficiently and effectively.",
      image: software,
      route: "software",
    },
    {
      title: "Civil Engineering",
      description: "Civil engineers design and supervise large-scale construction projects like roads, bridges, and buildings.",
      image: civil,
      route: "civil",
    },
    {
      title: "Electrical Engineering",
      description: "Electrical engineers design, develop, and maintain electrical systems and components for various applications.",
      image: electrical,
      route: "electrical",
    },
    {
      title: "Chemical Engineering",
      description: "They [Chemical engineers] apply principles of chemistry, biology, physics, and mathematics to develop processes and products.",
      image: chemical,
      route: "chemical",
    },
    {
      title: "Biomedical Engineering",
      description: "Biomedical engineers design and create systems, equipment, and devices that directly improve healthcare and quality of life.",
      image: biomedical,
      route: "biomedical",
    },
    {
      title: "Mechanical Engineering",
      description: "Mechanical engineers design and analyze mechanical systems, machines, and tools across various industries.",
      image: mechanical,
      route: "mechanical",
    },
  ];
  
  export default departments;
  
  