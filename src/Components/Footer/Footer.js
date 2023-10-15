import React from "react";
import facebook from "../../assets/icons8-facebook-50.png";
import insta from "../../assets/icons8-insta-50.png";
import utube from "../../assets/icons8-youtube-50.png";
import whatsapp from "../../assets/icons8-whatsapp-50.png";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <ul className="footer_lists">
          <li className="foot_list">
            <a className="footer_tag" href="#">
              SUPPORT
            </a>
          </li>
          <li className="foot_list">
            <a className="footer_tag" href="#">
              COMPANY
            </a>
          </li>
          <li className="foot_list">
            <a className="footer_tag" href="#">
              REFUND POLICY
            </a>
          </li>
          <li className="foot_list">
            <a className="footer_tag" href="#">
              PRIVACY POLICY
            </a>
          </li>
          <li className="foot_list">
            <a className="footer_tag" href="#">
              RETURN POLICY
            </a>
          </li>
          <li className="foot_list">
            <a className="footer_tag" href="#">
              FASHION AWARDS
            </a>
          </li>
          <li className="foot_list">
            <a className="footer_tag" href="#">
              DELIVERY POLICY
            </a>
          </li>
          <li className="foot_list">
            <a className="footer_tag" href="#">
              CONTACT US
            </a>
          </li>
          <li className="foot_list">
            <a className="footer_tag" href="#">
              CAREERS
            </a>
          </li>
          <li className="foot_list">
            <a className="footer_tag" href="#">
              SITEMAP
            </a>
          </li>

          <li className="foot_list">
            <a className="footer_tag" href="#">
              STORE LOCATOR
            </a>
          </li>

          <li className="foot_list">
            <a className="footer_tag" href="#">
              INVESTOR RELATIONS
            </a>
          </li>
          <li className="foot_list">
            <a className="footer_tag" href="#">
              BLOG
            </a>
          </li>
        </ul>
        <div className="footer_icons">
          <img src={facebook} alt="facebook" className="footer_icon" />
          <img src={insta} alt="insta" className="footer_icon" />
          <img src={utube} alt="utube" className="footer_icon" />
          <img src={whatsapp} alt="whatsapp" className="footer_icon" />
        </div>
        <p className="footer_pera">
          Email Us - customercare@tcnsclothing.com or call us at +91-7583896939
          or WhatsApp at +91-8448198618 (from 10 AM to 6 PM, Mon to Sun). We are
          closed on bank holidays.
        </p>
      </div>
      <p className="copyright">© Copyright 2021 W. All Rights Reserved.</p>
    </footer>
  );
}
export default Footer;
