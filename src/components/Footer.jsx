import React from 'react'

function Footer() {
  return (
    <div className='bg-black w-full flex max-h-screen p-10'>
      <div className='text-white flex-col w-1/3'>
       <div>
         <h1 className='text-lg relative'>
         <div>
         <span className='border-2  border-orange-500 absolute left-0 bottom-0 top-0 '></span>
         </div>
         <div className='pl-3 font-extrabold'>
         ABOUT US
         </div>
         </h1>
         <p>CodeScroller: Start Scrolling the Code!. Explore our blog for easy-to-understand tips, tutorials, and advice on coding. Whether you are just starting out or looking to level up your skills, we are here to make coding simple and enjoyable for everyone.</p>
       </div>
       </div>
      <div className='text-white flex-col w-1/3'>
        <div>Home</div>
        <div>Term & Condition</div>
        <div>Contact Us</div>
        <div>About Us</div>
      </div>
      <div className='text-white flex-col w-1/3'>
           <div>
            SOCIAL
           </div>
           <div>
            Icon
           </div>
      </div> 
    </div>
  )
}

export default Footer
