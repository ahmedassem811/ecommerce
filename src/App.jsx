import React, { useEffect, useState } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Err from './components/Err/Err';
import Brands from './components/Brands/Brands';
import ProDetails from './components/ProductDetails/ProDetails';
import BrandsDetails from './components/BrandsDetails/BrandsDetails';
import Profile from './components/Profile/Profile';
import jwtDecode from 'jwt-decode';
import CartContextProvider from './context/cartContext';




export default function App() {

  function ProtectedRoute({ children }) {

    if (crrUser == null) {

      return <Navigate to={'/login'} />

    } else {

      return <>
        {children}
      </>
    }
  }

  const [crrUser, setcrrUser] = useState(null)


  function getUserData() {
    const userData = (jwtDecode(localStorage.getItem('tkn')))
    setcrrUser(userData)
  }


  function rmvUser() {
    localStorage.removeItem('tkn')
    setcrrUser(null)
  }


  useEffect(function () {

    if (localStorage.getItem('tkn') != null && crrUser == null) {

      getUserData()

    }

  }, [])



  const router = createBrowserRouter([
    {
      path: '', element: <Layout crrUser={crrUser} rmvUser={rmvUser} />, children: [

        { path: '', element: <CartContextProvider> <Home /> </CartContextProvider> },
        { path: 'home', element: <CartContextProvider> <Home /> </CartContextProvider> },
        { path: 'profile', element: <ProtectedRoute> <Profile crrUser={crrUser} /> </ProtectedRoute> },
        { path: 'prodetails/:id', element: <ProtectedRoute> <CartContextProvider> <ProDetails /> </CartContextProvider>  </ProtectedRoute> },
        { path: 'brands', element: <Brands /> },
        { path: 'brandsProducts/:id', element: <BrandsDetails /> },
        { path: 'login', element: <Login getUserData={getUserData} /> },
        { path: 'register', element: <Register /> },
        { path: '*', element: <Err /> }
      ]
    }
  ])






  return <>
    <RouterProvider router={router} />
  </>
}
