import logo from "./logo.webp";
import GraceAdopter from "./graceadopter.webp";
import HelloKitchen from "./hellokitchen.webp";
import Automation from "./automation.webp"

export const jobs = [
  {
    name: "Donald Jones Consulting",
    title: "General Manager / IT Consultant",
    date: "September 2021 - PRESENT",
    description: [
      "Managed a process re-engineering project to improve and consolidate end-to-end service processes.",
      "Restructured communication flow among 28 facilities and cut down paperwork by 45%.",
      "Controlled the release of proprietary information by organizing and developing secure information systems.",
      "Analyzed and adjusted work procedures for the chief of operations that maximized production efficiency by 32%.",
      "Planned, set and implemented facility goals while maintaining budget standards which led to a 1200% increase in facility utilization.",
    ],
  },
  {
    name: "Trinity Executive Services",
    title: "Hospital Security Officer",
    date: "February 2020 - November 2020",
    description: [
      "Implemented effective deescalation techniques that lowered the number of physical confrontations by 28% during the height of the COVID pandemic.",
      "Coordinated security protocols to comply with both HIPAA and Joint Commission standards while protecting the doctors, nurses and patients of the facility.",
      "Controlled the release of proprietary information by organizing and developing secure information systems.",
      "Assessed the development and effectiveness of subordinates while cultivating the strengths of individuals within the team.",
    ],
  },
  {
    name: "G3 Construction, inc.",
    title: "Lead Commercial Foreman",
    date: "January 2018 - January 2020",
    description: [
      "Planned, scheduled and assigned work for optimal distribution, staffing and production; consistently achieved deadlines, quality control goals, and produced quality inter-trade relations.",
      "Negotiated general contracts, purchase orders and subcontract agreements with clients and subcontractors.",
      "Supervised crews of up to 10 carpenters, journeymen, drywall hangers, and general labor personnel.",
      "Inspected work in progress to ensure quality and conformity to contract and drawing specifications in accordance with state and federal guidelines.",
    ],
  },
  {
    name: "United States Marine Corps",
    title: "Sergeant / Division Lead",
    date: "December 2010 - January 2018",
    description: [
      "Held a Top Secret security clearance from 2012 – 2018.",
      "Overcame seemingly insurmountable odds to attain operational readiness on 2 separate occasions, resulting in being awarded two Navy and Marine Corps Achievement medals.",
      "Re-engineered the technological documentation process for the largest program in military aviation in order to improve document access and storage by 86% while removing the time needed for project management by 79%.",
      "Cultivated an environment that encourages organizational readiness and individual mental health awareness.",
      "Supervised and commanded maintenance teams of up to 65 Marines in high stress combat situations while maintaining a professional, combat ready squadron of F/A-18 and F-35 fighter jets.",
    ],
  },
];

export const schools = [
  {
    name: "Amazon Web Services",
    date: 2022,
    certification: "AWS Cloud Practitioner",
  },
  {
    name: "Fullstack Academy",
    date: 2022,
    certification: "Full Stack Software Engineer",
  },
  {
    name: "Embry-Riddle Aeronautical University",
    date: 2023,
    certification: "A.S. Engineering",
  },
];

export const contact = [
  {
    name: "Phone Number",
    value: "(317) 361-2543",
    picture: logo,
  },
  {
    name: "Email Address",
    value: "parzidog@icloud.com",
  },
  {
    name: "Github",
    value: "https://www.github.com/parzidog",
  },
  {
    name: "Linkedin",
    value: "https://www.linkedin.com/in/parzidog",
  },
];

export const projects = [
  {
    name: "This Website",
    url: "https://www.parzidog.com",
    picture: logo,
    repo: "https://www.github.com/parzidog/portfolio",
    description: "This website is a top of the line, full stack, single page application that is built with React, Node, Express, and PostgreSQL. The object of this website is to be simple while still displaying some of my abilities as a software engineer. It is fully responsive and is hosted on Heroku. I am continually adding new features and improving the user experience. I plan to migrate this website to AWS in the near future.",
  },
  {
    name: "Hello Kitchen",
    url: "https://rowlf.herokuapp.com/",
    picture: HelloKitchen,
    repo: "https://github.com/Team-Rowlf/Rowlf",
    description: "Hello Kitchen aids a user in selecting meals and purchasing the necessary ingredients to make those meals. It implements a simple, feature rich single page application model with nested routes for quick,concise load times while still integrating Amazon Fresh ordering and Google Maps / Places to list nearby stores for purchasing items. This project was built with React, Redux, Express, Sequelize, and PostgreSQL. While building this application, I expanded my knowledge in the importance of single page applications and how to implement them in a way that is both user friendly and efficient.",
  },
  {
    name: "Grace Adopter",
    url: "https://grace-adopter.herokuapp.com",
    picture: GraceAdopter,
    repo: "https://github.com/team-johnny-bravo/grace-adopter",
    description: "Grace Adopter is a mock up site for a pet adoption agency that aims to help lonely pets find their FurEver home. It is built using JavaScript's REACT framework on the front-end and PostgreSQL on the back-end. This project is an example of a quick yet scale-able project as it went from planning to deployment in a single week. The quick turn around of this project helped me to solidify my understanding of the importance of a proper Git workflow and the importance of planning and communication in a team environment."
  },
  {
    name: "Python Web Automation",
    url: "",
    picture: Automation,
    repo: "https://github.com/parzidog/automation",
    description: "This is a simple web automation application using Python that I built to help streamline on-site visits by the Chief of Operations. Upon entry to a facility, the Chief of Operations will log into and open the application. Once the application is open, she will then select which facility she is at. Upon her selection, the application will log her into her account and simultaneously download a series of reports and display them on the screen with the option to select a physical printer to send them to. As this is a professional project with sensitive data, I am unable to share the source code or provide access to the application. While this project is not a full stack application, it does demonstrate my ability to learn new technologies and implement them in a way that is both efficient and effective."
  },
];
