import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Videos from './pages/videos'
import Home from './pages/Home'
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
  {  path: '/videos',
  element: <Videos/>
  },
  {
    path: '/video/:id',
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
