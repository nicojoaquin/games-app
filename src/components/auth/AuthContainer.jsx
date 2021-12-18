import React from "react";
import Login from "./Login";
import Register from "./Register";

const AuthContainer = () => {
  return (
    <main className="auth-container" style={{ minHeight: "100vh" }}>
      <Login />
      <Register />
    </main>
  );
};

export default AuthContainer;
