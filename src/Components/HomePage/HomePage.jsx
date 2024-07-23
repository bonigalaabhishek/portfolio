import LandingPage from '../NewNav/LandingPage';
import TextscrollPage from '../NewNav/TextscrollPage';
import AboutPage from '../NewNav/AboutPage';
import Move from '../NewNav/Move';
import ProjectPage from '../NewNav/ProjectPage';
import Footer from '../NewNav/Footer';
 
const HomePage = () => {
  return (
    <div>
        {/* <NewNav/> */}
    <LandingPage/>      
    <TextscrollPage/>
    <AboutPage/>
    <Move/>
    <ProjectPage/>
    <Footer/>
    </div>
  )
}
 
export default HomePage
