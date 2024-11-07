import React, { useState } from "react";
import "./Signup.css";  
import ENDPOINT from "../../../helpers/constants";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${ENDPOINT}/api/voter/auth/signup`);
    try {
      const response = await fetch(`${ENDPOINT}/api/voter/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });

      if (response.ok) {
       navigate("/login") // Successfully signed up
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="card">
      <h2 className="heading">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) =>
              setSignUpData({
                ...signUpData,
                name: e.target.value,
              })
            }
            type="text"
            id="name"
            value={signUpData.name}
            className="input"
          />
        </div>
        <div className="inputField">
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) =>
              setSignUpData({
                ...signUpData,
                email: e.target.value,
              })
            }
            type="email"
            id="email"
            value={signUpData.email}
            className="input"
          />
        </div>
        <div className="inputField">
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e) =>
              setSignUpData({
                ...signUpData,
                password: e.target.value,
              })
            }
            type="password"
            id="password"
            value={signUpData.password}
            className="input"
          />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <div className="btndiv">
          <button type="submit" className="button" >
            Signup
          </button>
        </div>

        <div className="signInNote">
          Already have an Account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="anchor"
          >
            SignIn here
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
