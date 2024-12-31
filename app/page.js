"use client";
import styles from './Home.module.css';
import Link from 'next/link';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';
import Features from './Features';
import { Fragment, useState } from 'react';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push("/dashboard");
  };

  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSwitchToLogin = () => {
    setShowModal(false);
    setShowLoginModal(true);
  };

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowModal(true);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [email, setEmail] = useState(''); 

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true);
    setEmail(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
  };

  return (
    <Fragment>
      <div className="h-screen bg-gray-50">
        <div className={`${styles.hero} h-screen relative`}>
          <div className="relative">
            <img className="w-7 absolute top-4 rounded-sm left-4 lg:left-14" src='/logo.png' />
          </div>

          <ul className="flex flex-row items-center justify-end space-x-4 md:space-x-6 p-4 text-lg md:text-xl text-white">
       

            <li className="hover:scale-110 transform transition duration-300 ease-in-out">
              <Link href="/about">About</Link>
            </li>

            <li className="hover:scale-110 transform transition duration-300 ease-in-out">
              <Link href="/contact">Contact</Link>
            </li>

            <li className="hover:scale-110 transform transition duration-300 ease-in-out">
  {isLoggedIn ? (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black font-semibold">
      {email ? email.charAt(0).toUpperCase() : '?'} 
    </div>
  ) : (
    <button onClick={() => { setShowModal(true); }}>Sign up</button>
  )}
</li>

          </ul>

          <div className="container mx-auto px-4 lg:p-14 flex flex-col lg:flex-row items-center justify-between pt-20 lg:pt-8">
            <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-44 hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight whitespace-nowrap">
                  Your Website&nbsp;Vision
                </h1>
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  Our&nbsp;Expert&nbsp;Creation
                </h1>
              </div>

              <p className="text-lg md:text-xl max-w-2xl">
                From concept to launch, we build and manage your perfect website while you build your business
              </p>

              <button 
  onClick={() => {
    if (isLoggedIn) {
      navigateToDashboard(); 
    } else {
      setShowLoginModal(true); 
    }
  }} 
  className="inline-block px-6 py-3 text-base md:text-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors rounded-lg"
>
  Get Started
</button>

            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                className="w-4/5 md:w-3/4 lg:w-full max-w-2xl h-auto object-contain"
                src="https://framerusercontent.com/images/mS28QhWcSped7JSQ7vltnisa5c8.png"
                alt="Hero illustration"
              />
            </div>
          </div>
        </div>

        <div className='bg-gray-50'>
          <Features />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Footer />
        </div>

      </div>
      <RegisterModal isVisible={showModal} onClose={() => { setShowModal(false) }} onSwitchToLogin={handleSwitchToLogin} />
      <LoginModal isVisible={showLoginModal} onClose={() => { setShowLoginModal(false) }} onSwitchToSignup={handleSwitchToSignup} handleLoginSuccess={handleLoginSuccess} />
    </Fragment>
  );
}
