import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import Brand from '@/pages/Brand';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080c10] text-[#f0f4f8]">
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
      </Routes>
    </div>
  );
}
