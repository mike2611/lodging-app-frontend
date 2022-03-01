import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { postRoom } from '../redux/rooms/roomsReducer';
import { fetchCities } from '../redux/cities/citiesReducer';
import { fetchHotels } from '../redux/hotels/hotelsReducer';

const AddRoom = () => {
  const token = useSelector((state) => state.loginSignupReducer);
  const cities = useSelector((state) => state.citiesReducer);
  const hotels = useSelector((state) => state.hotelsReducer);
  const dispatch = useDispatch();
  const [cityId, setCityId] = useState(0);
  const [hotelId, setHotelId] = useState(0);

  const [inputs, setInputs] = useState({
    description: '',
    image: '',
    price: 0,
    peopleAmount: 0,
  });

  useEffect(() => {
    if (cities.length === 0) dispatch(fetchCities(token));
  }, []);

  useEffect(() => {
    if (cityId !== 0) dispatch(fetchHotels(token, cityId));
  }, [cityId]);

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const selectCity = (e) => {
    setCityId(e);
  };

  const selectHotel = (e) => {
    setHotelId(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const room = {
      hotel_id: hotelId,
      description: inputs.description,
      image: inputs.image,
      price: inputs.price,
      people_amount: inputs.peopleAmount,
      deleted: false,
    };
    dispatch(postRoom(token, room));
  };

  return (
    <section className="container">
      <h1>Add a room</h1>
      <hr />
      <p>
        In this section, you can create a new room,
        please selecet first the city then select the corresponding hotel to the new room.
      </p>
      <Form onSubmit={handleSubmit}>
        <DropdownButton className="mb-3" variant="success" title="Select a City" id="dropdown-basic" onSelect={selectCity}>
          <Dropdown.Menu>
            {cities.map((city) => (
              <Dropdown.Item eventKey={city.id} key={city.id}>
                {city.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </DropdownButton>
        <DropdownButton className="mb-3" variant="success" title="Select a Hotel" id="dropdown-basic" onSelect={selectHotel}>
          <Dropdown.Menu>
            {hotels.map((hotel) => (
              <Dropdown.Item eventKey={hotel.id} key={hotel.id}>
                {hotel.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </DropdownButton>
        <Form.Group className="mb-3" controlId="add_room">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" type="text" value={inputs.description} onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="add_room">
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" type="text" value={inputs.image} onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="add_room">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="number" value={inputs.price} onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="add_room">
          <Form.Label>Amount of people</Form.Label>
          <Form.Control name="peopleAmount" type="number" value={inputs.peopleAmount} onChange={onChange} />
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
