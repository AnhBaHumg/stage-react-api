import "./Navigation.css";

const Navigation = ({ onSignIn }) => {
  return (
    <nav className="nav">
      <div className="nav__title">NewsExplorer</div>
      <div className="nav__user-container">
        <button className="nav__button-home">Home</button>
        <button className="nav__button-signin" type="text" onClick={onSignIn}>
          Sign in{" "}
        </button>
        <div className="Home__button-border-bottom"></div>
      </div>
    </nav>
  );
};

export default Navigation;
