import React from 'react';
import moment from 'moment';
import Reservation from './Reservation';

const MyReservations = () => {
  const hotels = [
    {
      name: 'Hamilton',
      city: 'Buenos Aires',
      address: 'Cabildo 2114',
    },
    {
      name: 'Peterson',
      city: 'Buenos Aires',
      address: 'San Martin 420',
    },
  ];
  const rooms = [
    {
      description: 'Wifi, balcony, breakfast included, bathroom with hydromassage',
      image: 'https://picsum.photos/700',
      price: 60,
      people_amount: 4,
      hotel: 0,
    },
    {
      description: 'Wifi, balcony, breakfast included, bathroom with hydromassage',
      image: 'https://picsum.photos/750',
      price: 50,
      people_amount: 3,
      hotel: 0,
    },
    {
      description: 'Wifi, balcony, breakfast included, bathroom with hydromassage',
      image: 'https://picsum.photos/800',
      price: 30,
      people_amount: 2,
      hotel: 1,
    },
    {
      description: 'Wifi, balcony, breakfast included, bathroom with hydromassage',
      image: 'https://picsum.photos/850',
      price: 80,
      people_amount: 5,
      hotel: 1,
    },
  ];

  const reservations = [
    {
      id: 1,
      room: 0,
      checkin_date: '2022-02-22',
      checkout_date: '2022-03-10',
    },
    {
      id: 2,
      room: 1,
      checkin_date: '2022-03-02',
      checkout_date: '2022-03-10',
    },
    {
      id: 3,
      room: 2,
      checkin_date: '2022-02-03',
      checkout_date: '2022-02-08',
    },
    {
      id: 4,
      room: 3,
      checkin_date: '2022-02-06',
      checkout_date: '2022-02-15',
    },
  ];

  reservations.forEach((reservation, index) => {
    const checkin = moment(reservation.checkin_date, 'YYYY/MM/DD');
    const checkout = moment(reservation.checkout_date, 'YYYY/MM/DD');
    const diffDays = checkout.diff(checkin, 'days');
    reservations[index] = { ...reservation, nights: diffDays };
  });

  const currentReserv = [];
  const pastReserv = [];
  const futureReserv = [];
  const today = new Date().toISOString().slice(0, 10);
  reservations.forEach((reservation) => {
    if (reservation.checkin_date <= today && reservation.checkout_date >= today) {
      currentReserv.push(reservation);
    } else if (reservation.checkout_date < today) {
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
                image={rooms[reservation.room].image}
                hotel={hotels[rooms[reservation.room].hotel].name}
                city={hotels[rooms[reservation.room].hotel].city}
                address={hotels[rooms[reservation.room].hotel].address}
                description={rooms[reservation.room].description}
                checkin={reservation.checkin_date}
                checkout={reservation.checkout_date}
                price={rooms[reservation.room].price}
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
                image={rooms[reservation.room].image}
                hotel={hotels[rooms[reservation.room].hotel].name}
                city={hotels[rooms[reservation.room].hotel].city}
                address={hotels[rooms[reservation.room].hotel].address}
                description={rooms[reservation.room].description}
                checkin={reservation.checkin_date}
                checkout={reservation.checkout_date}
                price={rooms[reservation.room].price}
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
                image={rooms[reservation.room].image}
                hotel={hotels[rooms[reservation.room].hotel].name}
                city={hotels[rooms[reservation.room].hotel].city}
                address={hotels[rooms[reservation.room].hotel].address}
                description={rooms[reservation.room].description}
                checkin={reservation.checkin_date}
                checkout={reservation.checkout_date}
                price={rooms[reservation.room].price}
                nights={reservation.nights}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default MyReservations;
