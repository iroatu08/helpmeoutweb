import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import { Home, Recordings, Signup } from './pages'
import VideoDetails from './components/VideoDetails'


const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/videos/:sessionId/details',
        element: <VideoDetails />
    
      },
    ]
  },
  {  path: '/recordings',
  element: <Recordings/>
  },
  {
    path: '/signup',
    element: <Signup/>
  }
])



function App() {

  return (
    <>

   <RouterProvider router={router}/>
    </>
  )
}

export default App
