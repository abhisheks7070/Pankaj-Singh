import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { DarkModeProvider } from './DarkModeContext';
import { useDarkMode } from './DarkModeContext';
import { useEffect } from 'react';
import Divider from './components/Divider';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import "./App.css"



const AppContent = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <>
      {/* <Navbar />
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};


const App = () => {

  return (<>
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  </>
  );
};

export default App;
