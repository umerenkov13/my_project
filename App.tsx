import React from 'react';

// Импортируем компоненты напрямую
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Главный компонент приложения
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;