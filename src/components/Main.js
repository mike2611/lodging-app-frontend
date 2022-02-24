import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Facebook, Twitter, Instagram, ArrowRightCircle,
} from 'react-bootstrap-icons';
import { fetchRooms } from '../redux/main/mainReducer';

const Main = () => {
  const token = useSelector((state) => state.loginSignupReducer);
  const rooms = useSelector((state) => state.mainReducer);
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
        <h1>Available Rooms</h1>
        <p>Please select a room</p>
      </div>
      <div className="d-flex align-items-center">
        {visibleRooms.map((room) => (
          <Card style={{ width: '18rem' }} key={room.id} className="mx-2">
            <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg" />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>
                Rooms in&nbsp;
              </Card.Title>
              <Card.Text className="text-secondary">
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
        ))}
        <div className="d-flex align-items-center">
          <button className="main-button mb-4 ms-2" type="button" aria-label="nextOptions" onClick={changeVisibleRooms}>
            <ArrowRightCircle className="text-white fs-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
