import React from 'react';
import { NavBar } from './components/NavBar';
import './App.css';
import Background from './components/Background';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import CertificationsButton from './components/CertificationsButton';
import Projects from './components/Projects';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="App-container"   style={{ height: '50vh', width: '100vw' }}>
      
      <NavBar />
      <Background />
      <Hero />
      <Technologies />
      <CertificationsButton link="https://drive.google.com/drive/folders/1KV_toFWOmTMnyRl8bSC6TOJngi_N85yW?usp=share_link"/>
      <Projects />
      <Footer />
      
      {/* Your other components */}
    </div>
  );
}

export default App;