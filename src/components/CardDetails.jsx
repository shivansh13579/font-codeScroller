import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';


function CardDetails() {
  const {id} = useParams()
  const [fetchData ,setFetchData] = useState([])
  const [error,setError] = useState(false)


useEffect(()=>{
  ;(async () => {
    try {
       const response = await axios.get(`/api/products/${id}`)
       console.log(response.data)
       setFetchData(response.data)
    } catch (error) {
      setError(true)
    }

  })()
},[id])



  return (
    <Layout>
    <div>
      <h1>ram is a --{id}</h1>
      <p>I am a name:{name}</p>
    </div>
    </Layout>
  )
}

export default CardDetails
