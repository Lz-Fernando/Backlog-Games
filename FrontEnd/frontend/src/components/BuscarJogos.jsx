import { useState } from "react";


export default function BuscarJogos() {
  const [nomeBuscado, setNomeBuscado] = useState('');
  const [resultados, setResultados] = useState([]);

  async function BuscarJogoPorNome(nomeBuscado) {
    const url = `https://api.rawg.io/api/games?search=${nomeBuscado}&key=${import.meta.env.VITE_RAWG_API_KEY}`;
    console.log(url);

    const resposta = await fetch(url);
    const data = await resposta.json();
    console.log(data.results);
  }
  console.log(nomeBuscado); // mostra o que o usuário digita

  return (
    <div>
      <h2>Buscar Jogos</h2>
      <input
        onChange={(e) => setNomeBuscado(e.target.value)}
      />
      <button
        onClick={() => BuscarJogoPorNome(nomeBuscado)}
      />
    </div>
  );
}


