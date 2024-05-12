import React from 'react'
import LoginPage from './Components/Pages/Auth/LoginPage';
import { Routes, Route } from 'react-router-dom'
import MinimalLayout from './Mui/layout/MinimalLayout';
import MainLayout from './Mui/layout/MainLayout';
import Home from './Components/Pages/Dashboard/Home'

const Routing = ({ user, loader, setLoader }) => {
  return (
    <Routes>
      {user.data.isAuthenticated ?
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home loader={loader} setLoader={setLoader} />} />
          <Route path='*' element={"Not found"} />
        </Route>
        :
        <Route path='/' element={<MinimalLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/signup" element={"Register"} />
          <Route path='*' element={"Not found"} />
        </Route>
      }
    </Routes>
  )
}

export default Routing