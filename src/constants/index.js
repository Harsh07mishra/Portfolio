import {
  facebook,
  linkedin,
  instagram,
  twitter,
  github,
  facebook1,
  linkedin1,
  instagram1,
  twitter1,
  github1,
  tvshowbox,
  guesstheword,
  tictactoe,
  mathmagician,
  metricwebapp,
  spacetravelers,
  recipeapp,
  trackbudget,
  carrental,
  guesstheword1,
  guesstheword2,
  guesstheword3,
  spacetravelers1,
  spacetravelers2,
  spacetravelers3,
  tictactoe1,
  tictactoe2,
  tictactoe3,
  tvshow1,
  tvshow2,
  tvshow3,
  metricswebapp1,
  metricswebapp2,
  recipeapp3,
  recipeapp4,
  recipeapp6,
  trackbuget1,
  trackbuget2,
  trackbuget5,
  carrental1,
  carrental2,
  carrental3,
  responsive,
  react,
  fullstack,
} from "../assets";

// Import icons for experiences (you'll need to add these icons to your assets)
import HCL_Certificate from "../assets/experience/HCL_Certificate.png";
import HCL from "../assets/experience/HCL.png";
import Infosys_Springboard from "../assets/experience/Infosys_Springboard.png";
import Infosys_Springboard_Certificate from "../assets/experience/Infosys_Springboard_Certificate.png";
import BB from "../assets/experience/BB.png";
import BB_Photo from "../assets/experience/BB_Photo.png";
// Add your company icons
// import company2 from "../assets/company2.png";
// import company3 from "../assets/company3.png";

const social = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harsh-mishra2003/",
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100025231324165",
    icon: facebook,
    icon1: facebook1,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/harsh007mishra/",
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 4,
    name: "Twitter",
    url: "https://twitter.com/HarshMishra2003",
    icon: twitter,
    icon1: twitter1,
  },
  {
    id: 5,
    name: "Github",
    url: "https://github.com/Harsh07mishra",
    icon: github,
    icon1: github1,
  },
];
const experiences = [
  {
    id: 1,
    icon: HCL,
    hoverImage: HCL_Certificate,
    title: "Data Analytics Intern",
    company: "HCL Tech",
    duration: "Nov 2024 - Present",
    text: "The TRAM Project is a comprehensive data analytics platform designed to streamline and optimize transportation operations across various modes. It leverages advanced data analytics and visualization tools to provide insights and support strategic decision-making for transportation providers.",
  },
  {
    id: 2,
    icon: Infosys_Springboard,
    hoverImage: Infosys_Springboard_Certificate,
    title: "AI/ML Intern",
    company: "Infosys Springboard",
    duration: "Oct 2024 - Dec 2024",
    text: "The AI/ML Internship program is a comprehensive training program designed to equip participants with the skills and knowledge needed to become proficient in AI/ML technologies. The program covers a range of topics, including machine learning, deep learning, and natural language processing, and is delivered through a combination of theoretical lectures and hands-on projects.",
  },
  {
    id: 3,
    icon: BB,
    hoverImage: BB_Photo,
    title: "Vice-President",
    company: "Binary Brains Club BBDITM",
    duration: "Sep 2024 - Present",
    text: "Built custom websites and applications for various clients, managing projects from concept to deployment.",
  },
  // {
  //   id: 4,
  //   icon: fullstack,
  //   hoverImage: "/path/to/company3-image.jpg",
  //   title: "Freelance Developer",
  //   company: "Self-Employed",
  //   duration: "2017 - 2019",
  //   text: "Built custom websites and applications for various clients, managing projects from concept to deployment.",
  // },
];

