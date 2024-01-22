/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div style={{ color: 'white' }}>
      <img src={user.photoURL} alt="Daun Kim" style={{ width: '150px', borderRadius: '50%' }} />
      <h1>Name: {user.displayName}</h1>
      <h2>Email: {user.email}</h2>
      <p>Last login: {user.metadata?.lastSignInTime}</p>
    </div>
  );
}
