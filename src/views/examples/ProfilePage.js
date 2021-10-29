import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";

import "../../assets/css/custom.css"
function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        {/* <ProfilePageHeader /> */}
        <div className="section">
          <Container>
            {/* <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip>
            </div> */}
            <div >
              <h2 className="title custom1">Capitalism, the solution for poverty in the future  </h2>
              <h3 className="custom1  " style={{ fontWeight: "bolder" }}>The GIIN website</h3>
              <h5 className="custom1">
                Impact investments are investments made with the intention
                to generate positive, measurable social and environmental
                impact alongside a financial return.
                Impact investments can be made in both emerging and developed markets,
                and target a range of returns from below market to market rate, depending on investors' strategic goals.
                <br />
                <br />
                The growing impact investment market provides capital to address the world’s most pressing
                challenges in sectors such as sustainable agriculture, renewable energy, conservation,
                microfinance, and affordable and accessible basic services including housing, healthcare, and education.
                <br />
                <br />
                <h5 className="custom1" style={{ fontWeight: "bolder" }}>
                  Elements of impact investing
                </h5>
                The practise of impact investing is further defined by the following elements.
                <br /><br />
                INTENTIONALITY An investor’s intention to have a positive social or environmental impact through investments is essential to impact investing.
                <br /><br />
                INVESTMENT WITH RETURN EXPECTATIONS Impact investments are expected to generate a financial return on capital or, at minimum, a return of capital.
                <br /><br />
                RANGE OF RETURN EXPECTATIONS AND ASSET CLASSES Impact investments target financial returns that range from below market (sometimes called concessionary) to risk-adjusted market rate, and can be made across asset classes, including but not limited to cash equivalents, fixed income, venture capital, and private equity.
                <br /><br />
                IMPACT MEASUREMENT A hallmark of impact investing is the commitment of the investor to measure and report the social and environmental performance and progress of underlying investments, ensuring transparency and accountability while informing the practice of impact investing and building the field.
                <br /><br />
                <h5 className="custom1" style={{ fontWeight: "bolder" }}>
                  Investopedia
                </h5>
                Impact investing is an investment strategy that aims to generate specific beneficial social or environmental effects in addition to financial gains. Impact investments may take the form of numerous asset classes and may result in many specific outcomes. The point of impact investing is to use money and investment capital for positive social results.
                <br /><br />
                <h5 className="custom1" style={{ fontWeight: "bolder" }}>
                  Key Takeaways
                </h5>
                <ul>
                  <li>
                    Socially responsible (SRI) and environmental, social, & governance (ESG) investing are two approaches to impact investing, although there is still some disagreement over terminology in the investing community.
                  </li>
                  <li>
                    According to the Global Impact Investing Network, more than 88% of impact investors reported that their investments met or exceeded their expectations.
                  </li>
                  <li>
                    Studies show that the median impact fund realized a 6.4% return, compared to 7.4% from non-impact funds.
                  </li>
                </ul>

                <h5 className="custom1" style={{ fontWeight: "bolder" }}>
                  Understanding Impact Investing
                </h5>

                The term impact investing was first coined in 2007, but the practice was developed years earlier. A basic goal of impact investing is to help reduce the negative effects of business activity on the social environment. That's why impact investing may sometimes be considered an extension of philanthropy.
                <br /><br />
                Investors who use impact investing as a strategy consider a company's commitment to corporate social responsibility (CSR), or the sense of duty to positively serve society as a whole, before they become involved with that company. The type of impact that can evolve from impact investing varies based on the industry and the specific company within that industry, but some common examples include giving back to the community by helping the less fortunate or investing in sustainable energy practices to help save our planet.
                <br /><br />
                This strategy actively seeks to make a positive impact by investing, for example, in nonprofits that benefit the community or in clean-technology enterprises that benefit the environment.
                <br /><br />
                The bulk of impact investing is done by institutional investors, including hedge funds, private foundations, banks, pension funds, and other fund managers.
                <br /><br />
                However, a range of socially conscious financial service companies, web-based investment platforms, and investor networks now offer individuals an opportunity to participate, too. One major venue is microfinance loans, which provide small-business owners in emerging nations with startup or expansion capital. Women are often the beneficiaries of such loans.
                <br /><br />
                <h5 className="custom1" style={{ fontWeight: "bolder" }}>
                  Rockefeller Philanthropy
                </h5>
                There are two sides of any impact investing deal: the impact investor and the impact investee. The goal is for both sides to benefit.
                <br /><br />
                <b>Impact Investor:</b> Investments made with the intention to generate measurable social impact alongside a financial return
                <br /><br />
                <b>Impact Investee:</b> A mission-driven organization (for-profit, nonprofit, or hybrid) with a market-based strategy
                <br /><br />
                Impact investing appeals to many potential investors because it balances commerce and compassion. It also offers a broad range of options, as shown in the following diagram. Some strategies emphasize financial return while still seeking to benefit society. Other approaches put social impact first, accepting returns that vary from below-market rate to a simple repayment of principal.
                <br /><br />
                <img
                  alt="..."
                  className="img-center"
                  src={require("assets/img/blog images/1.png").default}
                ></img>
                <br /><br />
                Finding one’s place along the spectrum is a key consideration for any impact investor. At the far left, one motivated primarily by social impact might make a low interest loan or recoverable grant to a charity. At the other end, a financially driven approach might lead to an equity investment in a public company based on its integration of corporate social responsibility (CSR).
                <br /><br />
                Impact investments can be as straightforward as banking with a community-based financial institution that helps to expand economic opportunities for low-income stakeholders, or supporting entrepreneurs in the developing world through a micro-finance fund. Some of these types of investment, for example, solar power, have been around for decades.
                <br /><br />
                Impact investments can also be incredibly complex, sometimes creating new financial vehicles or new types of arrangements between partners. These pioneering deals—which could include infusing capital into startup social enterprises, for example, or investing in pay-for-success contracts—often require expert advice, especially for newcomers.
                <br /><br />
                <h5 className="custom1" style={{ fontWeight: "bolder" }}>
                  From Reports
                </h5>
                ‘Core impact investing’ – which lies at the center of the spectrum – is the definition of impact investing generally used in India and for the purpose of this report (excluding philanthropy, blended finance, ESG and SRI, CSR etc.). Impact investing is neither impact-first nor returns-first, but rather focused on both  simultaneously. Its core focus is on a venture building approach to growing scalable business models that addresses core challenges of poverty, access, affordability and livelihoods by leveraging market principles and funneling commercial capital into social enterprises providing solutions for the masses.
                <br /><br />
                <img
                  alt="..."
                  className="img-center"
                  src={require("assets/img/blog images/2.png").default}
                ></img>
                <br /><br />
                <img
                  alt="..."
                  className="img-center"
                  src={require("assets/img/blog images/3.png").default}
                ></img>
              </h5>
            </div>
            {/* <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg11.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row> */}
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
