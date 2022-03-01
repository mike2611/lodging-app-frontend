import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
  const rooms = useSelector((state) => state.roomsReducer);
  const { id } = useParams();
  const room = rooms.find((room) => room.id === parseInt(id, 10));

  return (
    <section className="d-flex align-items-center w-100 vh-100">
      <div className="container">
        {(room === undefined)
          ? <h1 clasname="title-details">The requested room doesn&apos;t exist. Please go back and try with another.</h1>
          : (
            <div className="row me-3">
              <div className="col-md-8 text-center">
                <img src={room.image} alt="Room" className="w-75" />
              </div>
              <div className="col-md-4 d-flex flex-column align-items-end">
                <h2 className="title-details text-end mt-md-0">{room.hotel.name}</h2>
                <p className="roboto-font-bold text-end">{room.description}</p>
                <Table striped hover className="roboto-font-medium">
                  <tbody>
                    <tr>
                      <td>Max. amount of people</td>
                      <td className="text-end">{room.people_amount}</td>
                    </tr>
                    <tr>
                      <td>Price per night</td>
                      <td className="text-end">{`$${room.price}`}</td>
                    </tr>
                    <tr>
                      <td>Price per person</td>
                      <td className="text-end">{`$${(room.price / room.people_amount).toFixed(2)}`}</td>
                    </tr>
                  </tbody>
                </Table>
                <p>
                  <strong>{room.hotel.city.name}</strong>
                  ,
                  {' '}
                  {room.hotel.address}
                </p>
                <Link to="/">
                  <p className="roboto-font-bold text-dark">DISCOVER MORE LODGING PLACES</p>
                </Link>
                <Link to={`/room/${room.id}/reserve`}>
                  <button type="button" className="new-item-btn mt-5">Reserve</button>
                </Link>
              </div>
            </div>
          )}
      </div>
    </section>
  );
};

export default Details;
