import { ArrowForward } from "@material-ui/icons";
import InputComponent from "../common/input-component";
import SocialMedia from "../common/social-media";
import { Formik, Form } from "formik";
import { initialValues, validationSchema } from "../utils/constant";
// import axios from "axios";
// const nodemailer = require("nodemailer");

export default function Contact({ handleNotify }) {


  // const transporter = nodemailer.createTransport({
  //   service: "Gmail", // Use your email service provider
  //   auth: {
  //     user: "ranjana20@navgurukul.org",
  //     pass: "krvo neoq uzgj jang",
  //   },
  // });
  const handleSubmit = async (values) => {
    // const mailOptions = {
    //   from: values.email,
    //   to: "rc6307108245@gmail.com",
    //   subject: values.subject,
    //   html: `
    //   <html>
    //   <head>${values.name}</head>
    //   <body>
    //     <h1>Name: ${values.name}</h1>
    //     <p>Message: ${values.message}</p>
    //     <b>Contact Number: ${values.phone}</b>
    //   </body>
    //   </html>
    // `,
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     handleNotify("error",error.message)
    //   } else {
    //     // console.log("Email sent: " + info.response);
    //     handleNotify("success","Email sent: " + info.response)
    //   }
    // });
    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/send-email",
    //     values
    //   );
    //   handleNotify("success",response.data.message)
    // } catch (error) {
    //   handleNotify("error",error.message)
    // }
  };

  const handleChange = (event, setFieldValue) => {
    setFieldValue(event.target.name, event.target.value);
  };

  return (
    <>
      <div className="xl:flex lg:flex w-100 xl:pl-10 lg:pl-10  xs:pl-[20px] xl:pr-10 lg:pr-10  xs:pr-0 justify-content-between">
        <div className="xl:w-[45%] mt-5 xs:w-[415px]  p-4  bg-[#ECF0F3] drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] rounded-[10px]">
          <img
            src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
            className="w-[700px]"
          />
          <h1 className="text-[20px] mt-4 font-bold mb-3">Contact Details</h1>
          <div style={{ textAlign: "start" }}>
            If you have any suggestion, project or even you want to say
            <br />
            “hello”, please fill out the form below and I will reply you <br />
            shortly.
          </div>
          <h3 className="mt-3 text-start cursor-pointer">
            Phone: <a href="tel:+916307108245">+916307108245</a>
          </h3>
          <h6 className="mt-1 text-start cursor-pointer">
            Email: <a href="mailto:ranjana36389@gmail.com">ranjana36389@gmail.com</a>
          </h6>
          <SocialMedia />
        </div>
        <div className="xl:w-[45%] mt-5 xs:w-[415px]  p-4  bg-[#ECF0F3] drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] rounded-[10px]">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="grid grid-cols-12">
                  <div className="col-span-6">
                    <InputComponent
                      inputType="input"
                      label="Your Name"
                      type="text"
                      name="name"
                      required
                      formik={formik}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-6 ml-2">
                    <InputComponent
                      inputType="input"
                      label="Contact Number"
                      type="text"
                      name="phone"
                      required
                      formik={formik}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-span-12 mt-4">
                  <InputComponent
                    inputType="input"
                    label="Email"
                    type="text"
                    name="email"
                    required
                    formik={formik}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-12 mt-4">
                  <InputComponent
                    inputType={"input"}
                    label="Subject"
                    type="text"
                    name="subject"
                    required
                    formik={formik}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-12 mt-4">
                  <InputComponent
                    inputType={"textArea"}
                    label="Message"
                    type="text"
                    name="message"
                    required
                    formik={formik}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#ECF0F3] flex justify-self-center w-max  drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] px-28 py-2 mt-3 rounded-[4px] hover:bg-blue-500 hover:text-white hover:scale-15"
                >
                  Send Message <ArrowForward />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
