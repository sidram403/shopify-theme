import React from 'react'
import './App.css'
import Landing from './components/landing/Landing'
import MainContent from './components/container/MainContent'

const App = () => {
  return (
    <div className='body-content'>
      <Landing />
      <MainContent />
    </div>
  )
}

export default App
