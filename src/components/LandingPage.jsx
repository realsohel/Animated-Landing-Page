import React from "react";
import { motion } from "framer-motion";
import logo from "/logo2.png";
import transition from "../utils/transition";


const LandingPage = () => {
    
    return (
    <div className=" w-full flex justify-center items-center my-48 text-8xl font-bold">
        <div className="flex items-center">
            {/* Logo with fade-in effect */}
            <motion.img
            src={logo}
            alt="Logo"
            className="mx-6 w-[110px] h-[110px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />

        {/* Animated Text */}
        <motion.h1 className="gradient-text polished-text flex justify-end"
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
    </div>
  );
};

export default transition(LandingPage);
