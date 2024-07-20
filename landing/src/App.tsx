import './App.css'
import { AboutMe } from './sections/AboutMe/AboutMe'
import { AboutTheBook } from './sections/AboutTheBook/AboutTheBook'
import { DesignDevSection } from './sections/DesignDevSection/DesignDevSection'
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
    </div>
  )
}

export default App
