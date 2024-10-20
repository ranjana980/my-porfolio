import { projectObjArr } from "../utils/constant";
import ProjectCard from "../common/project-card";
import { Fragment } from "react";

export default function ProjectListing() {
  return (
    <>
      <div>
        {projectObjArr?.map(({title:projectTitle,projects})=><div>
        <h1 className="mt-3 text-center text-xl font-bold">{projectTitle}</h1>
        <div className="grid lg:grid gap-5 xl:grid-cols-3 lg:grid-cols-2 mt-4 xl:grid-cols-4  xl:pl-10 lg:pl-8 xs:pl-12 xl:pr-10 lg:pr-10 ">
          {projects?.map(({ title, projectImg, url }, index) => (
            <Fragment key={index}>
              <ProjectCard url={url} img={projectImg} title={title} />
            </Fragment>
          ))}
        </div>
        </div>)}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="hover:bg-[#ECF0F3] hover:text-black  bg-blue-500 flex justify-center mt-5 p-2 xs:w-[430px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] xl:w-[210px] rounded-lg p-2 rounded-[4px]  hover:text-white hover:scale-105"
        >
          View All Projects
        </button>
      </div>
      <hr className="ml-2 mr-2 mt-5" />
    </>
  );
}
