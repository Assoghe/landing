import './App.css'
import { AboutTheBook } from './sections/AboutTheBook/AboutTheBook'
import { ForWhoSection } from './sections/ForWhoSection/ForWhoSection'
import { Herosection } from './sections/herosection/HeroSection'


function App() {

  return (
    <div className='my-0'>
      <Herosection />
      <AboutTheBook/>
      <ForWhoSection/>
    </div>
  )
}

export default App
