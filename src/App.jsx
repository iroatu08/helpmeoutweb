import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import { Home, Recordings } from './pages'
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
   
    ]
  },
  {  path: '/recordings',
  element: <Recordings/>
  },
  {
    path: '/videos/:id',
    element: <VideoDetails />

  },
])



function App() {

  return (
    <>

   <RouterProvider router={router}/>
    </>
  )
}

export default App
