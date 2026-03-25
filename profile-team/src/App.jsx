import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mayla from "./pages/Mayla";
import Darin from "./pages/Darin";
import Jace from "./pages/Jace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mayla-tahmida" element={<Mayla />} />
        <Route path="/imtinan-darin-huwaida" element={<Darin />} />
        <Route path="/jacinda-queena-clearesta" element={<Jace />} />
        <Route path="*" element={<Mayla />} /> {/* fallback default */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;