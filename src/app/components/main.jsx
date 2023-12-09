const Main = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à Rotina Verde</h1>
      <p className="text-gray-700">
        Este é um exemplo de conteúdo principal para a sua aplicação relacionada
        à rotina. Sinta-se à vontade para personalizar e adicionar mais conteúdo
        aqui.
      </p>

      <button 
      href='../../pages/dashboard/'
      className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md">
        Clique Aqui
      </button>
    </main>
  )
}

export default Main
