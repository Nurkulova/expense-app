import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Container>
      {users.map((user, index) => (
        <Card key={index}>
          <h2>{user.name}</h2>
          <p><b>Email: </b>{user.email}</p>
          <p><b>Website:</b> {user.website}</p>
        </Card>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Card = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin:1rem;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
`;

export default Users;
