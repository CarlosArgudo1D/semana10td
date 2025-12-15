const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'db',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'example',
  database: process.env.POSTGRES_DB || 'hensdb',
  port: process.env.POSTGRES_PORT || 5432
});

app.get('/api/hens', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM hens ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error('DB error:', err.message);
    res.status(500).json({ error: 'db error' });
  }
});

app.get('/api/hens/:id', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM hens WHERE id = $1', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('DB error:', err.message);
    res.status(500).json({ error: 'db error' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend listening on ${port}`));
