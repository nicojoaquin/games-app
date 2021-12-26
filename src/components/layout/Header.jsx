import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../auth/Logout";

const Header = () => {
  const { uid } = useSelector((state) => state.auth);
  const { loader } = useSelector((state) => state.ui);
  const { wishListLoader } = useSelector((state) => state.wishList);

  return (
    !loader &&
    !wishListLoader && (
      <nav id="up" className="navbar navbar-dark container">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Free Games App
          </Link>
          <div className="d-flex wish-logout">
            <Link
              to="/wishlist"
              className="text-light text-decoration-none wishlist"
            >
              Wishlist
            </Link>
            {!uid ? (
              <Link
                to="/auth"
                className="text-light text-decoration-none user-sign"
              >
                Sign in
              </Link>
            ) : (
              <Logout />
            )}
          </div>
        </div>
      </nav>
    )
  );
};

export default Header;
