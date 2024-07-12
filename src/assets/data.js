/* eslint-disable quotes */
import logo from './logo.webp';
import GraceAdopter from './graceadopter.webp';
import HelloKitchen from './hellokitchen.webp';
import Automation from './automation.webp';
import WFSS from './wfss.webp';

export const jobs = [
  {
    name: 'Citi',
    title: 'Enterprise Operations and Technology Analyst',
    date: 'June 2023 - PRESENT',
    explanation: '',
    description: ["Collaborated with 100+ global IT support teams using ServiceNow to detect, document, and resolve persistent network issues across the international network.","Engineered web-based automation tools for global deployment, specifically for the  Network and Distribution teams in the Global Command Center, resulting in more than a 5% reduction in the daily workload for team analysts.", "Provided Technical Support for Citi's global technology infrastructure by troubleshooting and providing client support for network and infrastructure issues."],
  },
  {
    name: 'edX',
    title: 'Full Stack Software Engineering Bootcamp Instructor',
    date: 'February 2023 - PRESENT',
    explanation:"",
    description: [
      'Mentored students in constructing their own full-stack web applications while delivering guidance and constructive feedback.', 'Led interactive sessions with up to 60 participants, focusing on full-stack software engineering and covered fundamental areas like command line, front-end, back-end development, databases and deployment.','Developed and supervised group projects challenging students to address real-world issues. Advocated for peer-to peer feedback and communication, fostering a collaborative learning environment that cultivated teamwork and effective communication.'
    ],
  },
  {
    name: 'Donald Jones Consulting',
    title: 'General Manager / IT Consultant',
    date: 'September 2021 - June 2023',
    explanation:'',
    description: [
      'Spearheaded process re-engineering initiatives aimed at enhancing and consolidating end-to-end service processes while crafting secure information systems.','Achieved a 45% reduction in paperwork through the creation of Python automation software.','Improved production efficiency by 32% by analyzing and restructuring work procedures.','Boosted facility utilization by 200% through strategic planning and the development of full-stack web applications.'
    ],
  },
  {
    name: 'Trinity Executive Services',
    title: 'Hospital Security Officer',
    date: 'February 2020 - November 2020',
    explanation:
      '',
    description: [
      'Implemented essential security procedures aligned with HIPAA and Joint Commission standards.','Managed secure information systems and assessed team members performance.', 'Decreased physical altercations by 28% amid the COVID pandemic through effective de-escalation methods.'
    ],
  },
  {
    name: 'G3 Construction, inc.',
    title: 'Lead Commercial Foreman',
    date: 'January 2018 - January 2020',
    explanation:'',
    description: [
      'Strategized and assigned tasks to streamline distribution, staffing, and production processes.','Supervised a team comprising carpenters, journeymen, drywall hangers, and labor personnel.', 'Negotiated and finalized general contracts, purchase orders, and subcontract agreements with clients and subcontractors, leveraging strong negotiation and communication abilities.', 'Communicated project specifications ensuring adherence to state and federal regulations.'
    ],
  },
  {
    name: 'United States Marine Corps',
    title: 'Sergeant / Division Lead',
    date: 'December 2010 - January 2018',
    explanation:'',
    description: [
      'Managed the largest program in military aviation, assigning tasks to maintenance crews of up to 60 Marines while inspecting their work to ensure proper repair and maintenance of aircraft',
      'Received two Navy/Marine Corps Achievement Medals in recognition of outstanding leadership, dedication, and attention to detail in managing aircraft maintenance operations.',
      'Trained and mentored maintenance personnel on aircraft maintenance procedures, safety protocols, and best practices while collaborating with engineers and other technical experts to develop solutions for complex aircraft maintenance issues.',
    ],
  },
];

