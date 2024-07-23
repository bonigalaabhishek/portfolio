import  { useRef} from 'react'
import './About.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);
 
const About = () => {
  const tech = useRef();
 
  useGSAP(() => {
    let tl = gsap.timeline()
 
    tl.from('header', {
      y: -50,
      opacity: 0,
      duration: 2,
      stagger: 0.15,
    })
 
    ScrollTrigger.create({
      trigger: tech.current,
      start: "top 75%",
      end: "top -75% ",
      scrub: 3,
      markers: true,
      stagger: 0.15,
      onEnter: () => {
        gsap.to(tech.current, { y: 0, opacity: 1, duration: 0.9, });
      },
      onLeave: () => {
        gsap.to(tech.current, { y: 50, opacity: 0, duration: 0.9 });
      },
      onEnterBack: () => {
        gsap.to(tech.current, { y: 0, opacity: 1, duration: 0.9 });
      },
      onLeaveBack: () => {
        gsap.to(tech.current, { y: 50, opacity: 0, duration: 0.9 });
      },
 
    });
 
 
 
 
  }, [])
 
 
 
  return (
    <div className='aboutmaincontainer'>
      <header className='Frontendheading'>
        <h1 className='headerHeading'>Frontend</h1>
        <h1 className='headerHeading'>Developer</h1>
      </header>
 
 
      <div  className="cartcontainer">
 
        <div className='aboutcart'>
          <h1>About</h1>
          <div className='details'>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ut sapiente. Amet sapiente eos rem est delectus itaque asperiores, architecto officia eaque sequi deserunt esse non. Laborum distinctio aperiam dolorem ad aspernatur tempora sint soluta corrupti eos nulla cumque sed id excepturi necessitatibus, eveniet mollitia sapiente, amet perspiciatis dolor? Ex libero porro eos suscipit ipsum.</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, corporis nostrum. Corrupti aut, ipsum, doloremque maxime sapiente eius reiciendis neque odit qui, perspiciatis labore a?</p>
          </div>
        </div>
        <div className='aboutcart'>
          <h1>About</h1>
          <div className='details'>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ut sapiente. Amet sapiente eos rem est delectus itaque asperiores, architecto officia eaque sequi deserunt esse non. Laborum distinctio aperiam dolorem ad aspernatur tempora sint soluta corrupti eos nulla cumque sed id excepturi necessitatibus, eveniet mollitia sapiente, amet perspiciatis dolor? Ex libero porro eos suscipit ipsum.</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, corporis nostrum. Corrupti aut, ipsum, doloremque maxime sapiente eius reiciendis neque odit qui, perspiciatis labore a?</p>
          </div>
        </div>
 
 
 
 
        <div className='aboutcart'>
          <h1>Techniques</h1>
          <div className='content-block-list' >
            <ul className='content-block-list-techniques' ref={tech}>
              <li className='content-block-list-item'>React</li>
              <li className='content-block-list-item'>Javascript</li>
              <li className='content-block-list-item'>React redux</li>
              <li className='content-block-list-item'>CSS</li>
              <li className='content-block-list-item'>Bootstrap</li>
              <li className='content-block-list-item'>Python Programming</li>
              <li className='content-block-list-item'>HTML</li>
              <li className='content-block-list-item'>NoSQL</li>
              <li className='content-block-list-item'>SQLite</li>
              <li className='content-block-list-item'>React Hooks</li>
              <li className='content-block-list-item'>GSAP</li>
              <li className='content-block-list-item'>Git</li>
              <li className='content-block-list-item'>Tailwind CSS</li>
            </ul>
          </div>
 
 
        </div>
 
      </div>
    </div>
  )
}
 
export default About
