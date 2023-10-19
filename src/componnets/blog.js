import { Fragment } from "react";
import { blogObjArr } from "../utils/constant";
import ProjectCard from "../common/project-card";

export default function Blog() {
  return (
    <>
      {" "}
      <div>
        <h1 className="mt-3 text-center text-xl font-bold">Blogs</h1>
        <div className="xl:grid lg:grid gap-3 xl:grid-cols-3 lg:grid-cols-2 mt-4  xl:pl-10 lg:pl-8 xs:pl-12 xl:pr-10 lg:pr-10 ">
          {blogObjArr.map(({ title, image, url ,sortDescription}, index) => (
            <Fragment key={index}>
              <ProjectCard url={url} img={image} title={title} sortDescription={sortDescription}/>
            </Fragment>
          ))}
        </div>
      </div>
      <hr className="ml-2 mr-2 mt-5" />
    </>
  );
}
