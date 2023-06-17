import { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import profile from './profile.jpg'
export default function Navbar(props) {
    const [display, setDisplay] = useState("none")

    const handleClick = (type) => {
        if (type == 'Home') {
            props.getHome.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if (type == "Portfolio") {
            props.getPortFolio.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if (type == "About") {
            props.getAbout.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if (type == "Blog") {
            props.getBlog.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if (type == "Contact") {
            props.getContact.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        
            <div className="flex justify-content-between w-100 fixed bg-[#ECF0F3] top-[0px] z-[99]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)]">
                <div className="flex p-2">
                     <img src={profile} className="rounded-full h-[50px] w-[50px] border-solid border-[3px] border-blue-500 ml-5  " />
                    <div className="Name_title d-flex ml-2"><a className="navbar-brand " href="#">Portfolio</a></div>
                </div>
                <div >
                    <ul className="flex mr-5 font-bold p-2">
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleClick('Home')}>Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleClick('Portfolio')}>Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleClick('About')}>Projects</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" onClick={() => handleClick('Contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        
    )
}