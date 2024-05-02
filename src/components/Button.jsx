import React from 'react'

function Button({
    children,
    type="button",
    className,
    ...props
},ref) {
  return (
    <div>
      <button
      ref={ref}
      className='w-full hover:bg-blue-800 font-semibold border border-gray-400 bg-blue-700 text-white text-xl rounded-full mt-6 py-2 ' 
      {...props}>
        {children}
      </button>
    </div>
  )
}

export default React.forwardRef(Button)
