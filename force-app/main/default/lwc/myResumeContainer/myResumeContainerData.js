import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import urvish from '@salesforce/resourceUrl/Urvish';
export const PROFILE_IMAGE = urvish

export const SOCIAL_LINKS=[
    {
        type: "github",
        label: "urvishtank",
        link: "https://github.com/urvishtank",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "linkedin",
        label: "urvishtank",
        link: "https://www.linkedin.com/in/urvishtank/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "urvishtank",
        link: "https://trailblazer.me/id/urvishtank",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
]

export const USER_DETAILS={
    NAME:'Urvish Tank',
    ROLE:'Salesforce Developer',
    EMAIL:'urvishtank257@gmail.com',
    PHONE:'+1 (519) 981 0276'
}

export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION: "SomethingYour Career Summary goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    KEYS_POINTS:[
        " Highly skilled Salesforce developer with about 4 years of hands-on experience in Salesforce environment including analysis, modeling, design, development, and customization on various business domains like financial, Insurance, etc.",
        "1 year of Software development experience using OOPs concepts in an Agile environment with Continuous Delivery",
        "Possesses a bachelor's degree in computer science and a master's degree in applied computing"
    ]
}

export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "TD Bank , Toronto, Canada ",
            DURATION: "Oct 2021 - Present",
            DESCRIPTION:
                "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                "Served as salesforce developer with business stakeholders to gather requirements and provide salesforce solutions",
                "Designed, developed, and deployed custom Apex code, Salesforce Lightning components to meet business requirements",
                "Performed data migration and data cleansing activities using Apex data loader",
                "Integrated external data sources seamlessly to access real-time data using Salesforce Connect cross-org adapter",
                "Developed and maintained Salesforce integrations with external systems using REST APIs",
                "Involved in multiple releases for salesforce project deployments and environment managements"
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "APEX Code",
                    "REST API",
                    "Salesforce Connect",
                    "Salesforce Sales Cloud",
                    "Lightning Web Components",
                    "VisualForce",
                    "Batch APEX",
                    "API integration",
                    "APEX DataLoader"
                ]
            },
        },
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Blackberry, Waterloo, Canada",
            DURATION: "Jan 2021 - Aug 2021",
            DESCRIPTION:
                "Your Job description goes here iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                "Collaborated with BAS Extended teams of offshore testers, business product owners, tech leads, architects in an Agile environment to successfully integrate various Blackberry orgs with Salesforce CRM",
                "Engaged directly with business product owners to understand their issues and performed root cause analysis and provided solutions",
                "Established and implemented best practices with regards to system maintenance, configuration, development, and testing",
                "Identified and incorporated unit & integration test cases to ensure the code coverage is above 80% and application remains stable and acceptable for package deployment",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Salesforce CRM",
                    "Workflow/Flows",
                    "Unit Testing",
                    "SOQL",
                    "HTML5/CSS3",
                    "Javascript",
                    "SOSL",
                ]
            }
        },
        {
            ROLE: "Software Engineer",
            COMPANY_NAME: "Gateway Group Company, Ahmedabad, India",
            DURATION: "Jan 2019 - Dec 2019",
            DESCRIPTION:
                "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                "Archived better testability, maintainability, loosely coupled application and separation of concerns by using onion architecture followed by ASP.NET MVC, C#, MVC, SQL Server, TFS, and tested features using unit testing",
                "Developed parts-sorting module to manage auto-parts into various racks and bins using barcode that effectively minimized overall time of workers by almost 20% to 30%"
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "ASP.NET MVC",
                    "C#",
                    "SQL Server",
                    "Unit Testing",
                    "HTML5/CSS3",
                    "NodeJs",
                    "API",
                ]
                
            }
        },
        {
            ROLE: "Teaching Assistant for Data Structures and Algorithms course",
            COMPANY_NAME: "Ahmedabad University, Ahmedabad, India",
            DURATION: "Aug 2018 - May 2019",
            DESCRIPTION:
                "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                "Planned and facilitated lab sessions for 100+ students, liaison between professor-students and assessed students’ papers/projects"
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Leadership",
                    "Mentor",
                    "Data Structure",
                    "Algorithms",
                ]
            }
        },
        {
            ROLE: "Software Engineer Intern",
            COMPANY_NAME: "Lodestone Software Service PVT LTD, Ahmedabad, India",
            DURATION: "May 2018 - July 2019",
            DESCRIPTION:
                "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                "Built Restful APIs using spring MVC and Java"
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Java",
                    "REST API",
                    "Spring Boot",
                    "MVC",
                ]
            }
        }
    ]
}


 export const EDUCATION_DATA={
     ICON: SOCIAL + '/SOCIAL/education.svg',
     HEADING: "EDUCATION",
     LIST:[
         {
             NAME: "Master of Applied Computing",
             UNIVERSITY_NAME: "University of Windsor, Canada",
             DURATION: "Jan 2020 - Aug 2021",
         },
         {
             NAME: "Bachelor of Information and Communication Technology Engineering",
             UNIVERSITY_NAME: "Ahmedabad University, India",
             DURATION: "July 2015 - May 2019",
         }
     ]
 }

 export const AWARDS_DATA={
     ICON: SOCIAL + '/SOCIAL/awards.svg',
     HEADING: "AWARDS",
     LIST: [
         {
             NAME: "Microsoft MVP",
             DESCRIPTION:"Award description goes here, sem. Nulla consequat massa quis enim. Donec pede justo.",
         },
         {
             NAME: "Employee of the year",
             DESCRIPTION:"Award description goes here, sem. Nulla consequat massa quis enim. Donec pede justo.",
         },
     ]
 }

