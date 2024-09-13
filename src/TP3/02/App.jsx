import { useState } from 'react';
import { GiReturnArrow } from "react-icons/gi";
import { MdLogoDev } from "react-icons/md";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <header className="header">
        <MdLogoDev className='logo'/>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </header>
      <nav className={`menu ${isMenuOpen ? 'open' : 'collapsed'}`}>
        <ul>
          <GiReturnArrow className="menu-toggle" onClick={toggleMenu}/>
          <li>Perfil</li>
          <li>Postagens</li>
          <li>Amigos</li>
          <li>Fotos</li>
          <li>Vídeos</li>
          <li>Configurações</li>
        </ul>
      </nav>
      <main className="content" id='*'>
        <h1>Bem-vindo à Página!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </main>
    </div>
  );
};

export default App;
