import React from 'react'
import carS from '../public/ModelS.png'
import Image from 'next/image'
import down from '../public/down.svg'
const Hero = () => {
  return (
    <section id="#modelS" className="car_section">
      <Image src={carS} className="car_img" height={1300} alt="Model S Car" />
      <div className="car_details transform_50">
        <h1 className="mb-3 text-8xl text-bold">Model S</h1>
        <h2 className="text-4xl text-gray-500">Preorder Online</h2>
      </div>
      <div className="car_buttons transform_50">
      <button className="btn" type="button">Custom Order</button>
      <button className="btn inventory" type="button">Existing Inventory</button>
     </div>
     <Image className="down_arrow" src={down} alt="down Arrow"/>
  </section>
  )
}

export default Hero