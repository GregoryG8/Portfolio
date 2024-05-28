import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Home.css'

function Home() {
  return (
    <div>
      <NavBar/>
      <h1>Hola, mi nombre es</h1> 
      <h1 className='border'>Gregory Gonzalez</h1>
      <h1 className='wave'>Gregory Gonzalez</h1>
      
    </div>
  )
}

export default Home