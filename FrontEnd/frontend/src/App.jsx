import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import BuscarJogos from "./pages/BuscarJogos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buscar" element={<BuscarJogos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App