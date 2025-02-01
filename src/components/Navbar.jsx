import React from 'react'
import { motion } from "framer-motion";
import logo from "/logo2.png";

const navItems = [
  'Products',
  'Pricing',
  'Resources',
  'Partners',
  'Why Gcore',
]
const Navbar = () => {
  return (
    <nav className=' flex '>
      <div className="flex items-center cursor-pointer">
        {/* Logo with fade-in effect */}
        <motion.img
          src={logo}
          alt="Logo"
          className="mx-4 w-[40px] h-[40px] "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
  
          {/* Animated Text */}
        <motion.h1 className="gradient-text polished-text flex text-xl justify-end"
          initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{
              duration: 0.8,
              delay: 0.1, 
              ease: "easeOut",
          }}
        >
          <span 
          >G</span>
          <span className="slide-left" style={{ animationDelay: '0.1s' }}>C</span>
          <span className="slide-left" style={{ animationDelay: '0.2s' }}>O</span>
          <span className="slide-left" style={{ animationDelay: '0.3s' }}>R</span>
          <span className="slide-left" style={{ animationDelay: '0.4s' }}>E</span>
        </motion.h1>
      </div>

      <motion.ul 
        initial={{ x: 0, opacity: 0 }} 
        animate={{ x: 100, opacity: 1 }} 
        transition={{
            duration: 0.8,
            delay: 0.1, 
            ease: "easeOut",
        }}
        className="flex text-xl polished-text justify-end items-center space-x-6 mx-auto"
      > 
        {navItems.map((item, index) => {
          return (
            <motion.li key={index} className="cursor-pointer hover:text-[#FF6600]">
              {item}
            </motion.li>
          )
        })}
      </motion.ul>
      
      <motion.div 
        initial={{ opacity: 0 , y:20}}
        animate={{ opacity: 1, y:0}}
        exit={{ opacity: 0, y:-20}}
        transition={{ duration: 1, delay: 0.5, type: 'tween'}}
      >
        <motion.button className="z-10  text-xl cursor-pointer polished-text mx-2 bg-dark text-white  border-grey hover:border-white rounded-3xl px-4 py-1">
          Contact us
        </motion.button>
        <motion.button className="z-10 text-xl cursor-pointer polished-text mx-2  bg-(--primary) hover:bg-[#CC5200]  text-white rounded-3xl px-4 py-1">
          Sign up for free
          {/* bg-gradient-to-r from-[#ffa76d] to-[#FF6600] */}
        </motion.button>
      </motion.div>


    </nav>
  )
}

export default Navbar
