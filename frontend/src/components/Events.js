// import React, { useState } from 'react';
// import axios from 'axios';
// import './Events.css';
// import NavScrollExample from './NavScrollExample';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Footer';

// const Events = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     event: '',
//     course: '',
//     branch: '',
//     activity: '',
//   });
//   const [responseMessage, setResponseMessage] = useState('');

//   const events = [
//     { uniqueName: 'hackathon', title: 'Hackathon' },
//     { uniqueName: 'robotics', title: 'Robotics Workshop' },
//     { uniqueName: 'cultural-fest', title: 'Cultural Fest' },
//     { uniqueName: 'sports-meet', title: 'Sports Meet' },
//     { uniqueName: 'coding-challenge', title: 'Coding Challenge' },
//     { uniqueName: 'art-competition', title: 'Art Competition' },
//     { uniqueName: 'seminar-ai', title: 'AI Seminar' },
//     { uniqueName: 'music-concert', title: 'Music Concert' },
//     { uniqueName: 'web-development', title: 'Web Development Workshop' },
//     { uniqueName: 'drama', title: 'Drama Performance' },
//     { uniqueName: 'photography', title: 'Photography Contest' },
//     { uniqueName: 'quiz', title: 'Quiz Competition' }
//     // Add more events as needed
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/participate', formData)
//       .then(response => {
//         setResponseMessage('Thank you for participating!');
//         setFormData({ name: '', email: '', phone: '', event: '', course: '', branch: '', activity: '' });
//       })
//       .catch(error => {
//         console.error('Error submitting the form:', error);
//         setResponseMessage('There was an error. Please try again.');
//       });
//   };

//   return (
//     <>
//       <NavScrollExample />
//       <div className="events-container">
//         <h1 className="events-title">Events Participation</h1>
//         <form onSubmit={handleFormSubmit} className="participation-form">
//           <div className="form-group form-group-name">
//             <label htmlFor="name" className="form-label">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="form-control input-name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="form-group form-group-email">
//             <label htmlFor="email" className="form-label">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="form-control input-email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="form-group form-group-phone">
//             <label htmlFor="phone" className="form-label">Phone Number:</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               className="form-control input-phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="form-group form-group-event">
//             <label htmlFor="event" className="form-label">Event:</label>
//             <select
//               id="event"
//               name="event"
//               className="form-control select-event"
//               value={formData.event}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select an event...</option>
//               {events.map((event, index) => (
//                 <option key={index} value={event.uniqueName}>{event.title}</option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group form-group-course">
//             <label htmlFor="course" className="form-label">Course:</label>
//             <select
//               id="course"
//               name="course"
//               className="form-control select-course"
//               value={formData.course}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select a course...</option>
//               <option value="bachelor">B.Tech</option>
//               <option value="master">M.Tech</option>
//               <option value="phd">BCA</option>
//             </select>
//           </div>

//           <div className="form-group form-group-branch">
//             <label htmlFor="branch" className="form-label">Branch:</label>
//             <select
//               id="branch"
//               name="branch"
//               className="form-control select-branch"
//               value={formData.branch}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select a branch...</option>
//               <option value="computer-science">Computer Science</option>
//               <option value="electrical-engineering">Electrical Engineering</option>
//               <option value="mechanical-engineering">Mechanical Engineering</option>
//               <option value="civil-engineering">Civil Engineering</option>
//               <option value="biotechnology">Biotechnology</option>
//             </select>
//           </div>

//           <div className="form-group form-group-activity">
//             <label htmlFor="activity" className="form-label">Activity:</label>
//             <select
//               id="activity"
//               name="activity"
//               className="form-control select-activity"
//               value={formData.activity}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select an activity...</option>
//               <option value="music">Music</option>
//               <option value="dance">Dance</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           <button type="submit" className="btn btn-primary submit-button">Participate</button>
//         </form>

//         {responseMessage && <p className="response-message">{responseMessage}</p>}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Events;

// ///////////////////////////////////////////////

