// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { googleSignIn } from './component/page/landing/firebase';
// // import SignUp from './component/page/landing/auth/Signup';
// // import { useNavigate } from 'react-router-dom';
// import { useAuth } from './component/page/landing/auth/Authcontext';
// import { getAuth } from 'firebase/auth';

// function LoginModal() {
//   // const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showSignUp, setShowSignUp] = useState(false);

//   const { login } = useAuth();
//   const auth = getAuth();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       login();
//       // navigate(email === process.env.REACT_APP_ADMIN_EMAIL && password === process.env.REACT_APP_ADMIN_PASSWORD ? '/admin' : '/snacks');
//     } catch (error) {
//       console.error("Login Error: ", error.message);
//       alert('Failed to login. Check credentials and try again.');
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await googleSignIn();
//       login();
//       // navigate('/snacks'); 
//     } catch (error) {
//       console.error("Google Sign-In Error: ", error.message);
//       alert('Failed to sign in with Google. Try again later.');
//     }
//   };

//   // const handleSignUpClick = () => setShowSignUp(true);

//   // const handleSignUpClose = () => setShowSignUp(false);
//   return (
//     <>
//       <div className={`landing-page ${showSignUp ? 'blur' : ''}`}>
//         {/* Your landing page content */}
//       </div>
   
//         <div className="login-container">
//           <span className="close-popup">&times;</span>
//           <h2>Login</h2>
//           <form onSubmit={handleLogin}>
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             <button type="submit">Login</button>
//             <button type="button" onClick={handleGoogleSignIn}>Continue with Google</button>
//             <button type="button" >Sign Up</button>
//           </form>
//         </div>

//     {/* {showSignUp && <SignUp closeSignUpPopup={handleSignUpClose} />}  */}
//     </>
//   )
// }

// export default LoginModal
