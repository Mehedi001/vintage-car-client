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
import AddToy from './components/AddToy/AddToy.jsx';
import Registration from './Pages/Login/Registration.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import AllToys from './Pages/Alltoys/AllToys.jsx';
import SingleCarCard from './Pages/Cars/SingleCarCard.jsx';
import MyToys from './Pages/Mytoys/MyToys.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import UpdateToy from './Pages/UpdateToy.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/addtoy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>
      },
      {
        path: "/toy/:id",
        element: <PrivateRoute><SingleCarCard></SingleCarCard></PrivateRoute>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:8800/toy/${params.id}`)
        }

      },
      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "/updateToy/:id",
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:8800/toy/${params.id}`)
        }
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
