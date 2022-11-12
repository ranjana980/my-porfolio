import img from '../../src/mern.png'

import ReactWOW from 'react-wow';
import { useEffect } from 'react';
import axios from 'axios';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Home() {
    return (
        <div className="Home">
            <div className='row '>
                <div className=' col-xs-12 col-sm-12 col-md-6 mt-5 pt-5 '>
                    <div ><h1 className='title' style={{ textShadow: '2px 2px 4px #000000' }}>Hi, I am A</h1><h1 style={{ color: '#007bff', animationPlayState: true, textShadow: '2px 2px 4px #000000', top: '50px' }} className="line-1 "> MERN Stack Developer</h1></div>
                    <div className='d-flex Resume1 '>
                        <span class="material-symbols-outlined icon">
                            file_download
                        </span><h5>My Resume</h5>
                    </div>

                </div>
                <div className=' col-xs-12 col-sm-12 col-md-6 mt-5 pt-5'>
                    <img src="https://i.redd.it/yi5mqepvjz4y.jpg" style={{ height: '400px', width: "600px" }} />

                </div>
              

            </div>
            <div className='row mt-md-5  pt-5'>
                    <div className=' col-md-3 col-sm-10 d-flex Project ml-md-5 '>
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
                    <div className='col-md-3 col-sm-6 d-flex icon-div'>
                        <a href='https://www.linkedin.com/in/ranjana-chaudhary-2bb393211/' target='_blank'>
                            <LinkedInIcon className="Sociel-icon1" />
                        </a>
                        <a href='https://github.com/ranjana980' target="_blank"><GitHubIcon className="Sociel-icon2" /></a>
                        <TwitterIcon className="Sociel-icon3" />
                        <InstagramIcon className="Sociel-icon4" />
                        <FacebookIcon className="Sociel-icon5" />
                    </div>

                </div>
        </div>
    )
}