import { useState } from 'react'
import AuthCards from './components/AuthCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthCards name={'property1'} />
      <AuthCards name={'property2'} />
    </>
  )
}

export default App
