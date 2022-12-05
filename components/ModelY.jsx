import React from 'react'
import Image from 'next/image'
import carY from '../public/ModelY.png'

const ModelY = () => {
  return (
    <section id="#modelY" className="car_section">
    <Image className="car_img" height={1300}  src={carY} alt="Model Y Car" />
</section>
  )
}

export default ModelY