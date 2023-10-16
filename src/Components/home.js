import {
  LinkedIn,
  GitHub,
  Instagram,
  Facebook,
  Twitter,
} from "@material-ui/icons";
import Banner from "../assests/images/banner-img.jpg";

function Home() {
  return (
    <div className="Home">
      <div className="row  xs:pl-[0px] xl:pl-10 xl:pr-[15px] xs:pr-[5px] xl:mt-36 xs:mt-[119px] justify-content-between" >
        <div className="col-xs-6 col-sm-6 col-md-5  ">
          <div className="xl:w-[410px] xs:w-[300px] mt-5">
            <h1>WELCOME TO MY PROFILE</h1>
            <h1 className="text-[30px] xl:mt-4 xs:mt-2">
              {" "}
              Hi, I’m Ranjana
              <h1 className="xl:mt-4 xs:mt-2 xl:text-[40px] xs:text-[30px] flex">
                a{" "}
                <h1 className="mt-4 line-1 xl:text-[40px] xs:text-[30px] ml-2 font-semibold">
                  {" "}
                  Software Developer.
                </h1>
              </h1>{" "}
            </h1>
            <div className=" mt-2  xl:text-[17px] xs:text-[17px] xl:mr-[10px] xs:mr-[50px] xl:w-[600px] xs:w-[500px] relative text-start">
              <span>
                {" "}
                I'm a experience frontend developer with over 1 years of
                experience in software industry
              </span>
              <span>
                {" "}
                excellent problem solving skills. I've MERN Stack skills{" "}
              </span>
              <span>
                {" "}
                also to help you to build your personal website with seamless
                customization. I've
              </span>
              <span>
                {" "}
                worked on many complex data management project and I've been
                learning each day. I'm highly proficient
              </span>
              <span>
                {" "}
                in Fronted Development and I have learnt Backend also I use
                Mongodb database with{" "}
              </span>
              <span>
                {" "}
                cluster for db connection I can work and manage from development
                to test to deployment &
              </span>
              <span>
                {" "}
                my another expertise is, I write very clean and readable code.
              </span>
            </div>
            <div className="row col-12 w-100 mt-14 ">
              <div className="flex w-100 justify-content-between ">
                <div className="d-flex">
                  <h1 className="font-bold text-blue-500 xl:text-xl xs:text-[23px]">
                    1
                  </h1>
                  <div className="mt-2">
                    <p>
                      <b>Years of</b>
                    </p>
                    <p>
                      <b>Experience</b>
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <h1 className="font-bold text-blue-500 xl:text-xl xs:text-[23px]">
                    15
                  </h1>
                  <div className="mt-2">
                    <p>
                      <b>Project</b>
                    </p>
                    <p>
                      <b>Completed</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-xs-12 col-sm-12 col-md-5  ">
          <div className="br   xl:p-4 lg:p-4 bg-[#ECF0F3]  drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] xl:h-[450px]   xl:w-[550px] lg:h-[400px]   lg:w-[500px] xs:h-[400px] xs:hidden xs:mt-5 xl:block lg:block">
            <img
              src={Banner}
              className=" xl:h-[420px] xl:w-[520px] lg:h-[360px] lg:w-[500px] border-solid border-[3px] border-blue-500 xs:h-[200px] xs:w-[200px] "
            />
          </div>
          <div className="grid grid-cols-5 w-[370px] gap-1 mt-8 xl:ml-5 xs:ml-1">
            <div className="bg-[#f6f6f6] hover:scale-110 hover:text-[white] hover:bg-blue-500 h-[45px] w-[40px] p-2   rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] ">
              <a
                className="hover:text-white hover:scale-120"
                href="https://www.linkedin.com/in/ranjana-chaudhary-2bb393211/"
                target="_blank"
              >
                <LinkedIn />
              </a>
            </div>
            <div className=" h-[45px] w-[40px] hover:scale-110 hover:text-[white] hover:bg-blue-500  p-2 rounded-md bg-[#ECF0F3]  bg-[#f6f6f6] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] ">
              <a
                className="hover:text-white"
                href="https://github.com/ranjana980"
                target="_blank"
              >
                <GitHub />
              </a>
            </div>
            <div className="bg-[#f6f6f6] hh-[45px] hover:scale-110 hover:text-[white] hover:bg-blue-500  w-[40px] p-2 rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] ">
              <a
                className="hover:text-white hover:scale-120"
                href="https://twitter.com/RanjanaChoudary?t=A7OancGyt0WnrZBOVxrG_w&s=09"
                target="_blank"
              >
                <Twitter />
              </a>
            </div>
            <div className="bg-[#f6f6f6] hh-[45px] hover:scale-110 hover:text-[white] hover:bg-blue-500  w-[40px] p-2 rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] ">
              <a
                className="hover:text-white hover:scale-120"
                href="https://www.instagram.com/ranjanachaudhary_123/"
                target="_blank"
              >
                <Instagram />
              </a>
            </div>
            <div className="bg-[#f6f6f6] hh-[45px] hover:scale-110 hover:text-[white] hover:bg-blue-500  w-[40px] p-2 rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] ">
              <a
                className="hover:text-white hover:scale-120"
                href="https://www.facebook.com/Ranjana24081996?mibextid=ZbWKwL"
                target="_blank"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="xl:mt-[60px] xl:ml-2 xl:mr-2 xs:mt-[40px] " />
    </div>
  );
}
export default Home;
