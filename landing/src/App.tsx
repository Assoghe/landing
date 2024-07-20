import './App.css'
import { AboutTheBook } from './sections/AboutTheBook/AboutTheBook'
import { Herosection } from './sections/herosection/HeroSection'


function App() {

  return (
    <div className='my-0'>
      <Herosection />
      <AboutTheBook/>
    </div>
  )
}

export default App
