import MenuOption from './MenuOption';
import './main.css';

export default function App() {
  return (
    <div className="menu">
      <MenuOption icon="🏠" label="Home" />
      <MenuOption icon="🔍" label="Search" />
      <MenuOption icon="⭐" label="Favorites" />
      <MenuOption icon="⚙️" label="Settings" />
    </div>
  );
}
