// import React, { useState, useEffect } from "react";
// import NavScrollExample from "./NavScrollExample";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Footer from "./Footer";
// import Modal from 'react-bootstrap/Modal';
// import Spinner from 'react-bootstrap/Spinner';
// import './Homepage.css';

// function Homepage() {
//     const [events, setEvents] = useState([]);
//     const [filteredEvents, setFilteredEvents] = useState([]);
//     const [selectedEvent, setSelectedEvent] = useState(null);
//     const [showEventModal, setShowEventModal] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [searchQuery, setSearchQuery] = useState("");

//     useEffect(() => {
//         const savedEvents = localStorage.getItem('calendarEvents');
//         if (savedEvents) {
//             setEvents(JSON.parse(savedEvents));
//             setFilteredEvents(JSON.parse(savedEvents));
//         }
//         setLoading(false);
//     }, []);

//     useEffect(() => {
//         const filtered = events.filter(event =>
//             event.title.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredEvents(filtered);
//     }, [searchQuery, events]);

//     const formatPublishedAt = (publishedAt) => {
//         const eventDate = new Date(publishedAt);
//         const now = new Date();
//         const differenceInTime = now - eventDate;
//         const differenceInDays = differenceInTime / (1000 * 3600 * 24);

//         if (differenceInDays < 1) {
//             return "Today";
//         } else if (differenceInDays < 2) {
//             return "Yesterday";
//         } else {
//             return eventDate.toLocaleDateString();
//         }
//     };

//     const handleViewMore = (event) => {
//         setSelectedEvent(event);
//         setShowEventModal(true);
//     };

//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     return (
//         <div className="homepage-container">
//             <NavScrollExample />

//             <div className="text-center my-4">
//                 <h1 className="homepage-title">Welcome to Custom Calendar Website</h1>
//             </div>

//             <div className="text-center my-4">
//                 <input
//                     type="text"
//                     placeholder="Search events..."
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     className="form-control w-50 mx-auto search-bar"
//                 />
//             </div>

//             <Container className="my-4">
//                 <h2 className="text-center text-info p-3">Upcoming College Events</h2>

//                 {loading ? (
//                     <div className="text-center my-4">
//                         <Spinner animation="border" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </Spinner>
//                     </div>
//                 ) : (
//                     <Row className="justify-content-center pb-5">
//                         {filteredEvents.length > 0 ? (
//                             filteredEvents.map((event, index) => (
//                                 <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
//                                     <Card className="event-card shadow-lg">
//                                         <Card.Img
//                                             variant="top"
//                                             src={event.imageURL || `https://via.placeholder.com/150?text=${encodeURIComponent(event.title)}`}
//                                             alt={event.title}
//                                             className="event-card-img"
//                                         />
//                                         <Card.Body>
//                                             <Card.Title className="text-center event-title">{event.title}</Card.Title>
//                                             <Card.Text className="text-center">
//                                                 {event.date}
//                                                 {event.reminder && ` (Reminder: ${event.reminder})`}
//                                             </Card.Text>
//                                             <Card.Text className="text-center text-muted">
//                                                 <span className="published-date">Published: {formatPublishedAt(event.publishedAt)}</span>
//                                             </Card.Text>
//                                             <div className="text-center">
//                                                 <Button variant="primary" onClick={() => handleViewMore(event)} className="view-more-btn">View More</Button>
//                                             </div>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             ))
//                         ) : (
//                             <div className="text-center">No events found</div>
//                         )}
//                     </Row>
//                 )}
//             </Container>

//             <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{selectedEvent?.title}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p><strong>Date:</strong> {selectedEvent?.date}</p>
//                     <p><strong>Description:</strong> {selectedEvent?.description}</p>
//                     <img src={selectedEvent?.imageURL} alt={selectedEvent?.title} className="img-fluid rounded" />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowEventModal(false)}>Close</Button>
//                 </Modal.Footer>
//             </Modal>

//             <Footer />
//         </div>
//     );
// }

// export default Homepage;






import React, { useState, useEffect } from "react";
import NavScrollExample from "./NavScrollExample";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Footer";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";  // Added import for Table
import "./Homepage.css";

function Homepage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedEvents = localStorage.getItem("calendarEvents");
    if (savedEvents) {
      const parsedEvents = JSON.parse(savedEvents);
      setEvents(parsedEvents);
      setFilteredEvents(parsedEvents);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchQuery, events]);

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

  const handleViewMore = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="homepage-container">
      <NavScrollExample />

      <div className="text-center my-4">
        <h1 className="homepage-title">Welcome to Custom Calendar Website</h1>
      </div>

      <div className="text-center my-4">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control w-50 mx-auto search-bar"
        />
      </div>

      <Container className="my-4">
        <h2 className="text-center text-info p-3">Upcoming College Events</h2>

        {loading ? (
          <div className="text-center my-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row className="justify-content-center pb-5">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
                  <Card className="event-card shadow-lg">
                    <Card.Img
                      variant="top"
                      src={
                        event.imageURL ||
                        `https://via.placeholder.com/150?text=${encodeURIComponent(
                          event.title
                        )}`
                      }
                      alt={event.title}
                      className="event-card-img"
                    />
                    <Card.Body>
                      <Card.Title className="text-center event-title">
                        {event.title}
                      </Card.Title>
                      <Card.Text className="text-center">
                        {event.date}
                        {event.reminder && ` (Reminder: ${event.reminder})`}
                      </Card.Text>
                      <Card.Text className="text-center text-muted">
                        <span className="published-date">
                          Published: {formatPublishedAt(event.publishedAt)}
                        </span>
                      </Card.Text>
                      <div className="text-center">
                        <Button
                          variant="primary"
                          onClick={() => handleViewMore(event)}
                          className="view-more-btn"
                        >
                          View More
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div className="text-center">No events found</div>
            )}
          </Row>
        )}
      </Container>

      <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent ? (
            <div>
              <h5>Event Details:</h5>
              <Table striped bordered hover responsive>
                <tbody>
                  {selectedEvent.time && (
                    <tr>
                      <td><strong>Time:</strong></td>
                      <td>{selectedEvent.time}</td>
                    </tr>
                  )}
                  {selectedEvent.guestName && (
                    <tr>
                      <td><strong>Guest Name:</strong></td>
                      <td>{selectedEvent.guestName}</td>
                    </tr>
                  )}
                  {selectedEvent.date && (
                    <tr>
                      <td><strong>Date:</strong></td>
                      <td>{selectedEvent.date}</td>
                    </tr>
                  )}
                  {selectedEvent.eventLocation && (
                    <tr>
                      <td><strong>Event Location:</strong></td>
                      <td>{selectedEvent.eventLocation}</td>
                    </tr>
                  )}
                  {selectedEvent.description && (
                    <tr>
                      <td><strong>Event Description:</strong></td>
                      <td>{selectedEvent.description}</td>
                    </tr>
                  )}
                  {selectedEvent.organizer && (
                    <tr>
                      <td><strong>Organizer:</strong></td>
                      <td>{selectedEvent.organizer}</td>
                    </tr>
                  )}
                  {selectedEvent.guestSpeakerBio && (
                    <tr>
                      <td><strong>Guest Speaker Bio:</strong></td>
                      <td>{selectedEvent.guestSpeakerBio}</td>
                    </tr>
                  )}
                  {selectedEvent.imageURL && (
                    <tr>
                      <td colSpan="2">
                        <img
                          src={selectedEvent.imageURL}
                          alt={selectedEvent.title}
                          className="img-fluid rounded"
                        />
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          ) : (
            <p>No event selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEventModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
}

export default Homepage;



