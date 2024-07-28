import React from 'react';
import { NavBar } from './components/NavBar';
import './App.css';
import Background from './components/Background';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import CertificationsButton from './components/CertificationsButton';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Memberships from './components/Memberships';
import headstarter from "./assets/img/headstarter.png";
import codepath from "./assets/img/codep.png";
import colorstack from "./assets/img/colorstack.png";
import bbm from "./assets/img/bbm.jpeg";




const App = () => {
  const organizations = [
    { name: 'headstarter', logo: headstarter, url: 'https://headstarter.co' },
    { name: 'codepath', logo: codepath, url: 'https://www.codepath.org/about' },
    { name: 'bbm', logo: bbm, url: 'https://karat.com/brilliant-black-minds/' },
    { name: 'colorstack', logo: colorstack, url: 'https://www.colorstack.org' },


    // Add more organizations as needed
  ];
  return (
    <div className="App-container"   style={{ height: '50vh', width: '100vw' }}>
      
      <NavBar />
      <Background />
      <Hero />
      <Technologies />
      <CertificationsButton link="https://drive.google.com/drive/folders/1KV_toFWOmTMnyRl8bSC6TOJngi_N85yW?usp=share_link"/>
      <Projects />
      <Memberships organizations={organizations} />

      <Footer />
      
      {/* Your other components */}
    </div>
  );
}

export default App;