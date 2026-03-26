   import "./App.css"
   import Navbar from "./components/Navbar";
   import Hero from "./components/Hero"
   
   import Skills from "./components/Skills";
  
 import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import {Routes,Route} from "react-router-dom";
import Projects from "./components/Projects";
function App(){
    return( 

        < >
           <Navbar />
           <Routes>
            <Route path="/" element={<Hero />} />
          
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Certifications" element={<Certifications />} />
            <Route path="/Contact" element={<Contact />} />
           </Routes >
        
       
        <Skills />
        <Projects />

        
        <Certifications />
        <Contact />
       </>
    )
} 
export default App;