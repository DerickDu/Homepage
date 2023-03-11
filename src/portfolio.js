/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zhengkun Du",
  title: "Hi, I'm Zhengkun Du",
  subTitle: emoji(
    "A passionate Master's Student seeking for Software Engineer Full-time Position 🚀 having an experience of building Web and Mobile applications with Java / Go / JavaScript / React / Spring / Android and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1wEhpkLAGpJl-t7y08hUrS0W5w3IHBVh8/edit?usp=share_link&ouid=114920203529526056739&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DerickDu",
  linkedin: "www.linkedin.com/in/ZKDu",
  gmail: "dododugan@gmail.com",
  kaggle: "https://www.kaggle.com/zhengkundu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end for web and mobile applications with robust Back end"
    ),
    emoji(
      "⚡ Integration of third party services such as Google Cloud Service / AWS / WEB 3.0 Moralis"
    ),
    emoji(
      "⚡ Leverage the power of Hadoop / MySql / MangoDB etc. to deliver insightful data analysis."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fa-brands fa-python"
    },

    {
      skillName: "Android",
      fontAwesomeClassname: "fa-brands fa-android"
    },
    {
      skillName: "R-Project",
      fontAwesomeClassname: "fa-brands fa-r-project"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fa-brands fa-git-alt"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fa-brands fa-google"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fa-brands fa-stripe"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Boston Universiy",
      logo: require("./assets/images/Bostonlogo.png"),
      subHeader: "Master of Science in Software Development",
      duration: "September 2023 - Expected December 2024",
      desc: "Comming soon",
      descBullets: ["The Story is about to begin."]
    },
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/Northeastern.png"),
      subHeader: "Master of Analytics",
      duration: "September 2020 - June 2022",
      desc: "Ranked top 5% in the program. Took courses about Data Management & Big Data, Application of Artificial Int and AI System Technology...",
      descBullets: [
        "Cumulative GPA 3.97/4.0.",
        "Concentrated in Machine Intelligence.",
        "Built a Jarvis Voice Assistance and scored 100 points in the course of Application of Artficial Intelligence."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "88%"
    },
    {
      Stack: "Programming",
      progressPercentage: "94%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teaching Assistant",
      company: "Northeastern University",
      companylogo: require("./assets/images/neu.png"),
      date: "Jan 2023 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Mentored and tutored students during office hours on the use of Python for data analysis and data structure and provided guidance on coursework and projects.",
        "Collaborated with faculty members to develop and implement effective teaching and learning strategies for the course.",
        "Conducted demonstrations and presentations on various data science and analytics topics, including machine learning algorithms and big data technologies including scikit-learn, TensorFlow."
      ]
    },
    {
      role: "BI Consultant",
      company: "Storm CRM",
      companylogo: require("./assets/images/storm.png"),
      date: "Jan 2021 – Dec 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Improved by 74% efficiency of production process by using Python to automate with Estee Lauder to build and monthly reports by Python and Excel.",
        "Constructed A/B testing about campaigns and gift redeems to get a better view of the business processes for Jurlique",
        "Produced annual sales report alone by SQL Server and Excel using RFM model and presented to Guerlain to support the future plan and direction.",
        "Built the database, managed ad-hoc assignments and utilized RabbitMQ to send SMS or email to customers for Elixir."
      ]
    },
    {
      role: "Data Science and Credit Control Intern",
      company: "Everbright Securities",
      companylogo: require("./assets/images/everb.png"),
      date: "June 2020 – Sep 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Increased accuracy by 2% in quantitative analysis on bond rating of coal industry by employing Random Forest Model, PFM algorithm and KMV algorithm.",
        "Assisted Senior Investment Manager for assets-liability management such as yield enhancement for investment.",
        "Participated in research team to enhance application of internal analytical tools and conducted scenario analysis.",
        "Assisted clients build up the portfolio to maintain asset allocation; studied risk hedging advice."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Silver Medal for Google Smartphone Decimeter Challenge 2022",
      subtitle:
        "Placing in the top 4% out of 573 participating teams and ranking 18th overall",
      image: require("./assets/images/gsc.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.kaggle.com/zhengkundu"
        },
        {
          name: "Kaggle Challenge Overview",
          url: "https://www.kaggle.com/competitions/smartphone-decimeter-2022"
        }
      ]
    },

    {
      title: "IBM Data Science",
      subtitle:
        "Completed Certifcation from Coursera for Data Science and Machine Learning",
      image: require("./assets/images/coursera-logo.png"),
      imageAlt: "coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/fc6414fbd3299902d096e489e1d00161"
        }
      ]
    },

    {
      title: "CUMCM",
      subtitle:
        "1st Prize of province in two consecutive two years (2017, 2018) China Undergraduate Mathematical Contest in Modeling",
      image: require("./assets/images/cumcm.png"),
      imageAlt: "cumcm Logo",
      footerLink: [
        {
          name: "Contest",
          url: "http://en.mcm.edu.cn/html_en/node/b4184fa60b0e32c59e451c1e351d321d.html"
        }
      ]
    },
    {
      title: "Algo Expert",
      subtitle: "AlgoExpert.io",
      image: require("./assets/images/algo.png"),
      imageAlt: "algo Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-f6075b593c"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-7816580540",
  email_address: "zhengkunderick@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable
};
