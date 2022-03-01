import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { clearReservationMsg, postReservation } from '../redux/reservations/reservationsReducer';
import { fetchCities } from '../redux/cities/citiesReducer';

const AddRoom = () => {
  const token = useSelector((state) => state.loginSignupReducer);
  const cities = useSelector((state) => state.citiesReducer);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    room_id: '',
    checkin: '',
    checkout: '',
  });

  useEffect(() => {
    if (cities.length === 0) dispatch(fetchCities(token));
  }, []);

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
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
    <section className="container">
      <h1>Add a room</h1>
      <hr />
      <p>
        In this section you can create a new room.
      </p>
      <Form onSubmit={handleSubmit}>
        <Dropdown>
          <Dropdown.Toggle className="mb-3" variant="success" id="dropdown-basic">
            Select a city
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {cities.map((city) => (
              <Dropdown.Item href="#/action-1" key={city.id}>
                {city.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle className="mb-3" variant="success" id="dropdown-basic">
            Select a Hotel
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Hotel Example</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form.Group className="mb-3" controlId="add_room">
          <Form.Label>Description</Form.Label>
          <Form.Control name="room_id" type="text" value={inputs.room_id} onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="add_room">
          <Form.Label>Image</Form.Label>
          <Form.Control name="room_id" type="text" value={inputs.room_id} onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="add_room">
          <Form.Label>Price</Form.Label>
          <Form.Control name="room_id" type="number" value={inputs.room_id} onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="add_room">
          <Form.Label>Amount of people</Form.Label>
          <Form.Control name="room_id" type="number" value={inputs.room_id} onChange={onChange} />
        </Form.Group>
        <div className="d-flex justify-content-end me-3">
          <button className="py-2 px-4 login-btn" type="submit">
            Add room
          </button>
        </div>
      </Form>
    </section>
  );
};

export default AddRoom;