import React, { useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { QRCodeCanvas } from "qrcode.react"; // Updated import
import "./Events.css";
import NavScrollExample from "./NavScrollExample";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const Events = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    course: "",
    branch: "",
    activity: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [ticketData, setTicketData] = useState(null); // Holds ticket information after successful registration
  const ticketRef = useRef(null); // Ref for the ticket component

  const events = [
    { uniqueName: "hackathon", title: "Hackathon" },
    { uniqueName: "robotics", title: "Robotics Workshop" },
    { uniqueName: "cultural-fest", title: "Cultural Fest" },
    { uniqueName: "sports-meet", title: "Sports Meet" },
    { uniqueName: "coding-challenge", title: "Coding Challenge" },
    { uniqueName: "art-competition", title: "Art Competition" },
    { uniqueName: "seminar-ai", title: "AI Seminar" },
    { uniqueName: "music-concert", title: "Music Concert" },
    { uniqueName: "web-development", title: "Web Development Workshop" },
    { uniqueName: "drama", title: "Drama Performance" },
    { uniqueName: "photography", title: "Photography Contest" },
    { uniqueName: "quiz", title: "Quiz Competition" },
    // Add more events as needed
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/participate", formData)
      .then((response) => {
        // For demonstration, we generate a ticket id.
        const ticketId = "TICKET-" + new Date().getTime();
        const newTicket = {
          ticketId,
          ...formData,
        };

        setTicketData(newTicket);
        setResponseMessage(
          "Thank you for participating! Your ticket has been generated."
        );
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          event: "",
          course: "",
          branch: "",
          activity: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
        setResponseMessage("There was an error. Please try again.");
      });
  };

  // Function to download the ticket as an image
  const downloadTicket = () => {
    if (ticketRef.current) {
      html2canvas(ticketRef.current)
        .then((canvas) => {
          const link = document.createElement("a");
          link.download = `${ticketData.ticketId}.png`;
          link.href = canvas.toDataURL("image/png");
          link.click();
        })
        .catch((error) => {
          console.error("Error capturing the ticket:", error);
        });
    }
  };

  return (
    <>
      <NavScrollExample />
      <div className="events-container">
        <h1 className="events-title">Events Participation</h1>
        <form onSubmit={handleFormSubmit} className="participation-form">
          <div className="form-group form-group-name">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
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
            <label htmlFor="email" className="form-label">
              Email:
            </label>
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
            <label htmlFor="phone" className="form-label">
              Phone Number:
            </label>
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
            <label htmlFor="event" className="form-label">
              Event:
            </label>
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
                <option key={index} value={event.uniqueName}>
                  {event.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group form-group-course">
            <label htmlFor="course" className="form-label">
              Course:
            </label>
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
            <label htmlFor="branch" className="form-label">
              Branch:
            </label>
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
              <option value="electrical-engineering">
                Electrical Engineering
              </option>
              <option value="mechanical-engineering">
                Mechanical Engineering
              </option>
              <option value="civil-engineering">Civil Engineering</option>
              <option value="biotechnology">Biotechnology</option>
            </select>
          </div>

          <div className="form-group form-group-activity">
            <label htmlFor="activity" className="form-label">
              Activity:
            </label>
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

          <button type="submit" className="btn btn-primary submit-button">
            Participate
          </button>
        </form>

        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}

        {/* Ticket Preview Section */}
        {/* Ticket Preview Section */}
        {ticketData && (
          <div className="ticket-preview-container">
            <h2>Your Ticket</h2>
            <div
              className="ticket"
              ref={ticketRef}
              style={{
                padding: "20px",
                border: "2px solid #333",
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "15px",
                  fontWeight: "bold",
                }}
              >
                {ticketData.ticketId}
              </h3>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <strong>Name:</strong>
                    </td>
                    <td>{ticketData.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Email:</strong>
                    </td>
                    <td>{ticketData.email}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Event:</strong>
                    </td>
                    <td>{ticketData.event}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Course:</strong>
                    </td>
                    <td>{ticketData.course}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Branch:</strong>
                    </td>
                    <td>{ticketData.branch}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Activity:</strong>
                    </td>
                    <td>{ticketData.activity}</td>
                  </tr>
                </tbody>
              </table>
              <div className="qr-code mt-3" style={{ textAlign: "center" }}>
                <QRCodeCanvas
                  value={JSON.stringify(ticketData)}
                  size={128}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="L"
                  includeMargin={true}
                />
              </div>
            </div>
            <button onClick={downloadTicket} className="btn btn-success mt-3">
              Download Ticket
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Events;
