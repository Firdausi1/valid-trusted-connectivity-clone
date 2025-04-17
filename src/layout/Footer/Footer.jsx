import React from "react";
import styles from "./Footer.module.scss";
import Input from "src/compnents/ui/Input/Input";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>Empowering the future of connectivity</div>

      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.subscribe}>
            <h2 className={styles.footerText}>Subscribe to our newsletter</h2>
            <Input placeholder="Email" />
          </div>
          <div className={styles.footerRight}>
            <div>
              <h3>Insights</h3>

              <ul>
                <li>Events</li>
                <li>Webinars</li>
                <li>Brochures</li>
                <li>PRs</li>
                <li>Whitepapers</li>
                <li>Articles</li>
              </ul>
            </div>
            <div>
              <h3>Solutions</h3>
              <ul>
                <li>Events</li>
                <li>Webinars</li>
                <li>Brochures</li>
                <li>PRs</li>
                <li>Whitepapers</li>
                <li>Articles</li>
                <li>Brochures</li>
                <li>PRs</li>
                <li>Whitepapers</li>
                <li>Articles</li>
              </ul>
            </div>
            <div>
              <h3>About</h3>
              <ul>
                <li>About</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.policy}>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div className={styles.social}>
            <a href="">in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
