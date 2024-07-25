import React from 'react';
import { NavBar } from './components/NavBar';
import './App.css';
import Background from './components/Background';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="App-container"   style={{ height: '50vh', width: '100vw' }}>
      
      <NavBar />
      <Background />
      <main className="main-content">
      <Hero />
      <Technologies />
      <Projects />
      </main>
      <Footer />
      
      {/* Your other components */}
    </div>
  );
}

export default App;