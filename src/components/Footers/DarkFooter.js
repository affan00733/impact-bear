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
              <i className="fab fa-twitter"></i>
              &nbsp;&nbsp;&nbsp;
              <i class="fab fa-linkedin"></i>
              &nbsp;&nbsp;&nbsp;
              <i class="fab fa-vimeo-v"></i>
              &nbsp;&nbsp;&nbsp;
              <i class="fas fa-envelope"></i>
              &nbsp;&nbsp;&nbsp;
            </li>
            
          
            <li
              style={{
              paddingLeft: 100
            }}
            >
              <Link
              to="/index"
              >
                About Us
              </Link>
              <br />
              <br />
            </li>
            <li>
              
            </li>
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
