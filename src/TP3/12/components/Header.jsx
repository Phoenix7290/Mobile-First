import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>Home</li>
          <li>Trending</li>
          <li>Subscriptions</li>
          <li>Library</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
