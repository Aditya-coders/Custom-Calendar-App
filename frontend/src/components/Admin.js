// // import React, { useState, useEffect } from "react";
// // import {
// //   Container,
// //   Row,
// //   Col,
// //   Card,
// //   Button,
// //   Modal,
// //   Form,
// //   InputGroup,
// //   FormControl,
// // } from "react-bootstrap";
// // import { CSVLink } from "react-csv";
// // import { Bar } from "react-chartjs-2";
// // import Chart from "chart.js/auto";
// // import "./Admin.css";
// // import Footer from "./Footer";

// // const Admin = () => {
// //   // State management
// //   const [events, setEvents] = useState(() => {
// //     const savedEvents = localStorage.getItem("calendarEvents");
// //     return savedEvents ? JSON.parse(savedEvents) : [];
// //   });

// //   const [users, setUsers] = useState([
// //     { id: 2, name: "Aditya Kumar", email: "aditya@example.com" },
// //   ]);

// //   // Modal control states
// //   const [showEventModal, setShowEventModal] = useState(false);
// //   const [showUserModal, setShowUserModal] = useState(false);
// //   const [showSettingsModal, setShowSettingsModal] = useState(false);
// //   const [showDashboardModal, setShowDashboardModal] = useState(false);
// //   const [showReportModal, setShowReportModal] = useState(false);
// //   const [showAddUserModal, setShowAddUserModal] = useState(false);

// //   const [newEvent, setNewEvent] = useState({
// //     date: "",
// //     title: "",
// //     imageURL: "",
// //     description: "",
// //   });
// //   const [selectedEvent, setSelectedEvent] = useState(null);
// //   const [newUser, setNewUser] = useState({ name: "", email: "" });
// //   const [editUser, setEditUser] = useState(null);
// //   const [theme, setTheme] = useState("light");
// //   const [notificationsEnabled, setNotificationsEnabled] = useState(true);

// //   const [searchEvent, setSearchEvent] = useState("");
// //   const [searchUser, setSearchUser] = useState("");

// //   // Save events to localStorage whenever events state changes
// //   useEffect(() => {
// //     localStorage.setItem("calendarEvents", JSON.stringify(events));
// //   }, [events]);

// //   // Save theme to localStorage
// //   useEffect(() => {
// //     localStorage.setItem("theme", theme);
// //   }, [theme]);

// //   // Load saved theme from localStorage
// //   useEffect(() => {
// //     const savedTheme = localStorage.getItem("theme");
// //     if (savedTheme) {
// //       setTheme(savedTheme);
// //     }
// //   }, []);

// //   // Event Handlers
// //   const handleAddEvent = (e) => {
// //     e.preventDefault();
// //     if (newEvent.date && newEvent.title) {
// //       const publishedAt = new Date().toISOString();
// //       const newEventData = { ...newEvent, publishedAt };
// //       setEvents([...events, newEventData]);
// //       setShowEventModal(false);
// //       setNewEvent({ date: "", title: "", imageURL: "", description: "" });
// //     }
// //   };

// //   const handleEditEvent = (eventToEdit) => {
// //     setNewEvent(eventToEdit);
// //     setShowEventModal(true);
// //   };

// //   const deleteEvent = (eventToDelete) => {
// //     const updatedEvents = events.filter((event) => event !== eventToDelete);
// //     setEvents(updatedEvents);
// //   };

// //   const deleteUser = (userToDelete) => {
// //     const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
// //     setUsers(updatedUsers);
// //   };

// //   const handleViewReport = (event) => {
// //     setSelectedEvent(event);
// //     setShowReportModal(true);
// //   };

// //   const handleAddUser = (e) => {
// //     e.preventDefault();
// //     if (newUser.name && newUser.email) {
// //       setUsers([
// //         ...users,
// //         { id: users.length + 1, name: newUser.name, email: newUser.email },
// //       ]);
// //       setShowAddUserModal(false);
// //       setNewUser({ name: "", email: "" });
// //     }
// //   };

// //   const handleEditUser = (e) => {
// //     e.preventDefault();
// //     if (editUser.name && editUser.email) {
// //       const updatedUsers = users.map((user) =>
// //         user.id === editUser.id ? editUser : user
// //       );
// //       setUsers(updatedUsers);
// //       setShowUserModal(false);
// //       setEditUser(null);
// //     }
// //   };

