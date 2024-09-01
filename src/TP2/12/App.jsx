import './main.css';

const App = () => {
  return (
    <div className="menu">
      <div className="menu-item" data-tooltip="Home">
        <span className="icon">🏠</span>
      </div>
      <div className="menu-item" data-tooltip="Search">
        <span className="icon">🔍</span>
      </div>
      <div className="menu-item" data-tooltip="Files">
        <span className="icon">📁</span>
      </div>
      <div className="menu-item" data-tooltip="Settings">
        <span className="icon">⚙️</span>
      </div>
    </div>
  );
}

export default App;
