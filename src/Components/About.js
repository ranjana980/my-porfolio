import React from 'react';

import recipe from "../assests/images/recipe.png";
import figma from "../assests/images/figma-design.png";
import pokemon from "../assests/images/Pokemon.png";
import ELearning from '../assests/images/E-Learning.png'
import ProjectCard from "./project-card";

export default function About() {
   
    return (
        <>
            <div>
                <h1
                    className="mt-3 text-center text-xl font-bold"
                >
                    My Projects
                </h1>
                <div className="xl:grid lg:grid gap-3 xl:grid-cols-3 lg:grid-cols-2 mt-4  xl:pl-16 lg:pl-8 xs:pl-12 xl:pr-16 lg:pr-16 ">
                    <ProjectCard
                        url="https://e-learning-sand.vercel.app/"
                        img={ELearning}
                        title="E-Learning"
                    />
                    <ProjectCard
                        url="https://react-food-recipe-finder.vercel.app/"
                        img={recipe}
                        title="Food Recipe Finder"
                    />
                    <ProjectCard
                        url="https://figma-design-l4vx.vercel.app/"
                        img={figma}
                        title="Figma Design"
                    />
                     <ProjectCard
                        url="https://pokemon-git-master-ranjana980.vercel.app/"
                        img={pokemon}
                        title="Pokemon"
                    />
                </div>
            </div >
            <hr className='ml-2 mr-2 mt-5' />
        </>
    )
}