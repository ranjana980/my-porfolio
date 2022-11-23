import LaptopIcon from '@material-ui/icons/Laptop';
import Lottie from 'react-lottie';
import cat from '../lotties/89042-girl.json'
export default function About() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cat,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="About">
            <div className="row ml-4 mr-2 p-2" >
                <div className='col-md-6 col-xs-10 mt-5 '>
                    <div >
                        <h1 style={{ textAlign: 'initial', position: 'relative', color: 'rgb(0, 123, 255)', textShadow: '2px 2px 4px #000000' }}>About Me</h1>
                        <div className='About-me' style={{ textAlign: 'start', position: 'relative', color: 'white' }}>
                            <span> I'm a Experienced Frontend developer with over 1 years of experience in software industry</span>
                            <span> Excellent reputation for resolving problems and improving customer satisfaction. I'm a Full Stack </span>
                            <span> Web developer also to help you to build your personal website with seamless customization. I've</span>
                            <span> worked on many complex data management project and I've been learning each day. I'm Highly proficient</span>
                            <span> in Fronted Development and I have learnt Backend also I use Mongodb database with  </span>
                            <span> atlas for local db connection I can work and manage from development to test to deployment &</span>
                            <span> my another expertise is, I write very clean and readable code.</span>
                        </div>
                    </div>
                    <div className="d-flex express-div" >
                        <LaptopIcon style={{ fontSize: '30px' }} />
                        <div style={{ width: '40%', textAlign: 'start' }}>
                            <div className='d-flex'><h4 style={{ color: 'rgb(0, 123, 255)', textShadow: '1px 1px 1px #000000' }}>Front-End</h4></div>
                            <div style={{ color: 'white' }}>
                                I have experience in building
                                responive web Apps using
                                the latest technologies.
                                I have worked on projects using
                                HTML, CSS, JavaScript, React,canvas,
                                Redux, Next.js,Bootstrap,Material Ui,socket.io.
                            </div>
                        </div>
                        <LaptopIcon style={{ fontSize: '30px' }} />
                        <div style={{ width: '40%', textAlign: 'start' }}>
                            <div className='d-flex'><h4 style={{ color: 'rgb(0, 123, 255)', textShadow: '1px 1px 1px #000000' }}>Back-End</h4></div>
                            <div style={{ color: 'white' }}>
                                <span>I have made a Curd Applications</span>
                                <span>using Reactjs,nodejs,Expressjs,Mongodb.</span>
                                <span> we can add,edit,delete,search by name,</span>
                                <span> pagination calling by Api.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-xs-5 col-sm-5">
                    <div className='lotti'>
                        <Lottie
                            options={defaultOptions}
                           className="img-lottie"
                        />
                    </div>
                </div>
            </div>

        </div >
    )
}