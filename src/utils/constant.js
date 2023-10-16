import ELearning from "../assests/images/e-learning.png";
import Recipe from "../assests/images/recipe.png";
import Figma from "../assests/images/figma-design.png";
import Pokemon from "../assests/images/pokemon.png";

const projectObjArr = [
  {
    url: "https://e-learning-sand.vercel.app/",
    projectImg: ELearning,
    title: "E-learnig",
  },
  {
    url: "https://react-food-recipe-finder.vercel.app/",
    projectImg: Recipe,
    title: "Recipe Finder",
  },
  {
    url: "https://figma-design-l4vx.vercel.app/",
    projectImg: Figma,
    title: "Figma Design",
  },
  {
    url: "https://pokemon-git-master-ranjana980.vercel.app/",
    projectImg: Pokemon,
    title: "Pokemon",
  },
];

const qualificationObjArr = [
  {
    year: "2010 - 2012",
    title: "Board of HighSchool and Intermediat Educational",
    describe: `I have completed my HighSchool from Board of HighSchool and
        Intermediat Educational with Hindi,English,Arts,Home
        Science,History and Economics.`,
    marks: "72%",
  },

  {
    year: "2012 - 2014",
    title: "Board of HighSchool and Intermediat Educational",
    describe: `I have completed my Intermediat from Board of HighSchool and
    Intermediat Educational with Hindi,English,Arts,Home Science
    and Economics.`,
    marks: "66%",
  },
  {
    year: "2015 - 2017",
    title: "Deen Dayal Upadhyay University of Gorkhpur",
    describe: `I have completed my Bachelor's Degree from Deen Dayal Upadhyay
    University of Gorkhpur with Hindi,English and Home Science.`,
    marks: "53%",
  },
  {
    year: "2020 - 2021",
    title: "Navgurukul",
    describe: ` I have completed 1 year residential
    program of Software Engineering from Navgurukul. Navgurukul is a non-profit
    orgnization which provides scholership to students for their
    study and provides placement in IT Companies. I learnt
    Python,html,css, JavaScript and Reactjs in Navgurukul Pune campus.`,
    marks: "job placement",
  },
];

const experienceObjArr = [
  {
    year: "2021 - 2022",
    title: "XpressCure Technology",
    describe: ` I have worked 13month in xpressCure technology. I have
    worked on projects using Html, Css, JavaScript, React,
    Redux, Next.js,Bootstrap,Material Ui,socket.io.I have worked
    on multiple project in that company like online consultation
    web apps,admin panel and doctor membership portal.`,
  },
  {
    year: "2023-Present",
    title: "Bitontree Solutions",
    describe: `Currently working at Bitontree Solutions as a Software Engineer 
        I have worked multiple clients project using frontend technologies
         I used css frameworks like tailwind and ant-design  `,
  },
];
export { projectObjArr, qualificationObjArr, experienceObjArr };
