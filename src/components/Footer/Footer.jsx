import { NavLink } from "react-router-dom";
import "./Footer.scss";
import igIcon from "../../assets/logos/insta.svg";
import fbIcon from "../../assets/logos/fb.svg";
import liIcon from "../../assets/logos/li.svg";
import xIcon from "../../assets/logos/x.svg";

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
        <a href="https://www.facebook.com/BellLetsTalk/">
          <span className="icon-ui">
            <img src={fbIcon} alt="facebook-icon" className="icon" />
          </span>
        </a>
        <a href="https://twitter.com/Bell_LetsTalk">
          <span className="icon-ui">
            <img src={xIcon} alt="x-icon" className="icon" />
          </span>
        </a>

        <a href="https://www.instagram.com/bell_letstalk/">
          <span className="icon-ui">
            <img src={igIcon} alt="instagram-icon" className="icon" />
          </span>
        </a>

        <a href="https://www.linkedin.com/showcase/bell-let's-talk/">
          <span className="icon-ui">
            <img src={liIcon} alt="linkedIn-icon" className="icon" />
          </span>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
