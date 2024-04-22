import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LogIn from './components/LogIn.jsx'
import Home from './components/Home.jsx'
import Admin from './components/Admin.jsx'
import Sales from './components/Sales.jsx'
import Management from './components/Management.jsx'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn/>
  },
  {
    path: 'home/',
    element: <Home/>,
    children: [
      {
        path: 'sales/',
        element: <Sales/>
      },
      {
        path: 'administracion/',
        element: <Admin/>
      },
      {
        path: 'gerencia/',
        element: <Management/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
