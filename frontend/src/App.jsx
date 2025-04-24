import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login' 
import SignUp from './pages/Signup/Signup'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Home from './pages/Home/Home'
import EditProfile from './pages/EditProfile/EditProfile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgot-passoword" element={<ForgotPassword/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  )
}

export default App
