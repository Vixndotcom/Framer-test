import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import Home from '../home/Home'
import About from '../about/About'
import Footer from '../Footer'
import ScrollTop from '../ScrollTop'
import styles from '../../style'



const Pages = () => {
  return (
    <>
<Router >


     <div className=' w-full overflow-hidden'> 
        <Navbar />
     </div>


<Routes>

    <Route exact path ='/' element={<Home />} />  
    <Route exact path ='/about' element={< About />} />  

</Routes>
<div className={`${styles.boxWidth} `}>
            < ScrollTop />
           </div>  


<div className='bg-missionn '>
        <div className=''>
          <Footer />
        </div>
       </div>


</Router> 
    </>
  )
}

export default Pages