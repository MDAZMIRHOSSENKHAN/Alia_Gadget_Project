import { RouterProvider } from 'react-router-dom'
import './App.css'
import MainRoutes from './Routes/MainRoutes'

function App() {

  return (
    <>
     <RouterProvider router={MainRoutes}/>
    </>
  )
}

export default App
