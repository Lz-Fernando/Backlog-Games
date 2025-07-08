import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar(event) {
    event.preventDefault();

    console.log(email);
    console.log(senha);
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}