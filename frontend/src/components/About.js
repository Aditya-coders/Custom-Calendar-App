// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavScrollExample from './NavScrollExample';
// import './About.css'; // Import the CSS file
// import Footer from './Footer';
// import axios from 'axios';

// const About = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch events data from API
//     axios.get('https://api.example.com/events')
//       .then(response => {
//         setEvents(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching events data:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <NavScrollExample />
//       {/* Navbar Section */}

//       {/* Main Content */}
//       <div className="container-fluid my-5 px-4">
//         <div className="row">
//           <div className="col-lg-12 text-center fade-in-up">
//             <h1 className="display-4">About SVIET College Events</h1>
//             <p className="lead text-muted">Discover the exciting events at SVIET College, where academics meet innovation and creativity.</p>
//           </div>
//         </div>

//         {/* About Section */}
//         <div className="row my-5 fade-in-up">
//           <div className="col-md-6">
//             <img src="https://sviet.org.in/wp-content/uploads/2023/04/DSC_7038-1536x1025.jpg" alt="SVIET Events" className="img-fluid rounded" />
//           </div>
//           <div className="col-md-6">
//             <h2 className="text-primary text-center">Our Mission</h2>
//             <p>
//               At SVIET College, we believe in fostering an environment that goes beyond traditional academics. Our mission is to provide a platform where students can engage in co-curricular activities that complement their educational experience. Events at SVIET are designed to inspire innovation, promote cultural diversity, and provide leadership opportunities for students.
//             </p>
//             <p>
//               Through a range of exciting events—technical fests, cultural celebrations, sports tournaments, and academic symposiums—we ensure that every student finds a place to showcase their unique talents and passions. Whether it's the annual tech fest where budding engineers present groundbreaking ideas, or the cultural night celebrating the myriad traditions of our diverse student body, SVIET events are designed to shape future leaders and innovators.
//             </p>
//           </div>
//         </div>

//         {/* Events Description */}
//         <div className="row my-5 fade-in-up">
//           <div className="col-md-12">
//             {loading ? (
//               <p>Loading events...</p>
//             ) : (
//               events.map((event, index) => (
//                 <div key={index} className="event-item">
//                   <h4>{event.title}</h4>
//                   <p>{event.description}</p>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Impact Section */}
//         <div className="row my-5 fade-in-up">
//           <div className="col-md-6">
//             <h2 className="text-primary text-center">Impact of SVIET Events</h2>
//             <p>
//               The events at SVIET have a profound impact on the personal and professional development of students. They provide opportunities for students to hone their skills in leadership, project management, public speaking, and teamwork. The experiences gained through participation in these events are invaluable in shaping well-rounded individuals who are ready to tackle the challenges of the future.
//             </p>
//             <p>
//               Moreover, these events create lasting memories and foster a sense of community and belonging. Students not only grow individually but also contribute to the collective success of the college by working together in diverse teams. The connections formed during these events often last a lifetime, making SVIET a truly unique place to grow, learn, and connect.
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img src="https://i.ytimg.com/vi/5cQeDgqW6FI/maxresdefault.jpg" className="img-fluid rounded img-impact" />
//           </div>
//         </div>

//         {/* Conclusion */}
//         <div className="row my-5 fade-in-up">
//           <div className="col-md-12 text-center">
//             <h2 className="text-primary">Join Us at SVIET Events</h2>
//             <p>
//               Whether you're interested in technology, culture, sports, or academics, SVIET events have something for everyone. We invite you to be a part of our vibrant event calendar and make the most of your college experience. By participating in these events, you will not only enhance your skills but also create memories that will last a lifetime. Come, be a part of the SVIET community, and let your journey of growth and discovery begin!
//             </p>
//             <button className="btn btn-primary" onClick={() => alert('Thanks for showing interest!')}>Get Involved</button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default About;















// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavScrollExample from './NavScrollExample';
// import './About.css'; // Import the CSS file
// import Footer from './Footer';
// import axios from 'axios';
// import { Modal, Button, Form } from 'react-bootstrap';

// const About = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     interest: ''
//   });
//   const [formStatus, setFormStatus] = useState({ message: '', error: false });

