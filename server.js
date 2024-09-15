const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;

app.use(express.static('public'));

// SQLite database setup
let db = new sqlite3.Database('../employer-app/employees.db');

// Route to get all employee data for admin
app.get('/admin-data', (req, res) => {
    db.all(`SELECT * FROM employee`, [], (err, rows) => {
        if (err) {
            res.status(500).send("Error retrieving data");
        } else {
            res.json(rows);
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Admin app running at http://localhost:${port}`);
});
