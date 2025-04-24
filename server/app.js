// app.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