export const schools = [
  {
    name: 'Western Governors University',
    date: 2024,
    certification: 'B.S. Network Engineering and Security',
  },
  {
    name: 'LPI',
    date: 2024,
    certification: 'Linux Essentials'
  },
  {
    name: 'Axelos',
    date: 2024,
    certification: 'ITILv4'
  },
  {
    name: 'CompTIA',
    date: 2024,
    certification: 'A+ Certification',
  },
  {
    name: 'CompTIA',
    date: 2023,
    certification: 'ITF+ Certification',
  },
  {
    name: 'Embry-Riddle Aeronautical University',
    date: 2023,
    certification: 'A.S. Engineering',
  },
  {
    name: 'Fullstack Academy',
    date: 2022,
    certification: 'Full Stack Software Engineer',
  },
  {
    name: 'Amazon Web Services',
    date: 2022,
    certification: 'AWS Cloud Practitioner',
  },
];

export const contact = [
  {
    name: 'Phone Number',
    value: '(317) 361-2543',
    picture: logo,
  },
  {
    name: 'Email Address',
    value: 'parzidog@icloud.com',
  },
  {
    name: 'Github',
    value: 'https://www.github.com/parzidog',
  },
  {
    name: 'Linkedin',
    value: 'https://www.linkedin.com/in/parzidog',
  },
];

export const projects = [
  {
    name: 'This Website',
    url: '',
    picture: logo,
    repo: 'https://www.github.com/parzidog/portfolio',
    description:
      'This website is a top of the line, full stack, single page application that is built with React, Node, Express, and PostgreSQL. The object of this website is to be simple while still displaying some of my abilities as a software engineer. It is fully responsive and is hosted on Heroku. I am continually adding new features and improving the user experience. I plan to migrate this website to AWS in the near future.',
  },
  {
    name: 'Hello Kitchen',
    url: 'https://rowlf.herokuapp.com/',
    picture: HelloKitchen,
    repo: 'https://github.com/Team-Rowlf/Rowlf',
    description:
      'Hello Kitchen aids a user in selecting meals and purchasing the necessary ingredients to make those meals. It implements a simple, feature rich single page application model with nested routes for quick,concise load times while still integrating Amazon Fresh ordering and Google Maps / Places to list nearby stores for purchasing items. This project was built with React, Redux, Express, Sequelize, and PostgreSQL. While building this application, I expanded my knowledge in the importance of single page applications and how to implement them in a way that is both user friendly and efficient.',
  },
  {
    name: 'Grace Adopter',
    url: 'https://grace-adopter.herokuapp.com',
    picture: GraceAdopter,
    repo: 'https://github.com/team-johnny-bravo/grace-adopter',
    description:
      "Grace Adopter is a mock up site for a pet adoption agency that aims to help lonely pets find their FurEver home. It is built using JavaScript's REACT framework on the front-end and PostgreSQL on the back-end. This project is an example of a quick yet scale-able project as it went from planning to deployment in a single week. The quick turn around of this project helped me to solidify my understanding of the importance of a proper Git workflow and the importance of planning and communication in a team environment.",
  },
  {
    name: 'Python Web Automation',
    url: '',
    picture: Automation,
    repo: '',
    description:
      'This is a simple web automation application using Python that I built to help streamline on-site visits by the Chief of Operations. Upon entry to a facility, the Chief of Operations will log into and open the application. Once the application is open, she will then select which facility she is at. Upon her selection, the application will log her into her account and simultaneously download a series of reports and display them on the screen with the option to select a physical printer to send them to. As this is a professional project with sensitive data, I am unable to share the source code or provide access to the application. While this project is not a full stack application, it does demonstrate my ability to learn new technologies and implement them in a way that is both efficient and effective.',
  },
  {
    name: 'WF Self Storage',
    url: 'https://wfss-website.herokuapp.com/',
    picture: WFSS,
    repo: '',
    description:
      'This website is designed as a full stack, data driven, single page application that is built with React, Node, Express, and PostgreSQL adn is currently in use by the Wichita Falls Self Storage facility in Wichita Falls, Texas. This project helped to solidy my understanding of a single page application that can be reconfigured for various clients based on the data that I am given. Do to the sensitive nature of the data, I am unable to share the source code, but I am able to provide access to the application. If you would like to see the application, please follow the link provided on the icon above.',
  },
];
