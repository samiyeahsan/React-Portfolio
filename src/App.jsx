// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
