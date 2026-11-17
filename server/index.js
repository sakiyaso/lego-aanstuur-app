import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Controleert of de server en de database werken
app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ ok: true, time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Hier komen je eigen routes, bijvoorbeeld:
// app.get('/api/iets', async (req, res) => { ... });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server draait op poort', PORT));
