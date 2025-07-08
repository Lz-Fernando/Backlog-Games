export default function ListaJogos({ jogos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {jogos.map((jogo) => (
        <div key={jogo.id} className="border rounded-xl shadow-md p-4 bg-black hover:shadow-lg transition">
          <h3 className="text-lg font-semibold font-color-black">{jogo.name}</h3>
          <img
            src={jogo.background_image} 
            alt={jogo.name}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
        </div>
      ))}
    </div>
  );
}