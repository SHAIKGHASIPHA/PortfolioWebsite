import { useEffect, useState } from "react";

export default function Projects() {

  const [index, setIndex] = useState(0);


  useEffect(() => {
    const cards = document.querySelectorAll(".project-card-new");

    cards.forEach((card) => {
      card.classList.remove("show");
      card.classList.remove("float");
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {

          setTimeout(() => {
            entry.target.classList.add("show");

            setTimeout(() => {
              entry.target.classList.add("float");
            }, 600);

          }, i * 300);

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // 🔥 SLIDER FUNCTIONS
  const nextSlide = () => {
    setIndex((prev) => (prev < 2 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  

  return (
    <div className="project">

      <div className="project-header">
        <div className="project-tittle">
          <h3>Projects</h3>
        </div>
      </div>

      <div className="project-about">
        <p>
          By developing real-world clones and applications, I improved my problem-solving skills and gained practical experience in frontend development
        </p>
      </div>

      <div className="project-container">
        <div className="project-card-new">
          <img src="src/assets/Screenshot (40).png" alt="image" />
          <div className="card-body">
            <h3>Netflix-clone</h3>
            <p>Built a responsive Netflix UI clone with modern layout.</p>
            <span className="teck-stack">HTML, CSS</span>
            <div className="card-buttons">
               <a href="https://boisterous-paprenjak-f79847.netlify.app/" className="btn btn-primary" tabindex="-1" role="button" aria-disabled="true">Live Site</a>
                <a href="https://github.com/SHAIKGHASIPHA/Netflix-clone" className="btn btn-secondary" tabindex="-1" role="button" aria-disabled="true">LiveCode</a> </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="project-card-new">
          <img src="src/assets/Screenshot (45).png" alt="image"/>
          <div className="card-body">
            <h3>ToDo List</h3>
            <p>User-friendly todo app with modern UI</p>
            <span className="teck-stack">HTML, CSS, Bootstrap</span>
             <div className="card-buttons">
               <a href="https://moonlit-begonia-cd1229.netlify.app/" className="btn btn-primary" tabindex="-1" role="button" aria-disabled="true">Live Site</a>
                <a href="https://github.com/SHAIKGHASIPHA/TODOLIST-APP" className="btn btn-secondary" tabindex="-1" role="button" aria-disabled="true">LiveCode</a> </div>
          </div>
          </div>
     

        
        <div className="project-card-new">
          <img src="src/assets/Screenshot (43).png" alt="image" />
          <div className="card-body">
            <h3>Flipkart Clone</h3>
            <p>Responsive e-commerce clone</p>
            <span className="teck-stack">MERN Stack</span>
             <div className="card-buttons">
               <a href="https://graceful-concha-a3464f.netlify.app/" className="btn btn-primary" tabindex="-1" role="button" aria-disabled="true">Live Site</a>
                <a href="https://github.com/SHAIKGHASIPHA/FULLSTACK" className="btn btn-secondary" tabindex="-1" role="button" aria-disabled="true">LiveCode</a>
                 </div>
          </div>
          </div>
  
   </div>
  

     
      </div>

  );
}