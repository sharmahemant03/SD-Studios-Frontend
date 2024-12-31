'use client';
import React, { useState } from 'react';
import { BarChart3, Home, Settings, FolderKanban, Menu, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LinkIcon } from 'lucide-react';
import styles from '../Home.module.css';
import About from '../about/page';
import Contact from '../contact/page';

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
    // { id: 'support', label: 'Support', icon: Settings },
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
      image: '/pic2.png', 
    },
    {
      name: 'Hemant Sharma',
      role: 'Co-Founder',
      bio: 'Hemant has always envisioned starting a startup of his own, driven by his passion for innovation and excellence. He is dedicated to giving his best in everything he does and strives to remain at the forefront of technology.',
      image: '/hemant.jpg',
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
          <About/>
          
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
      // case 'support':
      //   return (
      //     <Contact/>
      //   );
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