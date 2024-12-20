import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <div className='text-2xl font-bold flex'>{count}</div>
        {/* <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => setCount(count + 1)}>Arttır</button>
      <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => setCount(count - 1)}>Azalt</button> */}
        <div className='flex gap-2'>
          <Button title="Arttır" onClick={() => setCount(count + 1)}/>
          <Button title="Azalt" onClick={() => setCount(count - 1)}/>
        </div>
      </div>
    </>
  )
}

export default App
