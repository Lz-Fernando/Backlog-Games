import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();
  
  function logar(event) {
    const url = `http://localhost:8000/usuario/login?email=${email}&senha=${senha}`;
    event.preventDefault();

    fetch(url)
      .then(res => res.text())
      .then(texto => {
        const dados = texto ? JSON.parse(texto) : null;

        if (dados && dados.id) {
          setMensagem("Login realizado com sucesso!");
          setTimeout(() => navigate("/buscar"), 3000);
        } else {
          setMensagem("Email ou Senha incorretos");
        }
      });
  }

  return ( 
    <div>
      <Header />

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
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}