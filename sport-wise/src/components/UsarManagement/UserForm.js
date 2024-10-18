// src/components/UserManagement/UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, initialData, setMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User'); // Default role

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setRole(initialData.role);
    } else {
      setName('');
      setEmail('');
      setRole('User');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setMessage("Nome e Email são necessários!");
      return;
    }
    
    onSubmit({ name, email, role });
    setMessage(initialData ? "Usuário atualizado com sucesso!" : "Usuário criado com sucesso!");
    setName('');
    setEmail('');
    setRole('User');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Editar Usuário' : 'Criar Usuário'}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o nome do usuário"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Insira o e-mail do usuário"
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="User">Usuário</option>
        <option value="Admin">Admin</option>
      </select>
      <button type="submit">{initialData ? 'Atualizar Usuário' : 'Criar Usuário'}</button>
    </form>
  );
};

export default UserForm;
