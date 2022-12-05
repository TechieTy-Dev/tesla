import React from 'react'
import Image from 'next/image'
import carX from '../public/ModelX.png'

const ModelX = () => {
  return (
    <section id="#modelX" className="car_section">
    <Image src={carX} height={1300}  className="car_img" alt="Model S Car" />
</section>
  )
}

export default ModelX