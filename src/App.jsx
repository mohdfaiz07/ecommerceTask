import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Routes/Home'
import Bag from './Routes/Bag'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
    <>   
    <Header/> 
    <Routes>
      <Route path = '/' element = {  <Home/>  } />
      <Route path = '/bag' element = {  <Bag/> } />
    </Routes>
     <Footer/> 

    </>
    
  )
}

export default App