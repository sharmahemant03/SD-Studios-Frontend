import React from 'react'
import Footer from '../Footer';
import Image from 'next/image';

const About = () => {
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
 
        
      </div>
    </div>

 
          <Footer/>

         

      </div>

  )
}

export default About
