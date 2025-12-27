import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Âu Tiến Dũng",
  initials: "DA",
  location: "Hanoi, Vietnam",
  locationLink: "https://www.google.com/maps/place/Hanoi,+Vietnam/",
  about:
    "Software Engineer with 5+ years of experience in building web applications. I am a fast learner and I am always eager to learn new things. I am familiar with cloud services like Azure, AWS. I also have experience in DevOps - CI/CD using Azure Pipelines, build on premises kubernetes clusters",
  summary:
    "As a Full Stack Engineer, I have experience in building web and some Devops process.",
  avatarUrl:
    "/avatar.jpeg",
  personalWebsiteUrl: "https://dungat.com/",
  contact: {
    email: "dungat98@gmail.com",
    tel: "+84373885645",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dungat98",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%C3%A2u-ti%E1%BA%BFn-d%C5%A9ng-72ba44231/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Github Copilot Hackathon",
      degree: "The fastest coder in Github Copilot Hackathon",
      start: "March 2024",
      end: "March 2024",
    },
    {
      school: "Water Resources University",
      degree: "Bachelor's Degree",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "CoverGo",
      link: "https://www.covergo.com/",
      badges: ["Insurtech", "Fullstack"],
      title: "Full Stack Developer",
      start: "July 2025",
      end: "Now",
      description:
        "Building and maintaining CoverGo's award-winning no-code insurance platform. Developing microservices using .NET Core with MongoDB for data persistence. Creating frontend features with Vue.js for policy administration and claims management modules. Implementing monitoring and observability solutions with Grafana. Deploying and orchestrating services on Kubernetes clusters.",
    },
    {
      company: "CMC Global",
      link: "https://cmcglobal.com.vn/",
      badges: ["Software", "Fullstack"],
      title: "Fullstack Backend .NET Developer",
      start: "2021",
      end: "June 2025",
      description:
        "Crafts comprehensive web applications utilizing modern technologies. Builds interactive UIs with React or Angular and integrates them with robust, scalable APIs on .NET Core. Optimizes application deployment and performance using cloud services like Azure and AWS. Implements CI/CD pipelines for automated testing and deployment. Collaborates with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      company: "FPT Software",
      link: "https://fptsoftware.com/",
      badges: ["Software", "Backend"],
      title: "Backend .NET Developer",
      start: "2020",
      end: "2021",
      description:
        "Crafts server-side solutions and APIs for web applications using ASP.NET and C#. Experienced in building scalable and secure applications with a focus on performance and maintainability. And also do some basic things in Frontend using Angular",
    },
  ],
  skills: [
    ".NET",
    ".NET Core",
    ".NET Framework",
    "ASP.NET",
    "ASP.NET Core",
    "ASP.NET Core MVC",
    "ASP.NET Core WebAPI",
    "SQL Server",
    "PostgreSQL",
    "Entity Framework",
    "Entity Framework Core",
    "Typescript",
    "Angular",
    "React",
    "Gatsby",
    "FluentUI",
    "Sharepoint",
    "Sharepoint Framework",
    "Dapper",
    "Docker",
    "Kubernetes",
    "Azure",
    "AWS",
    "CI/CD",
    "Azure DevOps",
    "Git",
    "GitFlow",
    "Scrum",
    "Agile",
    "JIRA",
    "Confluence",
  ],
  projects: [
    {
      title: "CoverGo Insurance Platform",
      techStack: [
        ".NET Core",
        "Vue.js",
        "MongoDB",
        "Microservices",
        "Kubernetes",
        "Grafana",
        "Docker",
        "REST API",
      ],
      description:
        "Contributed to CoverGo's award-winning no-code insurance platform serving insurers globally. Built and maintained microservices using .NET Core with MongoDB for data persistence. Developed frontend features with Vue.js for the policy administration and claims management modules. Implemented monitoring dashboards with Grafana for system observability. Deployed and orchestrated services on Kubernetes clusters ensuring high availability and scalability.",
      link: {
        label: "CoverGo",
        href: "https://www.covergo.com/",
      },
    },
    {
      title: "Tally Candi Portal",
      techStack: [
        "Blazor WebAssembly",
        "Azure",
        "Azure Functions",
        "Durable Functions",
        "Azure Service Bus",
      ],
      description:
          "A portal to help users to visualize the electrical data in each sites. For the long running process, it uses Azure Durable Functions to do the job. The application is built with Blazor WebAssembly and deployed on Azure",
      link: {
        label: "Candi Portal",
        href: "#",
      },
    },
    {
      title: "Finance Management System",
      techStack: ["Sharepoint Framework", "SharePoint OnPremises", "FluentUI"],
      description:
        "A web application that helps users to create invoice to claim their money. It used the sharepoint workflow to do the business process. The application is built with Sharepoint Framework and deployed on Sharepoint Server Subscription Edition.",
      link: {
        label: "Finance Management System",
        href: "#",
      },
    },
    {
      title: "Digital Innovation",
      techStack: [
        "ASP.NET Core WebAPI",
        "ReactJS",
        "FluentUI",
        "Microsoft Dynamics 365",
        "Azure",
        "Azure Functions",
      ],
      description:
        "A web application that helps users to setup automation tasks for their business. The process will depends on data in Microsoft Dynamics 365 and do the workflows. The application is built with a microservices architecture and deployed on Azure. It uses Azure DevOps for CI/CD pipelines.",
      link: {
        label: "Digital Innovation",
        href: "#",
      },
    },
    {
      title: "Landing Website",
      techStack: [
        "Gatsby",
        "ReactJS",
        "ASP.NET Core WebAPI",
        "Azure",
        "Azure Static Webapps",
      ],
      description:
        "A landing website that helps users to know about the company and the services. The application is built with Gatsby and deployed on Azure. It uses Azure DevOps for CI/CD pipelines.",
      link: {
        label: "Landing Website",
        href: "#",
      },
    },
    {
      title: "Paymaya",
      techStack: ["Azure", "Azure Functions", "Microsoft Dynamics 365"],
      description:
        "A azure function to do the ETL process from excel file to Microsoft Dynamics 365. The application is built with Azure Functions and deployed on Azure.",
      link: {
        label: "Paymaya",
        href: "#",
      },
    },
  ],
} as const;
