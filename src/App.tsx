import { Route, Routes } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import LandingPage from './components/pages/LandingPage';
import Footer from './components/common/Footer';

import FillupPage from './components/pages/FillPages';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16 p-3">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="fill" element={<FillupPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
