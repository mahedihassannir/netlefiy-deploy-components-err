import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home';
import About from './Components/About/About';
import Mainhome from './Components/main.home/Mainhome';
import Contact from './Components/Contact/Contact';
import Shop from './Components/Shop/Shop';


let router = createBrowserRouter([
  {
    path: "",
    element: <Home></Home>,

    children: [
      {
        path: "/",
        element: <Mainhome></Mainhome>
      },

      {
        path: "About",
        element: <About></About>
      },

      {
        path: "Contact",
        element: <Contact></Contact>
      },

      {
        path: "Shop",
        element: <Shop></Shop>
      },

    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
