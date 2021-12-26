import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import { Fade } from "react-awesome-reveal";
import { setGamesList } from "../../redux/reducers/gamesReducer";

const AuthContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGamesList([]));
  }, [dispatch]);

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
