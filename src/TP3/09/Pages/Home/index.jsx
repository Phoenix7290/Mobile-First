import { useState } from 'react';
import Logo from '../../Assets/logo.jpeg';
import './styles.css';

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header id='home'>
            <img src={Logo} alt="Placeholder" className='logo' />
            <nav>
                <div onClick={toggleMenu} className='menu-icon'>
                    ☰
                </div>
                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#descricao">Sobre nós</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}