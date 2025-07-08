import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  
  function logar(event) {
    event.preventDefault();

    console.log(email);
    console.log(senha);

    navigate("/buscar");
  }

  return (
    <div>
      <h1>Meu backlog</h1>
      <form onSubmit={logar}>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit" >Enviar</button>
        <Link to="/cadastro">Cadastrar-se</Link>
      </form>
    </div>
  );
}