import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LegacyPage from './pages/LegacyPage'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Legacy HTML map pages */}
        <Route path="/kings" element={<LegacyPage src="/src/maps/kings/index.html" title="Kings" />} />
        <Route path="/swordsmen" element={<LegacyPage src="/src/maps/swordsmen/index.html" title="Swordsmen" />} />
        <Route path="/swordsmen/archive" element={<LegacyPage src="/src/maps/swordsmen/archive/index.html" title="Swordsmen Archive" />} />
        <Route path="/spanish-missions" element={<LegacyPage src="/src/maps/spanish-missions/index.html" title="Spanish Missions" />} />
        <Route path="/deck-tests" element={<LegacyPage src="/src/maps/deck-tests/index.html" title="Deck Tests" />} />
        <Route path="/liancheng" element={<LegacyPage src="/src/maps/liancheng/index.html" title="连城诀" />} />
      </Routes>
    </BrowserRouter>
  )
}
