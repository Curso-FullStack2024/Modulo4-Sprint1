import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='flex flex-col h-50 bottom-0 bg-blue-900 px-20 pt-5   text-white'>
      <ul className='space-y-5'>
        <li className='hover:text-gray-400 cursor-pointer '> Quienes somos</li>
        <li className='hover:text-gray-400 cursor-pointer '>Avisos legales</li>
        <li className='hover:text-gray-400 cursor-pointer '>Contactanos</li>
      </ul>

      <div className='flex  flex-row w-full justify-center content-stretch gap-5 text-xl'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <i className="bi bi-instagram"></i>
        </ motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        ><i className="bi bi-facebook"></i>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        ><i className="bi bi-twitter-x"></i>
        </motion.div>

      </div>



    </div>
  )
}

export default Footer