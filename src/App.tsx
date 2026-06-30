import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Sobre } from './sections/Sobre';
import { Especialidades } from './sections/Especialidades';
import { Diferenciais } from './sections/Diferenciais';
import { Resultados } from './sections/Resultados';
import { Depoimentos } from './sections/Depoimentos';
import { CTA } from './sections/CTA';
import { Instagram } from './sections/Instagram';
import { Contato } from './sections/Contato';
import { Footer } from './sections/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-brown-dark">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <Sobre />
        
        {/* Services Section */}
        <Especialidades />
        
        {/* Differentials Section */}
        <Diferenciais />
        
        {/* Results Section */}
        <Resultados />
        
        {/* Testimonials Section */}
        <Depoimentos />
        
        {/* Call to Action */}
        <CTA />
        
        {/* Instagram Feed */}
        <Instagram />
        
        {/* Contact Section */}
        <Contato />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