//   useEffect(() => {
//     // Fetch events data from API
//     axios.get('https://api.example.com/events')
//       .then(response => {
//         setEvents(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching events data:', error);
//         setLoading(false);
//       });
//   }, []);

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   // Handle form input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormStatus({ message: 'Submitting...', error: false });
  
//     // Post form data to the backend API
//     axios.post('http://localhost:5000/api/participate', formData)  // Use the local server URL
//       .then(response => {
//         setFormStatus({ message: 'Thank you for your interest! We will get back to you soon.', error: false });
//         setFormData({ name: '', email: '', interest: '' });  // Clear the form after successful submission
//       })
//       .catch(error => {
//         setFormStatus({ message: 'Error submitting your interest. Please try again later.', error: true });
//         console.error('Form submission error:', error);
//       });
//   };
  

//   return (
//     <div>
//       <NavScrollExample />
//       {/* Navbar Section */}

//       {/* Main Content */}
//       <div className="container-fluid my-5 px-4">
//         <div className="row">
//           <div className="col-lg-12 text-center fade-in-up">
//             <h1 className="display-4">About SVIET College Events</h1>
//             <p className="lead text-muted">Discover the exciting events at SVIET College, where academics meet innovation and creativity.</p>
//           </div>
//         </div>

//         {/* About Section */}
//         <div className="row my-5 fade-in-up">
//           <div className="col-md-6">
//             <img src="https://sviet.org.in/wp-content/uploads/2023/04/DSC_7038-1536x1025.jpg" alt="SVIET Events" className="img-fluid rounded" />
//           </div>
//           <div className="col-md-6">
//             <h2 className="text-primary text-center">Our Mission</h2>
//             <p>
//               At SVIET College, we believe in fostering an environment that goes beyond traditional academics. Our mission is to provide a platform where students can engage in co-curricular activities that complement their educational experience.
//             </p>
//             <p>
//               Through a range of exciting events—technical fests, cultural celebrations, sports tournaments, and academic symposiums—we ensure that every student finds a place to showcase their unique talents and passions.
//             </p>
//           </div>
//         </div>

//         {/* Events Description */}
//         <div className="row my-5 fade-in-up">
//           <div className="col-md-12">
//             {loading ? (
//               <p>Loading events...</p>
//             ) : (
//               events.map((event, index) => (
//                 <div key={index} className="event-item">
//                   <h4>{event.title}</h4>
//                   <p>{event.description}</p>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Impact Section */}
//         <div className="row my-5 fade-in-up">
//           <div className="col-md-6">
//             <h2 className="text-primary text-center">Impact of SVIET Events</h2>
//             <p>
//               The events at SVIET have a profound impact on the personal and professional development of students.
//             </p>
//             <p>
//               Moreover, these events create lasting memories and foster a sense of community and belonging.
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img src="https://i.ytimg.com/vi/5cQeDgqW6FI/maxresdefault.jpg" className="img-fluid rounded img-impact" />
//           </div>
//         </div>

//         {/* Conclusion */}
//         <div className="row my-5 fade-in-up">
//           <div className="col-md-12 text-center">
//             <h2 className="text-primary">Join Us at SVIET Events</h2>
//             <p>
//               Whether you're interested in technology, culture, sports, or academics, SVIET events have something for everyone. We invite you to be a part of our vibrant event calendar and make the most of your college experience.
//             </p>
//             <Button className="btn btn-primary" onClick={handleShow}>Get Involved</Button>
//           </div>
//         </div>

//         {/* Get Involved Modal */}
//         <Modal show={showModal} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Get Involved</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="formEmail" className="mt-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="formInterest" className="mt-3">
//                 <Form.Label>Your Interest</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   name="interest"
//                   value={formData.interest}
//                   onChange={handleChange}
//                   placeholder="Tell us why you're interested in SVIET events"
//                   required
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit" className="mt-4">
//                 Submit
//               </Button>
//             </Form>
//             {formStatus.message && (
//               <p className={formStatus.error ? 'text-danger mt-3' : 'text-success mt-3'}>{formStatus.message}</p>
//             )}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default About;











