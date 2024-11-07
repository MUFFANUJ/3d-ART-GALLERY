
import ENDPOINT from "../helpers/constants";

export const userLogin = async (userCredentials) => {
  try {
    const response = await fetch(`${ENDPOINT}/api/voter/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userCredentials), 
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }
    const data = await response.json();
    return data;  
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const userSignup = async (userCredentials) => {
  try {
    const response = await fetch(`${ENDPOINT}/api/voter/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userCredentials),
    });
    if (!response.ok) {
      throw new Error("Signup failed");
    }
    const data = await response.json();
    return data;  
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};
