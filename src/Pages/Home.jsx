import React from 'react'
import Hero from "../Components/Hero.jsx"
import CallToAction from '../Components/CallToAction.jsx'
import Sponsors from '../Components/Sponsors.jsx'
import NewsLetter from '../Components/NewsLetter.jsx'
import Testimonails from '../Components/Testimonails.jsx'
import FeaturedRoom from '../Components/FeaturedRoom.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Sponsors/>
      <FeaturedRoom/>
      <CallToAction/>
      <Testimonails/>
      <NewsLetter/>
    </div>
  )
}

export default Home
