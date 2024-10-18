// src/App.js
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleCreate = (user) => {
    setUsers([...users, user]);
  };

  const handleUpdate = (user) => {
    const updatedUsers = users.map((u) => (u === currentUser ? user : u));
    setUsers(updatedUsers);
    setCurrentUser(null);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  return (
    <div>
      <h1>Edição de Usuários</h1>
      <UserForm onSubmit={currentUser ? handleUpdate : handleCreate} initialData={currentUser} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
