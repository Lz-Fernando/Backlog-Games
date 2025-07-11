import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [verificarSenha, setVerificarSenha] = useState("");
  const [mensagem, setMensagem] = useState("")
  const navigate = useNavigate();

  function cadastrarUsuario(event) {
    const url = `http://localhost:8000/usuario`

    event.preventDefault();

    if (senha == verificarSenha) {
      const dados = {
        email: email,
        senha: senha
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      });

      setMensagem("Cadastro realizado com sucesso!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setMensagem("As senhas não coincidem!")
    }
  }

  return (
    <div>
      <Header />

      <h1>Meu backlog</h1>
      <form onSubmit={cadastrarUsuario}>
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
        <input 
          type="password"
          placeholder="Verificar Senha"
          onChange={(e) => setVerificarSenha(e.target.value)}
        />
        <button type="submit" >Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
