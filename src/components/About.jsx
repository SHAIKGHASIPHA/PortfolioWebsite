function About(){
    return(
        <div className="about">
       <h1>About <span>Me</span></h1>
       <div className="selfIntro">
        <p>
            A Passionate Frontend Developer To Solve Real World Problems Find Impactfull Solution through Coding</p>
       </div>
       <div className="cards">
       <div className="card">
       <h2><i className="fa-solid fa-address-card"></i>
Contact Info</h2>

         <p><i className="fa-solid fa-location-dot"></i>Location:</p>
         <h4>Andhra Pradesh,India</h4>
         <p><i className="fa-regular fa-envelope"></i>Email:</p>
         <h4>shaiksony2006@gmail.com</h4>
         <p><i className="fa-solid fa-square-phone"></i>Telephone no:</p>
         <h4>8498817165</h4>
       </div>
        <div className="card education-card" >
            <h2><i class="fa-solid fa-graduation-cap"></i>Education Info</h2>
            <h3><i className="fa-solid fa-circle-dot"></i>
BTech (CSE)</h3>
            <p>Audisankara University</p>
            <p>2023-2027(batch)</p>
            <p><span>CGPA:8.40</span></p>
            <h3><i className="fa-solid fa-circle-dot"></i>Intermediate(MPC)</h3>
            <p>Sri Chaitanya junior College</p>
            <p><span>GPA:9.0</span></p>
            <h3><i className="fa-solid fa-circle-dot"></i>SSC</h3>
            <p>B.V.S Girls High School</p>
            <p><span>CGPA:9.8</span></p>
</div>
        </div>
        <div className="card2">
            <div className="connect-me">
            <h2>Connect with me</h2>
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/shaik-ghasipha-a95085386?utm_source=share_via&utm_content=profile&utm_medium=member_android">
            <i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/SHAIKGHASIPHA"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.codechef.com/users/crash_team_18"><i className="fa-solid fa-code"/></a>
            </div>
            </div>
             <div className="connect-me">
                <div className="experience">
                <h2><i className="fa-solid fa-laptop-code"></i>Experience</h2>
                <h3><i className="fa-solid fa-circle-dot"></i>React Development</h3>
                <h4>Study Comrade Pvt Ltd</h4>
                <p>Banglore,Karnataka,India</p>
</div>
               
            </div> 
           

        </div>
        </div>
    )
}
 export default About;