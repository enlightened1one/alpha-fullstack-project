import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CardComponent from '@/components/CardComponent'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import LoginFormComponent from './components/LoginFormComponent'

// import { AlertDialogAction } from './components/ui/alert-dialog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='bg-[#181818]' >
      <h1 className='text-3xl font-bold text-yellow-500'>SchoolMan Admin</h1>



      {/* ---------------------------------------------- */}
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <CardComponent />
        <Input className="border border-gray-300 p-2 rounded-md" placeholder="Type something..." />
        
    </div> */}

    <LoginFormComponent/>
    </div>
  )
}

export default App
