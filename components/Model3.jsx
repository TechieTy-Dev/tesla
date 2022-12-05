import React from 'react'
import Image from 'next/image'
import car3 from '../public/Model3.png'

const Model3 = () => {
  return (
    <section id="#model3" className="car_section">
    <Image className="car_img" height={1300}  src={car3} alt="Model S Car" />
</section>
  )
}

export default Model3