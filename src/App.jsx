import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import User from './User'
import Admin from './Admin'
import Nav from './Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/user' element={<User/>}></Route>
      </Routes>
    </div>
  )
}

export default App