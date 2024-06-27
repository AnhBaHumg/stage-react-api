import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Copyright">© {new Date().getFullYear()} Supersite, Powered by News API</p>
      <div className="Footer-buttons">
        <button className="Footer-home__button" type="button">
          Home
        </button>
        <a href="https://tripleten.com/" target="_blank">
          <button className="Footer-TripleTen__button" type="button">
            TripleTen
          </button>
        </a>
        <a href="https://github.com/AnhBaHumg" target="_blank">
          <button className="Github__button" type="button"></button>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <button className="Facebook__button" type="button"></button>
        </a>
      </div>
      </footer>
  );
};

export default Footer;
