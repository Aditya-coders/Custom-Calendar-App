//   phone: String,
//   event: String,
//   course: String,
//   branch: String,
//   activity: String,
//   interest: String, // Optional: If used in your frontend
// });

// const Participation = mongoose.model('Participation', participationSchema);

// // Route to handle form submission
// app.post('/api/participate', async (req, res) => {
//   try {
//     const { name, email, phone, event, course, branch, activity, interest } = req.body;

//     // Create a new document in the MongoDB collection
//     const newParticipation = new Participation({
//       name,
//       email,
//       phone,
//       event,
//       course,
//       branch,
//       activity,
//       interest // Optional: If included in your schema
//     });

//     // Save to MongoDB
//     await newParticipation.save();

//     res.status(200).json({ message: 'Participation successfully recorded' });
//   } catch (error) {
//     console.error('Error saving participation:', error);
//     res.status(500).json({ message: 'Error recording participation' });
//   }
// });

// // Route to fetch all participation data
// app.get('/api/participations', async (req, res) => {
//   try {
//     const participations = await Participation.find(); // Fetch all documents
//     res.status(200).json(participations);
//   } catch (error) {
//     console.error('Error fetching participation data:', error);
//     res.status(500).json({ message: 'Error fetching participation data' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Calendar-App', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schema for event participation
const participationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  event: String,
  course: String,
  branch: String,
  activity: String,
});

const Participation = mongoose.model('Participation', participationSchema);

// Function to generate a PDF ticket using pdfkit
const generateTicketPDF = (participant, callback) => {
  // Create a directory for tickets if it doesn't exist
  const ticketsDir = path.join(__dirname, 'tickets');
  fs.mkdirSync(ticketsDir, { recursive: true });

  const fileName = `ticket_${participant._id}.pdf`;
  const ticketPath = path.join(ticketsDir, fileName);
  
  const doc = new PDFDocument();

  // Pipe the PDF into a writable stream
  const stream = fs.createWriteStream(ticketPath);
  doc.pipe(stream);

  // Add ticket title and details
  doc.fontSize(20).text('Event Participation Ticket', { align: 'center' });
  doc.moveDown();

  doc.fontSize(14)
    .text(`Name: ${participant.name}`)
    .moveDown(0.5)
    .text(`Email: ${participant.email}`)
    .moveDown(0.5)
    .text(`Phone: ${participant.phone}`)
    .moveDown(0.5)
    .text(`Event: ${participant.event}`)
    .moveDown(0.5)
    .text(`Course: ${participant.course}`)
    .moveDown(0.5)
    .text(`Branch: ${participant.branch}`)
    .moveDown(0.5)
    .text(`Activity: ${participant.activity}`);
  
  doc.moveDown(2);
  doc.text('Thank you for participating!', { align: 'center' });

  doc.end();

  // When the PDF is fully written, invoke the callback
  stream.on('finish', () => {
    callback(ticketPath);
  });
};

// Route to handle participation submissions
app.post('/api/participate', async (req, res) => {
  try {
    const { name, email, phone, event, course, branch, activity } = req.body;

    const newParticipation = new Participation({
      name,
      email,
      phone,
      event,
      course,
      branch,
      activity,
    });

    await newParticipation.save();

    // Generate the ticket PDF and then send back its URL
    generateTicketPDF(newParticipation, (ticketPath) => {
      // Construct the URL for the ticket
      const ticketUrl = `http://localhost:${port}/tickets/${path.basename(ticketPath)}`;
      res.status(200).json({
        message: 'Participation successfully recorded',
        ticketUrl: ticketUrl,
      });
    });
  } catch (error) {