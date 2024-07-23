import { motion } from 'framer-motion'
import {useState} from 'react'
 
const ProjectPage = () => {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
 
    return (
        <div className='w-full py-10'>
            <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-5xl  font-[Neue_Montreal] tracking-tight'>Featured Projects</h1>
 
            </div>
            <div className='px-20'>
                <div className="flex gap-10 cards w-full mt-10">
                    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="cardcontainer relative w-1/2 h-[75vh] ">
                    <h1 className='absolute flex overflow-hidden left-full text-[yellow] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-5xl tracking-tighter'>
                    {"FYDY".split("").map((item,index)=><motion.span initial={{y:"100%"}} animate={hover ? {y:"0"}:{y:"100%"}} transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.1}}  className="inline-block" key={index}>{item}</motion.span>)}
 
                    </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17-1536x922.jpg" alt="" />
                        </div>
                    </div>
                    <div onMouseEnter={()=>setHover2(true)} onMouseLeave={()=>setHover2(false)} className="cardcontainer relative w-1/2 h-[75vh] ">
                    <h1 className='absolute flex overflow-hidden right-full text-[yellow] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-5xl tracking-tighter'>
                    {"VISE".split("").map((item,index)=><motion.span initial={{y:"100%"}} animate={hover2 ? {y:"0"}:{y:"100%"}} transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.1}}  className="inline-block" key={index}>{item}</motion.span>)}
                    </h1>
 
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                        <img className='w-full h-full bg-cover' src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17-1536x922.jpg" alt="" />
 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ProjectPage
