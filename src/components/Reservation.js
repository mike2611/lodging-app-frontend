import React from 'react';
import PropTypes from 'prop-types';

const Reservation = (props) => {
  const {
    image, hotel, city, address, description, checkin, checkout, price, nights,
  } = props;

  return (
    <>
      <div className="col-md-3">
        <img src={image} alt="Room" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h3>{hotel}</h3>
        <p>
          <strong>{city}</strong>
          {`, ${address}`}
        </p>
        <p>{description}</p>
      </div>
      <div className="col-md-3">
        <p>
          {'Check-in Date: '}
          {checkin}
        </p>
        <p>
          {'Check-out Date: '}
          {checkout}
        </p>
        <p>
          {'Price per night: '}
          {price}
        </p>
        <p>
          Total price:
          {price * nights}
        </p>
      </div>
    </>
  );
};

Reservation.propTypes = {
  image: PropTypes.string.isRequired,
  hotel: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  checkin: PropTypes.string.isRequired,
  checkout: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
};

export default Reservation;
