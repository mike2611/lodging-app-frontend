import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import { fetchRooms } from '../redux/main/mainReducer';

const Main = () => {
  const rooms = useSelector((state) => state.mainReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms);
  }, []);

  return (
    <section>
      <div>
        <h1>Rooms</h1>
        <p>Please select a room</p>
      </div>
      <div>
        {rooms.map((room) => (
          <Card style={{ width: '18rem' }} key={room.id}>
            <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg" />
            <Card.Body>
              <Card.Title>
                Room in&nbsp;
                {room.hotel}
              </Card.Title>
              <Card.Text>
                {room.description}
                <ul className="d-flex unstyled">
                  <li><Facebook /></li>
                  <li><Twitter /></li>
                  <li><Instagram /></li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Main;
