import About from "../About/About";
import "./Main.css";

const Main = ({searchError}) => {
  return (
    <main className="main">
      <About />
      <div className="search__results">
        {searchError && (
          <p className="search__error">Error fetching search results</p>
        )}
      </div>
    </main>
  );
};

export default Main;
