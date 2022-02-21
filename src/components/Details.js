import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Details = () => {
  const hotel = {
    name: 'Hamilton',
    city: 'Buenos Aires',
    address: 'Cabildo 2114',
  };
  const room = {
    description: 'Wifi, balcony, breakfast included, bathroom with hydromassage',
    image: 'https://picsum.photos/800',
    price: 60,
    people_amount: 4,
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6 text-center">
          <img src={room.image} alt="Room" className="w-75" />
        </div>
        <div className="col-md-3">
          <h2>{hotel.name}</h2>
          <p>{room.description}</p>
          <Table striped hover>
            <tbody>
              <tr>
                <td>Max. amount of people</td>
                <td>{room.people_amount}</td>
              </tr>
              <tr>
                <td>Price per night</td>
                <td>{room.price}</td>
              </tr>
              <tr>
                <td>Price per person</td>
                <td>{room.price / room.people_amount}</td>
              </tr>
            </tbody>
          </Table>
          <p>
            <strong>{hotel.city}</strong>
            ,
            {' '}
            {hotel.address}
          </p>
          <Link to="/">
            <p>DISCOVER MORE LODGING PLACES</p>
          </Link>
          <Button>Reserve</Button>
        </div>
      </div>
    </section>
  );
};

export default Details;
