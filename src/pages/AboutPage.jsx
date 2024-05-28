import React from 'react'
import AboutHero from '../components/AboutHero'
import HowItWork from '../components/HowItWork'
import Empty from '../components/Empty'
import Pets from '../components/Pets'
import Feed from '../components/Feed'
import Testimonials from '../components/Testimonials'
import Look from '../components/Look'

function AboutPage() {
  return (
    <main>
      <AboutHero/>
      <HowItWork/>
      <Empty/>
      <Pets/>
      <Feed/>
      <Testimonials/> 
      <Look/>
    </main>
  )
}

export default AboutPage