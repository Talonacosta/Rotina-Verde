import NavbarHome from '../components/NavbarHome';

const CreateAccount = () => {
  return (
    <div>
      <NavbarHome />

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Create Account</h1>
        {/* Adicione aqui o conteúdo do formulário de criação de conta */}
      </main>
    </div>
  );
};

export default CreateAccount;