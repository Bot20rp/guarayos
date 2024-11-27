import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VistaPage from './components/pages/VistaPage'
import { Navbar } from './components/Navar/Navbar'


import React from 'react'

function Main() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element ={<VistaPage/>} />
      </Routes>

    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}

export default App
