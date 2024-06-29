import React from 'react';

const Footer = () => {
  return (
    <footer className=" footer bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold">Pankaj FinanceGaurd Solutions.</h3>
            <p className="text-gray-200 mt-4">
              We provide the best insurance policies for your needs.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#home" className="hover:text-gray-200">Home</a></li>
              <li><a href="#about" className="hover:text-gray-200">About</a></li>
              <li><a href="#services" className="hover:text-gray-200">Services</a></li>
              <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="text-gray-200 mt-4">Email: info@insuranceco.com</p>
            <p className="text-gray-200 mt-2">Phone: (+91) 8446820924
            </p>
            {/* <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.58.59-2.42.7a4.15 4.15 0 0 0 1.82-2.3 8.27 8.27 0 0 1-2.6 1 4.13 4.13 0 0 0-7.04 3.77A11.71 11.71 0 0 1 1.64 4.2a4.12 4.12 0 0 0 1.28 5.5 4.09 4.09 0 0 1-1.87-.52v.05c0 2 1.4 3.67 3.26 4.06-.33.1-.68.14-1.03.14-.25 0-.5-.03-.74-.07.5 1.56 1.95 2.7 3.68 2.73A8.28 8.28 0 0 1 0 19.54a11.67 11.67 0 0 0 6.29 1.85c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.37 8.37 0 0 0 22.46 6z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.45-9.96 9.96 0 4.41 2.86 8.16 6.84 9.5.5.1.68-.21.68-.47v-1.69c-2.78.61-3.37-1.35-3.37-1.35-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.54 1.03 1.54 1.03.89 1.53 2.32 1.09 2.89.84.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.96 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.47 9.47 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.39.2 2.4.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.87-2.34 4.71-4.57 4.96.36.31.68.92.68 1.85v2.73c0 .26.18.58.69.47a9.97 9.97 0 0 0 6.83-9.5c0-5.51-4.46-9.96-9.97-9.96z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.75 0h-19.5c-1.24 0-2.25 1-2.25 2.25v19.5c0 1.24 1 2.25 2.25 2.25h19.5c1.24 0 2.25-1 2.25-2.25v-19.5c0-1.24-1-2.25-2.25-2.25zm-11.5 20h-3v-8h3v8zm-1.5-9.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm12 9.5h-3v-4c0-1-.75-1.75-1.75-1.75s-1.75.75-1.75 1.75v4h-3v-8h3v1.12c.44-.67 1.12-1.12 1.88-1.12 1.38 0 2.5 1.12 2.5 2.5v5.5zm-10.5-9.5h-3v-8h3v8z" />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
