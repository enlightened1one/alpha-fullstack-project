import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import CardComponent from './components/CardComponent'
import { AlertDialogAction } from './components/ui/alert-dialog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold text-yellow-500'>SchoolMan Admin</h1>
      <AlertDialogAction/>
      {/* <CardComponent/> */}
    </>
  )
}

export default App
