import { useState, React}from 'react'
import { motion } from 'framer-motion'


const Footer = () => {
  const [bgColor, setbgColor] = useState('bg-blue-900')
  return (
    
     < div className={`flex flex-col h-50 bottom-0 ${bgColor} px-20 pt-5   text-white`} >
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
          <button className='bg-blue-200 text-sm p-2' onClick={()=>setbgColor('bg-yellow-800')} > Cambiar background color</button>
        </ motion.div>

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