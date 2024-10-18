// src/components/UserList.js
import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name}
          <button onClick={() => onEdit(user)}>Editar</button>
          <button onClick={() => onDelete(index)}>Deletar</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
