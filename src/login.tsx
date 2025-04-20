import { useState } from 'react';

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'hackdavis' && password === '2005') {
      setError('');
      onLogin(); // notify parent
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded w-80 space-y-4">
        <h2 className="text-xl font-semibold text-center">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          className="w-full px-3 py-2 border rounded"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          className="w-full px-3 py-2 border rounded"
        />
        <button type="submit" className="bg-red-700 text-white px-4 py-2 w-full rounded hover:bg-red-800">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
