import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [verificarSenha, setVerificarSenha] = useState("");
  const [mensagem, setMensagem] = useState("")
  const navigate = useNavigate();

  function cadastrar(event) {
    event.preventDefault();

    if (senha == verificarSenha) {
      console.log(email);
      console.log(senha);
      console.log(verificarSenha);

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
      <h1>Meu backlog</h1>
      <form onSubmit={cadastrar}>
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
