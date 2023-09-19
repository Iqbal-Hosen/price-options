
import './App.css'
import LineChart from './components/Link/LineChart'
import Navber from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

// import Daisy from './components/DaisyNav/Daisy'

function App() {


  return (
    <>
      <Navber></Navber>
      {/* <Daisy></Daisy> */}

      {/* <h1 className='text-7xl bg-gray-600'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>


    </>
  )
}

export default App
