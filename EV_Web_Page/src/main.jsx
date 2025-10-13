import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Details from './Pages/Details/Details.jsx'
import Save from './Pages/Save/Save.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/pages/details',
//     element: <Details/>
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <App />,
        },
        {
          path: '/pages/details',
          element: <Details />,
        },
        {
          path: '/pages/save',
          element: <Save />,
        },
      ])}
    />
  </StrictMode>
)
