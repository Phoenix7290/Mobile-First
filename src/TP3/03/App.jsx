import { useState } from 'react';
import { IoLogoSlack } from "react-icons/io";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="app">
      <header className="header">
        <IoLogoSlack  className="logo" />
        <button className="drawer-toggle" onClick={toggleDrawer}>
          ☰
        </button>
      </header>
      <nav className={`drawer ${isDrawerOpen ? 'open' : 'collapsed'}`}>
        <ul>
          <li>Perfil</li>
          <li>Postagens</li>
          <li>Amigos</li>
          <li>Fotos</li>
          <li>Vídeos</li>
          <li>Configurações</li>
        </ul>
      </nav>
      <main className="content">
        <h1>Bem-vindo à Página!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </main>
    </div>
  );
};

export default App;
