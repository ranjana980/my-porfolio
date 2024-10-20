import { Work, CastForEducation } from "@material-ui/icons";
import Qualification from "../common/qualification-wrapper";
import Skills from "./skills";
import { experienceObjArr, qualificationObjArr, skillsData } from "../utils/constant";
import { Fragment } from "react";
import { formatTitle } from "../utils/helper-function";

export default function Resume() {
  return (
    <div className="Portfolio ">
      <div className="Main-div">
        <h1 className="mt-3 text-center text-[30px] font-bold">My Resume</h1>
        <div className="xl:flex xl:row lg:row lg:flex xl:pl-10 xs:pl-[0px] xl:pr-10 xs:pr-[0px] justify-content-between">
          <div className=" flex">
            <div className="mt-5 ">
              <div className="relative  mt-2">
                <CastForEducation
                  sx={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <div className="line "></div>
              <div className="h-[10px] relative left-[17px] w-[10px] rounded-[50%] bg-[#ECF0F3] border-solid border-[3px] border-blue-500"></div>
            </div>
            <div className="mt-[55px]">
              <h1 className="text-[20px] xl:ml-[51px] xs:ml-[28px] font-bold xl:mb-3 xs:mb-1">
                Education Quality
              </h1>
              {qualificationObjArr.map(
                ({ title, year, describe, marks }, index) => (
                  <Fragment key={index}>
                    <Qualification
                      year={year}
                      title={title}
                      explaination={
                        <div className=" mt-2 text-[14px] ">
                          {describe}
                          <div className="float-right text-[12px] mt-[10px]">
                            <b className="ml-[10px] font-bold">Marks:</b>
                            <span className="ml-[10px] ">{marks}</span>
                          </div>
                        </div>
                      }
                    />
                  </Fragment>
                )
              )}
            </div>
          </div>
          <div className="flex ">
            <div className="mt-5 ">
              <div className="relative left-[12px] mt-2">
                <Work
                  sx={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <div className="line1"></div>
              <div className="h-[10px] relative left-[17px] w-[10px] rounded-[50%] bg-[#ECF0F3] border-solid border-[3px] border-blue-500"></div>
            </div>
            <div className="mt-[55px]">
              <h1 className="text-[20px] xl:ml-[51px] xs:ml-[28px] font-bold xl:mb-3 xs:mb-1">
                Job Experience
              </h1>
              {experienceObjArr.map(({ title, year, describe }, index) => (
                <Fragment key={index}>
                  <Qualification
                    year={year}
                    title={title}
                    explaination={<div className=" mt-2 text-[14px] ">{describe}</div>}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <h1 className="mt-5 xl:text-center xs:ml-[20px] text-[30px] font-bold">
          Professional Skills
        </h1>
        <div className="xl:ml-[150px] xl:flex gap-10 lg:flex lg:w-[90%] xl:w-[80%] xs:w-[100%] justify-content-between mt-5 xs:ml-[25px]">
          {Object.entries(skillsData).map(([key,values])=>(
            <div className="xl:w-[30%] lg:w-[30%]">
            <h3 className="font-bold capitalize">{formatTitle(key)}</h3>
           <div className="mt-4 flex flex-col gap-2"> 
            {values.map((item)=>(
             <Skills skill={item?.skill} percent={item?.percent} />
           ))}</div>
          </div>
          ))}
        </div>
      </div>
      <hr className="mt-[58px] ml-2 mr-2" />
    </div>
  );
}
