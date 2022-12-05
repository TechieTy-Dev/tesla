import React from 'react'
import tesla from '../public/tesla.svg'
import Image from 'next/dist/client/image'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full fixed top-0 z-10 h-[5.4rem] p-[3.2rem]'>
      <Image src={tesla} alt="Logo" height={24}  />
      <div>
        <a className="nav_links" href="#modelS">Model S</a>
        <a className="nav_links" href="#model3">Model 3</a>
        <a className="nav_links"  href="#modelX">Model X</a>
        <a className="nav_links"  href="#modelY">Model Y</a>
        <a className="nav_links"  href="#solarRoof">Solar Roof</a>
        <a className="nav_links"  href="#solarPanels">Solar Panels</a>
      </div>
      <div>
        <a className="nav_links"  href="#shop">Shop</a>
        <a className="nav_links" href="#account">Account</a>
        <a className="nav_links" href="#menu">Menu</a>
      </div>
    </div>
  )
}

export default Navbar