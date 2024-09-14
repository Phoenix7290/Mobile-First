import PropTypes from 'prop-types';
import { useState } from 'react';

const TouristPointCard = ({ point, addToVisit }) => {
  const [peopleCount, setPeopleCount] = useState(1);

  const handleAdd = () => {
    addToVisit(point, peopleCount);
  };

  return (
    <div className="tourist-point-card">
      <h2>{point.name}</h2>
      <p>{point.info}</p>
      <p>Meios de Transporte: {point.transport}</p>
      <p>Valor por pessoa: R$ {point.price}</p>
      <input 
        type="number" 
        value={peopleCount} 
        onChange={(e) => setPeopleCount(e.target.value)} 
        min="1" 
      />
      <button onClick={handleAdd}>Adicionar à lista</button>
    </div>
  );
}
TouristPointCard.propTypes = {
  point: PropTypes.shape({
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    transport: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToVisit: PropTypes.func.isRequired,
};

export default TouristPointCard;
