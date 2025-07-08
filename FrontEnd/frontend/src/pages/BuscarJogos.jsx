import { useState } from "react";
import ListaJogos from "../components/ListaJogos";

export default function BuscarJogos() {
  const [nomeBuscado, setNomeBuscado] = useState('');
  const [resultados, setResultados] = useState([]);

  async function BuscarJogoPorNome(nomeBuscado) {
    console.log(nomeBuscado); // mostra o que o usuário digita
    const url = `https://api.rawg.io/api/games?search=${nomeBuscado}&key=${import.meta.env.VITE_RAWG_API_KEY}`;
    console.log(url);

    const resposta = await fetch(url);
    const data = await resposta.json();
    console.log(data.results);
    setResultados(data.results);
  }

  return (
    <div>
      <h2>Buscar Jogos</h2>
      <input
        onChange={(e) => setNomeBuscado(e.target.value)}
      />
      <button
        onClick={() => BuscarJogoPorNome(nomeBuscado)}
      >Buscar</button>

      <div>
        <ListaJogos jogos={resultados} />
      </div>
    </div>
  );
}


