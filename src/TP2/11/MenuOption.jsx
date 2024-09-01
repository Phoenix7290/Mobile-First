import PropTypes from 'prop-types';

export default function MenuOption({ icon, label }) {
  return (
    <div className="menu-option">
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </div>
  );
}

MenuOption.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};
