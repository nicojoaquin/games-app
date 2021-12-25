import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../auth/Logout";

const Header = () => {
  const { uid } = useSelector((state) => state.auth);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Free Games App
        </Link>
        <div className="d-flex wish-logout">
          <Link to="/wishlist" className="text-light text-decoration-none">
            Wishlist
          </Link>
          {!uid ? (
            <Link to="/auth" className="text-light text-decoration-none">
              Sign in
            </Link>
          ) : (
            <Logout />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
