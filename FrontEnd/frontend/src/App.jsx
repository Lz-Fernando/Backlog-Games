import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import BuscarJogos from "./pages/BuscarJogos";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buscar" element={<BuscarJogos />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App