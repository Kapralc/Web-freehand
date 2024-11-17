import React from 'react'
import Socials from './Socials'
import MobileNav from './MobileNav'
import logo from '../assets/header/logo1.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full p-[30px] fixed lg:px-[100px] z-30 h-[100px] lg:h-[130px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to='/' className='max-w-[150px]'><img src={logo} alt='' /></Link>
        <nav className='hidden xl:flex gap-x-12 font-semibold pt-2'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition-all'>Domů</Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition-all'>O mně</Link>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition-all'>Portfolio</Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition-all'>Kontakt</Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  )
}

export default Header