import './App.css'
import { AboutTheBook } from './sections/AboutTheBook/AboutTheBook'
import { DesignDevSection } from './sections/DesignDevSection/DesignDevSection'
import { ForWhoSection } from './sections/ForWhoSection/ForWhoSection'
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
    </div>
  )
}

export default App
