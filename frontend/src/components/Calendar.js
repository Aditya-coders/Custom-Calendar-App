import React, { useState, useEffect } from 'react';
import './Calendar.css'; // Assuming you have a separate CSS file for styling
import NavScrollExample from './NavScrollExample';

const Calendar = () => {
  const [events, setEvents] = useState(() => {
    // Retrieve saved events from localStorage
    const savedEvents = localStorage.getItem('calendarEvents');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  const [reminder, setReminder] = useState('');
  const [sharedWith, setSharedWith] = useState([]);

  useEffect(() => {
    // Save events to localStorage whenever they change
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const addEvent = (date, title, image, imageURL) => {
    if (date && title) {
      const publishedAt = new Date().toISOString(); // Get current date and time
      if (image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setEvents([...events, { date, title, image: reader.result, imageURL, publishedAt }]);
        };
        reader.readAsDataURL(image);
      } else {
        setEvents([...events, { date, title, imageURL, publishedAt }]);
      }
    }
  };

  const deleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter(event => event !== eventToDelete);
    setEvents(updatedEvents);
  };

  const addReminder = (eventTitle, reminder) => {
    const updatedEvents = events.map(event => 
      event.title === eventTitle ? { ...event, reminder } : event
    );
    setEvents(updatedEvents);
  };

  const shareCalendar = (email) => {
    if (email) {
      setSharedWith([...sharedWith, email]);
    }
  };

  const formatPublishedAt = (publishedAt) => {
    const eventDate = new Date(publishedAt);
    const now = new Date();
    const differenceInTime = now - eventDate;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    if (differenceInDays < 1) {
      return "Today";
    } else if (differenceInDays < 2) {
      return "Yesterday";
    } else {
      return eventDate.toLocaleDateString();
    }
  };

  return (
    <div className="calendar container-fluid" >
      <NavScrollExample />
      <h1>My Calendar</h1>
      <div className="calendar-grid">
        {/* Render days of the month here */}
      </div>

      <div className="event-form">
        <h2>Schedule Event</h2>
        <input type="date" placeholder="Event Date" id="event-date" />
        <input type="text" placeholder="Event Title" id="event-title" />
        <input type="file" id="event-image" />
        <input type="text" placeholder="Image URL (optional)" id="event-image-url" />
        <button onClick={() => addEvent(
          document.getElementById('event-date').value, 
          document.getElementById('event-title').value,
          document.getElementById('event-image').files[0],
          document.getElementById('event-image-url').value
        )}>Add Event</button>
      </div>

      <div className="reminder-form">
        <h2>Set Reminder</h2>
        <select id="event-select">
          {events.map((event, index) => (
            <option key={index} value={event.title}>{event.title}</option>
          ))}
        </select>
        <input type="text" placeholder="Reminder" value={reminder} onChange={e => setReminder(e.target.value)} />
        <button onClick={() => addReminder(document.getElementById('event-select').value, reminder)}>Set Reminder</button>
      </div>

      <div className="share-form">
        <h2>Share Calendar</h2>
        <input type="email" placeholder="Email" id="share-email" />
        <button onClick={() => shareCalendar(document.getElementById('share-email').value)}>Share</button>
      </div>

      <div className="event-list">
        <h2>Upcoming Events</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.date} - {event.title} {event.reminder && ` (Reminder: ${event.reminder})`}
              <br />
              Published: {formatPublishedAt(event.publishedAt)}
              <button onClick={() => deleteEvent(event)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;

