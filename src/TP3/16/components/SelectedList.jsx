import PropTypes from 'prop-types';

const SelectedList = ({ selectedPoints }) => {
  const total = selectedPoints.reduce((sum, point) => sum + point.totalPrice, 0);

  return (
    <div>
      <h2>Pontos Selecionados</h2>
      <ul>
        {selectedPoints.map((point, index) => (
          <li key={index}>
            {point.name} - R$ {point.totalPrice} ({point.peopleCount} pessoas)
          </li>
        ))}
      </ul>
      <h3>Valor Total: R$ {total}</h3>
    </div>
  );
};

SelectedList.propTypes = {
  selectedPoints: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
      peopleCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SelectedList;