import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './NavScrollExample';
import './About.css'; // Import the CSS file
import Footer from './Footer';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const About = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: ''
  });
  const [formStatus, setFormStatus] = useState({ message: '', error: false });

  useEffect(() => {
    // Fetch events data from API
    axios.get('https://api.example.com/events')
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
        setLoading(false);
      });
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ message: 'Submitting...', error: false });

    axios.post('http://localhost:5000/api/participate', formData)
      .then(response => {
        setFormStatus({ message: 'Thank you for your interest! We will get back to you soon.', error: false });
        setFormData({ name: '', email: '', interest: '' });
      })
      .catch(error => {
        setFormStatus({ message: 'Error submitting your interest. Please try again later.', error: true });
        console.error('Form submission error:', error);
      });
  };

  return (
    <div>
      <NavScrollExample />
      <div className="container-fluid my-5 px-4">
        <div className="row">
          <div className="col-lg-12 text-center fade-in-up">
            <h1 className="display-4">About SVIET College Events</h1>
            <p className="lead text-muted">Discover a world of opportunities with our diverse and engaging events at SVIET College.</p>
          </div>
        </div>

        <div className="row my-5 fade-in-up">
          <div className="col-md-6">
            <img src="https://sviet.org.in/wp-content/uploads/2023/04/DSC_7038-1536x1025.jpg" alt="SVIET Events" className="img-fluid rounded shadow-lg" />
          </div>
          <div className="col-md-6">
            <h2 className="text-primary text-center">Our Mission</h2>
            <p className="text-justify">
              At SVIET College, we strive to provide a platform where students can explore their potential, expand their horizons, and enhance their overall academic journey. We emphasize a balanced mix of technical skills and creative expression.
            </p>
            <p className="text-justify">
              Our events, ranging from cutting-edge tech fests to cultural showcases and sports tournaments, aim to foster holistic growth in students. We’re committed to building an inclusive environment where everyone can discover new passions and grow together.
            </p>
            <p className="text-justify">
              Through collaboration, innovation, and creativity, our events encourage students to step out of their comfort zones and embrace new challenges, ensuring they leave SVIET not just with knowledge, but with experiences that will shape their future.
            </p>
          </div>
        </div>

        {/* Event Details */}
        <div className="row my-5 fade-in-up">
          <div className="col-md-12">
            {loading ? (
              <p className="text-center">Loading events...</p>
            ) : (
              events.map((event, index) => (
                <div key={index} className="event-item mb-4 border p-3 rounded shadow-sm">
                  <h4 className="font-weight-bold">{event.title}</h4>
                  <p>{event.description}</p>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="row my-5 fade-in-up">
          <div className="col-md-6">
            <h2 className="text-primary text-center">The Impact of SVIET Events</h2>
            <p className="text-justify">
              The various events held at SVIET create lasting impacts on students, offering them real-world experience, teamwork, and leadership opportunities. Whether you're organizing or participating, the skills learned at these events are invaluable.
            </p>
            <p className="text-justify">
              Our events bring together people from diverse backgrounds, promoting collaboration and innovation, while also offering a chance to unwind and enjoy the college experience to the fullest. Each event is designed to foster a spirit of community and connection, enhancing the overall college experience.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://i.ytimg.com/vi/5cQeDgqW6FI/maxresdefault.jpg" className="img-fluid rounded shadow-lg" alt="SVIET Impact" />
          </div>
        </div>

        <div className="row my-5 fade-in-up">
          <div className="col-md-12 text-center">
            <h2 className="text-primary">Join Us at SVIET Events</h2>
            <p className="text-justify">
              Whether you’re passionate about tech, arts, sports, or academics, there’s always something for you at SVIET events. We invite you to be part of this incredible journey, where learning meets fun. Joining us not only enhances your skills but also helps you build a network of friends and professionals who share your interests.
            </p>
            <Button className="btn btn-primary" onClick={handleShow}>Get Involved</Button>
          </div>
        </div>

        {/* Get Involved Modal */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Get Involved</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formInterest" className="mt-3">
                <Form.Label>Your Interest</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  placeholder="Tell us why you're interested in SVIET events"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-4">Submit</Button>
            </Form>
            {formStatus.message && (
              <p className={formStatus.error ? 'text-danger mt-3' : 'text-success mt-3'}>{formStatus.message}</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

      <Footer />
    </div>
  );
};

export default About;



