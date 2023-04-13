/* eslint-disable quotes */
import logo from './logo.webp';
import GraceAdopter from './graceadopter.webp';
import HelloKitchen from './hellokitchen.webp';
import Automation from './automation.webp';
import WFSS from './wfss.webp';

export const jobs = [
  {
    name: 'Guidewell Blue Cross Blue Shield',
    title: 'Full Stack Software Engineer',
    date: 'April 2023 - PRESENT',
    explanation:
      'Develop and test full stack web applications using ReactJS, Redux, D3 and NodeJS. Documented detailed system specifications, participate in unit testing and maintenance of planned and unplanned internally developed applications, evaluation and performance testing of purchased products.',
    description: [
      'Included numerous IT security controls to protect proprietary applications, customer information and application availability.',
    ],
  },
  {
    name: 'edX',
    title: 'Full Stack Software Engineering Bootcamp Instructor',
    date: 'February 2023 - PRESENT',
    explanation:
      "Guided students through building their own full-stack web applications, providing support and feedback along the way. Equipped students with the skills and knowledge needed to succeed as software engineers in today's fast-paced tech industry.",
    description: [
      'Conducted interactive sessions of up to 60 students on full - stack software engineering, covering essential topics such as front - end and back - end development, databases, and deployment while employing visual aids, real- world examples, and practical exercises to ensure that students grasped the concepts thoroughly.',
      'Designed and moderated group projects that challenged students to apply their skills to real-world problems. Encouraged peer-to-peer feedback and communication, fostering a collaborative learning environment that encouraged students to develop their teamwork and communication skills.',
    ],
  },
  {
    name: 'Donald Jones Consulting',
    title: 'General Manager / IT Consultant',
    date: 'September 2021 - PRESENT',
    explanation:
      'Managed process re-engineering projects to improve and consolidate end-to-end service processes. Administered and controlled release of proprietary information by developing and maintaining secure information systems. Promoted to Lead IT Consultant for developing solid understanding of full-stack software development.',
    description: [
      'Architected and developed multiple full-stack web applications utilizing React, Node.js and SQL, implementing complex data structures and integrated APIs to enable seamless data exchange.',
      'Reduced 45% of paperwork by developing Python automation software and restructuring communication flow across 28 facilities.',
    ],
  },
  {
    name: 'Trinity Executive Services',
    title: 'Hospital Security Officer',
    date: 'February 2020 - November 2020',
    explanation:
      'Executed necessary security protocols for ensuring adherence to HIPAA and Joint Commission standards while protecting doctors, nurses and patients of facility. Oversaw end-to-end aspects involved in release of proprietary information by organizing secure information systems. Evaluated development and effectiveness of subordinates while strengthening overall team development.',
    description: [
      'Responded to emergency situations and disturbances within the hospital, coordinating with law enforcement and medical staff to ensure swift and effective resolution while minimizing the risk of virus transmission.',
      'Controlled the release of proprietary information by organizing and developing secure information systems.',
      'Monitored and patrolled hospital premises to maintain order and safety, preventing unauthorized access and ensuring compliance with social distancing and PPE requirements.',
    ],
  },
  {
    name: 'G3 Construction, inc.',
    title: 'Lead Commercial Foreman',
    date: 'January 2018 - January 2020',
    explanation:
      'Planned and delegated workflow to staff members for attaining optimal levels of distribution, staffing, and production while consistently meeting deadlines, achieving quality objectives, and establishing inter-trade relations. Monitored and supervised routine responsibilities to ensure quality and conformity with contract. Conveyed project specifications in line with established state and federal guidelines. ',
    description: [
      'Administered team of 10 individuals, comprising carpenters, journeymen, drywall hangers, and labor personnel.',
      'Utilized exceptional negotiation and communication skills for closing general contracts, purchase orders, and subcontract agreements with clients and subcontractors.',
    ],
  },
  {
    name: 'United States Marine Corps',
    title: 'Sergeant / Division Lead',
    date: 'December 2010 - January 2018',
    explanation:
      'Led a team of aircraft maintenance personnel in conducting scheduled and unscheduled maintenance on a fleet of aircraft. Oversaw all aspects of maintenance operations, including maintenance planning, resource allocation, and quality control. Coordinated with other departments to ensure smooth and efficient operations, while adhering to industry regulations and safety standards.',
    description: [
      'Managed the largest program in military aviation, assigning tasks to maintenance crews of up to 60 Marines while inspecting their work to ensure proper repair and maintenance of aircraft',
      'Received two Navy/Marine Corps Achievement Medals in recognition of outstanding leadership, dedication, and attention to detail in managing aircraft maintenance operations.',
      'Trained and mentored maintenance personnel on aircraft maintenance procedures, safety protocols, and best practices while collaborating with engineers and other technical experts to develop solutions for complex aircraft maintenance issues.',
    ],
  },
];

export const schools = [
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
