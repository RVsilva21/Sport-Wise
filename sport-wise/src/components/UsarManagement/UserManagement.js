// src/components/UserManagement/UserManagement.js
import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateOrUpdate = (user) => {
    if (currentUser) {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.email === currentUser.email ? user : u))
      );
      setCurrentUser(null);
    } else {
      setUsers([...users, user]);
    }
    setMessage(currentUser ? "User updated successfully!" : "User created successfully!");
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleDelete = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
    setMessage("User deleted successfully!");
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <UserForm onSubmit={handleCreateOrUpdate} initialData={currentUser} setMessage={setMessage} />
      {message && <div className="message">{message}</div>}
      <UserList users={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} onSearch={handleSearch} searchTerm={searchTerm} />
    </div>
  );
};

export default UserManagement;
