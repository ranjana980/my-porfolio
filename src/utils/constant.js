import ELearning from "../assests/images/e-learning.png";
import Recipe from "../assests/images/recipe.png";
import Figma from "../assests/images/figma-design.png";
import Pokemon from "../assests/images/pokemon.png";
import NextJs from "../assests/images/Nextjs.png";
import ReactQuery from "../assests/images/react-query.jpg";
import Prismic from "../assests/images/prismic.png";
import Redux from "../assests/images/redux.jpg";
import Formik from "../assests/images/formikYup.png";

import {
  LinkedIn,
  GitHub,
  Instagram,
  Facebook,
  Twitter,
} from "@material-ui/icons";
import * as Yup from "yup";
import { phoneRegex } from "./regex-helper";

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
    describe: `I have completed my high school education
     with a focus on Hindi, English, Arts, Home Science,
      History, and Economics through the Board of High School and intermediat educational.`,
    marks: "72%",
  },

  {
    year: "2012 - 2014",
    title: "Board of HighSchool and Intermediat Educational",
    describe: `I have completed my intermediate education with a 
    focus on Hindi, English, Arts, Home Science, and Economics 
    from the Board of High School and intermediat educational..`,
    marks: "66%",
  },
  {
    year: "2015 - 2017",
    title: "Deen Dayal Upadhyay University of Gorkhpur",
    describe: `I hold a bachelor's degree from 
    Deen Dayal Upadhyay University of Gorakhpur,
     with a focus on Hindi, English, and Home Science. `,
    marks: "53%",
  },
  {
    year: "2020 - 2021",
    title: "Navgurukul",
    describe: `I successfully completed a 
    one-year software engineering diploma 
    program at Navgurukul, a non-profit organization
     known for its residential program that provides 
     students with both comprehensive education and IT 
     company placement opportunities. During my time at Navgurukul's Pune campus, 
     I acquired proficiency in Python, HTML, CSS, JavaScript, and ReactJS.`,
    marks: "job placement",
  },
];

const experienceObjArr = [
  {
    year: "2021 - 2022",
    title: "XpressCure Technology",
    describe: `I spent 13 months at XpressCure Technology,
     where I actively contributed to diverse projects. My 
     responsibilities included using HTML, CSS, JavaScript,
      React, Redux, Next.js, Bootstrap, Material UI, and socket.io. 
      I had the opportunity to work on a range of projects, including online
       consultation web apps, admin panels, and doctor membership portals.`,
  },
  {
    year: "2023-Present",
    title: "Bitontree Solutions",
    describe: `I am currently employed at Bitontree Solutions, 
    where I have contributed to various client projects. My 
    expertise lies in frontend technologies, including ReactJS and 
    Next.js, and I'm proficient in CSS frameworks such as Bootstrap, 
    Tailwind CSS, SCSS, and Ant Design. I excel in Redux for state management and leverage 
    React Hooks, along with libraries like React-Query and useContext, to enhance project development.
    `,
  },
];

const socialMediaObjArr = [
  {
    link: "https://www.instagram.com/ranjanachaudhary_123/",
    icon: <Instagram />,
  },
  {
    link: "https://www.facebook.com/Ranjana24081996?mibextid=ZbWKwL",
    icon: <Facebook />,
  },
  {
    link: "https://www.linkedin.com/in/ranjana-chaudhary-2bb393211/",
    icon: <LinkedIn />,
  },
  {
    link: "https://twitter.com/RanjanaChoudary?t=A7OancGyt0WnrZBOVxrG_w&s=09",
    icon: <Twitter />,
  },
  { link: "https://github.com/ranjana980", icon: <GitHub /> },
];

const blogObjArr = [
  {
    image: NextJs,
    title: "Next JS",
    sortDescription: `Next.js is an open-source JavaScript 
  framework that builds on top of React, one of the most
   widely used JavaScript libraries for building user interfaces. 
   It's designed to make the process of building React applications more productive
    and efficient, addressing common pain points in web development. It's maintained by Vercel,
     a company that specializes in deploying web projects, which ensures that Next.js is always on 
     the cutting edge of web development.`,
    type: "Technology",
  },
  {
    image: ReactQuery,
    title: "React Query",
    sortDescription: `React Query is a library that provides 
  tools for handling asynchronous data in React applications.
   It simplifies data fetching, caching, synchronization, and state management. 
   It's designed to make it easy to fetch and display data, all while ensuring a 
   smooth and responsive user experience.`,
    type: "Library",
  },
  {
    image: Prismic,
    title: "Prismic",
    sortDescription: `Prismic is a headless content management 
    system designed to provide developers and content creators with 
    a flexible, efficient, and user-friendly way to manage digital content. 
    Unlike traditional CMS, which tightly couples the content management with the presentation 
    layer, Prismic adopts a headless approach. It separates the content repository 
    (where you create, organize, and manage content) from the front-end presentation layer, 
    allowing developers the freedom to build highly customized websites and apps without constraints.`,
    type: "CMS",
  },
  {
    image: Redux,
    title: "Redux",
    sortDescription: `Redux is a powerful state 
    management library for JavaScript applications,
     commonly used with frameworks like React. It provides a predictable
      and centralized way to manage the state of your application, making it 
      easier to develop and maintain complex applications. In this blog, we'll dive
       deep into Redux, exploring its core concepts and how to use it effectively in your projects.`,
    type: "Library",
  },
  {
    image: Formik,
    title: "Formik & Yup",
    sortDescription: `Forms are an integral 
    part of many web applications. Whether 
    it's a login form, registration form, or a complex 
    data entry form, they all share a common challenge: 
    form validation. In React, there are several libraries 
    available to help with form management and validation, 
    and one of the most popular combinations is Formik and Yup. 
    In this blog, we will explore how Formik and Yup make form validation in React a breeze.`,
    type: "Library",
  },
];

const initialValues = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  phone: Yup.string()
    .matches(phoneRegex, "Invalid contact number!")
    .required("Phone number is required!"),
  email: Yup.string()
    .email("Invalid email address!")
    .required("Email is required!"),
  subject: Yup.string().required("Subject is required!"),
  message: Yup.string().required("Message is required!"),
});

export {
  projectObjArr,
  qualificationObjArr,
  experienceObjArr,
  socialMediaObjArr,
  initialValues,
  validationSchema,
  blogObjArr,
};
