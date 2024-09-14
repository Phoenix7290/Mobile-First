import { useState } from 'react';
import ItemCard from './components/ItemCard';
import AffinityList from './components/AffinityList';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import items from './data/items';

const App = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [userPreferences, setUserPreferences] = useState([]);
  const [showAffinity, setShowAffinity] = useState(false);
  const [theme, setTheme] = useState('light');

  

  const handlePreference = (liked) => {
    setUserPreferences([...userPreferences, { item: items[currentItemIndex], liked }]);
    setCurrentItemIndex((prevIndex) => prevIndex + 1);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      {showAffinity ? (
        <AffinityList preferences={userPreferences} />
      ) : (
        <ItemCard item={items[currentItemIndex]} onPreference={handlePreference} />
      )}
      <button onClick={() => setShowAffinity(true)}>Ver Afinidades</button>
    </ThemeProvider>
  );
};

export default App;
