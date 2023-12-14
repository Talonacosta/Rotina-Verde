import React from "react"

const Titulo = () => {
  return (
    <main className=" container mx-auto p-6">
      <h1 className="text-6xl mb-4 text-green-600">
        Bem-vindo à Rotina Verde
      </h1>
      <h2 className="text-white text-3xl ">
      Subtitulo foda
      </h2>
      <p className="text-gray-400">
        Este é um exemplo de conteúdo principal para a sua aplicação relacionada
        à rotina. Sinta-se à vontade para personalizar e adicionar mais conteúdo
        aqui.
      </p>

      <button
        href="../../pages/dashboard/dashboardHome.jsx"
        className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md"
      >
        Clique Aqui
      </button>
    </main>
  )
}

export default Titulo;
