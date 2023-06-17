import recipe from "../recipe.png";
import figma from "../figma-design.png";
import pokemon from "../Pokemon.png";
import ELearning from '../E-Learning.png'
import ProjectCard from "./project-card";
import cat from '../lotties/89042-girl.json'
export default function About() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cat,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <div className="About">
                <div >

                    <h1
                        className="mt-3 text-center text-xl font-bold"
                    >
                        My Projects
                    </h1>
                    <div className="grid  gap-3 grid-cols-3 mt-4  pl-16 pr-16 ">
                        <ProjectCard
                            url={"https://e-learning-sand.vercel.app/"}
                            img={ELearning}
                            title={"E-Learning"}
                        />
                        <ProjectCard
                            url={"https://react-food-recipe-finder.vercel.app/"}
                            img={recipe}
                            title={"Food Recipe Finder"}
                        />
                        <ProjectCard
                            url={"https://figma-design-l4vx.vercel.app/"}
                            img={figma}
                            title={"Figma Design"}
                        />
                    </div>
                    <div className="grid  gap-3 grid-cols-3 mt-4  pl-16 pr-16 ">
                        <ProjectCard
                            url={"https://pokemon-git-master-ranjana980.vercel.app/"}
                            img={pokemon}
                            title={"Pokemon"}
                        />
                    </div>

                </div >
            </div>

            <hr className='ml-2 mr-2' /></>
    )
}