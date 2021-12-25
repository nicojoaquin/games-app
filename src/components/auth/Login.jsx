import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startLogin } from "../../redux/actions/auth/startLogin";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uid, checkingLogin } = useSelector((state) => state.auth);

  const [formLoginValues, handleLoginInput] = useForm({
    logEmail: "",
    logPass: "",
  });

  const { logEmail, logPass } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(logEmail, logPass, "auth/login"));
    !!uid && navigate(-1);
  };

  return (
    <form className="bg-light rounded-3 p-5 authForm" onSubmit={handleLogin}>
      <h2 className="text-secondary fs-4 text-center">Sign in</h2>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder=" Email address"
          name="logEmail"
          value={logEmail}
          onChange={handleLoginInput}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="logPass"
          value={logPass}
          onChange={handleLoginInput}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        {checkingLogin ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default Login;
