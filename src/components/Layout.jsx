import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


function Layout({children}) {
  return (
    <>
       <Navbar />
      <div>{children}</div>
      <Footer />    
    </>
  )
}

export default Layout
