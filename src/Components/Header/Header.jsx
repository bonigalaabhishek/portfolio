import { useEffect, useRef} from 'react';
import './Header.css';
import { NavLink, useLocation } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
 
const Header = () => {
  const location = useLocation();
  const borderRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const tl = useRef(null);
//   const [crossclick, setCrossclick] = useState(true)
//   var cross = document.querySelector("#cross")
  const playtl = () => {
    tl.current.play()
  }
  const pauseTl = () => {
    tl.current.reverse(0.3)
 
  }
 
 
  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true })
 
    tl.current.add([
      gsap.to(".sidebar", {
        right: '0%',
        duration: 0.5,
      }),
      gsap.from(".sidebar h4", {
        y: 30,
        duration: 0.7,
        stagger: 0.3,
        opacity: 0,
        delay: 0.3
      }),
      gsap.from(".sidebar hr", {
        x: 100,
        duration: 0.8,
        stagger: 0.3,
        opacity: 0,
        delay: 0.4,
      }),
      gsap.to(".navbarheader nav i",{
        opacity: 0,
      })
    ]);
    tl.current.from(".sidebar i", {
      opacity: 1
    })
 
 
 
  }, [])
 
  useEffect(() => {
    const updateBorder = (element) => {
      if (element) {
        const { offsetLeft, offsetWidth } = element;
        gsap.to(borderRef.current, { left: offsetLeft, width: offsetWidth, duration: 0 });
      }
    };
 
    switch (location.pathname) {
      case '/projects':
        updateBorder(projectsRef.current);
        break;
      case '/about':
        updateBorder(aboutRef.current);
        break;
      default:
        updateBorder(homeRef.current);
        break;
    }
 
 
  }, [location.pathname]);
 
  return (
    <>
      <section className='navbarheader bg-slate-900'>
        <h2> <NavLink to="/">Abhishek</NavLink></h2>
        <nav>
          <ul>
            <li id='home' ref={homeRef}>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li id='projects' ref={projectsRef}>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li id='about' ref={aboutRef}>
              <NavLink to="/about">About</NavLink>
            </li>
 
 
          </ul>
          <div className='active-border' ref={borderRef}></div>
          <i className="fa-solid fa-bars" onClick={playtl}></i>
        </nav>
 
        <div className="sidebar">
          <h4 onClick={pauseTl}><NavLink to="/home">Home</NavLink></h4>
          <hr />
          <h4 onClick={pauseTl}><NavLink to="/projects">Projects</NavLink></h4>
          <hr />
          <h4  onClick={pauseTl}><NavLink to="/about">About</NavLink></h4>
          <hr />
          <i className="fa-solid fa-xmark" onClick={pauseTl}></i>
        </div>
      </section>
    </>
  )
}
 
export default Header
