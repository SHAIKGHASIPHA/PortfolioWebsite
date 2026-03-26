

import Myimage from "../assets/image.png"
import {ReactTyped} from "react-typed"
 function Hero() {
  return (
    
    <div className="hero"


>
      <div className="aurora-bg"></div>
        <div className="left">
          <div className="blur-effect">
       <div className="profile-container">
       <img src={Myimage} alt="image"></img> 
       </div>  
       </div>
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
          backSpeed={80}
          loop/>
          </h3>
       <p className="text">3rd-year student at Audisankara University and a passionate Frontend Developer focused on solving real-world problems and building modern, responsive web applications.</p>
       <div
  className="social-icon"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
>
         
            <a href="https://www.linkedin.com/in/shaik-ghasipha-a95085386?utm_source=share_via&utm_content=profile&utm_medium=member_android">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/SHAIKGHASIPHA">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.codechef.com/dashboard">
              <i className="fa-solid fa-code"></i>
            </a>
            <a href="#projects">
  <i className="fa-solid fa-laptop-code"></i>
</a></div>
            
       </div>
     
       
     </div>  

  )
}export default Hero;
