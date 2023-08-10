import React, { useState } from 'react';
import { GetServerSideProps } from 'next';

interface User {
  id: number;
  name: string;
}

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <h1>Users</h1>
      <input type="text" placeholder="Filter by name" onChange={handleFilter} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<UsersProps> = async () => {
  const res = await fetch('https://api.example.com/users');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default Users;