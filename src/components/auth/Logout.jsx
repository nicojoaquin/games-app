import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../redux/actions/auth/startLogout";
import { setOpen } from "../../redux/reducers/uiReducer";

const Logout = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);
  const { open } = useSelector((state) => state.ui);

  const btnOpen = () => {
    dispatch(setOpen(!open));
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <div className="text-light d-flex flex-column overflow-hidden pointer user-name">
        <span role="button" onClick={btnOpen}>
          {name}
        </span>
        <div
          className="bg-dark p-1 logOut"
          style={{ display: open && "block" }}
        >
          <button onClick={handleLogout} className=" btn text-light">
            Sign out
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
