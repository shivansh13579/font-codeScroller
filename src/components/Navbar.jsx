import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import clsx from 'clsx';

function Navbar() {
  
  const [isSideMenuOpen, setMenue] = useState(false)
  const navLink = [
       {
         Label: "Home",
         link: "/"
       },
       {
          Label: "About",
          link: '/about'
       },
       {
          Label: "Term&Condition",
          link: "/termcondition"
       },
       {
          Label: "Contact",
          link: "/contact"
       },
  ]
     

  return (
   <main >
     <nav className='h-[70px] flex justify-between items-center bg-black/10 px-8 py-6 shadow-sm '>
         
         <div className='flex items-center gap-4 '>
         <section className='flex items-center gap-4'>
         {/* menu */}
         <IoMdMenu
         onClick={()=>setMenue(true) }
          className='text-3xl cursor-pointer sm:hidden'/>
         <Link to='/'>
          <img className='hidden sm:block w-10 h-8 rounded-full' src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465_640.png" alt="" />
         </Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
         </section>
         {navLink.map((d,i)=>(
                <Link 
                key={i} 
                className='hidden px-2 text-xl font-bold sm:block text-gray-500 hover:text-red-600'
                to={d.link}>
                   {d.Label}
                </Link>
              ))}
         </div>

         {/* sidebar mobile menu */}
         <div 
         className={clsx(
             "fixed h-full w-screen sm:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
             isSideMenuOpen && "translate-x-0"
         )}>
           <section className='text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-50'>
           <IoMdClose 
           onClick={()=>setMenue(false)}
            className='text-3xl cursor-pointer mt-0 mb-8' />
              {navLink.map((d,i)=>(
                <Link 
                className="text-xl font-bold hover:text-red-600"
                key={i} 
                 to={d.link}>
                {d.Label}
   
                </Link>
              ))}
           </section>
         </div>
        
        {/* last section */}
         <section className='flex items-center gap-4'>
         {/* cart item */}
          <FaCartPlus className='text-3xl'/>

         {/* avatar */}
         <img src="https://i.pravatar.cc/150?img=3" className=' w-[40px] h-[40px] rounded-full' alt="" />
         </section>
     </nav>
     <hr />
   </main>
  )
}

export default Navbar
