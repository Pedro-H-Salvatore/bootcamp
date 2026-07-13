import "../../global.css";
import "./header.css";

const Header = () => {
  return (
    <div className="header-content">
      <header>
        <h1>CineExplorer</h1>

        <nav className="header-nav">
          <ul>
            <li>Home</li>
            <li>Filmes</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;