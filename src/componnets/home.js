import Banner from "../assests/images/banner-img.jpg";
import SocialMedia from "../common/social-media";

function Home() {
  return (
    <div className="Home  !px-5 ">
     <div className="mx-auto max-w-[1441px]">
     <div className="grid lg:grid-cols-2 grid-col-1  xl:mt-22 xs:mt-[119px]">
        <div>
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
            <p className=" mt-2  xl:text-[17px] xs:text-[17px] xl:mr-[10px] xs:mr-[50px] lg:w-[600px] w-[425px] relative text-start">
              I am an experienced frontend developer with over 2 year of
              dedicated service in the software industry. My work experience has
              honed my problem-solving skills, and I bring to the table a strong
              proficiency in the frontend development. If you're looking to create a
              personalized website with seamless customization, I can help make
              that a reality. During my tenure, I've actively participated in
              numerous complex data management projects, where I've learned and
              grown with each endeavor. While frontend development is my core
              strength, I've also delved into backend development, working with
              MongoDB and even configuring database clusters for robust
              connections. One of my key strengths lies in managing projects
              from development through testing and deployment, ensuring a smooth
              transition from inception to a live, functioning application. In
              addition to my technical skills, I take pride in writing clean,
              readable code that not only performs well but is easily
              maintainable.
            </p>
            <div className="row col-12 w-100 mt-14 ">
              <div className="flex w-100 justify-content-between ">
                <div className="d-flex">
                  <h1 className="font-bold text-blue-500 xl:text-xl xs:text-[23px]">
                    2
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
        <div>
          <div className="br xl:p-4 lg:p-4 xl:w-[700px] relative lg:w-[500px] xs:mt-5">
            <img
              src={Banner}
              className=" xl:h-[493px]  lg:h-[360px]  xs:h-[200px]  rounded"
            />
            <div className="absolute md:bottom-10 bottom-5 ml-[10px]">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <hr className="xl:mt-[60px] xl:ml-2 xl:mr-2 xs:mt-[40px] " />
     </div>
    </div>
  );
}
export default Home;
