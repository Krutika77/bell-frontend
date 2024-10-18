import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.scss";

function Header() {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      console.log("Scrolled:", scrolled);
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // cleanup event listener on component unmount

  return (
    <section className={`header ${isScrolled ? "header--shadow" : ""}`}>
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
          to="/choose"
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
