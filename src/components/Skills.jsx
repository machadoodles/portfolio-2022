import { React, useRef, useEffect} from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaWordpress, FaGitAlt, FaTerminal, FaGithub, FaNodeJs, FaVuejs, FaLinux, FaFile, FaNetworkWired, FaShieldAlt, FaPython,  } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiVisualstudio, SiWireshark } from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(".skills-top", {
      opacity: 0,
      y: 50,
      
    }, 
    {
      duration: 1,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.skills-bottom',
      }
    }
    
    )
  }, [])
  useEffect(() => {
    gsap.fromTo(".skills-bottom", {
      opacity: 0,
      x: -100,
      
    }, 
    {
      duration: 3,
      opacity: 1,
      // delay: 3,
      x: 0,
      scrollTrigger: {
        trigger: '.name-cont',
      }
    }
    
    )
  }, [])

  return (
    <div className='mt-40 mb-20 skills' ref={ref}>
      <div className='skills-top'>
        <h2 className='text-3xl'>Skills & Tools</h2>
        <p className='pt-6'>The Skills, tools and technologies i use to bring your products and ideas to life</p>
      </div>
      <div className="img-cont flex items-center pt-8 flex-wrap skills-bottom">
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaHtml5 className='text-7xl'/>
          <h3 className='mt-3 text-lg'>Html</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaCss3Alt className='text-7xl'/>
          <h3 className='mt-3 text-lg'>CSS</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaJs className='text-7xl'/>
          <h3 className='mt-3 text-lg'>JavaScript</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaVuejs className='text-7xl'/>
          <h3 className='mt-3 text-lg'>VueJS</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaLinux className='text-7xl'/>
          <h3 className='mt-3 text-lg'>Linux</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaPython className='text-7xl'/>
          <h3 className='mt-3 text-lg'>Python</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaReact className='text-7xl'/>
          <h3 className='mt-3 text-lg'>React</h3>
        </div>
        
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaSass className='text-7xl'/>
          <h3 className='mt-3 text-lg'>Sass</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaWordpress className='text-7xl'/>
          <h3 className='mt-3 text-lg'>Wordpress</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaGitAlt className='text-7xl'/>
          <h3 className='mt-3 text-lg'>Git</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaTerminal className='text-7xl'/>
          <h3 className='mt-3 text-lg'>Terminal</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaGithub className='text-7xl'/>
          <h3 className='mt-3 text-lg'>Github</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaNodeJs className='text-7xl'/>
          <h3 className='mt-3 text-lg'>NodeJs</h3>
        </div>
        
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <SiBootstrap  className='text-7xl'/>
          <h3 className='mt-3 text-lg'>Bootstrap</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <SiVisualstudio  className='text-7xl'/>
          <h3 className='mt-3 text-lg'>VsCode</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <SiTailwindcss  className='text-7xl'/>
          <h3 className='mt-3 text-lg'>TalwindCSS</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaShieldAlt className='text-7xl'/>
          <h3 className='mt-3 text-lg'>Burp Suite</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <SiWireshark className='text-7xl'/>
          <h3 className='mt-3 text-lg'>WireShark</h3>
        </div>
        <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaNetworkWired className='text-7xl'/>
          <h3 className='mt-3 text-lg'>CompTIA Security+ Certified</h3>
        </div>
        
        
      </div>
      <div  className='skills-top'>
      <div className='mt-40 mb-20 skills' ref={ref}>
      <div className="name-cont flex flex-col items-center p-3 md:p-5">
          <FaFile  className='text-7xl'/>
          <a href="https://docs.google.com/document/d/13ELmm21bHfeLYDoTZWOKPSA6kOLBwj1nNb83mjtJdU4/edit?usp=sharing"><h3 className='mt-3 text-lg'>Resume Download</h3></a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Skills