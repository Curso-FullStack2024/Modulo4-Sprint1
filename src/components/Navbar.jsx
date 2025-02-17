import React, { useState } from 'react'
import { itemsMenu } from '../utils/itemsMenu'

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
            <div className='bg-blue-900 md:hidden '>

                { // dependiendo del valor del isOpen muestra icono para abrir o cerrar el menu
                    isOpen ? <i className="bi bi-x text-2xl" onClick={toggleMenu}></i>
                        :
                        <i className="bi bi-menu-down text-3xl" onClick={toggleMenu}></i>
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
            </div>

        </nav>
    )
}

export default Navbar