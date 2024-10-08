import { motion } from 'framer-motion';
import React from 'react';
import Text from './Text';
import TextArea from './Text';
import { avacado, cake, love } from '../assets';
import Line from './Line';


const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Group = () => {
  return (
    <div className='flex flex-col g sm:overflow-x-hidden gap-4  h-screen  bg-pinkk bg-textmd'>


      <div className='md:mt-12 mt-10 bg-textsm '>
      <TextArea/>

      <motion.section
        className='flex flex-row  gap-4 p-10'
        variants={containerVariants}
        initial='hidden'
        animate='show'
      >
        
        {/* fade in */}
        <motion.div
          variants={itemVariants}
           className=' flex items-center justify-center  gap-8 '>
      
  
  
      
          {/* Content */}
         <motion.img
         initial={{ opacity: 0, y: 100}}
         animate={{opacity: 1, y: 0}} 
         transition={{ duration: 1, ease: 'easeInOut', delay: 2}} className='w-32 h-24' 

         src={cake} /> 

         <motion.img
         initial={{ opacity: 0, y: -100}}
         animate={{opacity: 1, y: 0}} 
         transition={{ duration: 1, ease: 'easeInOut', delay: 2.5}} className='w-28 h-32  ' 
         src={avacado} /> 
     
        </motion.div>

    

     
       
      </motion.section>

      <div className='z-[999] mt-4'>
        <Line />
    </div>

   
    </div>
    </div>
  );
};

export default Group;
