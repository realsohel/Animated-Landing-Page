import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section className="z-10 my-16 flex items-center justify-center text-center text-white ">
      
      <div className=" z-10 px-6">
      <motion.h1 
        className="z-10 text-6xl font-semibold bg-gradient-to-b from-gray-600 to-white bg-clip-text text-transparent polished-text" 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Inference at the Edge
      </motion.h1>

        <motion.p 
          className="my-8 text-xl text-gray-400 w-2/3 mx-auto"
          initial={{ opacity: 0, y:-50 }}
          animate={{ opacity: 1 ,y:0}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Boost your AI application's speed and efficiency by bringing inference closer to your users. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, recusandae. Lorem ipsum dolor sit amet.
        </motion.p>
        
        <motion.div 
          className="mt-6 flex space-x-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button className="cursor-pointer bg-(--primary) hover:bg-[#CC5200] px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>
          <button className="cursor-pointer border hover:border-(--primary) border-white px-6 py-3 rounded-lg">
            Book a Demo
          </button>
        </motion.div>

        <motion.div>
          <img src="/landing.gif" key={Date.now()} 
            className="z-[-1] rounded-xl w-[100%] h-[100%] object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
