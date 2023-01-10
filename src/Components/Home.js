import img from '../../src/mern.png'

import ReactWOW from 'react-wow';
import { useEffect } from 'react';
import axios from 'axios';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Resume from '../../src/Resume.pdf'

export default function Home() {
    return (
        <div className="Home">
            <div className='row p-md-5 pt-5'>
                <div className=' col-xs-12 col-sm-12 col-md-5 mt-5 ml-5   '>
                    <h1 style={{ textShadow: '2px 2px 4px #000000', color: 'white' }}>Hi, I am A</h1><h2 style={{ color: '#007bff', animationPlayState: true, textShadow: '2px 2px 4px #000000', }} className="line-1 mt-5 "> MERN Stack </h2>
                    <a href={Resume} target="_blank">
                        <div className='d-flex Resume1 mt-3'>
                            <span class="material-symbols-outlined icon">
                                file_download
                            </span><h5>My Resume</h5>
                        </div>
                    </a>
                </div>
                <div className=' col-xs-12 col-sm-12 col-md-5 mt-5 ml-5'>
                    <img src="https://i.redd.it/yi5mqepvjz4y.jpg" />

                </div>
            </div>
            <div className='row p-md-5 pt-xs-5 ml-5'>
                <div className=' col-md-3 col-sm-10 d-flex Project ml-md-5 mt-sm-5 '>
                    <div className='d-flex'><h1 style={{ textShadow: '2px 2px 4px #000000' }}>1</h1>
                        <div>
                            <p className='Year' style={{ textShadow: '2px 2px 4px #000000' }}><b>Years of</b></p>
                            <p className='exp' style={{ textShadow: '2px 2px 4px #000000' }}><b>Experience</b></p>
                        </div>
                    </div>
                    <div className='d-flex'><h1 style={{ textShadow: '2px 2px 4px #000000' }}>15</h1>
                        <div>
                            <p className='Year' style={{ textShadow: '2px 2px 4px #000000' }}><b>Project</b></p>
                            <p className='exp' style={{ textShadow: '2px 2px 4px #000000' }}><b>Completed</b></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 d-flex icon-div mt-sm-5'>
                    <a href='https://www.linkedin.com/in/ranjana-chaudhary-2bb393211/' target='_blank'>
                        <LinkedInIcon className="Sociel-icon1" />
                    </a>
                    <a href='https://github.com/ranjana980' target="_blank"><GitHubIcon className="Sociel-icon2" /></a>
                    <a href="https://twitter.com/RanjanaChoudary?t=A7OancGyt0WnrZBOVxrG_w&s=09" target="_blank"><TwitterIcon className="Sociel-icon3" /></a>
                    <a href="https://www.instagram.com/ranjanachaudhary_123/" target="_blank"><InstagramIcon className="Sociel-icon4" /></a>
                    <a href="https://www.facebook.com/Ranjana24081996?mibextid=ZbWKwL" target="_blank"><FacebookIcon className="Sociel-icon5" /></a>
                </div>

            </div>
        </div>
    )
}