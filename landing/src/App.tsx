import './App.css'
import { AboutMe } from './sections/AboutMe/AboutMe'
import { AboutTheBook } from './sections/AboutTheBook/AboutTheBook'
import { DesignDevSection } from './sections/DesignDevSection/DesignDevSection'
import { Footer } from './sections/Footer/Footer'
import { ForWhoSection } from './sections/ForWhoSection/ForWhoSection'
import { InterestForTheBook } from './sections/InterestForTheBook/InterestForTheBook'
import { FindSection } from './sections/WhatWillYouFindSection/FindSection'
import { Herosection } from './sections/herosection/HeroSection'


function App() {

  return (
    <div className='bg-neutral-950'>
      <Herosection />
      <AboutTheBook/>
      <ForWhoSection/>
      <FindSection/>
      <DesignDevSection/>
      <AboutMe/>
      <InterestForTheBook/>
      <Footer/>
    </div>
  )
}

export default App
