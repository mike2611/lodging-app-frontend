import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/newItems.css';
import { clearReservationMsg, postReservation } from '../redux/reservations/reservationsReducer';

const ReserveRoom = () => {
  const token = useSelector((state) => state.loginSignupReducer);
  const message = useSelector((state) => state.reservationsReducer.message);
  const rooms = useSelector((state) => state.roomsReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const room = rooms.find((room) => room.id === parseInt(id, 10));

  const today = new Date().toISOString().slice(0, 10);

  const [inputs, setInputs] = useState({
    checkin: '',
    checkout: '',
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      room_id: id,
      check_in_date: inputs.checkin,
      check_out_date: inputs.checkout,
    };
    dispatch(postReservation(token, reservation));
  };

  useEffect(() => {
    dispatch(clearReservationMsg);
  }, []);

  return (
    <section className="main-section vh-100">
      <div className="inner-div h-100" />
      <div className="container main-content">
        <h1>Book a room</h1>
        <hr />
        <p>
          {`You have selected a room for ${room.people_amount} people with a price of ${room.price} 
          per night in the hotel ${room.hotel.name} in ${room.hotel.address}, `}
          <strong>
            {room.hotel.city.name}
          </strong>
          . Now please select the Check-in date and the Check-out date to reserve your room.
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="checkin">
            <Form.Label>Check-in date</Form.Label>
            <Form.Control name="checkin" type="date" min={today} value={inputs.checkin} onChange={onChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="checkout">
            <Form.Label>Check-out date</Form.Label>
            <Form.Control name="checkout" type="date" min={inputs.checkin} value={inputs.checkout} onChange={onChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Book now
          </Button>
        </Form>
        { message !== '' && <p>{message}</p> }
      </div>
    </section>
  );
};

export default ReserveRoom;
