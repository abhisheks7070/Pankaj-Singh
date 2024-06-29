import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player"
import Contact from './Contact';
import About from './About';
import Services from './Services';
import photo from '../../assets/photo.jpeg'

const Home = () => {
  return (
    <>
      <section id="home" className="bg-white text-center py-10 md:py-20 md:px-0 text-0.7rem h-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">Welcome to Pankaj FinanceGaurd Solutions.</h1>
        <div className='w-[80vw] md:mt-10 m-auto  flex flex-col-reverse md:flex-row justify-around'>
          <div className='md:w-[40vw]'>
            <div className="relative m-auto w-full md:w-4/5 my-10 pb-full border-dotted border-2 border-pink-300 bg-pink-200 rounded-full">
              <Player
                autoplay
                loop
                src="https://lottie.host/13d9a8cb-156d-45ea-b824-0f67104b23f9/YWPzKmv0eb.json"
                className=" w-full  rounded-full "
              >
              </Player>
            </div>
            <div className='quote text-5xl leading-loose md:leading-loose md:text-6xl font-extrabold'>" Your Partner in Financial Stability."</div>
          </div>
          <div className='md:w-[40vw] flex flex-col gap-6 justify-center items-center p-3'>
            <div className='rounded-full bg-yellow-200 h-full w-full md:w-1/2 md:h-1/2 overflow-hidden'><img className='object-fill h-full w-full' src={photo} alt="" /></div>
            <div>
              <div className='text-xl md:text-3xl'>PANKAJ SINGH</div>
              <div className='text-base md:text-xl '>Founder</div>
            </div>
            <p className=" text-l md:text-2xl md:w-3/4 mt-8 mx-auto text-left">We specialize in helping individuals and businesses navigate the complexities of insurance and financing. Whether you're looking to protect your assets with comprehensive insurance coverage or seeking expert financial guidance, we're here to assist you every step of the way. Our goal is to provide tailored solutions that meet your unique needs, ensuring peace of mind and financial security. Explore our services and discover how we can help you achieve your financial goals with confidence.</p>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
