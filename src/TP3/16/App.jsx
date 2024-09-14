import { useState } from 'react';
import Header from './components/Header';
import TouristPointCard from './components/TouristPointCard';
import SelectedList from './components/SelectedList';
import touristPoints from './data/touristPoints';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

const App = () => {
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const addToVisit = (point, peopleCount) => {
    const totalPrice = point.price * peopleCount;
    setSelectedPoints((prevPoints) => [
      ...prevPoints,
      { ...point, peopleCount, totalPrice },
    ]);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="tourist-points">
        {touristPoints.map((point) => (
          <TouristPointCard key={point.name} point={point} addToVisit={addToVisit} />
        ))}
      </div>
      <SelectedList selectedPoints={selectedPoints} />
    </ThemeProvider>
  );
};

export default App;
