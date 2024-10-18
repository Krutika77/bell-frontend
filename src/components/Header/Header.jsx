import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      <NavLink to="/" className="header__title">
        Bell Impact
      </NavLink>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          Explore
        </NavLink>
        <NavLink
          to="/quiz"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          Choose
        </NavLink>
        <NavLink
          to="/forum"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          Forum
        </NavLink>
      </nav>
    </section>
  );
}

export default Header;
