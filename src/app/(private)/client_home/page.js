"use client";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function ClientHome() {
  const [user, setUser] = useState(null);
  const getData = async () => {
    try {
      const response = await axios.get("/api/users/currentuser");
      setUser(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>home page with client side component</h1>
      {user && (
        <div>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default ClientHome;
