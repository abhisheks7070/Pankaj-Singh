import React, { useState } from 'react';
import { useDarkMode } from '../DarkModeContext';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import Header from './Header';
import { useEffect } from 'react';


const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    let timer;
    const handleScroll = () => {
      setShowNavbar(true);
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setShowNavbar(false);
      }, 3000); // Navbar will disappear after 3 seconds of inactivity
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);
  
  return (<>
      <nav className= {`transition-all duration-500 ${showNavbar ? 'display-block' : 'hidden'} navbar sticky top-0 z-50  flex  justify-between items-start md:items-center bg-slate-600 md:py-0.5 md:px-3 p-2  md:p-3`}>
        {/* <div className="text-white text-xl md:text-3xl font-bold">Pankaj FinanceGaurd Solutions.</div> */}
        <div className=" text-l md:text-2xl  md:flex space-x-4">
          <a href="#home" className="text-white hover:text-gray-900 transition duration-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-900 transition duration-300">About</a>
          <a href="#services" className="text-white hover:text-gray-900 transition duration-300">Services</a>
          <a href="#contact" className="text-white hover:text-gray-900 transition duration-300">Contact</a>
        </div>
        <button onClick={toggleDarkMode} className='hidden md:block text-xl font-bold'>
          {darkMode ? <div className = " flex items-center gap-2 bg-black p-3 m-2 rounded-xl">Light Mode <MdOutlineDarkMode /></div> : <div className = "flex gap-2 items-center bg-white p-3 m-2 rounded-xl">Dark Mode <MdDarkMode /></div>}
        </button>
        <button onClick={toggleDarkMode} className='md:hidden text-xl font-bold'>
          {darkMode ? <div className = " flex items-center gap-2 "><MdOutlineDarkMode /></div> : <div className = "flex gap-2 items-center"><MdDarkMode /></div>}
        </button>
    </nav>
      <nav className = {`transition-opacity duration-500 ${showNavbar ? 'hidden' : 'display-block'} navbar z-50  flex  justify-between items-start md:items-center bg-slate-600 md:py-0.5 md:px-3 p-2  md:p-3`}>
        {/* <div className="text-white text-xl md:text-3xl font-bold">Pankaj FinanceGaurd Solutions.</div> */}
        <div className=" text-l md:text-2xl  md:flex space-x-4">
          <a href="#home" className="text-white hover:text-gray-900 transition duration-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-900 transition duration-300">About</a>
          <a href="#services" className="text-white hover:text-gray-900 transition duration-300">Services</a>
          <a href="#contact" className="text-white hover:text-gray-900 transition duration-300">Contact</a>
        </div>
        <button onClick={toggleDarkMode} className='hidden md:block text-xl font-bold'>
          {darkMode ? <div className = " flex items-center gap-2 bg-black p-3 m-2 rounded-xl">Light Mode <MdOutlineDarkMode /></div> : <div className = "flex gap-2 items-center bg-white p-3 m-2 rounded-xl">Dark Mode <MdDarkMode /></div>}
        </button>
        <button onClick={toggleDarkMode} className='md:hidden text-xl font-bold'>
          {darkMode ? <div className = " flex items-center gap-2 "><MdOutlineDarkMode /></div> : <div className = "flex gap-2 items-center"><MdDarkMode /></div>}
        </button>
    </nav>
  </>
  );
};

export default Navbar;