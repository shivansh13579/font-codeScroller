import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Contact from '../components/Contact';

function ContactUs() {
    
   const data = {name: "",email:"", mobile: "",text:""}
   const [inputValue, setInputValue] = useState(data)
   console.log(inputValue);
   const [flag,setFlag] = useState(false)
   useEffect(()=>{
  
   },[flag])
    
    const submitForm = (e) => {
        e.preventDefault();

        if(!inputValue.name || !inputValue.email || !inputValue.mobile || !inputValue.text){
          alert("All fields are mendentory")
        }else{
          setInputValue(data)
          setFlag(true)
        }
    }

  return (
   <Layout>

    <Contact />
     {/* <main className='min-h-[200px] px-4 py-8 sm:px-20'>
      <section className='py-7'>
        <h1 className='font-semibold text-5xl font-serif'>You can find us here</h1>
        <p className='py-5 font-semibold -tracking-tighter'>Find help for your queries here:</p>
      </section>
      <section>
       <pre className='overflow-hidden text-wrap'>{flag ? <h2>Hello {inputValue.name} You have Register successfully</h2>: ""}</pre>
        <form action="">
        <div className=''>
          <label htmlFor="name" className='font-semibold text-xl pb-5'>
          Name
          </label>
          <br />
          <input 
          value={inputValue.name}
          onChange={(e) =>  
          setInputValue({...inputValue,[e.target.name]:e.target.value})}
          type="text" 
          id="name" 
          name="name"
          placeholder='Enter Your Name' 
          className='my-4 border border-1  py-1'/>
          <br />

          <label htmlFor="email" className='font-semibold text-xl pb-5'>
          Email
          </label>
          <br />
          <input
          value={inputValue.email}
          name="email"
           onChange={(e) =>  setInputValue({...inputValue,[e.target.name]:e.target.value})}
           className='my-4 border border-1 py-1' 
           type="email"  
           id="email" 
           placeholder='Enter Your Email'/>
          <br />

          <label  htmlFor="number" className='font-semibold text-xl pb-5'>
          Mobile Number
          </label>
          <br />
          <input 
          value={inputValue.mobile}
          name="mobile"
           onChange={(e) => setInputValue({...inputValue,[e.target.name]:e.target.value})}
          className='my-4 border border-1 py-1' 
          type="text"  
          id="number" 
          placeholder='Enter Your Mobile Number'/>
          <br />
        <label htmlFor="comment" className='font-semibold text-xl pb-5'>
        Comment
        </label>
        <br />
        <textarea 
        value={inputValue.text}
        onChange={(e) => setInputValue({...inputValue,[e.target.name]:e.target.value})}
        name= "text"
        className='my-4 border border-1 py-1' 
        rows="5" 
        placeholder='Enter your comment' />
        <br />

        <button
        onClick={submitForm} 
        className='my-4 border border-1 py-2 px-5 w-full bg-yellow-400 rounded-xl hover:bg-yellow-600'>
        Submit
        </button>
         
        </div>
        </form>
      </section>
     </main> */}

   </Layout>
  )
}

export default ContactUs
