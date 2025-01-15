import CardInfo from "./CardInfo";
import PropTypes from "prop-types";

const CardList = ({ car }) => {
  return (
    <>
      <CardInfo
        title={car.title}
        brand={car.brand}
        year={car.year}
        price={car.price}
        premium={car.isPremium}
      />
    </>
  );
};
CardList.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CardList;
