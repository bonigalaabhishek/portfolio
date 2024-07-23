import { useRef } from 'react';                                                                                             
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);
 
const LandingPage = () => {
 
    const maintitleRef=useRef(null)
    const maintitleRef2=useRef(null)
    const titleRef = useRef(null);
    const imageRef = useRef(null);
 
    useGSAP(() => {
        let tl=gsap.timeline()
        tl.add([
            gsap.fromTo(titleRef.current, { opacity: 0, y: 0,x:0 }, { opacity: 1, y: -10,x:0, duration: 1 , delay: 1}),
            gsap.fromTo(imageRef.current, { opacity: 0,y:30,x:0 }, { y:0,x:0,opacity: 1, duration: 1, delay: 1 })
        ])
       
        gsap.fromTo(maintitleRef.current, { opacity: 0, y: 50,x:0 }, { opacity: 1, y: 0, duration: 1});
        gsap.fromTo(maintitleRef2.current, { opacity: 0.3, y: 0,x:"0%"}, { x:"30%", y: "90%",opacity: 1, duration: 4, delay:1});
        // gsap.fromTo(subtitleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
       
      }, []);
 
 
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-screen bg-zinc-900 p-4 '>
            <div className="developername mt-20 flex justify-center items-center flex-col">
            <div className="masker" >
                            <div className="w-fit flex flex-col relative">
                            <h1 ref={maintitleRef}  className="uppercase text-[7.5vw] font-bold leading-[6vw] tracking-tighter flex"  >Abhi <span><h1 ref={maintitleRef2} className="relative uppercase text-[7.5vw] font-bold leading-[6vw] tracking-tighter" >shek</h1>
                            </span></h1>
                            <img ref={imageRef} className=' relative -right-[7vw] bottom-[10vw]  w-[25vw] h-[25vw] ' src="./src/Components/NewNav/abhipic.png" alt="Your Name" />
                            <h1 ref={titleRef}  className="relative uppercase text-[7.5vw] bottom-[12vw] font-bold leading-[6vw] tracking-tighter" >Bonigala</h1>
                            </div>
                            </div>
                {/* {["ABHI", "SHEK","BONIGALA"].map((item, index) => {
                     let ref;
                     if (index === 0) ref = maintitleRef;
                     else if (index === 1) ref = maintitleRef2;
                     else if (index === 2) ref = titleRef;
                    return (
                        <div className="masker" key={index} ref={ref}>
                            <div className="w-fit flex">
                                {index===1 && <motion.div initial={{width:0}} animate={{width:"7.5vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}}><img className='w-[20vw] h-[25vw] relative -top-[7vw] right-[9vw]' src="./src/Components/Home/image.png" alt="Your Name" /></motion.div>}
                            <h1  className="uppercase text-[7.5vw] font-bold leading-[6vw] tracking-tighter" key={index}>{item}</h1>
                            </div>
                           
                        </div>
                    )
                })} */}
            </div>
            <div className='border-t-[1px] border-zinc-800   flex justify-between items-center py-5 px-20'>
                {["For Pricewaterhouse Cooper", "From the first pitch to last"].map((item, index) => {
                    return (
                        <p className="text-md font-mono tracking-tight leading-none" key={index}>{item}</p>
                    )
                })}
       
            </div>
 
        </div>
    )
}
 
export default LandingPage
