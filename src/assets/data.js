import logo from "./logo.webp";
import GraceAdopter from "./graceadopter.webp";
import HelloKitchen from "./hellokitchen.webp";
import Automation from "./automation.webp"
import WFSS from "./wfss.webp"

export const jobs = [
  {
    name: "Donald Jones Consulting",
    title: "General Manager / IT Consultant",
    date: "September 2021 - PRESENT",
    explanation: "Managed process re-engineering projects to improve and consolidate end-to-end service processes. Administered and controlled release of proprietary information by developing and maintaining secure information systems. Promoted to Lead IT Consultant for developing solid understanding of full-stack software development.",
    description: [
      "Reduced 45% of paperwork by developing Python automation software and restructuring communication flow across 28 facilities.",
      "Optimized 32% production efficiency by analyzing and restructuring work procedures for Chief of Operations.",
      "Enhanced facility utilization by 200% through efficient planning, full stack web application development and successful implementation of facility goals within defined budget constraints.",
    ],
  },
  {
    name: "Trinity Executive Services",
    title: "Hospital Security Officer",
    date: "February 2020 - November 2020",
    explanation: "Executed necessary security protocols for ensuring adherence to HIPAA and Joint Commission standards while protecting doctors, nurses and patients of facility. Oversaw end-to-end aspects involved in release of proprietary information by organizing secure information systems. Evaluated development and effectiveness of subordinates while strengthening overall team development.",
    description: [
      "Determined and employed appropriate de-escalation techniques to minimize physical confrontations by 28% during unprecedented times of COVID pandemic.",
      "Controlled the release of proprietary information by organizing and developing secure information systems.",
      "Assessed the development and effectiveness of subordinates while cultivating the strengths of individuals within the team.",
    ],
  },
  {
    name: "G3 Construction, inc.",
    title: "Lead Commercial Foreman",
    date: "January 2018 - January 2020",
    explanation: "Planned and delegated workflow to staff members for attaining optimal levels of distribution, staffing, and production while consistently meeting deadlines, achieving quality objectives, and establishing inter-trade relations. Monitored and supervised routine responsibilities to ensure quality and conformity with contract. Conveyed project specifications in line with established state and federal guidelines. ",
    description: [
      "Administered team of 10 individuals, comprising carpenters, journeymen, drywall hangers, and labor personnel.",
      "Utilized exceptional negotiation and communication skills for closing general contracts, purchase orders, and subcontract agreements with clients and subcontractors.",
    ],
  },
  {
    name: "United States Marine Corps",
    title: "Sergeant / Division Lead",
    date: "December 2010 - January 2018",
    explanation: "Engineered and reconstructed operational readiness standards for maintaining a combat ready squadron of F/A-18 and F-35 fighter jets. Delegated and supervised large maintenance teams while answering to the highest levels of command. Cultivated an environment that encouraged organizational readiness and individual mental health awareness.",
    description: [
      "Utilized a Top Secret security clearance from 2012 – 2018.",
      "Overcame seemingly insurmountable odds to maintain operational readiness on 2 separate occasions, resulting in being awarded two Navy and Marine Corps Achievement medals.",
      "Re-engineered the technological documentation process for the largest program in military aviation in order to improve document access and storage by 86% while removing the time needed for project management by 79%.",
      "Cultivated an environment that encouraged organizational readiness and individual mental health awareness.",
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
    repo: "",
    description: "This is a simple web automation application using Python that I built to help streamline on-site visits by the Chief of Operations. Upon entry to a facility, the Chief of Operations will log into and open the application. Once the application is open, she will then select which facility she is at. Upon her selection, the application will log her into her account and simultaneously download a series of reports and display them on the screen with the option to select a physical printer to send them to. As this is a professional project with sensitive data, I am unable to share the source code or provide access to the application. While this project is not a full stack application, it does demonstrate my ability to learn new technologies and implement them in a way that is both efficient and effective."
  },
  {
    name: "WF Self Storage",
    url: "https://wfss-website.herokuapp.com/",
    picture: WFSS,
    repo: "",
    description: "This website is designed as a full stack, data driven, single page application that is built with React, Node, Express, and PostgreSQL adn is currently in use by the Wichita Falls Self Storage facility in Wichita Falls, Texas. This project helped to solidy my understanding of a single page application that can be reconfigured for various clients based on the data that I am given. Do to the sensitive nature of the data, I am unable to share the source code, but I am able to provide access to the application. If you would like to see the application, please follow the link provided on the icon above."
  },
];
