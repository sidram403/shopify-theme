import React from 'react'
import './App.css'
import Landing from './components/landing/Landing'
import MainContent from './components/container/MainContent'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='body-content'>
      <Landing />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
