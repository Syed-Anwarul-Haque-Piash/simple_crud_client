import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users/Users.jsx';
import Update from './components/Update/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path:'/buyers',
    element: <Users></Users>,
    loader: ()=> fetch('http://localhost:5000/buyers')
  },
  {
    path:'/update/:id',
    element: <Update></Update>,
    loader: ({params})=>fetch(`http://localhost:5000/buyers/${params.id}`)
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
