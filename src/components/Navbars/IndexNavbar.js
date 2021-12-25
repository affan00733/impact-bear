import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Modal,
  Form,
  FormGroup,
  Input,
  FormText,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [modalLive, setModalLive] = React.useState(false);
  const [email, setEmail] = React.useState();

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 599 ||
        document.body.scrollTop > 599
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 600 ||
        document.body.scrollTop < 600
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const emailSubmit = async (e) => {
    e.preventDefault();
    console.log("emailSubmit");
    alert(email);
  };
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        // className={"fixed-top " + navbarColor}
        fixed="top"
        style={{
          backgroundColor: "white",
          color: "black",
          marginLeft: "100px",
          borderBottomLeftRadius: "50px",
          height: "105px",
        }}
        expand="lg"
        // color="info"
      >
        <Container>
          <div className="navbar-translate">
            <Link to="/index">
              <NavbarBrand
                style={{
                  color: "black",
                  fontFamily: "unset",
                  fontSize: "25px",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
                // href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
                // target="_blank"
                id="navbar-brand"
              >
                <div
                  style={
                    {
                      // flexDirection: "row"
                    }
                  }
                >
                  <img
                    style={{
                      // 636 × 496
                      position: "absolute",
                      bottom: 30,
                      left: 20,
                      height: "50px",
                      width: "170px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      paddingRight: 100,
                    }}
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/impact bear.jpeg").default}
                  ></img>
                  {/* <img
                    style={{
                      height: "45px",
                      width: "305px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      paddingRight: 80,

                    }}
                    alt="..."
                    className="n-logo"

                    src={require("assets/img/blog images/logoname.jpeg").default}
                  ></img> */}
                  <p
                    style={{
                      position: "absolute",
                      paddingLeft: 250,
                      bottom: 55,
                      fontWeight: "bolder",
                      left: -153,
                    }}
                  >
                    {" "}
                    impact
                  </p>
                  <br />
                  <p
                    style={{
                      position: "absolute",
                      paddingLeft: 250,
                      bottom: 30,
                      left: -153,
                      fontSize: "25px",
                    }}
                  >
                    BEAR
                  </p>
                </div>
              </NavbarBrand>
            </Link>
            <UncontrolledTooltip target="#navbar-brand">
              Welcome to Impact Bear
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              {/* <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span> */}
              <i style={{ color: "black" }} className="fas fa-bars"></i>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <Link to="/Blog">
                  <NavLink
                    style={{
                      color: "black",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                    href="#pablo"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   document
                    //     .getElementById("download-section")
                    //     .scrollIntoView();
                    // }}
                  >
                    {/* <i class="fas fa-newspaper"></i> */}
                    <p>&nbsp; Podcast</p>
                  </NavLink>
                </Link>
              </NavItem>
              <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLiveLabel">
                    Subscribe To Newsletter
                  </h5>
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={() => setModalLive(false)}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Give Email</p>
                </div>
                <div className="modal-footer">
                  <Form>
                    <FormGroup>
                      <Input
                        aria-describedby="emailHelp"
                        id="exampleInputEmail1"
                        placeholder="Enter email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      ></Input>
                    </FormGroup>
                    <Button color="primary" type="button" onClick={emailSubmit}>
                      Submit
                    </Button>
                  </Form>
                </div>
              </Modal>
              <NavItem>
                <NavLink
                  style={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  target="_blank"
                  href="https://deft-experimenter-1482.ck.page/f2afb821c0"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   // alert("subscribe to");
                  //   setModalLive(true);
                  // }}
                >
                  {/* <i class="fas fa-newspaper"></i> */}
                  <p>&nbsp; Subscribe</p>
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Components</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-index-navbar"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Upgrade to PRO</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem> */}
              <NavItem>
                <NavLink
                  style={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  href="https://twitter.com/impact_bear"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  href="https://www.facebook.com/profile.php?id=100075056961160"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  href="https://www.instagram.com/nevertoolate.podcast/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
