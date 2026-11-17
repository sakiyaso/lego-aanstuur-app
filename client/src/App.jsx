import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [status, setStatus] = useState('laden...');

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((d) => setStatus(d.ok ? 'Database verbonden ✅' : 'Fout: ' + d.error))
      .catch(() => setStatus('Backend niet bereikbaar'));
  }, []);

  return (
    <div className="app">
      <h1>Lego aanstuur-app</h1>
      <p>{status}</p>
    </div>
  );
}
