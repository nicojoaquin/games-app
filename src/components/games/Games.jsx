import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import ButtonsLoader from "../assets/loaders/ButtonsLoader";

const Games = ({
  children,
  wishGame,
  id,
  title,
  thumbnail,
  played,
  btnClass,
  handleSub,
  wishDeleteLoader,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/game/${id}q=${title.toLowerCase()}`);

  return (
    <div className="col-lg-3 col-md-4 mb-4">
      <Fade>
        <div className="card bg-dark text-light rounded-3 shadow">
          <img src={thumbnail} alt={title} />
          <div className={`d-flex ${btnClass} p-3 card-content`}>
            <div className={`d-flex ${btnClass}`}>
              <button
                className="btn btn-primary"
                onClick={() => handleNavigate()}
              >
                Details
              </button>
              {children}
            </div>
          </div>
          {played && (
            <div className="d-flex justify-content-center align-items-center new-card">
              <div className="d-flex flex-column">
                <h2>Played</h2>
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => handleSub(wishGame)}
                >
                  {wishDeleteLoader ? <ButtonsLoader /> : "Delete"}
                </button>
              </div>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Games;
