/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yu Lin's Portfolio",
  description:
    "A data-driven professional specializing in data science and engineering, skilled at analyzing complex datasets and enhancing business processes.",
  og: {
    title: "Yu Lin Portfolio",
    type: "website",
    url: "https://ylin62.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Yu Lin",
  logo_name: "Yu Lin",
  nickname: "Hi There Partner \uD83E\uDD80!",
  subTitle:
    "A data-driven professional specializing in data science and engineering, skilled at analyzing complex datasets and enhancing business processes.",
  resumeLink:
    "https://drive.google.com/file/d/1SVT4iGZ568uDp_tT0teXmA3Spd3qTFIE/view?usp=drive_link",
  portfolio_repository: "https://github.com/ylin62/ylin62.github.io",
  githubProfile: "https://github.com/ylin62",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ylin62",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  // {
  //   name: "LinkedIn",
  //   link: "https://www.linkedin.com/in/ashutosh1919/",
  //   fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
  //   backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  // },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:yu.saturn@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Led the development of machine learning models and data pipelines, driving innovation through data-driven insights and solutions",
        "⚡ Experienced in large-scale data processing, model deployment, and extracting valuable insights from complex datasets",
        "⚡ Worked on diverse data science projects, from manufacturing anomaly detection to traffic data analysis for autonomous driving research",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "bi:filetype-sql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hugging-Face",
          fontAwesomeClassname: "logos:hugging-face-icon",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "devicon:apachespark-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "devicon:apacheairflow-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designed and implemented scalable cloud-based data systems, enhancing data accessibility and processing efficiency",
        "⚡ Deployed machine learning solutions on cloud platforms, optimizing performance for large datasets",
        "⚡ Collaborated with infrastructure teams to ensure seamless integration of cloud and data systems.",
        "⚡ Experience working with multiple services of AWS",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "devicon:postgresql-wordmark",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "InfluxDB",
          fontAwesomeClassname: "devicon:influxdb-wordmark",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Cassandra",
          fontAwesomeClassname: "logos:cassandra",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "ScyllaDB",
          fontAwesomeClassname: "simple-icons:scylladb",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Apache Iceberg",
          imageSrc: "iceberg.png",
          // style: {
          //   color: "#326CE5",
          // },
        },
        {
          skillName: "Trino",
          fontAwesomeClassname: "simple-icons:trino",
          style: {
            color: "#ff33cc",
          },
        },
      ],
    },
    {
      title: "Automotive Engineering",
      fileName: "DesignImg",
      skills: [
        "⚡ Over 5 years of experience in the automotive industry, with deep expertise in powertrain systems and vehicle dynamics",
        "⚡ Strong first-principle approach to engineering, ensuring rigorous problem-solving and system-level understanding",
        "⚡ Broad knowledge of all aspects of automotive engineering, from design and testing to vehicle performance optimization",
      ],
      softwareSkills: [
        {
          skillName: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Vehicle Dynamics",
          imageSrc: "vehicledynamics-icon-vector.png",
        },
        {
          skillName: "Powertrain",
          imageSrc: "powertrain-icon-vector.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Clemson University International Center for Automotive Research",
      subtitle: "M.S. in Automotive Engineering",
      logo_path: "clemson-logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ Focused on automotive engineering, vehicle dynamics, autonomous driving, signal processing, and computer vision.",
        "⚡ Gained advanced knowledge in machine learning and programming, complemented by extensive hands-on project work.",
        "⚡ Excelled academically, further strengthening technical and practical skills.",
      ],
      website_link: "https://cuicar.com/",
    },
    {
      title: "University at Buffalo",
      subtitle: "M.S. in Mechanical Engineering",
      logo_path: "201-Interlocking-UB-RGB-Blue.png",
      alt_name: "SUNY Buffalo",
      duration: "2016 - 2017",
      descriptions: [
        "⚡ Studied thermal and fluid mechanics, and system modeling, with a strong emphasis on first-principle approaches.",
        "⚡ Completed an intensive program that demanded a deep understanding of core engineering principles.",
        "⚡ Excelled in coursework, demonstrating strong analytical and problem-solving abilities across various technical topics.",
      ],
      website_link: "https://www.buffalo.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Fulltime & Internship",
  description:
    "I have a diverse background in data engineering, machine learning, and mechanical systems. I built and led a powertrain data team, working on big data, scalable pipelines, and end-to-end machine learning development. I also developed data processing tools for traffic data, contributing to autonomous driving safety research with the NHTSA.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Fulltime",
      work: true,
      experiences: [
        {
          title: "Technical Specialist, Powertrain Data",
          company: "Lucid Motors",
          company_url: "https://www.lucidmotors.com/",
          logo_path: "LucidMotors_Logo.jpg",
          duration: "Mar 2021 - Jan 2024",
          location: "Newark, CA",
          description:
            "I established the powertrain data team from the ground up, starting as an individual contributor working with mechanical system data. Recognizing the significant potential and unmet business needs, I spearheaded the development of a dedicated data function within the department. I led both technical and non-technical efforts, building scalable data pipelines, working with big data, and developing machine learning solutions from end-to-end. I also managed projects, collaborated with the data infrastructure team, and planned team strategies. Additionally, I hired and mentored a team of 7 data engineers and scientists, successfully creating a new and impactful data function for the department.",
          color: "#000000",
        },
        {
          title: "Research Engineer II",
          company: "Transportation Research Center",
          company_url: "https://www.trcpg.com/",
          logo_path: "trc.jpg",
          duration: "Oct 2019 - Feb 2021",
          location: "East Liberty, OH",
          description:
            "I developed advanced data processing tools for traffic data, including setting up tests, data acquisition, and processing raw data to generate meaningful insights. I built machine learning models to mine valuable information from the data, which were used to support autonomous driving safety research. These tools and datasets were provided to the NHTSA, contributing to government-led research initiatives aimed at enhancing autonomous vehicle safety.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Hardware Development and Test Intern",
          company: "Tesla Inc.",
          company_url: "https://www.tesla.com",
          logo_path: "tesla-logo.png",
          duration: "Jan 2019 - Aug 2019",
          location: "Fremont, CA",
          description:
            "During my internship, I conducted component-level tests for the Tesla Model S/X front drive unit to ensure compliance with design standards. I set up and executed the tests, collected test data, and collaborated with design engineers for analysis. Additionally, I worked on LiDAR data processing code to handle road scan data, which was used for vehicle-level simulations.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Personal projects dedicated to honing existing skills while exploring and mastering new ones.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "IMG_6391.png",
    description:
      "You can use the link below to see my resume. Email me if you would like to connect. Have a great day! 🍻",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
  //   locality: "San Jose",
  //   country: "USA",
  //   region: "California",
  //   postalCode: "95129",
  //   streetAddress: "Saratoga Avenue",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  // },
  // phoneSection: {
  //   title: "",
  //   subtitle: "",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
