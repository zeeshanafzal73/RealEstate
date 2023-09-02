import React from 'react'
import { Slideshow } from './Slider'
import { Services } from './Services'
import { LatestProperties } from './LatestProperties'
import { Agents } from './Agents'
import { LatestNews } from './LatestNews'
import Testimonials from './Testimonial'


export  const Home = () => {
  return (
    <>
    <Slideshow/>
    <Services/>
    <LatestProperties/>
    <Agents/>
    <LatestNews/>
    <Testimonials/>
    </>
  )
}
