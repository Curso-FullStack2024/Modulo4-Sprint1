import React from 'react'
import Navbar from './Navbar'
import copa from './../assets/fifaworldcup.png'

const Header = () => {
  return (
    <div className='flex flex-col  bg-blue-900 px-5 pt-5  md:flex-row h-auto md:px-20 '>
      <div className='flex '>
        <img src={copa} className='w-20 pb-4' />
        <h1 className='  text-white  text-4xl permanent-marker-regular h-24'>Campeones del Mundo</h1>
      </div>
      <Navbar />
    </div>
  )
}

export default Header