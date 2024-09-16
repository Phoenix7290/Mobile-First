import { useState } from "react";
import PropTypes from "prop-types";

const ItemVoting = ({ items, onVote }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVote = (vote) => {
    onVote(items[currentIndex], vote);
    setCurrentIndex((prev) => (prev + 1) % items.length); 
  };

  return (
    <div className="item-voting">
      <h2>{items[currentIndex]}</h2>
      <button onClick={() => handleVote("like")}>Gosto</button>
      <button onClick={() => handleVote("dislike")}>Não Gosto</button>
    </div>
  );
};
ItemVoting.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onVote: PropTypes.func.isRequired,
};

export default ItemVoting;
