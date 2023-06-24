import { useState } from "react";
import { Drawer } from "@mui/material";
import profile from './profile.jpg'
import { Menu, Close } from '@material-ui/icons';
export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (type) => {
        setIsOpen(false)
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
                <img src={profile} className="rounded-full xl:h-[50px] xl:w-[50px] xs:h-[75px] xs:w-[75px] border-solid border-[3px] border-blue-500  xl:ml-5  xs:ml-[0px] " />
                <div className=" d-flex ml-2 xl:mt-2 xs:mt-3 "><span className="xl:text-[20px] xs:text-[30px] font-bold ">Portfolio</span></div>
            </div>
            <div className="xl:hidden xs:block xl:text-[10px] xs:text-[40px] ">
                <Menu className=" mr-[20px] " style={{ fontSize: '50px' }} onClick={() => setIsOpen(true)} />
            </div>
            <div className="xs:hidden xl:block">
                <ul className="flex  mr-5 font-bold p-2">
                    <li className="nav-item  cursor-pointer">
                        <a className="nav-link" onClick={() => handleClick('Home')}>Home </a>
                    </li>
                    <li className="nav-item  cursor-pointer">
                        <a className="nav-link" onClick={() => handleClick('Portfolio')}>Resume</a>
                    </li>
                    <li className="nav-item  cursor-pointer">
                        <a className="nav-link" onClick={() => handleClick('About')}>Projects</a>
                    </li>
                    <li className="nav-item  cursor-pointer ">
                        <a className="nav-link" onClick={() => handleClick('Contact')}>Contact</a>
                    </li>
                </ul>
            </div>
            <Drawer
                anchor={'left'}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": { background: '#ECF0F3', boxSizing: "border-box", width: '95%' }
                }}
            >
                <ul className="bg-[#ECF0F3]  mr-5 font-normal text-[30px] ml-2 p-2">
                    <div className="border-b-solid h-[244px] border-b-[2px] border-b-gray-300">
                        <div className=" flex justify-content-between "> <img src={profile} className="rounded-full mt-4 xl:h-[55px] xl:w-[55px] xs:h-[110px] xs:w-[110px] border-solid border-[3px] border-blue-500  xl:ml-5  xs:ml-[0px] " />
                            <div className="mt-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)] bg-[#ECF0F3] h-[70px] w-[70px] rounded-full cursor-pointer" onClick={() => setIsOpen(false)}>
                                <Close style={{ fontSize: '55px', marginLeft: '10px', marginTop: '6px', color: 'rgb(59 130 246)' }} />
                            </div>
                        </div>
                        <span className="text-[30px] font-bold xl:mt-[400px] xs:relative xs:top-[20px]">Portfolio</span>
                    </div>
                    <li className="nav-item mt-[100px]  cursor-pointer">
                        <a onClick={() => handleClick('Home')}>HOME </a>
                    </li>
                    <li className="nav-item mt-5  cursor-pointer">
                        <a onClick={() => handleClick('Portfolio')}>RESUME</a>
                    </li>
                    <li className="nav-item mt-5 cursor-pointer">
                        <a onClick={() => handleClick('About')}>PROJECTS</a>
                    </li>
                    <li className="nav-item mt-5 cursor-pointer ">
                        <a onClick={() => handleClick('Contact')}>CONTACT</a>
                    </li>
                </ul>
            </Drawer>
        </div>

    )
}