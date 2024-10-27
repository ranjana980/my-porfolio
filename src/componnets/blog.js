import { Fragment } from "react";
import { blogObjArr } from "../utils/constant";
import ProjectCard from "../common/project-card";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();

  const handleClick = (type, route) => {
    navigate(`/blog/${type}/${route}`);
  };

  return (
    <>
      <div >
        <h1 className="mt-3 text-center text-xl font-bold">Blogs</h1>
        <div className="grid xl:grid-cols-4  gap-3  lg:grid-cols-2 mt-4  xl:pl-10 lg:pl-8 xs:pl-12 xl:pr-10 lg:pr-10 ">
          {blogObjArr.map(
            ({ title, image, url, sortDescription, route, type }, index) => (
              <Fragment key={index}>
                <ProjectCard
                  url={url}
                  img={image}
                  title={title}
                  sortDescription={sortDescription}
                  onClick={handleClick}
                  route={route}
                  type={type}
                />
              </Fragment>
            )
          )}
        </div>
      </div>
      <hr className="ml-2 mr-2 mt-5" />
    </>
  );
}
