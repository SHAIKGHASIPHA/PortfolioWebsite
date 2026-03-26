


import { motion } from "framer-motion";
import image1 from "../assets/Shi-2025.jpeg";
import image2 from "../assets/WhatsApp Image 2026-02-21 at 8.02.55 PM.jpeg";
import image3 from "../assets/html&css.jpeg";
import { useState, useEffect } from "react";

function Certifications() {

  const certificate = [
    { image: image1, title: "SHI-INTERNAL HACKATHON" },
    { image: image2, title: "Projectra-2024" },
    { image: image3, title: "W3Cx HTML5/EDX" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

 
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === certificate.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]); 

  //next
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === certificate.length - 1 ? 0 : prev + 1
    );
  };

  // PREV
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificate.length - 1 : prev - 1
    );
  };

  return (
    <div className="certificate-page">
      <div className="certificate-content">

        
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>My</span> Certificates
        </motion.h1>

        {/* MAIN CONTAINER */}
        <motion.div
          className="certificate-container"
          onMouseEnter={() => setIsPaused(true)}   // ✅ pause here
          onMouseLeave={() => setIsPaused(false)} // ✅ resume here
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >

          {/* LEFT BUTTON */}
          <button className="nav-btn left" onClick={prevSlide}>
            ❮
          </button>

          {/* SLIDER */}
          <div className="slider">
            {certificate.map((item, index) => {

              let position = "nextSlide";

              if (index === currentIndex) {
                position = "activeSlide";
              } else if (
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === certificate.length - 1)
              ) {
                position = "prevSlide";
              }

              return (
                <motion.div
                  className={`slide ${position}`}
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={item.image} alt="certificate" />
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT BUTTON */}
          <button className="nav-btn right" onClick={nextSlide}>
            ❯
          </button>

        </motion.div>

       
        <motion.div
          className="cerfiticate-tittles"
          key={certificate[currentIndex].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>{certificate[currentIndex].title}</h3>
        </motion.div>

      </div>
    </div>
  );
}

export default Certifications;