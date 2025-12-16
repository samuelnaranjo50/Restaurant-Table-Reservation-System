
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
    <div className="pageWrapper">
      
      <header>
        <nav></nav>
      </header>
      
      <main>
        <Hero style={HeroStyle}/>
        <SpecialDishes/>
        <Testimonials/>
        <About/>
      </main>
      <footer>
        <Footer/>
      </footer>


    </div>
  

 
  );
}

export default App;
