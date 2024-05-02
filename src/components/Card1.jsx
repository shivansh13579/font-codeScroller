import React, { useEffect, useState } from 'react'
import Layout from './Layout';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';



function Card1() {

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const [search,setSearch] = useState('')

  const navigate = useNavigate()

  useEffect(()=>{
    const controller = new AbortController()
    ;( async ()=>{
        try {
            setLoading(true)
            setError(false)
            const response = await axios.get('/api/products?search=' + search,{
                signal : controller.signal
            })
            console.log(response.data);
            setData(response.data)
            setLoading(false)
        } catch (error) {
            if(axios.isCancel(error)){
                console.log("Request Cancled", error.message);
                return
            }
            setError(true)
            setLoading(false)
        }
    })()
    //cancled
    return () =>{
        controller.abort()
    }
  },[search])

//   function handleData(product){
//      navigate(`/card1/${product.id}`)
//   }

   return (
   <Layout>
    <main className='sm:sm:px-20'>
    <div>
    <div className='sm:flex sm:justify-center py-8 px-4'>
     <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='border border-gray-400 pl-3 pr-14 py-2 rounded-xl'
        placeholder='search'
     />
    </div>
    </div>

    {loading? (<h1 className='py-5 text-3xl text-center'>Loading...</h1>) : null}

    {error ? (<h1 className='py-5 text-3xl text-center'>Something went wrong</h1>) : null}

     {data?  data.map( (product) => {
        return(
        <div key={product.id} className='w-full sm:w-fit sm:inline-block px-4'>
      <div  className='shadow-sm shadow-gray-300 h-fit sm:w-[205px] my-4'>
       <img className='h-[200px]' src={product.image} alt="" />
       <div className='flex flex-col items-center'> 
        <p className='px-1 py-1 text-[18px]'>{product.name}</p> 
        <p className='px-1 pb-1 text-gray-500'>{product.price}</p>
        <Link to={`/card1/${product.id}`}>
        <button className='bg-green-800 hover:bg-green-600 text-white px-4 py-1 rounded-xl'>View Details</button>
        </Link>
        
       </div>
       {/* onClick={handleData(product)} */}
      </div>
    </div>
     )
     }): null }
    
    </main>
    </Layout>
   
)
  
}

export default Card1

// const [search,setSearch] = useState('')

// const {data,loading,error} = customReactQuary('/api/products?search=' + search)
