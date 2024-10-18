import { NavLink } from "react-router-dom";
import "./Footer.scss";
import fbIcon from "../../assets/logos/fb.svg";
import xIcon from "../../assets/logos/x.svg";
import liIcon from "../../assets/logos/li.svg";
import igIcon from "../../assets/logos/insta.svg";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__about">
        <p className="footer__about-title">About Us</p>
        <div className="footer__about-links">
          <a href="http://support.bell.ca/AboutBell#INT=OTH_hmpg_TXT_footer_about-bell">
            About Bell Canada
          </a>
          <a href="https://www.bell.ca/">Our Servives</a>
          <a href="https://letstalk.bell.ca/#INT=corp_hmpg_footer_lets%20talk_01232018">
            Bell Let's Talk
          </a>
          <a href="https://www.bell.ca/Bell-for-Better">Bell For Better</a>
        </div>
      </section>

      <section className="footer__connect">
        <NavLink to="/connect" className="footer__form-link">
          Connect with Us
        </NavLink>
        <div className="footer__socials">
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
        </div>

        {/* <section className="footer__socials">
        <a href="https://www.facebook.com/BellLetsTalk/">FACEBOOK</a>
        <a href="https://twitter.com/Bell_LetsTalk">X</a>
        <a href="https://www.instagram.com/bell_letstalk/">INSTAGRAM</a>
        <a href="https://www.linkedin.com/showcase/bell-let's-talk/">
          LINKEDIN
        </a> */}
      </section>
    </footer>
  );
}

export default Footer;
