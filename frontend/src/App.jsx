import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login' 
import SignUp from './pages/Signup/Signup'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Home from './pages/Home/Home'
import EditProfile from './pages/EditProfile/EditProfile'
import UserProfile from './pages/UserProfile/UserProfile'
import { UserProvider } from "./context/UserContext";
import DepartmentDetail from './pages/DepartmentDetail/DepartmentDetail';
import softwareData from './data/departmentsData/Software';
import electricalData from './data/departmentsData/Electrical';
import civilData from './data/departmentsData/civil';
import mechanicalData from './data/departmentsData/mechanical';
import chemicalData from './data/departmentsData/chemical';
import biomedicalData from './data/departmentsData/biomedical';

const App = () => {
  return (
    <UserProvider>
      <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgot-passoword" element={<ForgotPassword/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/my-profile" element={<UserProfile />} />
        <Route
          path="/department/software"
          element={<DepartmentDetail title="Software Engineering" semesterData={softwareData} />}
        />
        <Route
          path="/department/electrical"
          element={<DepartmentDetail title="Electrical Engineering" semesterData={electricalData} />}
        />
        <Route
          path="/department/civil"
          element={<DepartmentDetail title="Civil Engineering" semesterData={civilData} />}
        />
        <Route
          path="/department/mechanical"
          element={<DepartmentDetail title="Mechanical Engineering" semesterData={mechanicalData} />}
        />
        <Route
          path="/department/chemical"
          element={<DepartmentDetail title="Chemical Engineering" semesterData={chemicalData} />}
        />
        <Route
          path="/department/biomedical"
          element={<DepartmentDetail title="Biomedical Engineering" semesterData={biomedicalData} />}
        />
      </Routes>
    </Router>
    </UserProvider>
    
  )
}

export default App
