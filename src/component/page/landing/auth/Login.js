import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '.Login.css';
import { auth, googleSignIn } from './firebase';
import SignUp from './signup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Authcontext';

export default function Login({ closeLoginPopup }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSignUp, setShowSignUp] = useState(false);
    const [blur, setBlur] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            if (email === process.env.REACT_APP_ADMIN_EMAIL && password === process.env.REACT_APP_ADMIN_PASSWORD) {
                alert('Admin login successful!');
                navigate('/admin');
            } else {
                alert('Login successful!');
                navigate('/snacks');
            }
            login();
            closeLoginPopup();
            setBlur(false);
        } catch (error) {
            console.error("Login Error: ", error.message);
            alert('Failed to login. Check credentials and try again.');
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            alert('Google Sign-In successful!');
            login();
            closeLoginPopup();
            navigate('/snacks');
        } catch (error) {
            console.error("Google Sign-In Error: ", error.message);
            alert('Failed to sign in with Google. Try again later.');
        }
    };

    const handleSignUpClick = () => {
        setShowSignUp(true);
        setBlur(true);
    };

    const handleSignUpClose = () => {
        setShowSignUp(false);
        setBlur(false);
    };

    return (
        <>
            <div className={`landing-page ${blur ? 'blur' : ''}`}>
                {/* Your landing page content */}
            </div>
            {!showSignUp && (
                <div className="login-container">
                    <span className="close-popup" onClick={closeLoginPopup}>&times;</span>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                        <button type="button" className="google-signin-btn" onClick={handleGoogleSignIn}>
                            Continue with Google
                        </button>
                        <button type="button" className="signup-btn" onClick={handleSignUpClick}>
                            Sign Up
                        </button>
                    </form>
                </div>
            )}
            {showSignUp && (
                <SignUp closeSignUpPopup={handleSignUpClose} />
            )}
        </>
    );
}
