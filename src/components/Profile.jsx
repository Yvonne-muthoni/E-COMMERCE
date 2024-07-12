import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    username: '  ',
    profile_picture: 'https://www.w3schools.com/w3images/avatar2.png',
    first_name: '  ',
    last_name: '  ',
    email: '   ',
  });

  const [orders, setOrders] = useState([
    { id: 1, date: '2022-01-01', number: 'ORD-001', total: 100.00, status: 'Delivered' },
    { id: 2, date: '2022-01-15', number: 'ORD-002', total: 50.00, status: 'Pending' },
    { id: 3, date: '2022-02-01', number: 'ORD-003', total: 200.00, status: 'Shipped' },
  ]);

  return (
    <div className="profile-container">
      <header>
        <img src={user.profile_picture} alt={user.username} />
        <h1>{user.username}</h1>
      </header>
      <section id="profile-info">
        <h2>Profile Information</h2>
        <ul>
          <li>
            <span>First Name:</span>
            <span>{user.first_name}</span>
          </li>
          <li>
            <span>Last Name:</span>
            <span>{user.last_name}</span>
          </li>
          <li>
            <span>Email:</span>
            <span>{user.email}</span>
          </li>
        </ul>
      </section>
      <section id="order-history">
        <h2>Order History</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <span>{order.date}</span>
              <span>{order.number}</span>
              <span>{order.total}</span>
              <span>{order.status}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;