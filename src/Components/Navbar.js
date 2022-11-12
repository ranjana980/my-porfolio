export default function Navbar(props) {
    const handleClick = (type) => {
        console.log('clicked')
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
        <nav className="navbar navbar-expand-lg navbar-light bg-skyblue">
            <div className="d-flex container">
                <div className="Name_title d-flex justify-content-end"><a className="navbar-brand " href="#">Ranjana Chaudhary .</a></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleClick('Home')}>Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleClick('About')}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleClick('Portfolio')}>Resume</a>
                        </li>

                        {/* <li className="nav-item ">
                            <a className="nav-link" onClick={() => handleClick('Blog')}>Blog</a>
                        </li> */}
                        <li className="nav-item ">
                            <a className="nav-link" onClick={() => handleClick('Contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}