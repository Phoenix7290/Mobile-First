import PropTypes from "prop-types";

const UserItem = ({ name, affinity }) => {
  return (
    <div className="user-item">
      <h3>{name}</h3>
      <p>Afinidade: {affinity.toFixed(2)}%</p>
    </div>
  );
};

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  affinity: PropTypes.number.isRequired,
};

export default UserItem;
