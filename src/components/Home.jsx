import { delay, motion } from 'framer-motion'
import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import styles from '../style'
import Menu from './Menu'
import { section } from 'framer-motion/m'
import { globe, lamp } from '../assets'


const Home = () => {
  return (
    <section className=''>
  <body className='hero-title flex flex-col'>
    <motion.h1
     animate={{ 
     
       color: 'red', 
     
       }}
     className='text-black md:text-8xxl text-8xl'>
      The Age of Uninnocence
      </motion.h1>

   {/* link */}
   <motion.div className={`${styles.flexCenter}  buton text-[5vw] z-[900]`} >
   <Link to='/button' >
   <motion.button initial={{opacity: 0 ,}} animate={{ scale: 2.5,  opacity:1,  }} transition={{delay: 1.5, duration: 1}} >
    <h1 className='mt-4 mb-4'>
      Power uP
    </h1>
   </motion.button>

   </Link>
   </motion.div>

   <div className='mt-10 text-[48px]'>
    <Menu/>
   </div>
   {/* link */}
  </body>
 
 {/* img */}
 <div className='h-[50px] bg-active'></div>
  <motion.div className="bg-red-600 " >
<img src={lamp} className='w-[86%] h-[80vh] py-2  ' />
 </motion.div> 
 {/* img */}
  </section>
  )
}

export default Home