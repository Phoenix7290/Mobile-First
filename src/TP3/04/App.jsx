import { useState } from 'react';
import { IoLogoAppleAr } from "react-icons/io5";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <header className="header">
        <IoLogoAppleAr className="logo" />
      </header>
      <main className="content">
        <h1>Bem-vindo à Página!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </main>
      <footer className={`bottom-nav ${isMenuOpen ? 'open' : 'collapsed'}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul>
          <li>Perfil</li>
          <li>Postagens</li>
          <li>Amigos</li>
          <li>Fotos</li>
          <li>Configurações</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
