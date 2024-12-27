import styles from './Home.module.css';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';
import Features from './Features';

export default function Home() {
  return (
    <div className="h-screen bg-gray-50">
      <div className={`${styles.hero} h-screen relative `}>
        <Navbar />
        

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
            
            <button className="inline-block px-6 py-3 text-base md:text-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors rounded-lg">
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
        <Features/>
        <Pricing />
      <Testimonials/>
   
        <FAQ/>
        
      <Footer />
      </div>
      
    </div>
  );
}
