import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Route,Link } from 'react-router-dom'
import Home from './componentsPage/Home.jsx'
import Favorite from './componentsPage/Favorite.jsx'
import About from './componentsPage/About.jsx'
import Contact from './componentsPage/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Favorite",
    element: <Favorite/>
  },
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
