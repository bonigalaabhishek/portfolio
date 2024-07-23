import './Projects.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
 
gsap.registerPlugin(useGSAP, ScrollTrigger);
 
const Projects = () => {
  const ssroll = useRef();
  const ssroll2 = useRef();
  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from('.center-part1 h1', {
      x: -300,
      opacity: 0,
      duration: 0.9,
 
    })
    tl.from('.center-part1 p', {
      x: -100,
      opacity: 0,
      duration: 0.8,
 
    })
    tl.from('.center-part2', {
      opacity: 0,
      duration: 0.8,
      x: 200,
 
    }, "-=0.8")
    tl.from(".section1images i", {
      opacity: 0,
      y: 30,
      scale: 2,
      stagger: 0.15,
      duration: 0.6,
    })
 
 
    gsap.to(".icon", {
      transform: 'translateX(-1100px)',
      duration: 10,
      repeat: -1,
      ease: "none",
      // stagger: {
      //   each: 0.5, // delay between the start of each animation
      // },
    })
 
    ScrollTrigger.create({
      trigger: ssroll.current,
      start: "top 50%",
      end: "top -50% ",
      scrub: 2,
      markers: true,
      onEnter: () => {
        gsap.to(ssroll.current, { x: 0, opacity: 1, duration: 0.9 });
      },
      onLeave: () => {
        gsap.to(ssroll.current, { x: -500, opacity: 0, duration: 0.9 });
      },
      onEnterBack: () => {
        gsap.to(ssroll.current, { x: 0, opacity: 1, duration: 0.9 });
      },
      onLeaveBack: () => {
        gsap.to(ssroll.current, { x: -500, opacity: 0, duration: 0.9 });
      },
    });
 
    ScrollTrigger.create({
      trigger: "#maintab",
      start: "top 50%",
      end: "top -50% ",
      scrub: 2,
      markers: true,
      onEnter: () => {
        gsap.to("#maintab", { x: 0, opacity: 1, duration: 0.9 });
      },
      onLeave: () => {
        gsap.to("#maintab ", { x: -500, opacity: 0, duration: 0.9 });
      },
      onEnterBack: () => {
        gsap.to("#maintab", { x: 0, opacity: 1, duration: 0.9 });
      },
      onLeaveBack: () => {
        gsap.to("#maintab", { x: -500, opacity: 0, duration: 0.9 });
      },
 
    });
 
 
 
  }, [])
 
  const colors = [
    { start: '#FFD700', end: '#FF8C00', shadow: '#FFD700' },
    { start: '#B0E0E6', end: '#4682B4', shadow: '#B0E0E6' }
  ];
  let currentColorIndex = 0;
 
  function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    gsap.to(".circle_block", {
      background: `radial-gradient(circle, ${colors[currentColorIndex].start}, ${colors[currentColorIndex].end})`,
      boxShadow: `0 0 20px ${colors[currentColorIndex].shadow}`,
      duration: 2
    });
  }
 
  setInterval(changeColor, 3000);
 
 
  return (
    <div className='projectsmaincontainer'>
      {/* <h1>Projects at pwc</h1> */}
      <section className='section1'>
        <div className="center">
          <div className="center-part1">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab vitae corrupti nesciunt sapiente cupiditate ducimus aliquam laboriosam expedita perspiciatis!</p>
          </div>
          <div className="center-part2">
            <div className="circle_block">
              <div className="section1images2">
                <i className="fa-brands fa-react icon"></i>
                <i className="fa-brands fa-html5 icon"></i>
                <i className="fa-brands fa-git-alt icon"></i>
                <i className="fa-brands fa-node icon"></i>
                <i className="fa-brands fa-python icon"></i>
                <i className="fa-brands fa-css3-alt icon"></i>
                <i className="fa-solid fa-database icon"></i>
                <i className="fa-brands fa-js icon"></i>
                <i className="fa-brands fa-bootstrap icon"></i>
                <i className="fa-brands fa-react icon"></i>
              </div>
 
            </div>
          </div>
        </div>
 
        <div className="section1images">
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-git-alt"></i>
          <i className="fa-brands fa-node"></i>
          <i className="fa-brands fa-python"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-solid fa-database"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-bootstrap"></i>
 
        </div>
      </section>
 
      <section className="section2">
        <div ref={ssroll} className="services">
          <h3>Servives</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi voluptates veniam quis inventore reiciendis non facere id quas. Iure!</p>
        </div>
 
        <div ref={ssroll2} id="maintab" className="section2-container">
          <div className="item" id='tab1' >
            <div className="item-part1">
              <h2>Search engine optimization</h2>
              <h4><i className="fa-solid fa-arrow-up-right-from-square"></i>Learn More</h4>
            </div>
            <div className="item-part2">
              <img src="https://img.icons8.com/?size=100&id=23027&format=png&color=000000" alt="" />
            </div>
          </div>
          <div className="item" id='tab2'>
            <div className="item-part1">
              <h2>Search engine optimization</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn More</h4>
            </div>
            <div className="item-part2">
              <img src="https://img.icons8.com/?size=100&id=23027&format=png&color=000000" alt="" />
            </div>
          </div>
          <div className="item" id='tab3'>
            <div className="item-part1">
              <h2>Search engine optimization</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn More</h4>
            </div>
            <div className="item-part2">
              <img src="https://img.icons8.com/?size=100&id=23027&format=png&color=000000" alt="" />
            </div>
          </div>
          <div className="item" id='tab4'>
            <div className="item-part1">
              <h2>Search engine optimization</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn More</h4>
            </div>
            <div className="item-part2">
              <img src="https://img.icons8.com/?size=100&id=23027&format=png&color=000000" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
 
export default Projects
