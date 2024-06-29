import React from 'react';
import Divider from './Divider';

const Services = () => {
  return (<>
    <section id="services" className="bg-white text-center pb-4 md:px-0 h-auto ">
      <Divider />
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 pt-10 md:pt-20">Our Services</h2>
      <div className="flex flex-wrap justify-center mt-8 gap-4">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full sm:w-60">
          <h3 className="text-xl font-bold text-blue-600">Life Insurance</h3>
          <p className="text-gray-700 mt-2">Comprehensive life insurance policies to protect your loved ones.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full sm:w-60">
          <h3 className="text-xl font-bold text-blue-600">LIC</h3>
          <p className="text-gray-700 mt-2">Comprehensive life insurance policies to protect your loved ones.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full sm:w-60">
          <h3 className="text-xl font-bold text-blue-600">Health Insurance</h3>
          <p className="text-gray-700 mt-2">Affordable health insurance plans to keep you and your family healthy.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full sm:w-60">
          <h3 className="text-xl font-bold text-blue-600">Vehicle Insurance</h3>
          <p className="text-gray-700 mt-2">Reliable car insurance to keep you safe on the road.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full sm:w-60">
          <h3 className="text-xl font-bold text-blue-600">Mutual Fund</h3>
          <p className="text-gray-700 mt-2">Reliable car insurance to keep you safe on the road.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full sm:w-60">
          <h3 className="text-xl font-bold text-blue-600">Personal Loan</h3>
          <p className="text-gray-700 mt-2">Reliable car insurance to keep you safe on the road.</p>
        </div>
      </div>
    </section>
  </>
  );
};

export default Services;
