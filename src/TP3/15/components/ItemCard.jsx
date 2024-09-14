import PropTypes from "prop-types";

const ItemCard = ({ item, onPreference }) => {
  return (
    <div className="item-card">
      <h2>{item.title}</h2>
      <button onClick={() => onPreference(true)}>Gosto</button>
      <button onClick={() => onPreference(false)}>Não gosto</button>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onPreference: PropTypes.func.isRequired,
};

export default ItemCard;
