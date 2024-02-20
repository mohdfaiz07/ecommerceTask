import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Routes/Home'
import Bag from './Routes/Bag'
import Header from './components/Header'
import Footer from './components/Footer'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton'

const App = () => {
  const { isAuthenticated} = useAuth0();


  return (
    <>
    {  isAuthenticated?
    <>
    <Header/> 
    <Routes>
      <Route path = '/' element = {  <Home/>  } />
      <Route path = '/bag' element = {  <Bag/> } />
    </Routes>
     <Footer/> 
    </>
     : <LoginButton/>}

    </>
  )
}

export default App