// //   // Settings Handlers
// //   const handleSettingsSave = () => {
// //     console.log("Settings saved:", { theme, notificationsEnabled });
// //     setShowSettingsModal(false);
// //   };

// //   // Dashboard Overview Data
// //   const totalEvents = events.length;
// //   const totalUsers = users.length;
// //   const eventsData = {
// //     labels: events.map((event) => event.date),
// //     datasets: [
// //       {
// //         label: "Events",
// //         data: events.map(() => 1),
// //         backgroundColor: "rgba(75, 192, 192, 0.2)",
// //         borderColor: "rgba(75, 192, 192, 1)",
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   return (
// //     <>
// //       <Container className={`admin-container mt-4 ${theme}`}>
// //         <Row>
// //           {/* Sidebar */}
// //           <Col md={3}>
// //             <Card className={`admin-card mb-4 ${theme}`}>
// //               <Card.Body>
// //                 <Card.Title className="text-center">Dashboard</Card.Title>
// //                 <Button
// //                   variant="primary"
// //                   className="w-100"
// //                   onClick={() => setShowDashboardModal(true)}
// //                 >
// //                   Overview
// //                 </Button>
// //               </Card.Body>
// //             </Card>
// //             <Card className={`admin-card mb-4 ${theme}`}>
// //               <Card.Body>
// //                 <Card.Title className="text-center">Manage Events</Card.Title>
// //                 <Button
// //                   variant="success"
// //                   className="w-100"
// //                   onClick={() => setShowEventModal(true)}
// //                 >
// //                   Add Event
// //                 </Button>

// //                 {/* //// PDF */}
// //                 <Button
// //                   href="/participatingData"
// //                   variant="danger"
// //                   className="w-100 mt-2"
// //                 >
// //                   View Participation PDF
// //                 </Button>

// //                 <InputGroup className="mt-3">
// //                   <FormControl
// //                     placeholder="Search events"
// //                     value={searchEvent}
// //                     onChange={(e) => setSearchEvent(e.target.value)}
// //                   />
// //                 </InputGroup>
// //               </Card.Body>
// //             </Card>
// //             <Card className={`admin-card mb-4 ${theme}`}>
// //               <Card.Body>
// //                 <Card.Title className="text-center">Users</Card.Title>
// //                 <Button
// //                   variant="info"
// //                   className="w-100"
// //                   onClick={() => setShowUserModal(true)}
// //                 >
// //                   Manage Users
// //                 </Button>
// //                 <Button
// //                   variant="success"
// //                   className="w-100 mt-2"
// //                   onClick={() => setShowAddUserModal(true)}
// //                 >
// //                   Add User
// //                 </Button>
// //                 <InputGroup className="mt-3">
// //                   <FormControl
// //                     placeholder="Search users"
// //                     value={searchUser}
// //                     onChange={(e) => setSearchUser(e.target.value)}
// //                   />
// //                 </InputGroup>
// //               </Card.Body>
// //             </Card>
// //             <Card className={`admin-card mb-4 ${theme}`}>
// //               <Card.Body>
// //                 <Card.Title className="text-center">Settings</Card.Title>
// //                 <Button
// //                   variant="danger"
// //                   className="w-100"
// //                   onClick={() => setShowSettingsModal(true)}
// //                 >
// //                   Update Settings
// //                 </Button>
// //               </Card.Body>
// //             </Card>
// //           </Col>

// //           {/* Main Content */}
// //           <Col md={9}>
// //             <Card className={`admin-card ${theme}`}>
// //               <Card.Body>
// //                 <Card.Title className="text-center">Recent Reports</Card.Title>
// //                 <div className="report-list">
// //                   {events.length > 0 ? (
// //                     events
// //                       .filter((event) =>
// //                         event.title
// //                           .toLowerCase()
// //                           .includes(searchEvent.toLowerCase())
// //                       )
// //                       .map((event, index) => (
// //                         <Card className="report-card mb-2" key={index}>
// //                           <Card.Body>
// //                             <Card.Title>{event.title}</Card.Title>
// //                             <Card.Text>Date: {event.date}</Card.Text>
// //                             <Card.Text>
// //                               Published:{" "}
// //                               {new Date(event.publishedAt).toLocaleDateString()}
// //                             </Card.Text>
// //                             <Card.Text>
// //                               Description: {event.description}
// //                             </Card.Text>
// //                             <Button
// //                               variant="outline-primary"
// //                               onClick={() => handleViewReport(event)}
// //                             >
// //                               View Report
// //                             </Button>
// //                             <Button
// //                               variant="outline-warning"
// //                               onClick={() => handleEditEvent(event)}
// //                             >
// //                               Edit
// //                             </Button>
// //                             <Button
// //                               variant="outline-danger"
// //                               onClick={() => deleteEvent(event)}
// //                             >
// //                               Delete
// //                             </Button>
// //                           </Card.Body>
// //                         </Card>
// //                       ))
// //                   ) : (
// //                     <p>No events available.</p>
// //                   )}
// //                 </div>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         </Row>

// //         {/* Dashboard Modal */}
// //         <Modal
// //           show={showDashboardModal}
// //           onHide={() => setShowDashboardModal(false)}
// //         >
// //           <Modal.Header closeButton>
// //             <Modal.Title>Dashboard Overview</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>
// //             <Container>
// //               <Row>
// //                 <Col md={6}>
// //                   <Card>
// //                     <Card.Body>
// //                       <Card.Title>Total Events</Card.Title>
// //                       <Card.Text>{totalEvents}</Card.Text>
// //                       <Button
// //                         variant="outline-primary"
// //                         onClick={() => setShowEventModal(true)}
// //                       >
// //                         Manage Events
// //                       </Button>
// //                     </Card.Body>
// //                   </Card>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Card>
// //                     <Card.Body>
// //                       <Card.Title>Total Users</Card.Title>
// //                       <Card.Text>{totalUsers}</Card.Text>
// //                       <Button
// //                         variant="outline-primary"
// //                         onClick={() => setShowUserModal(true)}
// //                       >
// //                         Manage Users
// //                       </Button>
// //                     </Card.Body>
// //                   </Card>
// //                 </Col>
// //               </Row>
// //               <Row className="mt-3">
// //                 <Col>
// //                   <Card>
// //                     <Card.Body>
// //                       <Card.Title>Recent Events</Card.Title>
// //                       <ul>
// //                         {events.slice(-5).map((event, index) => (
// //                           <li key={index}>
// //                             <strong>{event.title}</strong> - {event.date}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </Card.Body>
// //                   </Card>
// //                 </Col>
// //               </Row>
// //               <Row className="mt-3">
// //                 <Col>
// //                   <Card>
// //                     <Card.Body>
// //                       <Card.Title>Recent Users</Card.Title>
// //                       <ul>
// //                         {users.slice(-5).map((user, index) => (
// //                           <li key={index}>
// //                             <strong>{user.name}</strong> - {user.email}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </Card.Body>
// //                   </Card>
// //                 </Col>
// //               </Row>
// //               <Row className="mt-3">
// //                 <Col>
// //                   <Card>
// //                     <Card.Body>
// //                       <Card.Title>Event Trends</Card.Title>
// //                       <Bar data={eventsData} />
// //                     </Card.Body>
// //                   </Card>
// //                 </Col>
// //               </Row>
// //             </Container>
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button
// //               variant="secondary"
// //               onClick={() => setShowDashboardModal(false)}
// //             >
// //               Close
// //             </Button>
// //           </Modal.Footer>
// //         </Modal>

// //         {/* Event Modal */}
// //         <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
// //           <Modal.Header closeButton>
// //             <Modal.Title>
// //               {newEvent.title ? "Edit Event" : "Add Event"}
// //             </Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>
// //             <Form onSubmit={handleAddEvent}>
// //               <Form.Group controlId="formEventDate">
// //                 <Form.Label>Date</Form.Label>
// //                 <Form.Control
// //                   type="date"
// //                   value={newEvent.date}
// //                   onChange={(e) =>
// //                     setNewEvent({ ...newEvent, date: e.target.value })
// //                   }
// //                   required
// //                 />
// //               </Form.Group>
// //               <Form.Group controlId="formEventTitle">
// //                 <Form.Label>Title</Form.Label>
// //                 <Form.Control
// //                   type="text"
// //                   value={newEvent.title}
// //                   onChange={(e) =>
// //                     setNewEvent({ ...newEvent, title: e.target.value })
// //                   }
// //                   required
// //                 />
// //               </Form.Group>
// //               <Form.Group controlId="formEventImageURL">
// //                 <Form.Label>Image URL</Form.Label>
// //                 <Form.Control
// //                   type="text"
// //                   value={newEvent.imageURL}
// //                   onChange={(e) =>
// //                     setNewEvent({ ...newEvent, imageURL: e.target.value })
// //                   }
// //                 />
// //               </Form.Group>
// //               <Form.Group controlId="formEventDescription">
// //                 <Form.Label>Description</Form.Label>
// //                 <Form.Control
// //                   as="textarea"
// //                   rows={3}
// //                   value={newEvent.description}
// //                   onChange={(e) =>
// //                     setNewEvent({ ...newEvent, description: e.target.value })
// //                   }
// //                 />
// //               </Form.Group>
// //               <Button variant="primary" type="submit">
// //                 {newEvent.title ? "Update Event" : "Add Event"}
// //               </Button>
// //             </Form>
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button
// //               variant="secondary"
// //               onClick={() => setShowEventModal(false)}
// //             >
// //               Close
// //             </Button>
// //           </Modal.Footer>
// //         </Modal>

// //         {/* User Modal */}
// //         <Modal show={showUserModal} onHide={() => setShowUserModal(false)}>
// //           <Modal.Header closeButton>
// //             <Modal.Title>Manage Users</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>
// //             <Container>
// //               {users.map((user) => (
// //                 <Card key={user.id} className="mb-2">
// //                   <Card.Body>
// //                     <Card.Title>{user.name}</Card.Title>
// //                     <Card.Text>Email: {user.email}</Card.Text>
// //                     <Button
// //                       variant="outline-warning"
// //                       onClick={() => {
// //                         setEditUser(user);
// //                         setShowUserModal(true);
// //                       }}
// //                     >
// //                       Edit
// //                     </Button>
// //                     <Button
// //                       variant="outline-danger"
// //                       onClick={() => deleteUser(user)}
// //                     >
// //                       Delete
// //                     </Button>
// //                   </Card.Body>
// //                 </Card>
// //               ))}
// //             </Container>
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button variant="secondary" onClick={() => setShowUserModal(false)}>
// //               Close
// //             </Button>
// //           </Modal.Footer>
// //         </Modal>

// //         {/* Add User Modal */}
// //         <Modal
// //           show={showAddUserModal}
// //           onHide={() => setShowAddUserModal(false)}
// //         >
// //           <Modal.Header closeButton>
// //             <Modal.Title>Add User</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>
// //             <Form onSubmit={handleAddUser}>
// //               <Form.Group controlId="formUserName">
// //                 <Form.Label>Name</Form.Label>
// //                 <Form.Control
// //                   type="text"
// //                   value={newUser.name}
// //                   onChange={(e) =>
// //                     setNewUser({ ...newUser, name: e.target.value })
// //                   }
// //                   required
// //                 />
// //               </Form.Group>
// //               <Form.Group controlId="formUserEmail">
// //                 <Form.Label>Email</Form.Label>
// //                 <Form.Control
// //                   type="email"
// //                   value={newUser.email}
// //                   onChange={(e) =>
// //                     setNewUser({ ...newUser, email: e.target.value })
// //                   }
// //                   required
// //                 />
// //               </Form.Group>
// //               <Button variant="primary" type="submit">
// //                 Add User
// //               </Button>
// //             </Form>
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button
// //               variant="secondary"
// //               onClick={() => setShowAddUserModal(false)}
// //             >
// //               Close
// //             </Button>
// //           </Modal.Footer>
// //         </Modal>

// //         {/* Report Modal */}
// //         <Modal show={showReportModal} onHide={() => setShowReportModal(false)}>
// //           <Modal.Header closeButton>
// //             <Modal.Title>Event Report</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>
// //             {selectedEvent ? (
// //               <div>
// //                 <h5>{selectedEvent.title}</h5>
// //                 <p>Date: {selectedEvent.date}</p>
// //                 <p>
// //                   Published:{" "}
// //                   {new Date(selectedEvent.publishedAt).toLocaleDateString()}
// //                 </p>
// //                 <p>Description: {selectedEvent.description}</p>
// //                 {selectedEvent.imageURL && (
// //                   <img
// //                     src={selectedEvent.imageURL}
// //                     alt={selectedEvent.title}
// //                     className="img-fluid"
// //                   />
// //                 )}
// //               </div>
// //             ) : (
// //               <p>No event selected.</p>
// //             )}
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button
// //               variant="secondary"
// //               onClick={() => setShowReportModal(false)}
// //             >
// //               Close
// //             </Button>
// //           </Modal.Footer>
// //         </Modal>

// //         {/* Settings Modal */}
// //         <Modal
// //           show={showSettingsModal}
// //           onHide={() => setShowSettingsModal(false)}
// //         >
// //           <Modal.Header closeButton>
// //             <Modal.Title>Update Settings</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>
// //             <Form>
// //               <Form.Group controlId="formTheme">
// //                 <Form.Label>Theme</Form.Label>
// //                 <Form.Control
// //                   as="select"
// //                   value={theme}
// //                   onChange={(e) => setTheme(e.target.value)}
// //                 >
// //                   <option value="light">Light</option>
// //                   <option value="dark">Dark</option>
// //                 </Form.Control>
// //               </Form.Group>
// //               <Form.Group controlId="formNotifications">
// //                 <Form.Check
// //                   type="checkbox"
// //                   label="Enable Notifications"
// //                   checked={notificationsEnabled}
// //                   onChange={(e) => setNotificationsEnabled(e.target.checked)}
// //                 />
// //               </Form.Group>
// //               <Button variant="primary" onClick={handleSettingsSave}>
// //                 Save Settings
// //               </Button>
// //             </Form>
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button
// //               variant="secondary"
// //               onClick={() => setShowSettingsModal(false)}
// //             >
// //               Close
// //             </Button>
// //           </Modal.Footer>
// //         </Modal>
// //       </Container>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Admin;




import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { CSVLink } from "react-csv";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./Admin.css";
import Footer from "./Footer";

const Admin = () => {
  // State management
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("calendarEvents");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [users, setUsers] = useState([
    { id: 2, name: "Aditya Kumar", email: "aditya@example.com" },
  ]);

  // Modal control states
  const [showEventModal, setShowEventModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  // Updated newEvent state with additional fields
  const [newEvent, setNewEvent] = useState({
    date: "",
    title: "",
    imageURL: "",
    description: "",
    time: "",
    guestName: "",
    eventLocation: "",
    organizer: "",
    guestSpeakerBio: "",
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editUser, setEditUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const [searchEvent, setSearchEvent] = useState("");
  const [searchUser, setSearchUser] = useState("");

  // Save events to localStorage whenever events state changes
  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Event Handlers
  const handleAddEvent = (e) => {
    e.preventDefault();
    // Basic validation can be expanded if needed
    if (newEvent.date && newEvent.title) {
      const publishedAt = new Date().toISOString();
      const newEventData = { ...newEvent, publishedAt };
      setEvents([...events, newEventData]);
      setShowEventModal(false);
      // Reset the form
      setNewEvent({
        date: "",
        title: "",
        imageURL: "",
        description: "",
        time: "",
        guestName: "",
        eventLocation: "",
        organizer: "",
        guestSpeakerBio: "",
      });
    }
  };

  const handleEditEvent = (eventToEdit) => {
    setNewEvent(eventToEdit);
    setShowEventModal(true);
  };

  const deleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter((event) => event !== eventToDelete);
    setEvents(updatedEvents);
  };

  const deleteUser = (userToDelete) => {
    const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
    setUsers(updatedUsers);
  };

  const handleViewReport = (event) => {
    setSelectedEvent(event);
    setShowReportModal(true);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      setUsers([
        ...users,
        { id: users.length + 1, name: newUser.name, email: newUser.email },
      ]);
      setShowAddUserModal(false);
      setNewUser({ name: "", email: "" });
    }
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    if (editUser.name && editUser.email) {
      const updatedUsers = users.map((user) =>
        user.id === editUser.id ? editUser : user
      );
      setUsers(updatedUsers);
      setShowUserModal(false);
      setEditUser(null);
    }
  };

  // Settings Handlers
  const handleSettingsSave = () => {
    console.log("Settings saved:", { theme, notificationsEnabled });
    setShowSettingsModal(false);
  };

  // Dashboard Overview Data
  const totalEvents = events.length;
  const totalUsers = users.length;
  const eventsData = {
    labels: events.map((event) => event.date),
    datasets: [
      {
        label: "Events",
        data: events.map(() => 1),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Container className={`admin-container mt-4 ${theme}`}>
        <Row>
          {/* Sidebar */}
          <Col md={3}>
            <Card className={`admin-card mb-4 ${theme}`}>
              <Card.Body>
                <Card.Title className="text-center">Dashboard</Card.Title>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => setShowDashboardModal(true)}
                >
                  Overview
                </Button>
              </Card.Body>
            </Card>
            <Card className={`admin-card mb-4 ${theme}`}>
              <Card.Body>
                <Card.Title className="text-center">Manage Events</Card.Title>
                <Button
                  variant="success"
                  className="w-100"
                  onClick={() => setShowEventModal(true)}
                >
                  Add Event
                </Button>
                {/* PDF Link */}
                <Button
                  href="/participatingData"
                  variant="danger"
                  className="w-100 mt-2"
                >
                  View Participation PDF
                </Button>
                <InputGroup className="mt-3">
                  <FormControl
                    placeholder="Search events"
                    value={searchEvent}
                    onChange={(e) => setSearchEvent(e.target.value)}
                  />
                </InputGroup>
              </Card.Body>
            </Card>
            <Card className={`admin-card mb-4 ${theme}`}>
              <Card.Body>
                <Card.Title className="text-center">Users</Card.Title>
                <Button
                  variant="info"
                  className="w-100"
                  onClick={() => setShowUserModal(true)}
                >
                  Manage Users
                </Button>
                <Button
                  variant="success"
                  className="w-100 mt-2"
                  onClick={() => setShowAddUserModal(true)}
                >
                  Add User
                </Button>
                <InputGroup className="mt-3">
                  <FormControl
                    placeholder="Search users"
                    value={searchUser}
                    onChange={(e) => setSearchUser(e.target.value)}
                  />
                </InputGroup>
              </Card.Body>
            </Card>
            <Card className={`admin-card mb-4 ${theme}`}>
              <Card.Body>
                <Card.Title className="text-center">Settings</Card.Title>
                <Button
                  variant="danger"
                  className="w-100"
                  onClick={() => setShowSettingsModal(true)}
                >
                  Update Settings
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Main Content */}
          <Col md={9}>
            <Card className={`admin-card ${theme}`}>
              <Card.Body>
                <Card.Title className="text-center">Recent Reports</Card.Title>
                <div className="report-list">
                  {events.length > 0 ? (
                    events
                      .filter((event) =>
                        event.title
                          .toLowerCase()
                          .includes(searchEvent.toLowerCase())
                      )
                      .map((event, index) => (
                        <Card className="report-card mb-2" key={index}>
                          <Card.Body>
                            <Card.Title>{event.title}</Card.Title>
                            <Card.Text>Date: {event.date}</Card.Text>
                            <Card.Text>
                              Published:{" "}
                              {new Date(event.publishedAt).toLocaleDateString()}
                            </Card.Text>
                            <Card.Text>
                              Description: {event.description}
                            </Card.Text>
                            <Button
                              variant="outline-primary"
                              onClick={() => handleViewReport(event)}
                            >
                              View Report
                            </Button>
                            <Button
                              variant="outline-warning"
                              onClick={() => handleEditEvent(event)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="outline-danger"
                              onClick={() => deleteEvent(event)}
                            >
                              Delete
                            </Button>
                          </Card.Body>
                        </Card>
                      ))
                  ) : (
                    <p>No events available.</p>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Dashboard Modal */}
        <Modal
          show={showDashboardModal}
          onHide={() => setShowDashboardModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Dashboard Overview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Total Events</Card.Title>
                      <Card.Text>{totalEvents}</Card.Text>
                      <Button
                        variant="outline-primary"
                        onClick={() => setShowEventModal(true)}
                      >
                        Manage Events
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Total Users</Card.Title>
                      <Card.Text>{totalUsers}</Card.Text>
                      <Button
                        variant="outline-primary"
                        onClick={() => setShowUserModal(true)}
                      >
                        Manage Users
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>Recent Events</Card.Title>
                      <ul>
                        {events.slice(-5).map((event, index) => (
                          <li key={index}>
                            <strong>{event.title}</strong> - {event.date}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>Recent Users</Card.Title>
                      <ul>
                        {users.slice(-5).map((user, index) => (
                          <li key={index}>
                            <strong>{user.name}</strong> - {user.email}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>Event Trends</Card.Title>
                      <Bar data={eventsData} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowDashboardModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Event Modal */}
        <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {newEvent.title ? "Edit Event" : "Add Event"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleAddEvent}>
              <Form.Group controlId="formEventDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newEvent.date}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, date: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEventTime" className="mt-2">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  value={newEvent.time}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, time: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formEventTitle" className="mt-2">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  type="text"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGuestName" className="mt-2">
                <Form.Label>Guest Name</Form.Label>
                <Form.Control
                  type="text"
                  value={newEvent.guestName}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, guestName: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formEventLocation" className="mt-2">
                <Form.Label>Event Location</Form.Label>
                <Form.Control
                  type="text"
                  value={newEvent.eventLocation}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, eventLocation: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formEventImageURL" className="mt-2">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  value={newEvent.imageURL}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, imageURL: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formEventDescription" className="mt-2">
                <Form.Label>Event Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formOrganizer" className="mt-2">
                <Form.Label>Organizer</Form.Label>
                <Form.Control
                  type="text"
                  value={newEvent.organizer}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, organizer: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formGuestSpeakerBio" className="mt-2">
                <Form.Label>Guest Speaker Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newEvent.guestSpeakerBio}
                  onChange={(e) =>
                    setNewEvent({
                      ...newEvent,
                      guestSpeakerBio: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                {newEvent.title ? "Update Event" : "Add Event"}
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowEventModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* User Modal */}
        <Modal show={showUserModal} onHide={() => setShowUserModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Manage Users</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              {users.map((user) => (
                <Card key={user.id} className="mb-2">
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>Email: {user.email}</Card.Text>
                    <Button
                      variant="outline-warning"
                      onClick={() => {
                        setEditUser(user);
                        setShowUserModal(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteUser(user)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowUserModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Add User Modal */}
        <Modal
          show={showAddUserModal}
          onHide={() => setShowAddUserModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleAddUser}>
              <Form.Group controlId="formUserName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group controlId="formUserEmail" className="mt-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Add User
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowAddUserModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Report Modal */}
        <Modal show={showReportModal} onHide={() => setShowReportModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Event Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedEvent ? (
              <div>
                <h5>Here are the selected details for the notice board event:</h5>
                <p><strong>Time:</strong> {selectedEvent.time}</p>
                <p><strong>Event Title:</strong> {selectedEvent.title}</p>
                <p><strong>Guest Name:</strong> {selectedEvent.guestName}</p>
                <p><strong>Date:</strong> {selectedEvent.date}</p>
                <p><strong>Event Location:</strong> {selectedEvent.eventLocation}</p>
                <p><strong>Event Description:</strong> {selectedEvent.description}</p>
                <p><strong>Organizer:</strong> {selectedEvent.organizer}</p>
                <p><strong>Guest Speaker Bio:</strong> {selectedEvent.guestSpeakerBio}</p>
                {selectedEvent.imageURL && (
                  <img
                    src={selectedEvent.imageURL}
                    alt={selectedEvent.title}
                    className="img-fluid"
                  />
                )}
              </div>
            ) : (
              <p>No event selected.</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowReportModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Settings Modal */}
        <Modal
          show={showSettingsModal}
          onHide={() => setShowSettingsModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTheme">
                <Form.Label>Theme</Form.Label>
                <Form.Control
                  as="select"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formNotifications" className="mt-2">
                <Form.Check
                  type="checkbox"
                  label="Enable Notifications"
                  checked={notificationsEnabled}
                  onChange={(e) => setNotificationsEnabled(e.target.checked)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleSettingsSave} className="mt-3">
                Save Settings
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowSettingsModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default Admin;
