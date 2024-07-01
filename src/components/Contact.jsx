import React, { useState } from 'react';
import axios from 'axios';
import Divider from './Divider';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ps-backend-d5jt.onrender.com/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Success:', response.data);
      setStatusMessage('Your message has been sent successfully!');
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  return (<>
    <section id="contact" className="bg-gray-100 text-center p-4 md:px-0 h-auto ">
      <Divider />
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 pt-10 md:pt-20">Contact Us</h2>
      <p className="mt-4">Reach out to us for any inquiries or assistance.</p>
      <form className="form mt-8 max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="phone"
          placeholder="Mobile number"
          value={formData.phone}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
      {statusMessage && <p className="mt-4 text-red-500">{statusMessage}</p>}

      {/* WhatsApp Link */}
      <p className="mt-8">Prefer WhatsApp? <a href="https://api.whatsapp.com/send?phone=8446820924&text=Hello%2C%20I%20have%20a%20question%20about%20your%20services" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Chat with us on WhatsApp</a>.</p>
    </section>
  </>
  );
};

export default Contact;
