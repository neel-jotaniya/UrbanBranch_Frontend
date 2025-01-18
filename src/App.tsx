import React, { useState } from 'react';
import { Lock, Users } from 'lucide-react';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (password: string) => {
    // Hardcoded password for demo
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return <AdminDashboard />;
}

export default App;