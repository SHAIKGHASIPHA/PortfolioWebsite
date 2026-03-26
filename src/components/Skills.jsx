import { useEffect } from "react";
function Skills(){
  useEffect(() => {

  const cards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    })
  },{threshold:0.2});

  cards.forEach((card)=>{
    observer.observe(card);
  });

},[]);

useEffect(() => {
  const elements = document.querySelectorAll(".skill-card, .text-reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 ,rootMargin:"-100px" });

  elements.forEach((el) => observer.observe(el));
}, []);
    return(
        <div className="skill-page">
            <div className="skill-tittle text-reveal">
                <h3>Technical<span> Skills</span></h3></div>
              <div className="tittle">  <p >Building scalable web solutions with strong Computer Science foundations</p></div>
            
        
            
        <section class="skills-section">



<div class="skills-grid">

<div class="skill-card">

<h3 className="frontend">Frontend</h3>

<div class="skill-icons">

<i class="devicon-html5-plain colored"><p>html</p></i>
<i class="devicon-css3-plain colored"><p>css</p></i>
<i class="devicon-bootstrap-plain colored"><p>bootstrap</p></i>
<i class="devicon-javascript-plain colored"><p>JavaScript</p></i>
<i class="devicon-react-original colored"><p>React</p></i>

</div>

</div>

<div class="skill-card">

<h3 className="backend">Backend</h3>

<div class="skill-icons">

<i class="devicon-java-plain colored"><p>Java</p></i>
<i class="devicon-nodejs-plain colored"><p>Noje.js</p></i>
<i class="devicon-express-original"><p>Express.js</p></i>

</div>

</div>

<div class="skill-card">
    <h3 className="database">Database</h3>

  <div className="skill-icons">

    <div className="icon">
      <i className="devicon-mysql-plain colored"></i>
      <p>SQL</p>
    </div>

    <div className="icon">
      <i className="devicon-mongodb-plain colored"></i>
      <p>MongoDB</p>
    </div>

  



</div>

<h3 className="corecs">Core CS</h3>

<div class="skill-items">

<span>OOP</span>
<span>DBMS</span>
<span>OS</span>
<span>CN</span>
<span>AI</span>

</div>

</div>

</div>

</section>
        </div>
    )
} export default Skills