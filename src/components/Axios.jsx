import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios() {
  const [data,setData] = useState('')

  useEffect(()=>{
    
    ;(async()=>{
      try {
        const response = await axios.get('/api/products')
        setData(response.data)
      } catch (error) {
        console.log('Request Failed',error.message);
      }
        
    })()
  },[])
  return {
    data
  }
}

export default Axios
