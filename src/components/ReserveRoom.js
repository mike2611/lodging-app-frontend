import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ReserveRoom = () => {
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

  return (
    <section className="container">
      <h1>Book a room</h1>
      <hr />
      <p>
        {`You have selected a room for ${room.people_amount} people with a price of ${room.price} 
        per night in the hotel ${hotel.name} in ${hotel.address}, `}
        <strong>
          {hotel.city}
        </strong>
        . Now please select the Check-in date and the Check-out date to reserve your room.
      </p>
      <Form>
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
    </section>
  );
};

export default ReserveRoom;
