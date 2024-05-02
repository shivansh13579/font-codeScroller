import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import Select from './Select'
import Button from './Button'

function Contact() {
  const { register, handleSubmit } = useForm()
  const data = { name: "", email: "", number: "", select: "" }

  const [input, setInput] = useState(data)

  const submit = (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.number || !input.select) {
      console.log("All Fields are mandatory");
    } 
  }

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;

    // console.log(name,value,'244');
    setInput({ ...input, [name]: value });
  }

  console.log(input)

  return (
    <main className='min-h-[200px] w-full md:w-full  px-4 py-8 md:bg-slate-100 md:sm:px-20'>
      <div className='md:flex md:justify-center md:items-center md:flex-col '>
        <div className='mb-4 '>
          <h1 className='md:text-4xl font-bold text-[25px] w-full px-4'>Registration Form</h1>
        </div>
        <div className=''>
          <form action="" onSubmit={handleSubmit(submit)}>
            <Input
              value={input.name}
              label="Full Name: "
              name="name"
              type='text'
              className=''
              placeholder="Enter your full name"
              // {...register("text", {
              //   required: true
              // })}
              // onChange={(e)=>{
              //   console.log(e.target.name)
              //     setInput({...input, name:e.target.value})
              // }}

              onChange={handleInputChange}
            />

            <Input
              value={input.email}
              onChange={handleInputChange}
              label="Email: "
              type='email'
              name="email"
              placeholder="Enter your email"
              // {...register("email", {
              //   required: true
              // })}
            />

            {/* <Input
              value={input.number}
              onChange={handleInputChange}
              label="Mob No: "
              type='number'
              name="number"
              placeholder="Enter your Mob No"
              {...register("number", {
                required: true
              })}
            /> */}

            {/* <Select
              value={input.select}
              onChange={handleInputChange}
              label="Select"
              name="select"
              options={["purnea", "Dhamda", "Sharsha"]}
              {...register("select", {
                required: true
              })}
            >
            </Select> */}

            <Button
              type='submit'
              {...register('submit', {
                required: true
              })}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact
