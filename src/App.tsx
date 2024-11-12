import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;