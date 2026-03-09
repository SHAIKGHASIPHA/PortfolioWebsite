import image1 from "../assets/Shi-2025.jpeg";
import image2 from"../assets/WhatsApp Image 2026-02-21 at 8.02.55 PM.jpeg";
import image3 from"../assets/html&css.jpeg";
import {useState,useEffect} from "react";
function Certifications() {


  let certificate=[
    {image:image1,tittle:"SHI-INTERNAL HACKHTON"},
    {image:image2,tittle:"Projectra-2024"},
    {image:image3,tittle:"W3Cx Html5/EDX"}
  ]
  ;
   const [currentIndex, setCurrentIndex] = useState(0);
   

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === certificate.length - 1 ? 0 : prev + 1
      );
    }, 1500); 

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="certificate-page">
      <div className="certificate-content">
        <h1><span>My</span> Certificates</h1>
        <div className="certificate-container">
          <div className="certificateContainer">
          <img src={certificate[currentIndex].image} alt="myimage" />
          </div>
          
        
        </div>
      </div>
      <div className="cerfiticate-tittles">
            
            <h3>{certificate[currentIndex].tittle}</h3>
          </div>
          
    </div>
  
  )
}
 export default Certifications;