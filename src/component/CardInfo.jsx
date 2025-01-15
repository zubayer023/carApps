import PropTypes from "prop-types";


const CardInfo = ({ title, brand, year, price, premium }) => {

  return (
    <div className="px-4 py-2">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p><span className="font-bold">Brand: </span>{brand}</p>
      <p><span className="font-bold">Year: </span>{year}</p>
      <p><span className="font-bold">Price: </span>${price}</p>
      <p><span className="font-bold">Premium: </span>{
        premium ? "Yes" : "No"
      }</p>
    </div>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  premium: PropTypes.bool.isRequired,
};

export default CardInfo;
