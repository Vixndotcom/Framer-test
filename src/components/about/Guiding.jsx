import React from 'react'
import styles from '../../style'

const Guiding = () => {
  return (
    <section className={`${styles.flexStart} text-start `}>
   <div>
    {/* card 1 */}   
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track'>
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} border-[2px] text-white bg-yellow`}>  
     <h1 className='text-white galgo text-[32px] tracking-wide'> 01. </h1>
     </div> 
   <h2 className={`${styles.flexStart} galgo text-5xl tracking-wide mt-5 mx-2` }>
   All our services are customized to meet the specific needs of each individual and 
   organization.
        </h2>        
    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 '>
    We believe that the one-size-fits-all approaches do not work, and we 
will take the time to understand the specific goals and challenges of each client before 
developing a tailored plan.
    </p>
     {/* heading */}

    </div> 
    {/* card 1   ///////////////////////////////////////////    */}
     {/* card 2 */}  
    <div className='bg-purple h-[8px] '></div>
    
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track '>
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} border-[2px] text-white bg-yellow`}>  
     <h1 className='text-white galgo text-[32px] tracking-wide'> 02. </h1>
     </div> 
   <h2 className={`${styles.flexStart} galgo text-5xl blue tracking-wide mt-5 mx-2` }>
   We are committed to providing high-quality services that are based on the latest 
   research and best practices.
        </h2>        
    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 '>
     Our team members are experts in their fields, and they are 
    continually learning and staying up to date on the latest developments in their areas of 
      expertise.
    </p>
     {/* heading */}

    </div> 
    {/* card 2   ///////////////////////////////////////////    */}
     {/* card 3 */}  
    <div className='bg-purple h-[8px] '></div>
    
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track '>
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} border-[2px] text-white bg-yellow`}>  
     <h1 className='text-white galgo text-[32px] tracking-wide'> 03. </h1>
     </div> 
   <h2 className={`${styles.flexStart} galgo text-5xl tracking-wide mt-5 mx-2` }>
    We believe in the importance of open communication and collaboration.
        </h2>        
    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 '>
    We will 
   work closely with our clients to ensure that they are involved in the planning and 
   execution of their plan, and that they have the information and support they need to 
    succeed.
    </p>
     {/* heading */}

    </div> 
    {/* card 3  ///////////////////////////////////////////    */}
    </div>
</section>
  )
}

export default Guiding
