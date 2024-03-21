import { RouterProvider } from 'react-router-dom'
import './App.css'
import MainRoutes from './Routes/MainRoutes'
import Cart from './shared/Cart'

function App() {

  return (
    <>
     <RouterProvider router={MainRoutes}/>
     <Cart/>
    </>
  )
}

export default App
