import React from 'react'
import Image from 'next/image'
import roof from '../public/SolarRoof.png'

const SolarRoof = () => {
  return (
    <section>
      <Image src={roof} alt="solar panels"  />
    </section>
  )
}

export default SolarRoof