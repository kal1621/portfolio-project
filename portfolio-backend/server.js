
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


app.use(cors());
app.use(express.json());

console.log('🔌 Connecting to MongoDB...');

mongoose.connect('mongodb://127.0.0.1:27017/portfolio')
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
    console.log('📊 Database: portfolio');
    console.log('🔗 Port: 27017');
  })
  .catch(err => {
    console.log('❌ MongoDB Connection Failed:', err.message);
    console.log('💡 Trying localhost instead...');
    
    
    mongoose.connect('mongodb://localhost:27017/portfolio')
      .then(() => console.log('✅ Connected via localhost!'))
      .catch(err2 => {
        console.log('❌ Both connections failed');
        console.log('Error:', err2.message);
        console.log('\n🔧 TROUBLESHOOTING:');
        console.log('1. Make sure MongoDB service is running');
        console.log('2. Check: netstat -ano | findstr :27017');
        console.log('3. Try: mongodb://0.0.0.0:27017/portfolio');
      });
  });


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);


app.get('/api', (req, res) => {
  res.json({
    message: 'Portfolio Backend API',
    status: 'Online',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    endpoints: {
      test: 'GET /api/test',
      contact: 'POST /api/contact',
      contacts: 'GET /api/contacts'
    }
  });
});

app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working!',
    database: mongoose.connection.readyState === 1 ? '✅ Connected' : '❌ Disconnected',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    console.log('📨 Contact form submission:', { name, email });
    
    
    const contact = new Contact({ name, email, message });
    await contact.save();
    
    console.log('💾 Saved to database. ID:', contact._id);
    
    res.json({
      success: true,
      message: 'Message saved successfully!',
      data: {
        id: contact._id,
        name,
        email,
        timestamp: contact.date
      }
    });
    
  } catch (error) {
    console.error('❌ Save error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json({
      success: true,
      count: contacts.length,
      contacts
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const PORT = 5001;
app.listen(PORT, () => {
  console.log(`\n🚀 Server started on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`💾 Database status: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Not connected'}`);
});