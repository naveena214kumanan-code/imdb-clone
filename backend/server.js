const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE movies (id INTEGER PRIMARY KEY, name TEXT, year INTEGER)");
  db.run("INSERT INTO movies (name, year) VALUES ('Inception', 2010)");
});

app.get('/movies', (req, res) => {
  db.all("SELECT * FROM movies", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`✅ Backend running at http://localhost:${port}`);
});
