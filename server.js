const { Pool } = require('pg');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));

// Database connection using PostgreSQL
const pool = new Pool({
  user: 'your-username',
  host: 'your-database-host',
  database: 'your-database-name',
  password: 'your-password',
  port: 5432, // or your PostgreSQL port
});

// Route to fetch all employee data
app.get('/admin-data', (req, res) => {
  pool.query('SELECT * FROM employee', (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving data');
    } else {
      res.json(result.rows);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Admin app running on http://localhost:${port}`);
});
