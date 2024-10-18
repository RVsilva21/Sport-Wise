// src/components/EventManagement/EventForm.js
import React, { useState, useEffect } from 'react';

const EventForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDate(initialData.date);
      setLocation(initialData.location);
    } else {
      setName('');
      setDate('');
      setLocation('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, date, location });
    setName('');
    setDate('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Editar Evento' : 'Criar Evento'}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do Evento"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Local do Evento"
        required
      />
      <button type="submit">{initialData ? 'Atualizar Evento' : 'Criar Evento'}</button>
    </form>
  );
};

export default EventForm;
