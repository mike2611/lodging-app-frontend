import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
    <section className="new-item-section vh-100">
      <div className="new-item-inner-div h-100" />
      <div className="d-flex align-items-center w-100 vh-100">
        <div className="d-flex flex-column align-items-center new-item-content">
          <h1 className="roboto-font-bold text-center">Book a room</h1>
          <hr className="w-50" />
          <p className="roboto-font-medium w-75">
            {`You have selected a room for ${room.people_amount} people with a price of ${room.price} 
            per night in the hotel ${room.hotel.name} in ${room.hotel.address}, `}
            <strong>
              {room.hotel.city.name}
            </strong>
            . Now please select the Check-in date and the Check-out date to reserve your room.
          </p>
          <Form className="roboto-font-medium" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="checkin">
              <Form.Label>Check-in date</Form.Label>
              <Form.Control name="checkin" type="date" min={today} value={inputs.checkin} onChange={onChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="checkout">
              <Form.Label>Check-out date</Form.Label>
              <Form.Control name="checkout" type="date" min={inputs.checkin} value={inputs.checkout} onChange={onChange} />
            </Form.Group>
            <Button className="new-item-btn" type="submit">
              Book now
            </Button>
          </Form>
          { message !== '' && <p>{message}</p> }
        </div>
      </div>
    </section>
  );
};

export default ReserveRoom;
