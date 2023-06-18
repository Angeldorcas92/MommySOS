import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const Getstarted = () => {
  const [showRegister, setShowRegister] = useState(true);

  const handleFormToggle = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div>
      {showRegister ? <Register /> : <Login />}
      <button onClick={handleFormToggle}>
        {showRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
    </div>
  );
};

export default Getstarted;




