import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      <h1 className="header__title">Bell Impact</h1>
      <nav className="header__nav">
        <NavLink>Explore</NavLink>
        <NavLink>Choose</NavLink>
        <NavLink>Forum</NavLink>
      </nav>
    </section>
  );
}

export default Header;
