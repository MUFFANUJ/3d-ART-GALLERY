import React, { useState } from 'react';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth';
import { useAuth } from '../authContext';
import './loginsignup.css';

export function SignUpComponent({ onSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();  // Assuming setUser updates the user state in your context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await doSignInWithEmailAndPassword(email, password);
      setUser(user); // Update user state in context
      onSignUp(email, password); // Additional sign-up logic if necessary
    } catch (error) {
      console.error("Error signing up with email and password:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await doSignInWithGoogle();
      setUser(user); // Update user state in context
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="button white">Sign Up</button>
        <button type="button" onClick={handleGoogleSignIn} className="button white">Sign Up with Google</button>
      </form>
    </div>
  );
}

