import headerLogo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={headerLogo} alt="TripleTen logo" className="header__logo" />
      <h1 className="header__title">Olá, Vite!</h1>
    </div>
  );
}

export default Header;
