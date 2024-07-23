
import { Link } from 'react-router-dom'
const NewNav = () => {
  return (
    <div className='fixed z-[9997] w-full px-10 py-4 font-sans h-2 bg-slate-900 flex justify-between items-center'>
      <div className="logo">
        <h3>Abhi</h3>
      </div>
      <div className="links flex gap-10">
        {["HOME","PROJECTS","ABOUT","CONTACT"].map((item,index)=>(
                // <a key={index} className={`text-lg font-light ${index===3 && "ml-32"}`} >{item}</a>
                <Link key={index} to={`/${item.toLowerCase()}`} className={`text-lg font-light ${index === 3 && "ml-32"}`}>
                {item}
              </Link>
            )
         )      
        }
      </div>
    </div>
  )
}
 
export default NewNav
