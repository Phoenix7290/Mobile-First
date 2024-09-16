import PropTypes from "prop-types";

const ToggleTheme = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      Mudar para {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

ToggleTheme.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ToggleTheme;
