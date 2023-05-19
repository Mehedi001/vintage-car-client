import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Error from './components/Error/Error.jsx';
import Blog from './components/Blog/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
