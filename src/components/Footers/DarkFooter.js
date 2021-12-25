/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

function DarkFooter() {
  return (
    <footer className="footer footer-big" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              Connect With Us
              <br />
              <a target="_blank" href="https://twitter.com/impact_bear">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100075056961160"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/nevertoolate.podcast/"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/impact-bear-0a2840226/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>

            <li
              style={{
                paddingLeft: 100,
              }}
            >
              <Link to="/index">About Us</Link>
              <br />
              <br />
            </li>

            <li
              style={{
                paddingLeft: 10,
              }}
            >
              <Link
                to={{
                  pathname: "https://deft-experimenter-1482.ck.page/f2afb821c0",
                }}
                target="_blank"
              >
                Subscribe
              </Link>
              <br />
              <br />
            </li>
            <li></li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © 2021 Impactbear Pvt Ltd, all rights reserved.
          {/* {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Creative Tim
          </a>
          . */}
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
