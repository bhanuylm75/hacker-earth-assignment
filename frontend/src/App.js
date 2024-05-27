import React from 'react'
import {  Route, Routes} from 'react-router-dom'
import Auth from './pages/Auth'
import Homepage from './pages/Homepage'
import Postproperty from './pages/Postproperty'
import My from './pages/My'
import Interested from './components/Interested'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Auth/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/postproperty" element={<Postproperty/>}/>
      <Route path="/my" element={<My/>}/>
      <Route path="/intrested" element={<Interested/>}/>
    </Routes>
    </>
  )
}

export default App