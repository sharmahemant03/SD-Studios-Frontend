import React from 'react';
import styles from '../Home.module.css';

export default function Contact() {
  return (
    <div className={`${styles.hero} min-h-screen  flex items-center py-16 px-4`}>
      
      <div className="container mx-auto">
        <div
          className="max-w-4xl mx-auto  bg-white rounded-lg shadow-2xl p-8 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 transition-transform duration-300 hover:shadow-2xl hover:scale-105"
        >

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
            <form className="space-y-4">

              <div>
                <label htmlFor="name" className="block text-gray-800 font-medium">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Type your name here..."
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 focus:shadow-md"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-800 font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Type your email here..."
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 focus:shadow-md"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-800 font-medium">
                  Message:
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 focus:shadow-md"
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
              >
                Send
              </button>
            </form>
          </div>

          <div
            className="w-full lg:w-1/2 flex justify-center transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://framerusercontent.com/images/mS28QhWcSped7JSQ7vltnisa5c8.png"
              alt="Contact illustration"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
        <p className="text-center text-white mt-14">
          Or you can directly reach us at{' '}
          <a
            href="mailto:springdjangodevs@gmail.com"
            className="text-black hover:underline"
          >
            springdjangodevs@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
