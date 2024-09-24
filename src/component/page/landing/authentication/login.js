// import React, { useState } from 'react';
// import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth';
// import { useAuth } from '../authContext';
// import './loginsignup.css';

// export function LoginComponent({ onLogin }) {
//   const { userLoggedIn } = useAuth(); 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSigningIn, setIsSigningIn] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => { // Added async here
//     e.preventDefault();
//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       try {
//         await doSignInWithEmailAndPassword(email, password);
//         onLogin(email, password);
//       } catch (error) {
//         setErrorMessage(error.message);
//       }
//       setIsSigningIn(false);
//     }
//   };

//   const handleGoogleSignIn = async (e) => { // Added async for consistency
//     e.preventDefault();
//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       try {
//         await doSignInWithGoogle();
//       } catch (error) {
//         setErrorMessage(error.message);
//       }
//       setIsSigningIn(false);
//     }
//   };

//   return (
//     <div>
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Email</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           </div>
//           <button type="submit" className="button black">Login</button>
//           <button onClick={handleGoogleSignIn} className="button black">Sign in with Google</button>
//           {errorMessage && <div className="error-message">{errorMessage}</div>}
//         </form>
//       </div>
//     </div>
//   );
// }
