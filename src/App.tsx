import React from 'react'
import './App.css'
import PopOver from './components/popOver/PopOver'
import img1 from './images/mini_view.png'

function App() {
  return (
    <div className='App'>
      <PopOver placement='left' title='left click' content={img1} trigger='click'>
        Click me
      </PopOver>
    </div>
  )
}

export default App
