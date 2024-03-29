import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-800 opacity-90 rounded-md'>
      <div className='h-14 sm:h-11 container mx-auto  text-white flex items-center justify-center sm:justify-between'>
        <Link to="/" className='px-8 py-4 text-2xl opacity-100'  >Screen Surfer</Link>
        <nav className='gap-x-8 hidden sm:flex font-semibold'>
        </nav>
      </div>
    </div>
  )
}

export default Header