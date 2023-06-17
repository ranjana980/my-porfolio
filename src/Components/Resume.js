import { Work, CastForEducation } from "@material-ui/icons";
import Qualification from "./qualification-wrapper";
import Skills from "./skills";

export default function MyPortFolio() {
    return (
        <div className="Portfolio ">
            <div className="Main-div">
                <h1
                    className="mt-3 text-center text-[30px] font-bold"
                >
                    My Resume
                </h1>
                <div className="d-flex row">
                    <div className="pl-20">
                        <div className="mt-5 ">
                            <div className="relative left-[24px] mt-2">
                                <CastForEducation
                                    sx={{
                                        fontSize: "30px",
                                    }}
                                />
                            </div>
                            <div className="line"></div>
                            <div className="h-[10px] relative left-[32px] w-[10px] rounded-[50%] bg-[#ECF0F3] border-solid border-[3px] border-blue-500"></div>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12  ">
                        <h1
                            className="text-[20px] ml-[51px] font-bold mb-3"
                        >
                            Education Quality
                        </h1>
                        <Qualification
                            year={"2010 - 2012"}
                            title={"Board of HighSchool and Intermediat Educational"}
                            explaination={
                                <div className=" mt-2 " >
                                    I have completed my HighSchool from Board of HighSchool and
                                    Intermediat Educational with Hindi,English,Arts,Home
                                    Science,History and Economics Subject with 72% Marks.
                                </div>
                            }
                        />
                        <Qualification
                            year={"2012 - 2014"}
                            title={"Board of HighSchool and Intermediat Educational"}
                            explaination={
                                <div className=" mt-2 ">
                                    I have completed my Intermediat from Board of HighSchool and
                                    Intermediat Educational with Hindi,English,Arts,Home Science
                                    and Economics Subject with 66% Marks.
                                </div>
                            }
                        />
                        <Qualification
                            year={"2015 - 2017"}
                            title={"Deen Dayal Upadhyay University of Gorkhpur"}
                            explaination={
                                <div className=" mt-2 ">
                                    I have completed my Bachelor's Degree from Deen Dayal Upadhyay
                                    University of Gorkhpur with Hindi,English and Home Science
                                    Subject with 53% Marks.
                                </div>
                            }
                        />
                        <Qualification
                            year={"2020 - 2021"}
                            title={"Navgurukul"}
                            explaination={
                                <div className=" mt-2 ">
                                    I have completed 1 year residential
                                    program of Software Engineering from Navgurukul. Navgurukul is a non-profit
                                    orgnization which provides scholership to students for their
                                    study and provides placement in IT Companies. I learnt
                                    Python,html,css, JavaScript and Reactjs in Navgurukul Pune campus.
                                </div>
                            }
                        />
                    </div>
                    <div className="col-md-5 col-sm-12 ">
                    <h1
                            className="text-[20px] ml-[151px] font-bold mb-3"
                        >
                           Job Experience
                        </h1>
                        <div className="flex">
                            <div className="pl-20">
                                <div className=" ">
                                    <div className="relative left-[15px] mt-2">
                                        <Work
                                            sx={{
                                                fontSize: "30px",
                                            }}
                                        />
                                    </div>
                                    <div className="line1"></div>
                                    <div className="h-[10px] relative left-[20px] w-[10px] rounded-[50%] bg-[#ECF0F3] border-solid border-[3px] border-blue-500"></div>
                                </div>
                            </div>
                            <Qualification
                                year={"2021 - 2022"}
                                title={"XpressCure Technology"}
                                explaination={
                                    <div className="mt-2">
                                        I have worked 13month in xpressCure technology. I have worked on projects using Html,
                                        Css, JavaScript, React, Redux, Next.js,Bootstrap,Material
                                        Ui,socket.io.I have worked on multiple project in that company like 
                                        online consultation web apps,admin panel and doctor membership portal.
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
                <h1
                    className="mt-5 text-center text-[30px] font-bold"
                >
                   Professional Skills
                </h1>
                <div className="pre-div  mt-3 ml-[60px]">
                    <div className="row">
                        <Skills skill={"Python"} percent={70} />
                        <Skills skill={"JavaScript"} percent={70} />
                        <Skills skill={"Html && Css"} percent={70} />
                    </div>
                    <div className="row ">
                        <Skills skill={"Material Ui"} percent={70} />
                        <Skills skill={"Bootstrap"} percent={70} />
                        <Skills skill={"React"} percent={80} />
                    </div>
                    <div className="row ">
                        <Skills skill={"Redux"} percent={70} />
                        <Skills skill={"NextJs"} percent={80} />
                        <Skills skill={"Agora Web Rtc"} percent={70} />
                    </div>
                    <div className="row ">
                        <Skills skill={"Express js"} percent={40} />
                        <Skills skill={"Mongodb Database"} percent={50} />
                        <Skills skill={"Node js"} percent={50} />
                    </div>
                    <div className="row ">
                        <Skills skill={"Socket.io"} percent={50} />
                        <Skills skill={"Firebase"} percent={50} />
                        <Skills skill={"Github"} percent={70} />
                    </div>
                    <div className="row ">
                        <Skills skill={"Canvas"} percent={70} />
                    </div>
                </div>
            </div>
            <hr className='mt-[58px] ml-2 mr-2' />
        </div>
    );
}
