import { useState } from "react";
import "./main.css";

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <img src="https://via.placeholder.com/50" alt="placeholder" />
        <nav className="menu">
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <ul className={`menu-list ${isMenuOpen ? 'open' : 'closed'}`}>
        <li>Perfil</li>
        <li>Fotos</li>
        <li>Amigos</li>
        <li>Sugestoes</li>
      </ul>
    </nav>
      </header>
      <main>
        <section>
          <img src="https://via.placeholder.com/100" alt="placeholder" />
          <div>
            <h1>Nome</h1>
            <p>Email</p>
          </div>
        </section>
        <section>
          <p>
            Informações Pessoais é simplesmente uma simulação da indústria de impressão e tipografia. Lorem Ipsum tem sido o texto padrão da indústria desde os anos 1500.
          </p>
        </section>
        <div>
          <img src="https://via.placeholder.com/120x159" alt="placeholder" />
          <img src="https://via.placeholder.com/120x159" alt="placeholder" />
        </div>
      </main>
      <footer>
        <div>
          <h2 className="last-titles">Amigos</h2>
          <div>
            <img src="https://via.placeholder.com/50" alt="placeholder" />
            <img src="https://via.placeholder.com/50" alt="placeholder" />
            <img src="https://via.placeholder.com/50" alt="placeholder" />
            <img src="https://via.placeholder.com/50" alt="placeholder" />
          </div>
        </div>
        <div>
          <h2 className="last-titles">Sugestões</h2>
          <div>
            <img src="https://via.placeholder.com/50" alt="placeholder" />
            <img src="https://via.placeholder.com/50" alt="placeholder" />
            <img src="https://via.placeholder.com/50" alt="placeholder" />
            <img src="https://via.placeholder.com/50" alt="placeholder" />
          </div>
        </div>
      </footer>
    </div>
  );
}
