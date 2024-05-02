import React from 'react'
import Layout from './Layout'
import { useParams } from 'react-router-dom';


function CardDetails() {

const {id} = useParams()

console.log(id);

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
