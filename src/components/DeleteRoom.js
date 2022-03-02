import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ArrowRightCircle,
} from 'react-bootstrap-icons';
import { fetchRooms, deleteRoom } from '../redux/rooms/roomsReducer';

const DeleteRoom = () => {
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

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteRoom(token, id));
  };

  useEffect(() => {
    if (rooms.length === 0) dispatch(fetchRooms(token));
  }, []);

  return (
    <section className="container">
      <h1>Delete a room</h1>
      <p>Please select the room you want to delete</p>
      <div className="d-flex flex-column flex-md-row align-items-center">
        {visibleRooms.map((room) => (
          <Card style={{ width: '18rem' }} key={room.id} className="mx-2">
            <Card.Img variant="top" src={room.image !== '' ? room.image : 'https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg'} />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>
                <Link to={`/room/${room.id}`}>
                  {room.hotel.name}
                </Link>
              </Card.Title>
              <Button variant="danger" onClick={(e) => handleDelete(e, room.id)}>Delete</Button>
            </Card.Body>
          </Card>
        ))}
        <div className="d-flex align-items-center">
          <button className="main-button main-semicircle-button mb-4 ms-2 d-none d-md-block" type="button" aria-label="nextOptions" onClick={changeVisibleRooms}>
            <ArrowRightCircle className="text-white fs-3" />
          </button>
          <button className="main-button text-white py-2 px-3 my-2 d-md-none" type="button" onClick={changeVisibleRooms}>Next Rooms</button>
        </div>
      </div>
    </section>
  );
};

export default DeleteRoom;
