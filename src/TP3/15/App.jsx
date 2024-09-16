import { useState } from "react";
import ItemVoting from "./components/ItemVoting";
import AffinityList from "./components/AffinityList";
import ToggleTheme from "./components/ToggleTheme.jsx";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [votedItems, setVotedItems] = useState([]);
  const [view, setView] = useState("voting"); 

  const items = ["Movie 1", "Movie 2", "Movie 3", "Movie 4"];

  const handleVote = (item, vote) => {
    setVotedItems([...votedItems, { item, vote }]);
  };

  const handleSwitchView = () => {
    setView(view === "voting" ? "affinity" : "voting");
  };

  return (
    <div className={`app ${theme}`}>
      <ToggleTheme theme={theme} setTheme={setTheme} />
      {view === "voting" ? (
        <ItemVoting items={items} onVote={handleVote} />
      ) : (
        <AffinityList votedItems={votedItems} />
      )}
      <button onClick={handleSwitchView}>
        {view === "voting" ? "Ver afinidades" : "Voltar"}
      </button>
    </div>
  );
};

export default App;
