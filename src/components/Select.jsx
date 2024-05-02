import React, { useId } from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
    const id = useId()
  return (
    <div className='w-full'>
      {label && <label
       className='my-2 mr-3 font-semibold text-xl'
       htmlFor={id}>
       {label}
       </label>}
      <select 
      className='border border-gray-500 py-2 px-3 rounded-lg text-xl'
      {...props}
      id={id}
      ref={ref}

      >
        {options.map((option) =>(
            <option key={option} value={option}>
                {option}
            </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
