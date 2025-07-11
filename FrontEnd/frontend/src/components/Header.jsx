import { useNavigate } from "react-router-dom";
import BuscarJogos from "./BuscarJogos"

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="logo">Titulo</h1>

      <nav className="nav">
        <BuscarJogos />
        <button>Meu backlog</button>
        <button onClick={() => navigate("/login")}>Entrar</button>
        <button onClick={() => navigate("/cadastro")}>Registrar</button>
      </nav>
    </header>
  );
}

