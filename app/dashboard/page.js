'use client';
import React, { useState } from 'react';
import { BarChart3, Home, Settings, FolderKanban, Menu, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LinkIcon } from 'lucide-react';
import Footer from '../Footer';
import styles from '../Home.module.css';
import Image  from 'next/image';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const values=[
    {
      icon:"❤️",
      heading:"Love what you do",
      description:"We're obsessed with creating innovative new tech, cultivating long-term client relationships, and continuously learning."
    },
    {
      icon:"☀️",
      heading:"Empower individuals",
      description:"We believe thriving as a team requires everyone to own their role and feel empowered to create great things."
    },
    {
      icon:"🎯",
      heading:"Win the day",
      description:"Everyday is a new beginning with new potential and we've built a team ready to rise to the occassion."
    },
    {
      icon:"🔑",
      heading:"Bring a solution",
      description:"We do everything with our customer in mind and see every problem as am opportunity to create a better way forward."
    },
    {
      icon:"⛳",
      heading:"Embrace and drive change",
      description:"Thinking outside the box is just half the equation. We put action behind our thoughts and constantly challenge the status quo."

    },
    {
      icon:"🪴",
      heading:"Simplify",
      description:"Simplicity isn't simple. We take complex problems and distill it to what really matters. "
    }

  ];

  const growthData = [
    { month: 'Jan', users: 400 },
    { month: 'Feb', users: 600 },
    { month: 'Mar', users: 800 },
    { month: 'Apr', users: 1200 },
    { month: 'May', users: 1600 },
    { month: 'Jun', users: 2000 },
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'support', label: 'Support', icon: Settings },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with React and Node.js",
      image: "/E-commerce.png",
      link: "https://fashion-fold.vercel.app/",
      status: "In Progress",
      completion: "75%"
    },
    {
      id: 2,
      title: "Moonex Website",
      description: "Trusted Multi-Chain DEX Platform. You can Trade, earn, and own crypto on the all-in-one multi-chain DEX.",
      image: "/moonex.png",
      link: "https://moonex-liard.vercel.app/",
      status: "Completed",
      completion: "100%"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Portfolio Website for our user show casing their skills and projects with features like 3-D model, Contact and Download Resume.",
      image: "/portfolio2.png",
      link: "https://profile-alpha-cyan.vercel.app/",
      status: "Completed",
      completion: "100%"
    },
    
    {
      id: 4,
      title: "Portfolio Website",
      description: "Portfolio Website for our user show casing their skills and projects with features like 3-D model, Contact and Download Resume.",
      image: "/portfolio.png",
      link: "https://hemant-sharma.vercel.app/",
      status: "Completed",
      completion: "100%"
    },
  ];

  const founders = [
    {
      name: 'Litesh Goyal',
      role: 'Founder',
      bio: 'Litesh is passionate about technology and design. He came up with the idea to start his own tech startup, combining his innovative mindset and drive to transform ideas into reality.',
      image: '/pic2.png', // Add your image paths
    },
    {
      name: 'Hemant Sharma',
      role: 'Co-Founder',
      bio: 'Hemant has always envisioned starting a startup of his own, driven by his passion for innovation and excellence. He is dedicated to giving his best in everything he does and strives to remain at the forefront of technology.',
      image: '/hemant.jpg', // Add your image paths
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className={`${styles.hero} min-h-screen space-y-4 flex flex-col items-center justify-center`}>
  <h2 className="text-xl md:text-2xl text-black font-bold">Company Growth</h2>
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[40rem] h-64 md:h-96">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={growthData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

        );
      case 'home':
        return (
          <div className='bg-gray-50 min-h-screen'>
          <div className="relative w-full min-h-[600px] bg-gray-50 overflow-hidden">
      <div className="absolute left-0 top-0 w-72 h-72">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="0" cy="0" r="150" fill="#6B46C1" />
        </svg>
      </div>
      

      <div className="absolute right-0 top-0 w-72 h-72">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="200" cy="0" r="150" fill="#68D391" />
        </svg>
      </div>

  
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-40 text-center">
  
        <h1 className="text-5xl font-bold mb-8 text-black leading-tight">
          Transform your website vision into expert creation
        </h1>

 
        <p className="text-xl mb-16 text-gray-700">
          We are your on-demand website development partner, turning ideas into stunning digital experiences. Our expert team crafts custom websites that perfectly align with your business goals and brand identity.
        </p>

        <p className="text-gray-600 mb-16">
          Coming soon...
        </p>


        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 ">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-black">10+</div>
            <div className="text-gray-600">pre-registered clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-black mb-2">1 Week</div>
            <div className="text-gray-600">average delivery time</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-black mb-2">5+</div>
            <div className="text-gray-600">expert developers</div>
          </div>
        </div>
      </div>
    </div>

    <section className="bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className='flex flex-col text-black md:flex-row justify-center items-center gap-12'>
          <img className="" src="https://a.slack-edge.com/2d755c3/marketing/img/about/img-ecosystem-for-work.jpg"/>
          <div className=''>
            <h2 className='lg:text-5xl m-3 text-3xl font-semibold'>Our Story</h2>
            <p className='m-2 text-xl'>Litesh and Hemant, two driven college students with a shared passion for technology and innovation, came together with a mission to make a difference in the digital world.</p>
            <p className='m-2 text-xl'>Driven by their complementary skills and unwavering determination, the duo began laying the groundwork for their SaaS startup. Their platform aims to revolutionize website creation by delivering on-demand, tailor-made solutions that empower individuals and businesses to thrive online. They envisioned a future where anyone—regardless of technical expertise—could bring their digital vision to life with ease.</p>
            <p className='m-2 text-xl'>Launching this startup has been a journey of resilience, learning, and unshakable belief in their mission. Pre-launch, they worked tirelessly, burning the midnight oil, brainstorming ideas, and building a platform that reflects their shared commitment to quality and innovation.</p>
            < p className='m-2 text-xl'>For Litesh and Hemant, this is more than just a business—it’s a movement to simplify technology, democratize creativity, and inspire others to chase their dreams. They are here to prove that with the right mindset, even two college students can turn a bold vision into a meaningful reality.</p>
            <p className='m-2 text-xl'>This is just the beginning of their journey, and they’re excited to welcome you along for the ride.</p>
          </div>

        </div>


        
   
        <div className="flex flex-col md:flex-row justify-center items-center mt-24 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-40 h-40 mb-4 relative">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{founder.name}</h3>
              <p className="text-gray-600 mb-2">{founder.role}</p>
              <p className="text-center text-gray-600 max-w-xs">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


        <div className='text-black p-4 pt-28 '>
          <h1 className='lg:text-5xl text-[3rem] mt-8 text-center font-bold leading-tight '>The values that drive us </h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 mb-14 p-2 mx-auto mt-10 grid-cols-1 gap-6 max-w-6xl'>
            {values.map((value,index)=>(
              <div key={index} className='rounded-lg  hover:shadow-md p-6 shadow-xl bg-gray-50 text-black hover:scale-110 duration-300 ease-in-out transition-transform border'>
                <div className='text-3xl text-blue-500'>{value.icon}</div>
                <h1 className='font-semibold mb-2'>{value.heading}</h1>
                <p>{value.description}</p>
              </div>


            ))}

          </div>

        </div>

        <div className="bg-green-400 text-black py-16 m-12 rounded-2xl px-6">
      <div className="max-w-4xl mx-auto text-center">
  
        <h2 className="text-4xl font-bold mb-4">
          Are you interested in working with us?
        </h2>

        <p className="text-xl mb-8">
          We can't wait to chat with you and bring your ideas to life.
        </p>
 
        <a
          href="#contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300"
        >
          Reach Out
        </a>
      </div>
    </div>

 
          <Footer/>

         

      </div>
        );
      case 'projects':
        return (
          <div className="space-y-6">
          <h2 className="text-2xl text-black font-bold mb-6">Projects Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: project.completion }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-900 font-medium">{project.completion}</span>
                    </div>
                  </div>
                  <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Project <LinkIcon className="h-4 w-4 ml-1" />
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        );
      case 'support':
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
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">

    <div className="hidden md:block w-64 bg-white shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-black">SD-Studios</h1>
      </div>
      <nav className="mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium transition-colors
                ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>


    <div className="md:hidden z-20 fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">SD-Studios</h1>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>

    {isMenuOpen && (
      <div className="md:hidden fixed top-12 left-0 w-full bg-white shadow-lg z-50">
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    )}


    <div className={`flex-1 overflow-auto p-8 mt-${isMenuOpen ? '16' : '0'}`}>{renderContent()}</div>
  </div>
  );
};

export default DashboardLayout;