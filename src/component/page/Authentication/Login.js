import React, { useState } from "react";
import "./Login.css"; 
import ENDPOINT from "../../../helpers/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${ENDPOINT}/api/voter/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      });
  
      if (response.ok) {
        const data = await response.json();
        const { accessToken, user } = data; 
        console.log("this is user data -> ",data);
  
        localStorage.setItem("token", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
  
        navigate("/");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to log in.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className="card">
      <h2 className="heading">SignIn</h2>
      <form onSubmit={handleSignIn}>
        <div className="inputField">
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) =>
              setSignInData({
                ...signInData,
                email: e.target.value,
              })
            }
            type="email"
            id="email"
            value={signInData.email}
            className="input"
          />
        </div>
        <div className="inputField">
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e) =>
              setSignInData({
                ...signInData,
                password: e.target.value,
              })
            }
            type="password"
            id="password"
            value={signInData.password}
            className="input"
          />
        </div>

        {errorMessage && <div className="error">{errorMessage}</div>}

        <div className="btndiv">
          <button type="submit" className="button">
            SignIn
          </button>
        </div>

        <div className="signInNote">
          New User?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="anchor"
            type="button"  // Ensure it's not treated as a form submit button
          >
            SignUp here
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
