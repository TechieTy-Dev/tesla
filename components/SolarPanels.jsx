import React from 'react'
import Image from 'next/image' 
import panels from '../public/SolarPanels.png'

const SolarPanels = () => {
  return (
    <section>
      <Image src={panels}  alt="solar panels" />
    </section>
  )
}

export default SolarPanels