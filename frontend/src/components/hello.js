import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import './Events.css';
import NavScrollExample from './NavScrollExample';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const Events = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    course: '',
    branch: '',
    activity: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const events = [
    { uniqueName: 'hackathon', title: 'Hackathon' },
    { uniqueName: 'robotics', title: 'Robotics Workshop' },
    { uniqueName: 'cultural-fest', title: 'Cultural Fest' },
    { uniqueName: 'sports-meet', title: 'Sports Meet' },
    { uniqueName: 'coding-challenge', title: 'Coding Challenge' },
    { uniqueName: 'art-competition', title: 'Art Competition' },
    { uniqueName: 'seminar-ai', title: 'AI Seminar' },
    { uniqueName: 'music-concert', title: 'Music Concert' },
    { uniqueName: 'web-development', title: 'Web Development Workshop' },
    { uniqueName: 'drama', title: 'Drama Performance' },
    { uniqueName: 'photography', title: 'Photography Contest' },
    { uniqueName: 'quiz', title: 'Quiz Competition' }
    // Add more events as needed
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to generate and download the ticket as a PDF.
  const generateTicket = (data) => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(20);
    doc.text('Event Ticket', 20, 30);

    // Add a line separator
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);

    // Add user details
    doc.setFontSize(12);
    doc.text(`Name: ${data.name}`, 20, 50);
    doc.text(`Email: ${data.email}`, 20, 60);
    doc.text(`Phone: ${data.phone}`, 20, 70);

    // Add event details
    // Find the full title of the selected event
    const selectedEvent = events.find((ev) => ev.uniqueName === data.event);
    const eventTitle = selectedEvent ? selectedEvent.title : data.event;
    doc.text(`Event: ${eventTitle}`, 20, 90);
    doc.text(`Course: ${data.course}`, 20, 100);
    doc.text(`Branch: ${data.branch}`, 20, 110);
    doc.text(`Activity: ${data.activity}`, 20, 120);

    // Optional: You can add more styling or a QR code if needed

    // Trigger the download of the PDF ticket
    doc.save('ticket.pdf');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Post the data to your API endpoint
    axios.post('http://localhost:5000/api/participate', formData)
      .then(response => {
        setResponseMessage('Thank you for participating! Your ticket is downloading...');

        // Generate and download the ticket using the current form data
        generateTicket(formData);

        // Reset the form fields after generating the ticket
        setFormData({ name: '', email: '', phone: '', event: '', course: '', branch: '', activity: '' });
      })
      .catch(error => {
        console.error('Error submitting the form:', error);
        setResponseMessage('There was an error. Please try again.');
      });
  };

  return (
    <>
      <NavScrollExample />
      <div className="events-container">
        <h1 className="events-title">Events Participation</h1>
        <form onSubmit={handleFormSubmit} className="participation-form">
          <div className="form-group form-group-name">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control input-name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group form-group-email">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control input-email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group form-group-phone">
            <label htmlFor="phone" className="form-label">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control input-phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group form-group-event">
            <label htmlFor="event" className="form-label">Event:</label>
            <select
              id="event"
              name="event"
              className="form-control select-event"
              value={formData.event}
              onChange={handleInputChange}
              required
            >
              <option value="">Select an event...</option>
              {events.map((event, index) => (
                <option key={index} value={event.uniqueName}>{event.title}</option>
              ))}
            </select>
          </div>

          <div className="form-group form-group-course">
            <label htmlFor="course" className="form-label">Course:</label>
            <select
              id="course"
              name="course"
              className="form-control select-course"
              value={formData.course}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a course...</option>
              <option value="bachelor">B.Tech</option>
              <option value="master">M.Tech</option>
              <option value="phd">BCA</option>
            </select>
          </div>

          <div className="form-group form-group-branch">
            <label htmlFor="branch" className="form-label">Branch:</label>
            <select
              id="branch"
              name="branch"
              className="form-control select-branch"
              value={formData.branch}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a branch...</option>
              <option value="computer-science">Computer Science</option>
              <option value="electrical-engineering">Electrical Engineering</option>
              <option value="mechanical-engineering">Mechanical Engineering</option>
              <option value="civil-engineering">Civil Engineering</option>
              <option value="biotechnology">Biotechnology</option>
            </select>
          </div>

          <div className="form-group form-group-activity">
            <label htmlFor="activity" className="form-label">Activity:</label>
            <select
              id="activity"
              name="activity"
              className="form-control select-activity"
              value={formData.activity}
              onChange={handleInputChange}
              required
            >
              <option value="">Select an activity...</option>
              <option value="music">Music</option>
              <option value="dance">Dance</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary submit-button">Participate</button>
        </form>

        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
      <Footer />
    </>
  );
};

export default Events;
