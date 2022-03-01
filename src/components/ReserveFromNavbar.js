import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { clearReservationMsg, postReservation } from '../redux/reservations/reservationsReducer';

const ReserveFromNavbar = () => {
  const token = useSelector((state) => state.loginSignupReducer);
  const message = useSelector((state) => state.reservationsReducer.message);
  const rooms = useSelector((state) => state.roomsReducer);
  const dispatch = useDispatch();

  const today = new Date().toISOString().slice(0, 10);

  const [inputs, setInputs] = useState({
    room_id: '',
    checkin: '',
    checkout: '',
  });

  const [room, setRoom] = useState();

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'room_id') {
      setRoom(rooms.find((item) => item.id === parseInt(e.target.value, 10)));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      room_id: inputs.room_id,
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
            {`In this section you can reserve a room if you have the code for a specific room (many 
            hotels provides this number when you contact them directly). If you don't have one, go 
            to the home page to look for a room that matches your desires.`}
          </p>
          <Form className="d-flex flex-column" onSubmit={handleSubmit}>
            <Form.Group controlId="checkin">
              <Form.Label>Room code</Form.Label>
              <Form.Control className="w-25" name="room_id" type="number" value={inputs.room_id} onChange={onChange} />
            </Form.Group>
            <small className="w-75">
              {(room === undefined)
                ? 'There is no room with that code'
                : `You have selected a room for ${room.people_amount} people with a price of ${room.price} 
              per night in the hotel ${room.hotel.name} in ${room.hotel.address}. `}
            </small>
            <p className="roboto-font-medium w-75 mt-3">
              Please select the Check-in date and the Check-out date to reserve your room.
            </p>
            <Form.Group className="mb-3 roboto-font-medium w-25 align-self-center" controlId="checkin">
              <Form.Label>Check-in date</Form.Label>
              <Form.Control name="checkin" type="date" min={today} value={inputs.checkin} onChange={onChange} />
            </Form.Group>
            <Form.Group className="mb-3 roboto-font-medium w-25 align-self-center" controlId="checkout">
              <Form.Label>Check-out date</Form.Label>
              <Form.Control name="checkout" type="date" min={inputs.checkin} value={inputs.checkout} onChange={onChange} />
            </Form.Group>
            <Button className="new-item-btn align-self-center mt-2" type="submit">
              Book now
            </Button>
          </Form>
          { message !== '' && <p>{message}</p> }
        </div>
      </div>
    </section>
  );
};

export default ReserveFromNavbar;
