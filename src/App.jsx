import gsap from 'gsap';
import { useRef,useState,useEffect } from 'react';
import {useGSAP} from '@gsap/react';
import { motion } from "framer-motion"
import './App.css'
import { Routes, Route, } from "react-router-dom";
import About from './Components/About/About';

import Projects from './Components/Projects/Projects';
import Header from './Components/Header/Header';
import LocomotiveScroll2 from "locomotive-scroll";
import HomePage from './Components/HomePage/HomePage';
gsap.registerPlugin(useGSAP)
 
function App() {
  const LocomotiveScroll= new LocomotiveScroll2();
  //  var main=document.querySelector("#root")
  //  var cursor=document.querySelector("#cursor");
   const cursorRef = useRef(null);
 
 
const [mousePosition, setMousePosition] = useState({x:0,y:0})
console.log(mousePosition)
// const [cursorVariant, setCursorVariant] = useState("default");
 
 
useEffect(() => {
  const mouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
 
  window.addEventListener("mousemove", mouseMove);
 
  return () => {
    window.removeEventListener("mousemove", mouseMove);
  };
}, []);
useEffect(() => {
  if (cursorRef.current) {
    gsap.to(cursorRef.current, {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      duration: 0.1,
      ease: "power3.out",
    });
  }
}, [mousePosition]);
 
 
 
// const textEnter=()=>setCursorVariant("text")
// const textLeave=()=>setCursorVariant("default")
  return (
    <>
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
    <motion.div  id="cursor" ref={cursorRef} />
    <Header/>
    {/* <HomePage/> */}
          {/* <NewNav/>   */}
            <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route  path="/about" element={<About/>} />
         
       
            </Routes>
            {/* <Navbar /> */}
            </div>
    </>
  )
}
 
export default App
 
 

