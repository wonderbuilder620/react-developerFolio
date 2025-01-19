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
  username: "Serhii Tonkonozhenko",
  title: "Hi! I'm Serhii",
  subTitle: emoji(
    "An innovative Full Stack Developer | Web & Blockchain Specialist 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1O4qXneuUO1fyXUbSIw9qFRX1LlwWNDCu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/wonderbuilder620",
  linkedin: "https://www.linkedin.com/in/wonderbuilder620/",
  gmail: "sergil122132@gmail.com",
  // gitlab: "https://gitlab.com/wonderbuilder620",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@wonderbuilder620",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skillsets",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Build and maintain Back end systems using modern frameworks, ensuring high-performance and data integrity"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
      logo: require("./assets/images/NTUU-KPI-logo.jpg"),
      subHeader: "Master of Computer Science",
      duration: "September 2014 - April 2019",
      desc: "Participated in the research of data analysis and published 3 papers.",
      descBullets: [
        "Bachelor's Degree (BSc): 4 years",
        "Master's Degree (MSc): 1.5 years"
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Project Management",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "SoftServe",
      companylogo: require("./assets/images/SoftServe.png"),
      date: "September 2021 – October 2024",
      desc: [
        "Designed and developed dynamic web applications, ensuring scalability and responsiveness across various devices.",
        "Collaborated with cross-functional teams to deliver customized software solutions for clients in industries like fintech, e-commerce, and healthcare.",
        "Built and maintained backend systems using modern frameworks, ensuring high-performance and data integrity.",
        "Developed and integrated frontend interfaces for seamless user experiences.",
        "Participated in code reviews to maintain quality standards and improve team efficiency.",
        "Implemented unit testing and debugging processes to ensure software reliability and minimize downdtime.",
        "Worked in an Agile environment, contributing to sprint planning, daily stand-ups, and retrospective meetings.",
        "Gained experience in blockchain-based web3 solutions and other emerging technologies."
      ]
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Web Developer",
      company: "Stfalcon",
      companylogo: require("./assets/images/Stfalcon.png"),
      date: "December 2019 – August 2021",
      desc: [
        "Built and maintained scalable web applications using modern development practices.",
        "Collaborated with cross-functional teams in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives.",
        "Conducted code reviews to ensure quality, consistency, and adherence to best practices.",
        "Wrote unit tests to maintain code reliability and reduce bugs in production.",
        "Enhanced skills in front-end and back-end development while learning advanced debugging and optimization techniques.",
        "Contributed to delivering client projects on time while ensuring high performance and user satisfaction."
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
  title: "Previous Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/rozetka.png"),
      projectName: "Rozetka",
      projectDesc: [
        "Summary: ROZETKA is the largest online retailer in the country. We sell at a fair price and provide a guarantee, because we believe that online shopping should be as convenient and safe as possible.",
        "Stack: Angular, Zone.js, TypeScript, PWA, Open Graph",
        "Responsibility: An experienced frontend engineer in building modern and high-performance web applications using Angular and TypeScript. Focused on delivering dynamic user experiences with Progressive Web Apps (PWA) capabilities and enhanced social media integration."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rozetka.com.ua/"
        }
      ]
    },
    {
      image: require("./assets/images/itc.png"),
      projectName: "IT Community",
      projectDesc: [
        "Summary: ITC.ua is one of Ukraine's leading technology and IT news websites. It covers a broad range of technology, gadgets, software, providing up-to-date information and insights.",
        "Stack: WordPress, Redis, MySQL, Fancybox, Slick, Nginx",
        "Responsibility: An expert in crafting scalable WordPress websites, integrating caching strategies, dynamic content rendering, and modern user interface solutions. Skilled in managing server-side resources and delivering fast-loading, interactive web experiences."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://itc.ua/"
        }
      ]
    },
    {
      image: require("./assets/images/rijszwaan.png"),
      projectName: "Rijk Zwaan",
      projectDesc: [
        "Summary: Rijk Zwaan is the Ukrainian subsidiary of Rijk Zwaan, a global leader in vegetable breeding and seed production. Established in Ukraine in 1998, the company officially registered its subsidiary in 2000.",
        "Stack: Angluar, Zone.js, TypeScript, Node.js, Express, CivicTheme",
        "Responsibility: An accomplished full-stack JavaScript developer. Focused on creating scalable, maintainable, and accessible web applications using Angular and Node.js. Expertise in implementing CivicTheme for consistent, user-centric design systems."
      ],

      footerLink: [
        {
          name: "Visit Website",
          url: "https://rijkzwaan.ua/home"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/naurok.png"),
      projectName: "Na urok",
      projectDesc: [
        "Summary: Na Urok is a popular online educational platform in Ukraine that provides resources for teachers, students, and parents. It offers a wide range of materials to enhance the learning process.",
        "Stack: Angular, PHP, Firebase, Yii, LightBox, core-js, Bootstrap, KaTex",
        "Responsibility: I combined frontend frameworks like Angular with robust backend technologies like PHP and Yii for seamless, data-driven user experiences. Skilled in integrating real-time services and responsive design tools."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://naurok.com.ua/"
        }
      ]
    },

    {
      image: require("./assets/images/newline.PNG"),
      projectName: "Newline",
      projectDesc: [
        "Summary: Learn how to build a full stack web app to visualize personalized Spotify data with the help of Node.js, React, Styled Components, and the Spotify Web API. I mainly did Styling components.",
        "Stack: React, Next.js, GraphQL, TypeScript",
        "Responsibility: A forward-thinking web dev professional focused on crafting scalable, high-performance applications with React and Next.js. Committed to delivering seamless user experiences using GraphQL for efficient data fetching and TypeScript for type-safe, maintainable codebases."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.newline.co/courses/build-a-spotify-connected-app"
        }
      ]
    },
    {
      image: require("./assets/images/liceo.png"),
      projectName: "Liceo",
      projectDesc: [
        "Summary: The mission of the Liceo de Arte y Tecnología is to prepare professionals to work in their chosen field, offering an excellent educational experience and placing the individual at the center of professional training.",
        "Stack: PHP, WordPress, MySQL, Swiper, jQuery, core-js, RankMath SEO",
        "Responsibility: An experienced developer specializing in building custom WordPress solutions, dynamic user interfaces, and SEO-optimized websites. Proficient in scalable, and user-friendly websites."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.liceo.edu/"
        }
      ]
    },
    {
      image: require("./assets/images/nextu.PNG"),
      projectName: "Nextu",
      projectDesc: [
        "Summary: Next u is a recruitment and staffing company in Stockholm. We who work here have many years of experience working with video-based, digital recruitment.",
        "Stack: WordPress, VideoJS, MySQL, LiteSpeed, RSS, Open Graph, HTTP/3",
        "Responsibility: With a passion for integrating technologies and performance optimization, this role emphasizes expertise in managing large-scale websites, delivering immersive media experiences, and fine-tuning server performance."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },

    {
      image: require("./assets/images/astro.PNG"),
      projectName: "Astro",
      projectDesc: [
        "Summary: The web framework for content-driven websites. Astro powers the world's fastest marketing sites, blogs, e-commerce websites, and more.",
        "Stack: Fanthom, Astro, Tailwind CSS, RSS, OpenGraph, Netlify",
        "Responsibility: A tech-savvy web developer focused on building performance-optimized, user-centric, and secure websites using the latest static site generation, styling frameworks, and deployment strategies. Skilled in delivering fast, scalable, and dynamic content with minimal complexity."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://astro.build/showcase/"
        }
      ]
    },
    {
      image: require("./assets/images/sports-website.PNG"),
      projectName: "Sanabbil Sports",
      projectDesc: [
        "Summary: Our priority has always been people who love and enjoy sports and find joy in it. Our website serves them. That is, experts in a particular field can use their knowledge and experience to create the best products.",
        "Stack: HSTS, FoneAwesome, AOS, Cloudflare",
        "Responsibility: A web developer proficient in creating robust, visually engaging, and secure websites by integrating modern tools and best practices. Adept at delivering responsive designs with a focus on performance and user experience."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sports-website-three.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Quick Store.png"),
      projectName: "Quick Store",
      projectDesc: [
        "Summary: A simple Astro and Tailwind CSS template for your store. Embed products from services like Gumroad or Lemonsqueezy.",
        "Stack: Astro, HSTS, PWA, Open Graph, Vercel",
        "Responsibility: Bringing innovation and performance together, I specialize in crafting websites and applications with a focus on speed, scalability, and enhanced user experience. Leveraging the latest technologies, security measures, and deployment platforms, I transform creative visions into dynamic web solutions."
      ],

      footerLink: [
        {
          name: "Visit Website",
          url: "https://quickstorre.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/blackberry.png"),
      projectName: "BlackBerry",
      projectDesc: [
        "Summary: The company has transitioned from its original focus on mobile devices to becoming a leader in cybersecurity, assisting businesses, government agencies, and safety-critical institutions.",
        "Stack: Java, GSAP, LottieFiles, lit-html, LazySizes, AWS",
        "Responsibility: An innovative developer specializing in dynamic web animations, efficient templating, and scalable cloud solutions. Proficient in backend development with Java, advanced animation techniques, and cloud-based deployment strategies to create engaging and high-performing applications."
      ],

      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.blackberry.com/ja/jp"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/gimnasio.png"),
      projectName: "Gimnasio Fontana",
      projectDesc: [
        "Summary: The school has been reaccredited by the Council of International Schools (CIS) on December 17, 2024, reflecting its commitment to high-quality international educational standards.",
        "Stack: WordPress, SLick, jQuery, MySQL, PHP",
        "Responsibility: An experienced WordPress developer skilled in creating dynamic, database-driven websites with interactive frontend components. Proficient in building custom themes and plugins, managing databases, and enhancing user experiences with modern web technologies."
      ],

      footerLink: [
        {
          name: "Visit Website",
          url: "https://gimnasiofontana.edu.co/"
        }
        //  you can add extra buttons here.
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+38-0637371463",
  email_address: "sergil122132@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
