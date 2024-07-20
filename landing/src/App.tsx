import './App.css'
import { AboutTheBook } from './sections/AboutTheBook/AboutTheBook'
import { ForWhoSection } from './sections/ForWhoSection/ForWhoSection'
import { FindSection } from './sections/WhatWillYouFindSection/FindSection'
import { Herosection } from './sections/herosection/HeroSection'


function App() {

  return (
    <>
      <Herosection />
      <AboutTheBook/>
      <ForWhoSection/>
      <FindSection/>
    </>
  )
}

export default App
