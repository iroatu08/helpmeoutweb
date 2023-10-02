import { Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { Home, Recordings, Signup } from './pages';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
    <>
      <Routes>
        {/* Use the Layout component for the home page */}
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
        </Route>

        {/* Other routes outside of the Layout */}
        <Route
          path="/recordings"
          element={<Recordings />}
        />
        <Route
          path="/videos/:id"
          element={<VideoDetails />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
      </Routes>
    </>
  );
}

// Define the Layout component
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