const technologies = [
  {
    stack: ["languages", "all"],
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  // {
  //   stack: ['languages', 'all'],
  //   name: 'Ruby',
  //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg',
  // },
  {
    stack: ["languages", "all"],
    name: "Python",
    icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    stack: ["frameworks", "all"],
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  // {
  //   stack: ["frameworks", "all"],
  //   name: "Ruby on Rails",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
  // },
  // {
  //   stack: ["frameworks", "all"],
  //   name: "Redux Toolkit",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  // },
  {
    stack: ["frameworks", "all"],
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
  },
  // {
  //   stack: ["frameworks", "all"],
  //   name: "Jest",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  // },
  // {
  //   stack: ["frameworks", "all"],
  //   name: "RSpec",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg",
  // },
  {
    stack: ["tools", "all"],
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    stack: ["tools", "all"],
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  // {
  //   stack: ["tools", "all"],
  //   name: "Docker",
  //   icon: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
  // },
  // {
  //   stack: ["tools", "all"],
  //   name: "Figma",
  //   icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  // },
  {
    stack: ["tools", "all"],
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    stack: ["languages", "all"],
    name: "Java",
    icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  },
  {
    stack: ["tools", "all"],
    name: "vite",
    icon: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg",
  },
  {
    stack: ["tools", "all"],
    name: "MongoDB",
    icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    stack: ["tools", "all"],
    name: "MySQL",
    icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  },
  {
    stack: ["tools", "all"],
    name: "VS Code",
    icon: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg",
  },
  // {
  //   stack: ["frameworks", "all"],
  //   name: "Express JS",
  //   icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  // },
  {
    stack: ["tools", "all"],
    name: "Node.js",
    icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Jupyter",
    icon: "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg",
  },
  // {
  //   stack: ["tools", "all"],
  //   name: "Google Colab",
  //   icon: "https://www.vectorlogo.zone/logos/google_colab/google_colab-icon.svg",
  // },
];

const projects = [
  {
    id: 1,
    name: "EmoSentia",
    desc: "EmoSentia is an AI-powered system designed to analyze and interpret emotions and sentiments from video speech in real time. By leveraging advanced natural language processing (NLP) and computer vision techniques, the system extracts vocal tone, facial expressions, and speech patterns to classify emotions with high accuracy.",
    tech: ["Python", "NLTK", "OpenCV", "TensorFlow"],
    img: carrental,
    carousel: [carrental1, carrental2, carrental3],
    source_link:
      "https://github.com/Springboard-Internship-2024/EmoSentia-Real-time-Emotion-and-Sentiment-Detection-in-Video-Speech_oct_2024/tree/Harsh-Mishra",
    live_link: "",
  },
  {
    id: 2,
    name: "Spam SMS Detection",
    desc: "Spam SMS Detection is a machine learning-based system designed to classify SMS messages as spam or ham (legitimate) with high accuracy. By leveraging natural language processing (NLP) and machine learning algorithms, the model analyzes text patterns, keywords, and message structures to filter out spam effectively.",
    tech: ["Python", "NLTK", "Regex"],
    img: recipeapp,
    carousel: [recipeapp3, recipeapp4, recipeapp6],
    source_link: "",
    live_link: "",
  },
  {
    id: 3,
    name: "Digital Dashboard",
    desc: "The Digital Dashboard App is a web-based application that integrates essential daily utilities into a single, user-friendly interface. Designed for efficiency and accessibility, the dashboard provides seamless access to various tools, enhancing productivity and organization.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: tvshowbox,
    carousel: [tvshow1, tvshow2, tvshow3],
    source_link: "https://github.com/singhshreya-bhriguvanshi/Mini-Project",
    live_link:
      "https://singhshreya-bhriguvanshi.github.io/Mini-Project/current/index.html",
  },
  //   {
  //     id: 4,
  //     name: "Metrics Webapp",
  //     desc: "Metrics Webapp is a mobile web application showing the current weather data of the cities using the Openweather API. It has two interfaces - city page and detail page based on the design of Nelson Sakwa on Behance. Built during the Microverse Module 3 React Captone Project.",
  //     tech: ["React", "Redux", "Openweather API"],
  //     img: metricwebapp,
  //     carousel: [metricswebapp1, metricswebapp2],
  //     source_link: "https://github.com/Rhaegar121/Metrics-Webapp",
  //     live_link: "https://metrics-webapp121.netlify.app/",
  //   },
  //   {
  //     id: 5,
  //     name: "Track Budget App",
  //     desc: "Track Budget is a mobile web application where you can manage your budget: you have a list of purchases associated with a category, so that you can see how much money you spent and on what category.",
  //     tech: ["Ruby", "Ruby on Rails", "PostgreSQL"],
  //     img: trackbudget,
  //     carousel: [trackbuget1, trackbuget2, trackbuget5],
  //     source_link: "https://github.com/Rhaegar121/Track-Budget",
  //     live_link: "https://track-budget121-70a570d4e3e1.herokuapp.com/",
  //   },
  //   {
  //     id: 6,
  //     name: "Math Magicians",
  //     desc: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
  //     tech: ["React"],
  //     img: mathmagician,
  //     carousel: [mathmagician],
  //     source_link: "https://github.com/Rhaegar121/Math-Magicians",
  //     live_link: "https://math-magicians121.netlify.app/",
  //   },
  //   {
  //     id: 7,
  //     name: "Tic Tac Toe",
  //     desc: "Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using "X" and the other using "O". Mainly built with JavaScript.",
  //     tech: ["HTML5", "CSS3", "JavaScript"],
  //     img: tictactoe,
  //     carousel: [tictactoe1, tictactoe2, tictactoe3],
  //     source_link: "https://github.com/Rhaegar121/Tic-Tac-Toe",
  //     live_link: "https://tic-tac-toe121.netlify.app/",
  //   },
  //   {
  //     id: 8,
  //     name: "Space Travelers' Hub",
  //     desc: "Space Travelers' Hub is a web application that provides commercial and scientific space travel services using the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions.",
  //     tech: ["React", "Redux", "SpaceX API"],
  //     img: spacetravelers,
  //     carousel: [spacetravelers1, spacetravelers2, spacetravelers3],
  //     source_link: "https://github.com/Rhaegar121/React-Group-Project",
  //     live_link: "https://space-travelers-hub121.netlify.app/",
  //   },
  //   {
  //     id: 9,
  //     name: "Guess the word",
  //     desc: "Guess The Word is a fun letter puzzle game where the player have to guess the hidden word using the clues that the game gives. The game ends if the player guesses the correct word or if he chooses the wrong letter 8 times. Mainly built with Javascript.",
  //     tech: ["HTML5", "CSS3", "JavaScript"],
  //     img: guesstheword,
  //     carousel: [guesstheword1, guesstheword2, guesstheword3],
  //     source_link: "https://github.com/Rhaegar121/Guess-the-word",
  //     live_link: "https://guess-the-word121.netlify.app/",
  //   },
];

const testimonials = [
  //   {
  //     id: 1,
  //     name: "name",
  //     image: "https://avatars.githubusercontent.com/u/77187003?v=4",
  //     text: "Content",
  //     country: "India",
  //     linkedIn: "linkedIN",
  //   },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: "Web Development",
    text: "I specialize in building modern, responsive, and user-friendly web applications using the MERN stack. Whether it's creating a dynamic frontend with React or developing a robust backend with Node.js and Express, I ensure high performance and seamless functionality. I also focus on UI/UX design, making web interfaces intuitive and visually appealing across all devices.",
  },
  {
    id: 2,
    icon: react,
    title: "AI/ML",
    text: "I'm passionate about leveraging AI and machine learning to solve real-world problems. From developing sentiment analysis models to building image processing and NLP-based applications, I enjoy working with data and turning it into actionable insights. I use TensorFlow, Scikit-Learn, and NLP techniques to create smart, data-driven solutions.",
  },
  {
    id: 3,
    icon: fullstack,
    title: "Problem-Solving & Optimization",
    text: "I love tackling complex challenges through algorithmic problem-solving and performance optimization. With experience in DSA and competitive programming (practicing on LeetCode), I can write efficient code, optimize existing solutions, and improve application performance. Whether it's database queries, API response time, or frontend rendering, I strive to make applications faster and more scalable.",
  },
];

const navLinks = [
  {
    id: 1,
    name: "About",
    url: `${import.meta.env.BASE_URL}#about`,
  },
  {
    id: 2,
    name: "Experience",
    url: `${import.meta.env.BASE_URL}#experience`,
  },
  {
    id: 3,
    name: "Service",
    url: `${import.meta.env.BASE_URL}#service`,
  },
  {
    id: 4,
    name: "Work",
    url: `${import.meta.env.BASE_URL}#work`,
  },
  // {
  //   id: 5,
  //   name: "Testimonial",
  //   url: "/Portfolio/#testimonial",
  // },
  {
    id: 5,
    name: "Contact",
    url: `${import.meta.env.BASE_URL}#contact`,
  },
];

export {
  technologies,
  projects,
  experiences,
  testimonials,
  social,
  services,
  navLinks,
};
