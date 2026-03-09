
import Myimage from "../assets/image.png"
import {ReactTyped} from "react-typed"
 function Hero() {
  return (
    <div className="hero">
        <div className="left">
      
       <img src={Myimage} alt="image"></img> 
       </div>
       <div className="right">
       <p>welcome to my portfolio</p>
       <h2><i>Hi, I'am <span className="glow">Shaik Ghasipha</span></i></h2>
       <h3>
        <ReactTyped 
        strings={["React Developer",
          "Frontend Developer",
          "Website Builder",]}
          typeSpeed={80}
          backspeed={80}
          loop/>
          </h3>
       <p className="text">3rd-year student at Audisankara University and a passionate Frontend Developer focused on solving real-world problems and building modern, responsive web applications.</p>
       </div>
    </div>
  )
}export default Hero;
