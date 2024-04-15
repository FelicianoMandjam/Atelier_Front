import { useState } from 'react'
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Home from "./pages/user/home/Home"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
