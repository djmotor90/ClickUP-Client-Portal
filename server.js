require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const clickupRoutes = require('./routes/clickupRoutes');

app.use(express.json());
app.use('/clickup', clickupRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client-portal/build'));  // Adjust to your React build directory
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-portal', 'build', 'index.html')); // Adjust to your React build directory
  });
}

app.get('/', (req, res) => {
  res.send('Hello, welcome to the ClickUp Client Portal backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
