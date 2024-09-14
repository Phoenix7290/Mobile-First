import PropTypes from 'prop-types';

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header>
      <h1>App de Turismo</h1>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Header;
