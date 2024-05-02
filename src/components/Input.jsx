import React from 'react'
import { useId } from 'react'

function Input({
    label,
    type="text",
    className,
    ...props
},ref) {
    const id = useId();

  // console.log(props);


  return (
    <div>
      {label && <label
      className='font-semibold'
      htmlFor={id}
      >{label}</label>}
       
       <input 
       type={type}
       id={id}
       className='border border-gray-500 my-4 px-2 py-2 w-full rounded-lg '
      //  ref={ref}
       {...props}
       />
    </div>
  )
}

export default React.forwardRef(Input)
