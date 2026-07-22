import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Invitation from "./pages/Invitation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitation/:id" element={<Invitation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;