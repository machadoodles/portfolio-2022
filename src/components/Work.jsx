import { React, useRef, useEffect } from 'react';
// import pics from '../assets/pics.png'
import { BsArrowUpRightCircle } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  gsap.registerPlugin(ScrollTrigger);
  const workref = useRef(null);

  useEffect(() => {
    gsap.fromTo(".line", {
      width: 0,
    }, 
    {
      duration: 2,
      width: '100%',
      scrollTrigger: {
        trigger: '.my-vid',
      }
    }
    
    );

    gsap.fromTo(".line1", {
      width: 0,
    }, 
    {
      duration: 2,
      width: '100%',
      scrollTrigger: {
        trigger: '.my-vid1',
      }
    }
    
    );

    gsap.fromTo(".line2", {
      width: 0,
    }, 
    {
      duration: 2,
      width: '100%',
      scrollTrigger: {
        trigger: '.my-vid2',
      }
    }
    
    )

    gsap.fromTo(".line3", {
      width: 0,
    }, 
    {
      duration: 2,
      width: '100%',
      scrollTrigger: {
        trigger: '.my-vid3',
      }
    }
    
    );

  gsap.fromTo(".line4", {
      width: 0,
    }, 
    {
      duration: 2,
      width: '100%',
      scrollTrigger: {
        trigger: '.my-vid4',
      }
    }
    
    )
  }, [])

  return (
    <section className='projects-container pt-20' id='work' ref={workref}>
      <h1 className='lg:text-7xl md:text-3xl text-2xl mb-20 lg:mb-40'>Recent work</h1>
      
      <div className="flex-vid mb-32 lg:mb-40">
          <div className="line4 w-full h-[1px] bg-white mb-14"></div>
          <div className="vid-cont flex lg:flex-row flex-col">
          <div className="my-vid1 bg-[#cb7656] w-[100%] px-5 lg:px-16 py-4 lg:py-9">
            <video autoPlay muted loop className=''>
                <source src={`https://i.imgur.com/wxXeE9O.mp4`} />
              </video>
            </div>
            <div className="right-vid lg:ml-16 lg:w-[70%] mt-5">
                <div className='flex items-center hover:text-[#7794FF] ease-in duration-300'>
                <a href="http://www.insulationandroofingrios.com" target={`_blank`} className='flex items-center hover:text-[#7794FF] ease-in duration-300'><h1 className='lg:text-3xl text-2xl font-medium'>Insulation and Roofing Rios</h1>
                  <BsArrowUpRightCircle className='lg:text-3xl text-2xl ml-5'/></a>
                </div>
                <p className='mt-5 text-lg font-light'>This project was a freelance project which entails building the company website from scratch using VueJS + Vuetify (Bootstrap & jQuery). It was a package deal where I hired a graphic designer for the logo, so was the domain and hosting.</p>
                <div className="tags mt-10 flex items-center flex-wrap mt-[-2px] mr-[-3px]">
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px]'>HTML</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>BRANDING + SEO</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>VUEJS</span>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Work
