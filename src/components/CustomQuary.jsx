import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const customReactQuary = (urlPath) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [search,setSearch] = useState('')

  
    useEffect(()=>{
      const controller = new AbortController()
        ;(async() => {
       try {
        setLoading(true)
        setError(false)
         const response = await axios.get(urlPath,{
          signal: controller.signal
         })
         console.log(response.data);
         setData(response.data)
         setLoading(false)
       } catch (error) {
          if(axios.isCancel(error)){
            console.log('Request canceled', error.message)
            return
          }
          setError(true)
          setLoading(false)
       }
        })()
  
        //cleanup
        return () => {
          controller.abort()
        }
     },[search])
}