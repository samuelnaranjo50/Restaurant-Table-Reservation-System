
import './App.css';

// Import of components
import Hero from './components/Hero/Hero';
import SpecialDishes from './components/SpecialDishes/SpecialDishes';
import Testimonials from './components/Testimonials/Testimonial';
import About from './components/About/About';
import Footer from './components/Footer/Footer';


function App() {

  // CSS Hero Layout
  let HeroStyle = {
    display: "flex",
    flexDirection: "row"
  }
  return (
    <>
      
      <nav></nav>
      <main>
        <Hero style={HeroStyle}/>
        <SpecialDishes/>
        <Testimonials/>
        <About/>
        <Footer/>
      </main>
      <footer></footer>


    </>
  

 
  );
}

export default App;
