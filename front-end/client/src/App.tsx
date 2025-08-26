import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CardComponent from '@/components/CardComponent'
import './App.css'


// import { AlertDialogAction } from './components/ui/alert-dialog'

function App() {
  return (
    <div  className='bg-[#1b263b] h-[200vh]' >
      <h1 className='text-3xl font-bold text-[#dde5b6]'>SchoolMan Admin</h1>

      <div className='flex justify-center items-center overflow-y-scroll'>
        <CardComponent />
      </div>


      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc5BOlNjE6kTSoEXCv8me0hZAv6-YfkEUKkXc4N7T-xXn-QKg/viewform?embedded=true" width="640" height="986" >Loading…</iframe> */}



    {/* <LoginFormComponent/> */}
    </div>
  )
}

export default App
