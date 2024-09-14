import { TbMenuOrder } from "react-icons/tb";

const Header = () => {
  return (
    <header className="header">
      <div className="menu-icon">
        <TbMenuOrder style={{fontSize:"40px"}} id="icon"/>
      </div>
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
