import ELearning from "../assests/images/e-learning.png";
import Recipe from "../assests/images/recipe.png";
import Figma from "../assests/images/figma-design.png";
import Pokemon from "../assests/images/pokemon.png";
import NextJs from "../assests/images/Nextjs.png";
import ReactQuery from "../assests/images/react-query.jpg";
import Prismic from "../assests/images/prismic.png";
import Redux from "../assests/images/redux.jpg";
import Formik from "../assests/images/formikYup.png";
import FormikImage1 from "../assests/images/formik-img1.png";
import ReactQueryImage1 from '../assests/images/react-query-img1.png'
import ReactQueryImage2 from '../assests/images/react-query-img2.png'
import ReactQueryImage3 from '../assests/images/react-query-img3.png'
import Jwellery from '../assests/images/jwellery-webpage.png'
import AdminPanel from '../assests/images/admin-panel.png'
import SocialMedia from "../assests/images/sociel-media.png";

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
    url: "https://mg-jewellers.vercel.app/",
    projectImg: Jwellery,
    title: "Jwellery WebPage",
  },
  {
    url: "https://admin-dashboard-sigma-nine.vercel.app/",
    projectImg: AdminPanel,
    title: "Admin Panel",
  },
  {
    url: "https://user-app-brown.vercel.app/UserPage",
    projectImg:SocialMedia ,
    title: "Sociel User App",
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
    subTitle: "Exploring Next.js: The Future of React Frameworks",
    introduction:
      "In the world of web development, staying ahead of the curve is crucial. With evolving user expectations and technological advancements, developers need tools that streamline their workflow, enhance performance, and boost productivity. Next.js, a React framework, has emerged as a game-changer, offering a powerful solution for building modern web applications. In this blog post, we'll delve into the world of Next.js, exploring its features, benefits, and why it's shaping the future of web development.",
    sortTitle: "What is Next.js?",
    sortDescription: `Next.js is a React framework that enables developers to build server-rendered React applications with ease. Developed by Vercel, it offers a comprehensive solution for creating dynamic, performant web experiences. Next.js combines the simplicity and flexibility of React with powerful features such as server-side rendering (SSR), static site generation (SSG), automatic code splitting, and routing, making it an ideal choice for building everything from simple websites to complex web applications.`,
    featuresHeading: "Key Features of Next.js:",
    features: [
      "Server-side Rendering (SSR): Next.js allows developers to render React components on the server, delivering faster initial page loads and improved SEO. With SSR, users receive fully rendered HTML content, enhancing the overall performance and accessibility of web applications.",
      "Static Site Generation (SSG): In addition to SSR, Next.js supports static site generation, where pages are pre-built at build time. This approach provides even faster loading speeds and enables developers to create highly optimized, SEO-friendly websites.",
      "Automatic Code Splitting: Next.js automatically splits JavaScript bundles based on the pages in your application, ensuring that users only download the code they need. This results in smaller bundle sizes and faster page loads, particularly beneficial for large-scale applications.",
      "Built-in Routing: Next.js includes a simple yet powerful routing system that allows developers to define dynamic routes and handle navigation seamlessly. With support for nested routes, dynamic parameters, and client-side navigation, building complex navigation structures becomes effortless.",
      "API Routes: Next.js provides built-in support for creating API routes, allowing developers to define server-side endpoints within their application. This enables seamless integration with backend services and facilitates data fetching and processing.",
    ],
    benefitsHeading: "Benefits of Using Next.js:",
    benefits: [
      {
        lable:
          "Improved Performance: By leveraging server-side rendering, static site generation, and automatic code splitting, Next.js delivers superior performance and faster loading times, resulting in a smoother user experience.",
        image: false,
      },
      {
        lable:
          "Enhanced SEO: With server-side rendering and static site generation, Next.js ensures that search engines can crawl and index content effectively, improving the visibility and discoverability of web applications.",
        image: false,
      },
      {
        lable:
          "Simplified Development Workflow: Next.js offers a streamlined development experience with features like hot module replacement, fast refresh, and zero configuration. Developers can focus on building features rather than dealing with complex setup and configuration.",
        image: false,
      },
      {
        lable:
          "Scalability: Whether you're building a small website or a large-scale application, Next.js scales effortlessly to meet your needs. Its flexible architecture and performance optimizations make it suitable for projects of any size and complexity.",
        image: false,
      },
      {
        lable:
          "Community and Ecosystem: Next.js boasts a vibrant community of developers and a rich ecosystem of plugins, libraries, and tools. With extensive documentation, tutorials, and support resources, getting started with Next.js is easy, and developers can benefit from shared knowledge and best practices.",
        image: false,
      },
    ],
    conclusion:
      "In conclusion, Next.js represents the future of React frameworks, offering a powerful solution for building modern web applications. With its comprehensive feature set, including server-side rendering, static site generation, automatic code splitting, and built-in routing, Next.js empowers developers to create high-performance, SEO-friendly web experiences with ease. Whether you're building a simple website or a complex web application, Next.js provides the tools and capabilities you need to succeed in today's competitive landscape. Embrace Next.js and unlock the full potential of React development.",
    type: "Technology",
    route: 'next-js'
  },
  {
    image: ReactQuery,
    title: "React Query",
    subTitle:
      "Exploring React-Query: The Ultimate Tool for Data Fetching in React",
    introduction:
      "In the world of web development, managing asynchronous data fetching and state can be quite challenging. React, with its component-based architecture, has revolutionized the way we build user interfaces. However, handling data fetching efficiently in React applications often involves writing complex code and managing various states. This is where React-Query comes to the rescue. React-Query is a powerful library that simplifies data fetching and state management for React applications. In this blog post, we'll delve into what React-Query is, its key features, and how it can streamline data fetching in your React projects.",
    sortDescription: `React-Query is a library for managing, caching, synchronizing, and updating server state in React applications. It provides hooks and utilities to fetch and manage data from APIs, databases, or any other external data sources. Unlike traditional state management libraries like Redux, React-Query is specifically designed to handle asynchronous data fetching and caching.`,
    featuresHeading: "Key Features of React-Query:",
    features: [
      "Declarative Data Fetching: React-Query allows you to declaratively fetch data using hooks such as useQuery. This simplifies the process of fetching data and eliminates the need for writing boilerplate code for managing loading states, error handling, and caching.",
      "Automatic Caching: React-Query automatically caches fetched data in memory, providing a seamless caching mechanism out of the box. This helps improve performance and reduces unnecessary network requests, as the library intelligently manages data caching based on usage patterns.",
      "Query Invalidation and Refetching: React-Query provides built-in mechanisms for invalidating and refetching queries. This allows you to easily update data in response to user actions or external events without having to manually manage cache invalidation and data refetching logic.",
      "Pagination and Infinite Loading: React-Query offers built-in support for pagination and infinite loading, making it easy to implement features such as scrolling lists with large datasets. The library handles the complexity of managing pagination state and fetching additional data as needed.",
      "Optimistic Updates: With React-Query, you can perform optimistic updates to the UI while waiting for server responses. This provides a smoother user experience by immediately reflecting user actions in the UI and later updating it based on the actual server response.",
    ],
    benefitsHeading: "Getting Started with React-Query:",
    benefits: [
      {
        lable:
          "To start using React-Query in your React project, you can install it via npm or yarn:",
        image: ReactQueryImage1,
      },
      {
        lable: "or",
        image: ReactQueryImage2,
      },
      {
        lable:
          "Once installed, you can start using React-Query hooks in your components. Here's a simple example of fetching data using useQuery hook:",
        image: ReactQueryImage3,
      },
      {
        lable:
          "In this example, useQuery hook fetches data from /api/todos endpoint and manages loading and error states automatically.",
        image: false,
      },
    ],
    conclusion:
      "React Query is a powerful tool for simplifying state management and data fetching in React applications. By abstracting away the complexities of asynchronous data handling, React Query allows developers to focus on building great user experiences without getting bogged down by boilerplate code./nWhether you're building a small personal project or a large-scale enterprise application, React Query can significantly enhance your development workflow and productivity. With its intuitive API, automatic caching, and seamless integration with React, React Query is undoubtedly a valuable addition to any React developer's toolkit.",
    type: "Library",
    route: 'react-query'
  },
  {
    image: Prismic,
    title: "Prismic",
    subTitle: "Exploring Prismic CMS: A Dynamic Content Management Solution",
    introduction:
      "In the ever-evolving landscape of web development, content management systems (CMS) play a pivotal role in empowering developers and content creators to build and manage digital experiences efficiently. Among the plethora of CMS options available, Prismic stands out as a versatile and dynamic solution that caters to the needs of modern web projects. In this blog post, we'll delve into what Prismic CMS offers, its key features, benefits, and why it's gaining popularity among developers.",
    sortDescription: `Prismic CMS is a headless CMS that provides a backend infrastructure for managing content, while allowing developers the flexibility to design and build the frontend using their preferred frameworks and tools. Unlike traditional CMS platforms, Prismic decouples content management from content presentation, enabling developers to create highly customizable and dynamic websites, mobile apps, and other digital experiences.`,
    featuresHeading: "Key Features of Prismic CMS:",
    features: [
      "Structured Content Modeling: Prismic allows users to define custom content types and structures using its intuitive content modeling interface. This enables content creators to organize and manage content in a way that best suits their project requirements.",
      "Content Slices: One of Prismic's standout features is Content Slices, which enables modular content creation. Content Slices are reusable components that can be easily added, rearranged, and customized within pages or templates, providing flexibility and efficiency in content management.",
      "Content Relationship Management: Prismic supports the creation of complex content relationships, allowing content creators to establish connections between different pieces of content. This feature is particularly useful for building interconnected websites with related articles, product recommendations, or multimedia content.",
      "Content Versioning and Revision History: Prismic keeps track of content changes with its versioning and revision history feature. This ensures that content creators can revert to previous versions of content if needed, providing a safety net against accidental changes or content loss.",
      "Multi-language Support: For projects targeting a global audience, Prismic offers robust multi-language support, allowing content to be easily translated and localized for different regions and languages.",
      "API-driven Architecture: Being a headless CMS, Prismic provides content via a RESTful API or GraphQL, enabling seamless integration with any frontend technology or platform. This flexibility empowers developers to build dynamic and interactive user experiences using their preferred frameworks and tools.",
    ],
    benefitsHeading: "Benefits of Using Prismic CMS:",
    benefits: [
      {
        lable:
          "Flexibility and Customization: Prismic's headless architecture gives developers the freedom to design and implement frontend experiences without constraints imposed by traditional CMS platforms. This flexibility enables the creation of unique and tailored digital experiences.",
        image: false,
      },
      {
        lable:
          "Improved Collaboration: With its user-friendly interface and collaborative workflow features, Prismic fosters efficient collaboration between content creators, developers, and other stakeholders involved in the content creation process.",
        image: false,
      },
      {
        lable:
          "Faster Time-to-Market: By streamlining content management tasks and providing powerful tools for content creation and organization, Prismic helps accelerate development cycles, allowing teams to bring new digital experiences to market more quickly and efficiently.",
        image: false,
      },
      {
        lable:
          "Scalability and Performance: Prismic's cloud-based infrastructure ensures scalability and reliability, capable of handling projects of any size and complexity. Additionally, its CDN-powered content delivery ensures optimal performance and fast loading times for end-users worldwide.",
        image: false,
      },
      {
        lable:
          "Cost-effectiveness: Prismic offers flexible pricing plans suitable for projects of all sizes, including a generous free tier for small projects and startups. This makes it an attractive option for businesses looking to optimize costs without compromising on features or functionality.",
        image: false,
      },
    ],
    conclusion:
      "Prismic CMS offers a modern and versatile solution for managing digital content, empowering developers and content creators to build dynamic and engaging web experiences. With its flexible architecture, intuitive interface, and powerful features, Prismic is gaining popularity among businesses and developers seeking a scalable and customizable CMS solution. /nWhether you're building a corporate website, an e-commerce platform, or a content-rich application, Prismic provides the tools and capabilities to bring your vision to life efficiently and effectively. As the digital landscape continues to evolve, Prismic remains at the forefront, helping teams deliver compelling and immersive digital experiences to audiences worldwide.",
    type: "CMS",
    route: 'prismic'
  },
  {
    image: Redux,
    title: "Redux",
    subTitle: "Exploring Redux: Managing State in React Applications",
    introduction:
      "In the world of web development, managing state efficiently is crucial for building scalable and maintainable applications. As React applications grow in complexity, handling state becomes increasingly challenging. This is where Redux comes into play. Redux is a predictable state container for JavaScript applications, particularly well-suited for managing application state in React applications. In this blog post, we'll delve into Redux, exploring its core concepts, benefits, and why it's a popular choice for state management in React applications.",
    sortDescription: `Redux is based on three fundamental principles: single source of truth, state is read-only, and changes are made with pure functions. At its core, Redux stores the entire application state in a single JavaScript object called the "store". The state within the store is immutable, meaning it cannot be changed directly. Instead, to modify the state, you dispatch actions to the store. Actions are plain JavaScript objects that describe the intention to change the state. Reducers are pure functions responsible for handling these actions and producing the next state of the application.`,
    featuresHeading: "Core Concepts of Redux:",
    features: [
      "Store: The store holds the application state and provides methods to access the state, dispatch actions, and subscribe to changes. It's typically created using the createStore() function from Redux.",
      "Actions: Actions are plain JavaScript objects that represent events or updates in the application. They must have a type property indicating the type of action being performed. Additional data can be included in the action payload.",
      "Reducers: Reducers are pure functions that specify how the application's state changes in response to actions. They take the current state and an action as arguments and return the next state of the application.",
      "Middleware: Middleware provides a third-party extension point between dispatching an action and the moment it reaches the reducer. It's commonly used for logging, asynchronous actions, and more.",
    ],
    benefitsHeading: "Benefits of Using Redux:",
    benefits: [
      {
        lable:
          "Centralized State Management: Redux provides a single source of truth for the entire application state, making it easier to manage and debug.",
        image: false,
      },
      {
        lable:
          "Predictable State Updates: Since state mutations are handled in a predictable manner through reducers, debugging and testing become more straightforward.",
        image: false,
      },
      {
        lable:
          "Time-Travel Debugging: Redux DevTools allow developers to trace and replay state changes, enabling powerful debugging capabilities.",
        image: false,
      },
      {
        lable:
          "Ecosystem and Community: Redux has a vast ecosystem of middleware, tools, and extensions, along with a supportive community that contributes to its ongoing development and improvement.",
        image: false,
      },
    ],
    conclusion:
      "Redux has become a staple in the React ecosystem, offering a robust solution for managing state in complex applications. By embracing Redux's principles of single source of truth, immutable state, and pure functions, developers can build scalable and maintainable React applications with ease. Whether you're working on a small project or a large-scale application, Redux provides the tools and patterns necessary to handle state effectively. So, if you're looking to level up your React development game, consider incorporating Redux into your toolkit.",
    type: "Library",
    route: 'redux'
  },
  {
    image: Formik,
    title: "Formik & Yup",
    subTitle: "Mastering Form Management with Formik and Yup",
    introduction: "In modern web development, creating forms is an essential task, whether you're building a simple contact form or a complex multi-step wizard. However, managing form state, validation, and submission can quickly become cumbersome and error-prone. Thankfully, tools like Formik and Yup come to the rescue, offering a streamlined approach to form management in React applications. In this blog post, we'll explore how Formik and Yup work together to simplify form development and enhance user experience.",
    sortDescription: `Formik is a popular form library for React that helps developers handle form state, validation, and submission with ease. It provides a simple API to manage form values, errors, touched fields, and form submission. Formik also integrates seamlessly with React components, making it easy to build forms using familiar patterns. n/Yup, on the other hand, is a JavaScript schema validation library that works well with Formik. It allows you to define validation schemas for your form fields using a concise and expressive syntax. With Yup, you can enforce rules such as required fields, minimum and maximum lengths, email validation, and more.`,
    featuresHeading: "Combining Formik and Yup:",
    features: [
      "Formik Form Component: Formik provides a <Formik> component that acts as a container for your form. It handles the form state, validation, and submission logic behind the scenes. You can wrap your form components with <Formik> and pass props like initialValues, onSubmit, and validationSchema to configure its behavior.",
      "Validation with Yup: Yup allows you to define validation schemas for your form fields. You can create a Yup schema using the yup.object() method and add validation rules using chainable methods like required(), min(), max(), email(), etc. Once you've defined your schema, you can pass it to Formik's validationSchema prop to enable automatic validation.",
      "Handling Form Submission: Formik simplifies form submission by providing an onSubmit callback that receives the form values as an argument. Inside this callback, you can perform any necessary actions, such as making API requests, updating state, or displaying success messages. Formik also takes care of resetting the form state after submission.",
    ],
    benefitsHeading: "Example Code:",
    benefits: [
      {
        lable:
          "Let's see a simple example of how to use Formik and Yup to create a login form:",
        image: FormikImage1,
      },
    ],
    conclusion:
      "Formik and Yup provide a powerful combination for simplifying form management in React applications. By leveraging Formik's intuitive API and Yup's schema validation capabilities, developers can create robust and user-friendly forms with ease. Whether you're building a simple login form or a complex data-entry interface, Formik and Yup have got you covered, enabling you to focus on delivering great user experiences without getting bogged down by form-related complexities.",
    type: "Library",
    route: 'formik-yup'
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
