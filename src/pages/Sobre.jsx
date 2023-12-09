import NavbarHome from '../app/components/navbarhome';
import Link from "next/link"

const Sobre = () => {
  return (
    <div>
      <NavbarHome />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-gray-700">
          Bem-vindo à nossa aplicação relacionada à rotina verde. Esta é a página "Sobre Nós",
          onde você pode aprender mais sobre nossa missão, visão e valores.
        </p>
      </main>
    </div>
  );
};

export default Sobre;