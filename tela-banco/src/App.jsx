import { useState } from 'react'
import './App.css'
import DropMenu from './components/DropMenu/DropMenu'

function App() {
  function random() {
    console.log('a')
  }
  return (
    <>
      <DropMenu onClick={random}/>
    </>
  )
}

export default App
