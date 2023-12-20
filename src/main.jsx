import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componante/Home.jsx/Home.jsx';
import Headrs from './Componante/Shared/Headrs.jsx';
import Login from './Componante/Login-Regstion/Login.jsx';
import Regstion from './Componante/Login-Regstion/Regstion.jsx';
import Authprovider from './Componante/Login-Regstion/Authprovider.jsx';
import Cartoys from './Componante/Catagores/Cartoys.jsx';
import CarDetails from './Componante/Catagores/CarDetails.jsx';
import Order from './Componante/Catagores/Order.jsx';
import Confarmorders from './Componante/Catagores/Confarmorders.jsx';
import PrivetRoutes from './Componante/Catagores/PrivetRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[{
      path:'/',
      element:<Headrs></Headrs>

    },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/regstion',
    element:<Regstion></Regstion>
  },
  {
    path:'cartoys',
    element:<Cartoys></Cartoys>
  },
  {
    path:'Cardetails/:id',
    element:<CarDetails></CarDetails>,
    loader:({params})=>fetch(`https://assinement111-serverside-b5ym5v2a6-ronokjahan.vercel.app/${params.id}`)
  },
  {
    path:'order/:id',
    element:<Order></Order>,
    loader:({params})=>fetch(`https://assinement111-serverside-b5ym5v2a6-ronokjahan.vercel.app/${params.id}`)
  },
  {
    path:'orders',
    element:<PrivetRoutes><Confarmorders></Confarmorders></PrivetRoutes>
    
  }
  
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Authprovider>
 <RouterProvider router={router} />
 </Authprovider>
  </React.StrictMode>,
)
