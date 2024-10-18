// src/components/EventManagement/EventManagement.js
import React, { useState } from 'react';
import EventList from './EventList';
import EventForm from './EventForm';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);

  const handleCreateOrUpdate = (event) => {
    if (currentEvent) {
      // Update event
      setEvents((prevEvents) =>
        prevEvents.map((e) => (e.name === currentEvent.name ? event : e))
      );
      setCurrentEvent(null);
    } else {
      // Create new event
      setEvents([...events, event]);
    }
  };

  const handleEdit = (event) => {
    setCurrentEvent(event);
  };

  const handleDelete = (index) => {
    setEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
  };

  return (
    <div>
      <EventForm onSubmit={handleCreateOrUpdate} initialData={currentEvent} />
      <EventList events={events} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default EventManagement;
