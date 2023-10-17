import { ArrowForward } from "@material-ui/icons";
import InputComponent from "../common/input-component";
import SocialMedia from "../common/social-media";
import Footer from "./footer";
import { Formik, Form } from "formik";
import { initialValues, validationSchema } from "../utils/constant";

export default function Contact() {
    // const transport = {
    //     secure: true,
    //     service: "gmail",
    //     auth: {
    //         user: "khusheemathur18@gmail.com",
    //         pass: "csgnumadwbgfvcxk"
    //     }
    // }
    // const defaults = {
    //     from: "ranjana20@navgurukul.org",
    // }
    // const WelcomeEmail = ({ firstName }) => ({
    //     subject: `👋 ${firstName}`,
    //     body: (
    //         <div>
    //             <p>Hello {firstName}!</p>
    //             <p>Hope you'll enjoy the package!</p>
    //         </div>
    //     )
    // })
    // const handleSendMail = () => {
    //     mailer.send('WelcomeEmail', { firstName: 'Mathieu' }, {
    //         to: 'ranjana20@navgurukul.org'
    //     })
    // }
    // const mailer = Mailer(
    //     { transport, defaults },
    //     { WelcomeEmail,  }
    // )

  const handleSubmit = (values) => {
    console.log(values, "values");
    
  };
  
  const handleChange = (event, setFieldValue) => {
    setFieldValue(event.target.name, event.target.value);
  };
  return (
    <>
      <div className="xl:flex lg:flex w-100 xl:pl-10 lg:pl-10  xs:pl-[20px] xl:pr-10 lg:pr-10  xs:pr-0 justify-content-between">
        <div className="xl:w-[40%] mt-5 xs:w-[480px]  p-4  bg-[#ECF0F3] drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] rounded-[10px]">
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
          <h3 className="mt-3 text-start">Phone: +916307108245</h3>
          <h6 className="mt-1 text-start">Email: ranjana20@navgurukul.org</h6>
          <SocialMedia />
        </div>
        <div className="xl:w-[45%]   p-4 mt-5  bg-[#ECF0F3]  drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] rounded-[10px]">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {( formik ) => (
              <Form className="grid grid-cols-12">
                <div className="col-span-6">
                  <InputComponent
                    inputType={"input"}
                    label="Your Name"
                    type="text"
                    width="300"
                    name="name"
                    required
                    formik={formik}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6 ml-2">
                  <InputComponent
                    inputType={"input"}
                    label="Contact Number"
                    type="text"
                    width="300"
                    name="phone"
                    required
                    formik={formik}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-12 mt-4">
                  <InputComponent
                    inputType={"input"}
                    label="Email"
                    type="text"
                    width="600"
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
                    width="600"
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
                    width="600"
                    name="message"
                    required
                    formik={formik}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#ECF0F3] mt-5 xs:w-[430px]  drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] xl:w-[610px] p-2 mt-3 rounded-[4px] hover:bg-blue-500 hover:text-white hover:scale-15"
                >
                  Send Message <ArrowForward />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
}
