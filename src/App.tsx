import { Route, Routes } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import LandingPage from './components/pages/LandingPage';
import Footer from './components/common/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16 p-3">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
     <Footer />
    </>
  );
}
