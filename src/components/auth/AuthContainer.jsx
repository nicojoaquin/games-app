import Login from "./Login";
import Register from "./Register";
import { Fade } from "react-awesome-reveal";

const AuthContainer = () => {
  return (
    <Fade>
      <main className="auth-container" style={{ minHeight: "100vh" }}>
        <Login />
        <Register />
      </main>
    </Fade>
  );
};

export default AuthContainer;
