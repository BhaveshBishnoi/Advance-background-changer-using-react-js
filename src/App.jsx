

import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState('olive')

  return (
    <>
      <div className='h-screen w-full flex flex-wrap justify-center items-end' style={{backgroundColor:color}}>
<div className='bg-white h-12 w-1/2 my-10 rounded-lg flex items-center justify-center'>
  <button className='px-3 py-1 m-4 bg-red-700 text-white' onClick={()=> setColor('red')}>Red</button>
  <button className='px-3 py-1 m-4 bg-yellow-300 text-white' onClick={()=> setColor('yellow')}>Yellow</button>
  <button className='px-3 py-1 m-4 bg-green-700 text-white' onClick={()=> setColor('green')}>Green</button>
  <button className='px-3 py-1 m-4 bg-blue-700 text-white' onClick={()=> setColor('blue')}>Blue</button>
  <button className='px-3 py-1 m-4 bg-purple-700 text-white' onClick={()=> setColor('purple')}>Purple</button>
  <button className='px-3 py-1 m-4 bg-orange-600 text-white' onClick={()=> setColor('orange')}>Orange</button>
</div>
      </div>
    </>
  )
}

export default App
