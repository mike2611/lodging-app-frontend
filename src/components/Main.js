import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Facebook, Twitter, Instagram, ArrowRightCircle,
} from 'react-bootstrap-icons';
import { fetchRooms } from '../redux/rooms/roomsReducer';

const Main = () => {
  const token = useSelector((state) => state.loginSignupReducer);
  const rooms = useSelector((state) => state.roomsReducer);
  const dispatch = useDispatch();
  const [state, setState] = useState(3);
  const visibleRooms = rooms.slice(state - 3, state);

  const changeVisibleRooms = () => {
    if (state < rooms.length) {
      setState((prevState) => prevState + 3);
    } else {
      setState(3);
    }
  };

  useEffect(() => {
    if (rooms.length === 0) dispatch(fetchRooms(token));
  }, []);

  return (
    <section className="d-flex flex-column align-items-center">
      <div className="d-flex flex-column align-items-center my-5">
        <h1 className="roboto-font">Available Rooms</h1>
        <p className="slab-font">Please select a room</p>
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center">
        {visibleRooms.map((room) => (
          <Link className="main-links" to={`/room/${room.id}`} key={room.id}>
            <Card style={{ width: '18rem' }} className="mx-2">
              <Card.Img variant="top" src={room.image !== '' ? room.image : 'https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg'} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <h2 className="roboto-font h3 text-dark">{room.hotel.name}</h2>
                </Card.Title>
                <Card.Text className="text-secondary slab-font">
                  {room.description}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <ul className="d-flex main-icons p-0">
                    <li className="mx-2 text-secondary"><Facebook /></li>
                    <li className="mx-3 text-secondary"><Twitter /></li>
                    <li className="mx-2 text-secondary"><Instagram /></li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Link>
        ))}
        <div className="d-flex align-items-center">
          <button className="main-button main-semicircle-button mb-4 ms-2 d-none d-md-block" type="button" aria-label="nextOptions" onClick={changeVisibleRooms}>
            <ArrowRightCircle className="text-white fs-3" />
          </button>
          <button className="main-button text-white py-2 px-3 my-2 d-md-none roboto-font" type="button" onClick={changeVisibleRooms}>Next Rooms</button>
        </div>
      </div>
    </section>
  );
};

export default Main;
