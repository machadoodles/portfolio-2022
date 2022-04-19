import React from 'react'

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='bg-[#56ABCB] px-7 md:px-16 pt-20' id='contact'>
      <div className='flex items md:flex-row flex-col'>
        <div className="form md:w-[50%]">
          <h3 className='text-base mb-6'>CONTACT</h3>
          <h1 className='text-3xl mb-8'>LET'S GET IN TOUCH</h1>
          <form action="https://formsubmit.co/8bfae133d0d0cf789bd3299f86444bbb" method="post" className='flex flex-col items-start'>
            <input type="text" name="name" required className='mb-5 w-[100%] p-3 rounded text-black' placeholder='Enter Name'/>
            <input type="email" name="email" required className='mb-5 w-[100%] p-3 rounded text-black' placeholder='Enter Email'/>
            <textarea name="message" placeholder='Message' className='mb-5 w-[100%] p-3 rounded text-black'></textarea>
            <button type='submit' className='bg-[#B65A38] px-12 py-3 rounded font-bold'>SEND</button>
          </form>
        </div>
        <div className="socials md:w-[50%] md:ml-32 mt-12 md:mt-28">
          <h1 className='text-2xl'>Lets socialize 😊</h1>
          <div className="social-links flex items-center mt-5 md:mt-12">
            <a href="https://twitter.com/machadoodles" className='mr-5' target={`_blank`}>
              <FaTwitter className='text-4xl'/>
            </a>
            <a href="https://www.linkedin.com/in/edgar-machado/" className='mr-5' target={`_blank`}>
              <FaLinkedin className='text-4xl'/>
            </a>
            <a href="https://github.com/machadoodles" className='mr-5' target={`_blank`}>
              <FaGithub className='text-4xl'/>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:mt-12 mt-20 pb-3 md:text-base text-center text-sm">© {(new Date().getFullYear())} | Designed & coded by Edgar Machado powered by ☕</div>
    </footer>
  )
}

export default Footer;
