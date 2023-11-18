import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import CreateNotes from './Pages/CreateNotes'
import EditNotes from './Pages/EditNotes'
const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/notes/create/:id' element={<CreateNotes/>} />
        <Route path='/notes/edit/:id' element={<EditNotes/>} />
    </Routes>
    </div>
  )
}

export default AllRoutes