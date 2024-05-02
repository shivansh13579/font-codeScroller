import React from 'react'

function Header() {
  return (
    // <div className='w-full flex flex-col items-center my-10 '>
    //   <h1 className='text-2xl sm:text-5xl font-bold hover:text-orange-600'>Code Scroller</h1>
    //   <p className='text-xl pt-2 hidden sm:block'>Start Scrolling the Code</p>  
    // </div>
    <div className=' min-h-[200px] px-4 py-8 sm:pl-20'>
    <div className='grid sm:grid-cols-2'>

      <div className='mt-10'>
         <h1 className='font-bold text-3xl font-serif pb-3 text-center sm:text-6xl sm:pr-10 sm:gap-1' >India’s largest bike taxi service </h1>

         <p className='text-gray-500 text-[16px] pb-3 font-bold sm:text-xl sm:my-6 sm:pr-24'>Rapido is India’s first and fastest-growing Bike taxi app with a whopping 25 Million+ app downloads. We are now running operations in more than 100 cities</p>
         <div className='my-4 flex justify-between sm:justify-around sm:pr-24  sm:my-5'>
          <button 
          className='rounded-tl-full  rounded-r-full px-6 py-2 bg-yellow-400 gap-3 mr-2 text-[14px] sm:text-2xl font-bold hover:bg-yellow-700 sm:ml-4 sm:px-10'>
          Know More
          </button>
          <button 
          className='rounded-tr-full rounded-l-full px-6 py-2 bg-black hover:bg-black/65 text-[14px] sm:text-2xl text-white font-bold sm:mr-4 sm:px-10'>
          Click Here
          </button>
         </div>
      </div>

      <div className=' sm:bg-yellow-500 sm:rounded-tl-full rounded-r-full '> 
         <img className=' sm:m-10 sm:rounded-full sm:w-96 sm:py-10 sm:px-7 sm:h-96 hidden sm:block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src="https://images.pexels.com/photos/2880476/pexels-photo-2880476.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

          <img className='w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 sm:hidden' src="https://plus.unsplash.com/premium_photo-1686694531925-d28ce1425882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="" />
       </div>

    </div>
    </div>
  )
}

export default Header
