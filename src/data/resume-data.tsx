import { Openpesa } from "@/images/logos";
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
    "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/433483096_7389763477733727_3999726693592184513_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH8S5l4bg3mmsbk9TjE6MiuBsoF-JlcM14GygX4mVwzXgb4dNKd_IyDtEZSe8QtIGEW1nIwkdb7Z8oHaVkpogXV&_nc_ohc=fh24nmEmNoYQ7kNvgF44rmK&_nc_ht=scontent.fhan5-11.fna&oh=00_AYCWc84qrKCGybofdQZzb8T68ypCaIv6_k25q81PuJJGjQ&oe=6664EB3E",
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
      company: "CMC Global",
      link: "https://cmcglobal.com.vn/",
      badges: ["Software", "Fullstack"],
      title: "Fullstack Backend .NET Developer",
      start: "2021",
      end: "Now",
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
      title: "Candi Portal",
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
