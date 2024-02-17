import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogObjArr } from "../../utils/constant";

const BlogDetails = () => {
  const { id, technology } = useParams();
  const navigate = useNavigate();

  const handleClick = (type, route) => {
    navigate(`/blog/${type}/${route}`);
  };

  return (
    <div className="grid grid-cols-12  gap-[50px] pl-[60px]">
      <div className="xl:mt-[100px] xs:mt-[119px] xl:col-span-7 lg:col-span-7 sm:col-span-12 md:col-span-12 col-span-12">
        {blogObjArr
          .filter((item) => item.route === id)
          .map(
            ({
              image,
              title,
              subTitle,
              introduction,
              sortTitle,
              sortDescription,
              featuresHeading,
              features,
              benefitsHeading,
              benefits,
              conclusion,
              type,
              route,
            }) => (
              <React.Fragment key={route}>
                <h1 className="mt-4  xl:text-[35px] xs:text-[25px] ml-2 font-semibold text-center">
                  {title}
                </h1>
                <div className="flex justify-center align-item-center mt-5">
                  <img
                    src={image}
                    height={400}
                    width={400}
                    className=" rounded-[5px] p-2 "
                  />
                </div>
                <span className="mt-4  xl:text-[15px] xs:text-[10px] ">
                  <span className="font-semibold">Title: </span> {subTitle}
                </span>
                <p className="mt-3">
                  <span className="font-semibold mb-2">Introduction: </span>
                  <br />
                  {introduction}
                </p>
                <p className="mt-3">
                  <span className="font-semibold mb-2">{sortTitle} </span>{" "}
                  <br />
                  {sortDescription}
                </p>
                <p className="mt-3">
                  <span className="font-semibold mb-2">{featuresHeading} </span>
                  <br />{" "}
                  <ul className="list-decimal ml-3">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </p>
                <p className="mt-3">
                  <span className="font-semibold mb-2">{benefitsHeading} </span>{" "}
                  <br />{" "}
                  <ul className="list-disc ml-3">
                    {benefits.map((benefit, index) => (
                      <li key={index}>
                        {benefit.lable}
                        {benefit.image && (
                          <img src={benefit.image} height={400} width={400} />
                        )}
                      </li>
                    ))}
                  </ul>
                </p>
                <p className="mt-3">
                  <span className="font-semibold mb-2">Conclusion </span> <br />{" "}
                  {conclusion}
                </p>
                <h1 className="mt-3 font-semibold mt-[300px] text-blue-500">
                  {type}
                </h1>
              </React.Fragment>
            )
          )}
      </div>
      <div className="xl:col-span-3 lg:col-span-3 sm:col-span-12 md:col-span-12 col-span-12 xl:mt-[100px] xs:mt-[19px] ml-5">
        <h1 className="mt-3 text-center text-xl font-bold">Related Blogs</h1>
        {blogObjArr.filter(
          (item) => item.route !== id && item.type === technology
        ).length ? (
          <div className="flex flex-col gap-5 mt-4">
            {blogObjArr
              .filter((item) => item.route !== id && item.type === technology)
              .map(({ title, image, sortDescription, route, type }, index) => (
                <Fragment key={index}>
                  <div
                    className="br xs:mt-5 xl:mt-0  p-4  bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] hover:scale-95   w-[450px]  hover:bg-blue-400"
                    onClick={() => handleClick(type, route)}
                  >
                    <img
                      className="br bg-[#ECF0F3]"
                      src={image}
                      height={400}
                      width={400}
                      alt={title}
                    />
                    <h5 style={{ color: "black", textShadow: "1px 1px 1px" }}>
                      {title}
                    </h5>
                    {sortDescription && (
                      <div className=" mt-2 ml-2 text-[14px] ">
                        {sortDescription}
                      </div>
                    )}
                    <h1 className="mt-3 font-semibold mt-[300px] text-blue-500">
                      {type}
                    </h1>
                  </div>
                </Fragment>
              ))}
          </div>
        ): <h1 className="mt-3 text-center ">No More Blog Found Related to this</h1>}
      </div>
    </div>
  );
};

export default BlogDetails;
