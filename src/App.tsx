import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import HomeEn from './pages/HomeEn'
import Brand from './pages/Brand'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/en" element={<HomeEn />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
