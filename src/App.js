
import './App.css';
import { useState, useEffect } from 'react';


// Import of components
import MobileNav from './components/MobileNav/MobileNav';
import DesktopNav from './components/DesktopNav/DesktopNav';
import Hero from './components/Hero/Hero';
import HeroDesktop from './components/HeroDesktop/HeroDesktop'
import SpecialDishes from './components/SpecialDishes/SpecialDishes';
import Testimonials from './components/Testimonials/Testimonial';
import About from './components/About/About';
import AboutDesk from './components/AboutDesk/AboutDesk';
import Footer from './components/Footer/Footer';
import FooterDesk from './components/FooterDesk/FoterDesk';
import CustomHr from './components/CustomHr/CustomHr';

//Blur effect
import BlurBackground from './components/BlurBackground/BlurBackground';

import HamburgerMenuMobile from './components/HamburgerMenuMobile/HamburgerMenuMobile';
//Import Context
import {HamburgerMenuContext } from './context/hamburgerMenu';
import { useHamburgerState } from './context/hamburgerMenu';

function App() {

  // Mobile navigation menu

  //This access the hamburger state
  const {isHamburgerMenuActive, setHamburgerMenuState} = useHamburgerState()

  //This creates a state to store the nav type

  const [isWindowMobile, setWindowMobile] = useState(false)  

  //Defining if the window size should be for mobile or desktop

  useEffect( ()=>{window.innerWidth  < 760? setWindowMobile(true) : setWindowMobile(false)},[])

  //Handling the window resize
  const windowChange = ()=>{
    const windowWidth = window.innerWidth
    windowWidth < 700? setWindowMobile(true) : setWindowMobile(false)
  }
  // The next lines listen to the window width, this way I can define when to render mobile nav or desktop nav
  window.addEventListener("resize", windowChange);

  useEffect(()=>{
    console.log("Functional change", isHamburgerMenuActive)
  }, [isHamburgerMenuActive])

  let hr = {width: "80vw"}

  return (
    <div className="pageWrapper">
      
      <header>
        
        {isWindowMobile? <MobileNav/>: <DesktopNav/>}

        {isHamburgerMenuActive? <HamburgerMenuMobile/>: ""}
        
        
        
      </header>
      
      <main>
        {isWindowMobile? <Hero/>: <HeroDesktop/>}
        
        <SpecialDishes/>
        <CustomHr style={hr}/>
        <Testimonials/>
        <CustomHr style={hr}/>
        {isWindowMobile? <About/>: <AboutDesk/>}
        
      </main>
        {isWindowMobile? <Footer/>: <FooterDesk/>}
        

    {/* Activates the background blur when in mobile the Hamburger menu is active*/}
    {isHamburgerMenuActive? <BlurBackground />: ""}

    </div>
  

 
  );
}

export default App;
