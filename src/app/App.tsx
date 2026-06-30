import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LegacyPage from './LegacyPage'
import Home from './Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Legacy HTML map pages */}
        <Route path="/kings" element={<LegacyPage src="/src/kings/index.html" title="Kings" />} />
        <Route path="/swordsmen" element={<LegacyPage src="/src/swordsmen/index.html" title="Swordsmen" />} />
        <Route path="/swordsmen/archive" element={<LegacyPage src="/src/swordsmen/archive/index.html" title="Swordsmen Archive" />} />
        <Route path="/spanish-missions" element={<LegacyPage src="/src/spanish-missions/index.html" title="Spanish Missions" />} />
        <Route path="/deck-tests" element={<LegacyPage src="/src/deck-tests/index.html" title="Deck Tests" />} />
        <Route path="/liancheng" element={<LegacyPage src="/src/liancheng/index.html" title="连城诀" />} />
      </Routes>
    </BrowserRouter>
  )
}
