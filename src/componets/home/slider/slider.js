import React from 'react'
import CitiesSlider from "./slide.jsx"
import {} from "../../../images/s2.jpg"
export default function slider() {
  return (
    <div>
       <CitiesSlider slides={slides} />
    </div>
  )
}

const slides = [
  {
    city: 'Demo',
    country: 'Demo',
    img: require("../../../images/sliderImage/a.jpg"),
  },
  {
    city: 'Demo1',
    country: 'Demo1',
    img: require("../../../images/sliderImage/b.jpg")
  },
  {
    city: 'Demo3',
    country: 'Demo3',
    img: require("../../../images/sliderImage/c.jpg")
  },
  {
    city: 'Demo4',
    country: 'Demo4',
    img: require("../../../images/sliderImage/d.jpg")
  },
  {
    city: 'Demo5',
    country: 'Demo5',
    img: require("../../../images/sliderImage/e.jpg")
  },
  {
    city: 'Demo6',
    country: 'Demo6',
    img: require("../../../images/sliderImage/f.jpg")
  },
  {
    city: 'Demo7',
    country: 'Demo7',
    img: require("../../../images/sliderImage/g.jpg")
  }
];