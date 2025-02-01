import React from 'react'

import { motion } from "framer-motion";
import Navbar from './Navbar';
import Hero from './Hero';
import transition from '../utils/transition';

const Home = () => {
    return (
    <motion.div
        initial={{ opacity: 0 , y:20}}
        animate={{ opacity: 1, y:0}}
        exit={{ opacity: 0, y:-20}}
        transition={{ duration: 0.2}}
        className=''
    >
        <motion.div className="orange-circle"/>
    
        <Navbar/>
        <Hero/>
    </motion.div>
    )
}

export default transition(Home)
