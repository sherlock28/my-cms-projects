import React, { Component } from "react";
import styles from "./Footer.module.css";
import { FaGitlab, FaTwitter, FaLinkedin } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <footer
        className={`${styles.container_footer} page-footer font-small py-4 mt-5`}
      >
        <div className="container mt-3">
          <ul className="list-unstyled list-inline text-center text-white">
            <li className="list-inline-item">
              <a
                href="https://gitlab.com/rodol28"
                className="btn-floating btn-li mx-1"
                target="blank"
              >
                <FaGitlab className={styles.icon} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/rodol28js"
                className="btn-floating btn-li mx-1"
                target="blank"
              >
                <FaTwitter className={styles.icon} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/rodolfo-caceres-b36046115"
                className="btn-floating btn-li mx-1"
                target="blank"
              >
                <FaLinkedin className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footer_copyright} text-center pb-3`}>
          © 2021 Copyright: Victor Rodolfo Cáceres
        </div>
      </footer>
    );
  }
}
