import React from 'react'
import image1 from '../assets/portfolio/1.png'
import image2 from '../assets/portfolio/2.png'
import image3 from '../assets/portfolio/3.png'
import image4 from '../assets/portfolio/4.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: '100%' }}
      transition={{ transition1 }}
     className='h-screen w-screen'>
      <div className='container w-full relative h-full mx-auto'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: '-80%' }}
            transition={{ transition1 }}
           className='flex flex-col lg:flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm font-medium font-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium reiciendis debitis eos quam pariatur quisquam voluptatibus mollitia rem ipsum,
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, consequuntur.
            </p>
            <Link className='btn mb-[30px] mx-auto lg:mx-0' to={'/contact'}>Kontakt</Link>
          </motion.div>
          <div className='grid grid-cols-2 lg:gap-2'>
            <div className=' max-w-[240px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className=' object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image1} alt="" />
            </div>
            <div className=' max-w-[240px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className=' object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image2} alt="" />
            </div>
            <div className=' max-w-[240px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className=' object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image3} alt="" />
            </div>
            <div className=' max-w-[240px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className=' object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio