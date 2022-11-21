import Footer from './Footer';
import { TextField, TextareaAutosize } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function Contact() {
    return (
        <div>
            <div className="Contact">
                <div className="row p-md-5 p-sm-5 " >
                    <div className="col-md-6 col-sm-12">
                        <div className='contact-div' ><h6>My </h6><h6 style={{ marginTop: '13px',left:'10px' }} className="line-1">Contact</h6>
                        </div>
                        <h2 style={{  textAlign: 'start',textShadow: '2px 2px 4px #000000'  }}>Contact Me</h2>
                        <div style={{ textAlign: 'start',color:'white' }}>
                            If you have any suggestion, project or
                            even you want to say
                            <br />“hello”, please fill out
                            the form below and I will reply you <br />shortly.
                        </div>
                        <h3 style={{ textAlign: 'start', marginTop: '20px', color: 'rgb(0, 123, 255)', textShadow: '1px 1px 1px  #000000' }}>Gomti Nagar Parijat Apartment Lucknow</h3>
                        <h3 style={{ textAlign: 'start', marginTop: '25px',color:'white' }}>+919336739974</h3>
                        <h6 style={{ textAlign: 'start', marginTop: '25px', color: 'orange', textShadow: '1px 1px 1px  #000000' }}>ranjana20@navgurukul.org</h6>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-5 col-sm-8 mr-sm-5 mr-md-5 ml-md-2">
                                <TextField  id="standard-basic" label="Name" className='input2' variant="standard" />
                            </div>
                            <div className="col-md-4 mr-md-2 col-sm-8 mr-sm-5">
                                <TextField  id="standard-basic" label="Email" className=' input2' variant="standard" />
                            </div>
                            <div className='col-md-10 col-sm-8 mr-md-4'>
                                <TextField  id="standard-basic" label="Subject" className='input input2' variant="standard" />
                            </div>
                            <div className='col-md-12 col-sm-8  '>
                                <p className="ml-md-5 mt-md-5 mt-sm-4" style={{  textAlign: 'start',  }}>Message</p>
                                <TextareaAutosize className="mr-md-3 mt-md-2 mt-sm-1 input1"  id="standard-basic" label="Message"  minRows={3} variant="standard" />
                            </div>
                            <div className='col-md-6 col-sm-8'><div className='d-flex Resume mr-5' >
                               <h5>Send Message</h5>  <MailOutlineIcon style={{color:'white',marginLeft:'7px',marginTop:'10px'}}/>
                            </div></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
          
        </div>


    )
}