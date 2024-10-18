// src/components/UserManagement/UserList.js
import React from 'react';
import './UserList.css'; // Import CSS for styling


const UserList = ({ users, onEdit, onDelete, onSearch, searchTerm }) => {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <input
        type="text"
        placeholder="Procurar Usuários"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      <ul className="user-list">
        {users.length > 0 ? (
          users.map((user, index) => (
            <li key={index} className="user-item">
              <span>{user.name} ({user.role})</span>
              <button onClick={() => onEdit(user)}>Editar</button>
              <button onClick={() => onDelete(index)}>Deletar</button>
            </li>
          ))
        ) : (
          <li>Nenhum usuário disponível.</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;