export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Platform Developer I",
            UNIVERSITY_NAME : "Salesforce",
            DURATION : "Mar 2022",
        },
        {
            NAME: "Data Analytics & Visualization - Python",
            UNIVERSITY_NAME : "Coursera (By IBM)",
            DURATION: "Aug 2018",
        },
        {
            NAME: "Applied CS with Android - Android Studio",
            UNIVERSITY_NAME : "Ahmedabad University(By Google)",
            DURATION : "Sep 2016",
        },
    ]
}

export const LANGUAGES_DATA={
    HEADING: "Languages",
    LIST: [
        {
            NAME: "English",
            LEVEL: "Professional",
        },
        {
            NAME: "Hindi",
            LEVEL: "Native",
        },
        {
            NAME: "Gujarati",
            LEVEL: "Native",
        },
    ]
}

export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "Salesforce Technologies",
            SKILLS_LIST: [
                { NAME: "Salesforce CRM", LEVEL: "95" },
                { NAME: "APEX Triggers", LEVEL: "95" },
                { NAME: "SOQL/SOSL", LEVEL: "95" },
                { NAME: "Lightning Web Components (LWC)", LEVEL: "90" },
                { NAME: "Flows/WorkFlows", LEVEL: "90" },
                { NAME: "Batch APEX", LEVEL: "85" },
                { NAME: "VisualForce", LEVEL: "75" },
                
            ],
        },
        {
            HEADING: "Other Programming Languages",
            SKILLS_LIST: [
                { NAME: "SQL", LEVEL: "90" },
                { NAME: "Java", LEVEL: "85" },
                { NAME: "C#", LEVEL: "75" },
                { NAME: "ASP.NET MVC", LEVEL: "70" },
                { NAME: "Spring Boot", LEVEL: "65" },
                { NAME: "Python", LEVEL: "50" },
            ],
        },
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [
                { NAME: "HTML5/CSS3", LEVEL: "90" },
                { NAME: "JavaScript", LEVEL: "90" },
                { NAME: "Xml", LEVEL: "75" },
                { NAME: "NodeJs", LEVEL: "50" },
            ],
        },
        {
            HEADING: "Tools",
            SKILLS_LIST: [
                { NAME: "Salesforce Lightning", LEVEL: "95" },
                { NAME: "Apex Data Loader", LEVEL: "95" },
                { NAME: "VS Code", LEVEL: "95" },
                { NAME: "Force.com", LEVEL: "90" },
              
            ],
        },
       
    ],
    OTHERS_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "Git",
            "Code Review",
            "JIRA",
            "Unit Testing",
            "BitBucket",
            "TFS",
            "Redmine",
            "Confluence"]
    }
}

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Traveling","Gaming", "Cricket"]
}