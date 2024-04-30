import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <picture>
      <source srcSet=".assets/image-hero-desktop.png" media="(min-width: 600px)" type="image/png" />
      <img src="../src/assets/image-hero-mobile.png" alt="" />
    </picture>
  )
}

export default App
