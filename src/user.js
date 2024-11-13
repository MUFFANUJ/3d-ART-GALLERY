import React, { useEffect, useState } from 'react';
import ENDPOINT from './helpers/constants';

export default function User() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await fetch(`${ENDPOINT}/api/voter/auth/allUser`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        const res = await response.json();
        setAllUsers(res);
        console.log("This is my user list", res);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {allUsers.length > 0 ? (
        allUsers.map((ele, index) => (
          <div key={index}>{ele.name}</div> 
        ))
      ) : (
        <p>No users found</p> 
      )}
    </div>
  );
}
