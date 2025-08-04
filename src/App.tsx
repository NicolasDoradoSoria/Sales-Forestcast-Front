import { ToastContainer } from 'react-toastify'
import './App.css'
import { AuthGuard } from './router/context/authGuard'
import { RouterProvider } from 'react-router'
import { router } from './router/router'

function App() {

  return (
    <>
      <AuthGuard>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthGuard>
    </>
  )
}

export default App
