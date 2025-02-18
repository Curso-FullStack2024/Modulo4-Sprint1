import React from 'react'
import { motion } from 'framer-motion'

import equipo from './../assets/equipo.png'
import { animaciones } from '../utils/animation'

const Body = () => {
    return (
        // <div className="container flex flex-col flex-grow mx-auto bg-blue-100 p-6">
        <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto bg-blue-100 p-10 min-h-200">

            <div className=' '>
                <h1 className='font-bold text-lg'>¡Argentina Campeón del Mundo 2022!   </h1>
                <div>

                    En un torneo inolvidable bajo las estrellas de Qatar, la selección argentina escribió una página dorada en la historia del fútbol. Con corazón, garra y el genio eterno de Lionel Messi, nuestro equipo conquistó su tercer título mundial en una final épica que quedará grabada para siempre en la memoria de todos los argentinos.
                </div>
                <br />

                <div> Este sitio es un homenaje a ese sueño hecho realidad: un espacio para revivir cada gol, cada grito, cada lágrima de alegría. Aquí celebramos el camino hacia la gloria, honramos a nuestros héroes y recordamos por qué somos el país del fútbol.
                </div>
                <br />

                <h2 className='font-bold'>¿Qué encontrarás aquí?  </h2>
                <div>
                    <span className=' text-3xl  rounded-full p-5'><i className="bi bi-bus-front-fill  text-blue-900  "></i></span>
                    <h3 className='inline text-blue-900'>El camino al título: </h3> Desde el primer partido hasta la histórica final contra Francia.
                </div>
                <div>
                    <span className=' text-3xl rounded-full p-5'><i className="bi bi-people text-blue-900"></i></span>
                    <h3 className='inline text-blue-900'>Nuestros campeones:</h3>  Conoce a los jugadores que hicieron historia.
                </div>

                <div>
                    <span className=' text-3xl rounded-full p-5'><i className="bi bi-trophy text-blue-900"></i></span>
                    <h3 className='inline text-blue-900'>Momentos inolvidables:</h3>  Fotos, videos y relatos que te transportarán a Qatar 2022.
                </div>
                <div>
                    <span className=' text-3xl rounded-full p-5'><i className="bi bi-person-hearts text-blue-900"></i></span>
                    <h3 className='inline text-blue-900'>La pasión de la hinchada: </h3> Historias de quienes vivieron el Mundial como si estuvieran en la cancha.
                </div>
                <br />
                <h2>¡Sumérgete en esta experiencia única y revive la magia del campeonato que nos devolvió la felicidad!  </h2>

            </div>

            {/* div imagen animada */}
            <motion.div
                variants={animaciones()}
                initial='initial'
                animate={['scaleUpDown']}
            >
                <img src={equipo} alt='foto_equipo' className='rounded-full ' />
            </motion.div>

        </div >
    )
}

export default Body