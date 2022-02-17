import Card from 'react-bootstrap/Card';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

const Main = () => (
  <section>
    <div>
      <h1>Rooms</h1>
      <p>Please select a room</p>
    </div>
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg" />
        <Card.Body>
          <Card.Title>Example of a room</Card.Title>
          <Card.Text>
            This is the description for this room
            <ul className="d-flex unstyled">
              <li><Facebook /></li>
              <li><Twitter /></li>
              <li><Instagram /></li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </section>
);

export default Main;
