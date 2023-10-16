import { projectObjArr } from "../utils/constant";
import ProjectCard from "../common/project-card";

export default function Projects() {
  return (
    <>
      <div>
        <h1 className="mt-3 text-center text-xl font-bold">My Projects</h1>
        <div className="xl:grid lg:grid gap-3 xl:grid-cols-3 lg:grid-cols-2 mt-4  xl:pl-10 lg:pl-8 xs:pl-12 xl:pr-10 lg:pr-10 ">
          {projectObjArr.map(({ title, projectImg, url }) => (
            <ProjectCard
              url={url}
              img={projectImg}
              title={title}
            />
          ))}
        </div>
      </div>
      <hr className="ml-2 mr-2 mt-5" />
    </>
  );
}
