import React from 'react';
import { LinkedIn, GitHub, Instagram, Facebook, Twitter, ArrowForward } from '@material-ui/icons';
import Footer from './Footer';


export default function Contact() {
  

    return (
       
            < >
                <div className="xl:flex lg:flex xl:ml-[70px] lg:ml-[30px] w-[100%] xs:ml-[40px]" >
                    <div className="xl:w-[400px] mt-5 xs:w-[480px]  p-4  bg-[#ECF0F3] drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] rounded-[10px]">
                        <img src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png" alt="contact" />
                        <h1
                            className="text-[20px] mt-4 font-bold mb-3"
                        >
                            Contact Details
                        </h1>
                        <div style={{ textAlign: 'start' }}>
                            If you have any suggestion, project or
                            even you want to say
                            <br />“hello”, please fill out
                            the form below and I will reply you <br />shortly.
                        </div>
                        <h3 className='mt-3 text-start'>Phone: +916307108245</h3>
                        <h6 className='mt-1 text-start'>Email: ranjana20@navgurukul.org</h6>
                        <div className='grid grid-cols-5 w-[300px] gap-1 mt-8 '>
                            <div className='bg-[#f6f6f6] hover:scale-110 hover:text-[white] hover:bg-blue-500 hh-[45px] w-[40px] p-2   rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] '>
                                <a className='hover:text-white hover:scale-120' href='https://www.linkedin.com/in/ranjana-chaudhary-2bb393211/' target='_blank' rel="noreferrer">
                                    <LinkedIn />
                                </a>
                            </div>
                            <div className=' h-[45px] w-[40px] hover:scale-110 hover:text-[white] hover:bg-blue-500  p-2 rounded-md bg-[#ECF0F3]  bg-[#f6f6f6] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] '>
                                <a className='hover:text-white' href='https://github.com/ranjana980' target="_blank" rel="noreferrer"><GitHub /></a>
                            </div>
                            <div className='bg-[#f6f6f6] hh-[45px] hover:scale-110 hover:text-[white] hover:bg-blue-500  w-[40px] p-2 rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] '>
                                <a className='hover:text-white hover:scale-120'
                                    href="https://twitter.com/RanjanaChoudary?t=A7OancGyt0WnrZBOVxrG_w&s=09"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Twitter />
                                </a>
                            </div>
                            <div className='bg-[#f6f6f6] hh-[45px] hover:scale-110 hover:text-[white] hover:bg-blue-500  w-[40px] p-2 rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] '>
                                <a className='hover:text-white hover:scale-120' href="https://www.instagram.com/ranjanachaudhary_123/" target="_blank" rel="noreferrer"><Instagram /></a>
                            </div>
                            <div className='bg-[#f6f6f6] hh-[45px] hover:scale-110 hover:text-[white] hover:bg-blue-500  w-[40px] p-2 rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] '>
                                <a className='hover:text-white hover:scale-120' href="https://www.facebook.com/Ranjana24081996?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><Facebook /></a>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-[45%] xs:w-[480px]  xl:ml-44 lg:ml-[20px] xs:ml-[0px] p-4 mt-5  bg-[#ECF0F3]  drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] rounded-[10px]">
                        <div className="xl:flex  gap-[10px]">
                            <div >
                                <label htmlFor="name">Your Name<input className='border-solid rounded-[4px] xl:w-[300px] xs:w-[430px] p-2 border-[1px] border-gray-300 ' name="name" /></label>
                               
                            </div>
                            <div >
                                <label htmlFor="phone_number">Phone Number<input className='border-solid rounded-[4px] xl:w-[300px] xs:w-[430px] p-2 border-[1px] border-gray-300 ' /></label>
                               
                            </div>
                           
                        </div>
                        <div className="flex gap-[10px] mt-3">
                            <div >
                                <label htmlFor='email'>Email<input className='border-solid rounded-[4px] xl:w-[610px] xs:w-[430px] p-2 border-[1px] border-gray-300 ' name="email" /></label>
                               
                            </div>
                        </div>
                        <div className="flex gap-[10px] mt-3">
                            <div >
                                <label htmlFor='subject'>Subject<input className='border-solid xl:w-[610px] rounded-[4px] xs:w-[430px] p-2 border-[1px] border-gray-300 ' name="subject" /></label>                             
                            </div>
                        </div>
                        <div className="flex gap-[10px] mt-3">
                            <div >
                                <label htmlFor='message'>Your Message<textarea rows={6}  name="message" className='xs:w-[430px] xl:w-[610px] border-solid rounded-[4px] p-2 border-[1px] border-gray-300 ' /></label>
                            </div>
                        </div>
                        <button type="button" className='bg-[#ECF0F3] xs:w-[430px]  drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] xl:w-[610px] p-2 mt-3 rounded-[4px] hover:bg-blue-500 hover:text-white hover:scale-15'>Send Message <ArrowForward/></button>
                    </div>
                </div>
                <Footer />
            </>
    )
}