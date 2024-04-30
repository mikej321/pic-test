import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import img1 from './assets/image-hero-mobile.png'
import './App.css'

function App() {
  return (
    <>
      <picture>
        <source srcSet="src/assets/image-hero-desktop.png" media="(min-width: 600px)" type="image/png" />
        <img src={img1} alt="" />
      </picture>
    </>
    
  )
}

export default App
