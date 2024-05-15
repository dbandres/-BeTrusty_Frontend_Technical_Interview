"use client"

import Image from "next/image"
import { imgs } from "./images"
import React, { useState } from "react"
import arrowR from '../../assets/ArrowRight.png'
import arrowL from '../../assets/ArrowLeft.png'

export const Slider = () => {

  const [activeimage, setActiveImage] = useState(0);

  const next = () => {
    activeimage === imgs.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeimage + 1)
  }

  const prev = () => {
    activeimage === 0
      ? setActiveImage(0)
      : setActiveImage(activeimage - 1)
  }

  return (
    <div className="flex justify-center items-center transition-transform ease-in-out duration-500">
      {
        imgs.map((pic, index) => (
          <div key={pic.id} className={`${index === activeimage
              ? "block transition-all duration-500 ease-in-out w-full"
              : 'hidden'
            }`}>
            <Image
              src={pic.src}
              alt="carousel"
              width={300}
              height={100}
              className="w-full h-[27vh]"
            />
          </div>
        ))
      }
      <div onClick={prev} className="w-12 h-12 absolute left-2 items-center justify-center flex">
        <Image
          src={arrowL}
          alt="arrow"
          width={45}
          height={45}
        />
      </div>
      <div onClick={next} className="w-12 h-12 absolute right-2 items-center justify-center flex">
        <Image
          src={arrowR}
          alt="arrow"
          width={45}
          height={45}
        />
      </div>
    </div>
  )
}