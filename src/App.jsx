import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from './Component/Home'
import About from './Component/About'
import CreateUser from './Component/CreateUsers'
import AllUsers from './Component/AllUsers'
import Navbar from './Component/Navbar'
import UpdateData from './Component/UpdateData'
import Login from './Component/Login'
import SignUp from './Component/SignUp'

const App = () => {
  return (
    <div> 
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
         <Route path='/about' element={<About/>} ></Route>
        <Route path='/createusers' element={<CreateUser/>} ></Route>
        <Route path='/allusers' element={<AllUsers/>} ></Route>
        <Route path ='/update:id' element={<UpdateData/>}></Route>
        <Route path ='/login' element={<Login/>}></Route>
        <Route path={'/updatedata/:id'} element={<UpdateData/>}></Route>
        <Route path ='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App
