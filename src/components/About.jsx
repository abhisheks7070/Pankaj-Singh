import React from 'react';
import Divider from './Divider';
import { Player } from '@lottiefiles/react-lottie-player';
const About = () => {
  return (<>
    <section id="about" className=" bg-gray-100 text-center  p-4 h-auto">
      <Divider />
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 pt-10 md:pt-20">About Us</h2>
      <div className='w-[80vw] md:mt-10 m-auto  flex flex-col md:flex-row justify-around items-center'>
        <div className='md:w-[40vw] '>
        
          
        <div className="relative m-auto w-full md:w-2/3 my-10 pb-full border-dotted border-2 border-red-600 bg-red-500 rounded-full">
              <Player
                autoplay
                loop
                src="https://lottie.host/8cb81109-2e1f-4b99-ae2b-d67bd2499132/avuznHQLYJ.json"
                className=" w-full rounded-full "
              >
              </Player>
            </div>
        
<div className='quote text-5xl leading-loose md:leading-loose md:text-6xl font-extrabold'>"A financially secure family is a happy family."</div>

   </div>     
        <div className=' md:w-[40vw]'>
            <div className="relative m-auto w-full md:w-2/3 my-10 pb-full border-dotted border-2 border-slate-900 bg-slate-800 rounded-full">
              <Player
                autoplay
                loop
                src="https://lottie.host/9eaa8833-ed4f-4330-bd8e-e23d1b9365f9/n4TckVIsHe.json"
                className=" w-full rounded-full "
              >
              </Player>
            </div>
            <p className=" mt-4 md:w-3/4 text-xl md:text-2xl mx-auto text-left">
          At Pankaj FinanceGuard Solutions, we specialize in providing comprehensive insurance and financing solutions tailored to meet your needs. With a commitment to integrity and personalized service, we strive to safeguard your future and empower your financial goals. Whether you're looking for reliable insurance coverage or expert financial advice, our experienced team is here to guide you every step of the way. Trust us to protect what matters most and navigate your financial journey with confidence.
        </p>
          </div>
      </div>
    </section>
  </>
  );
};

export default About;
