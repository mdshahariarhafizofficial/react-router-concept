import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Mobile from './Components/Mobile/Mobile.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {path: '/', Component: Root,
    children: [
      { index: true, Component: Mobile },
      { path: 'about', Component: About},
      { path: 'contact', Component: Contact},
      { path: 'app', Component: App }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
