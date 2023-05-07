import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import router from './routes/Routes.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>

  </React.StrictMode>
)
