import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col h-50 bottom-0 bg-blue-900 px-20 pt-5   text-white'>
      <ul className='space-y-5'>
        <li className='hover:text-gray-400 cursor-pointer '> Quienes somos</li>
        <li className='hover:text-gray-400 cursor-pointer '>Avisos legales</li>
        <li className='hover:text-gray-400 cursor-pointer '>Contactanos</li>
      </ul>

      <div className='flex  flex-row w-full justify-center content-stretch gap-5 text-xl'>
        <div><i className="bi bi-instagram"></i></div>
        <div><i className="bi bi-facebook"></i></div>
        <div><i className="bi bi-twitter-x"></i></div>
      </div>



    </div>
  )
}

export default Footer