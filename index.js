
/////////////////////////////////////////////////////



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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
  interest: String, // Optional: If used in your frontend
});

const Participation = mongoose.model('Participation', participationSchema);

// Route to handle form submission
app.post('/api/participate', async (req, res) => {
  try {
    const { name, email, phone, event, course, branch, activity, interest } = req.body;

    // Create a new document in the MongoDB collection
    const newParticipation = new Participation({
      name,
      email,
      phone,
      event,
      course,
      branch,
      activity,
      interest // Optional: If included in your schema
    });

    // Save to MongoDB
    await newParticipation.save();

    res.status(200).json({ message: 'Participation successfully recorded' });
  } catch (error) {
    console.error('Error saving participation:', error);
    res.status(500).json({ message: 'Error recording participation' });
  }
});

// Route to fetch all participation data
app.get('/api/participations', async (req, res) => {
  try {
    const participations = await Participation.find(); // Fetch all documents
    res.status(200).json(participations);
  } catch (error) {
    console.error('Error fetching participation data:', error);
    res.status(500).json({ message: 'Error fetching participation data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
