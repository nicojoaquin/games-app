import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Games App
        </Link>
        <div className="d-flex wish-logout">
          <Link to="/wishlist" className="text-light text-decoration-none">
            Wishlist
          </Link>
          <Link to="/login" className="text-light text-decoration-none">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
