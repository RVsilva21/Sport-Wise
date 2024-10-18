// src/components/EventManagement/EventList.js
import React from 'react';

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          {event.name}
          <button onClick={() => onEdit(event)}>Editar</button>
          <button onClick={() => onDelete(index)}>Deletar</button>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
