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
      checkin_date: '2022-03-05',
      checkout_date: '2022-03-15',
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
  // const current = reservations.filter(reserv => )

  // const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="container">
      <h1>My Reservations</h1>
      <br />
      <ul>
        {reservations.map((reservation) => (
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
      <h2>Current</h2>
      <h2>Upcoming</h2>
      <h2>Past</h2>
    </section>
  );
};

export default MyReservations;
