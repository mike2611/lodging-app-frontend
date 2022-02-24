import React, { useEffect } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from './Reservation';
import { fetchReservations } from '../redux/reservations/reservationsReducer';

const MyReservations = () => {
  const token = useSelector((state) => state.loginReducer);
  const reservations = useSelector((state) => state.reservationsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reservations.length === 0) dispatch(fetchReservations(token));
  }, []);

  reservations.forEach((reservation, index) => {
    const checkin = moment(reservation.check_in_date, 'YYYY/MM/DD');
    const checkout = moment(reservation.check_out_date, 'YYYY/MM/DD');
    const diffDays = checkout.diff(checkin, 'days');
    reservations[index] = { ...reservation, nights: diffDays };
  });

  const currentReserv = [];
  const pastReserv = [];
  const futureReserv = [];
  const today = new Date().toISOString().slice(0, 10);
  reservations.forEach((reservation) => {
    if (reservation.check_in_date <= today && reservation.check_out_date >= today) {
      currentReserv.push(reservation);
    } else if (reservation.check_out_date < today) {
      pastReserv.push(reservation);
    } else {
      futureReserv.push(reservation);
    }
  });

  return (
    <section className="container">
      <h1>My Reservations</h1>
      <h2>Current</h2>
      <ul>
        {(currentReserv.length === 0)
          ? <p>You have no current reservations.</p>
          : currentReserv.map((reservation) => (
            <li key={reservation.id} className="row">
              <Reservation
                image={reservation.room.image}
                hotel={reservation.room.hotel.name}
                city={reservation.room.hotel.city.name}
                address={reservation.room.hotel.address}
                description={reservation.room.description}
                checkin={reservation.check_in_date}
                checkout={reservation.check_out_date}
                price={reservation.room.price}
                nights={reservation.nights}
              />
            </li>
          ))}
      </ul>
      <h2>Upcoming</h2>
      <ul>
        {(futureReserv.length === 0)
          ? <p>You have no upcoming reservations.</p>
          : futureReserv.map((reservation) => (
            <li key={reservation.id} className="row">
              <Reservation
                image={reservation.room.image}
                hotel={reservation.room.hotel.name}
                city={reservation.room.hotel.city.name}
                address={reservation.room.hotel.address}
                description={reservation.room.description}
                checkin={reservation.check_in_date}
                checkout={reservation.check_out_date}
                price={reservation.room.price}
                nights={reservation.nights}
              />
            </li>
          ))}
      </ul>
      <h2>Past</h2>
      <ul>
        {(pastReserv.length === 0)
          ? <p>You have no past reservations.</p>
          : pastReserv.map((reservation) => (
            <li key={reservation.id} className="row">
              <Reservation
                image={reservation.room.image}
                hotel={reservation.room.hotel.name}
                city={reservation.room.hotel.city.name}
                address={reservation.room.hotel.address}
                description={reservation.room.description}
                checkin={reservation.check_in_date}
                checkout={reservation.check_out_date}
                price={reservation.room.price}
                nights={reservation.nights}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default MyReservations;
