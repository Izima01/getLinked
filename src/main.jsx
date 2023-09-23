import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages.jsx/HomePage.jsx'
import Register from './Pages.jsx/Register.jsx'
import Contact from './Pages.jsx/Contact.jsx'
import SharedLayout from './SharedLayout.jsx'

const router = createBrowserRouter([
  {element:<SharedLayout />, children: [
    {path:'/', element: <HomePage />},
    {path: '/contact', element: <Contact />},
    {path: '/register', element: <Register />},
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
