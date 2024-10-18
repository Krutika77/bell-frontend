import { NavLink } from "react-router-dom";
import "Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/connect" className="footer__connect">
        Connect with Us
      </NavLink>
      <section className="footer__about">
        <a href="https://letstalk.bell.ca/#INT=corp_hmpg_footer_lets%20talk_01232018">
          Bell Let's Talk
        </a>
        <a href="https://www.bell.ca/Bell-for-Better">Bell For Better</a>
      </section>
      <section className="footer__socials">
        <a href="https://www.facebook.com/BellLetsTalk/">FACEBOOK</a>
        <a href="https://twitter.com/Bell_LetsTalk">X</a>
        <a href="https://www.instagram.com/bell_letstalk/">INSTAGRAM</a>
        <a href="https://www.linkedin.com/showcase/bell-let's-talk/">
          LINKEDIN
        </a>
      </section>
    </footer>
  );
}

export default Footer;
