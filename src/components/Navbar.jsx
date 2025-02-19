import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { itemsMenu } from '../utils/itemsMenu'
import { animaciones } from '../utils/animation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='flex  ml-20    items-end  text-white font-bold '>

            {/* menu desktop */}
            <div className='hidden md:block  '>
                <ul className='flex flex-row items-center space-x-5'>
                    {
                        itemsMenu.map((item) => (
                            <li key={item.id} className='hover:text-gray-400 '>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>




            {/* menu mobile */}
           
            {/* <div className='bg-blue-900 md:hidden '>
                { // dependiendo del valor del isOpen muestra icono para abrir o cerrar el menu                   
                    isOpen ? <i className="bi bi-x-square text-2xl hover:text-3xl" onClick={toggleMenu}></i>
                        :
                        <i className="bi bi-menu-down text-3xl hover:text-4xl" onClick={toggleMenu}></i>
                }
                {
                    // solo muestra los items del menu si el estado isOpen es true
                    isOpen && <ul className='flex flex-col items-left space-y-2'>
                        {
                            itemsMenu.map((item) => (
                                <li key={item.id} className='hover:text-gray-400 '>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                }
            </div> */}




            <div className='bg-blue-900 md:hidden '>
                { // dependiendo del valor del isOpen muestra icono para abrir o cerrar el menu                   
                    isOpen ? <i className="bi bi-x-square text-2xl hover:text-3xl" onClick={toggleMenu}></i>
                        :
                        <i className="bi bi-menu-down text-3xl hover:text-4xl" onClick={toggleMenu}></i>
                }
                {
                    <AnimatePresence initial={false}>
                        // solo muestra los items del menu si el estado isOpen es true
                        {isOpen &&
                            <motion.div
                                variants={animaciones()}
                                initial='initial_menu'
                                animate='animate_menu'
                                exit='exit_menu'
                                transition={{ duration: 1 }}

                            >
                                <ul className='flex flex-col items-left space-y-2'>
                                    {
                                        itemsMenu.map((item) => (
                                            <li key={item.id} className='hover:text-gray-400 '>
                                                <a href={item.link}>{item.title}</a>
                                            </li>
                                        ))
                                    }
                                </ul>

                            </motion.div>
                        }
                    </AnimatePresence>

                }
            </div>

        </nav>
    )
}

export default Navbar