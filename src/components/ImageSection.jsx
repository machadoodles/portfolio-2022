/* eslint-disable no-unused-vars */
import { React, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ImageSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  

  useEffect(() => {
    const element= ref.current;
    gsap.to(".info", {
      width: '100%',
      duration: 3,
      scrollTrigger: {
        trigger: '.myText'
      }
    })
  }, [])

  useEffect(() => {
    const element= ref.current;
    gsap.to(".img-cont", {
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: '.myText',
      }
    })
  }, [])

  useEffect(() => {
    const element= ref.current;
    gsap.fromTo(".dance", {
      opacity: 0,
      y: 30,
      
    }, 
    {
      duration: 1,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.myText',
      }
    }
    
    )
  }, [])

  useEffect(() => {
    const element= ref.current;
    gsap.fromTo(".header", {
      opacity: 0,
      y: 50,
      
    }, 
    {
      duration: 1,
      opacity: 1,
      y: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.header',
      }
    }
    
    )
  }, [])

  return (
    <>
      <section className='flex justify-between items-stretch md:mt-40 mt-20 md:flex-row flex-col-reverse' ref={ref}>
        <div className="right-cont md:self-end flex md:w-[50%] w-full md:mt-0 mt-7">
          <div className='md:w-[50%] w-full' id='mycontact' >
            <div className='info w-[0px]'></div>
            <h3 className='font-extralight myText pt-8 text-[#D9D9D9]'>CONTACT</h3>
            <a href='mailto:edgarmchad2@gmail.com'><p className='text-sm dance'>edgarmchad2@gmail.com</p></a>
          </div>
          <div className='md:w-[50%] w-full ml-5'>
            <div className="info w-[0px]"></div>
            <h3 className='font-extralight myText pt-8 text-[#D9D9D9]'>LOCATION</h3>
            <p className='dance'>San Diego, California</p>
          </div>
        </div>
        <div className='img-cont md:w-[500px] md:pl-5 opacity-0'>
          <img src={`https://i.imgur.com/wHMnnxV.jpg`} alt="avatar" className='rounded w-full'/>
        </div>
      </section>
      <h1 className='md:text-3xl header text-2xl mt-32 md:mt-40 md:leading-[40px]'>Having worked on websites and applications from ideation to launch, I have valuable experience working with modern technologies like JavaScript and it's frameworks. Attending UC San Diego Extension CyberSecurity Bootcamp helped me obtain the necessary knowledge to pass CompTIA's Security+ certification exam.  </h1>
    </>
  )
}

export default ImageSection
