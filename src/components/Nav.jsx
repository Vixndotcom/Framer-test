import React from 'react'
import styles from '../style'
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <body className='body '>
        <motion.div className='title' initial={{x: -250, y: -250}} animate={{x: 20, y: 10}} transition={{delay: 0.8 , duration: 1, stiffness: 500,  }}>
        <h1 className='headerr z-[999] text-[42px] z-[900]'>
        Pale
       </h1>
        </motion.div>
  
   {/* toggle botton ///////////////////////////////////*/}
   <div className='btn' id='toggle-btn'>
     <div className='btn-outline btn-outline-1'></div>
     <div className='btn-outline btn-outline-2'></div>

     <div id='hamburger'>
     <span></span> 
     </div>

   </div>
 {/*toggle  botton */}
</body>
  
  )
};

export default Nav;
      
