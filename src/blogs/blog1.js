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
import DarkFooter from "components/Footers/DarkFooter";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import "assets/css/custom.css"
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

                        <div >
                            <h2 className="title custom1">Is capitalism the solution for poverty in the future ? </h2>
                            {/* <h3 className="custom1  " style={{ fontWeight: "bolder" }}>The GIIN website</h3> */}
                            <h5 className="custom1">
                                We need to start to talk about money in ways that dethrone it and make it subject to human ethics and standards of love and decency - Joel Solomon.
                                <br />
                                <br />
                                Isn’t it high time to contribute to society? Life is evaporating each day it’s better to be a part of something good than be a part of nothing.

                                <br />
                                <br />
                                Impact investments are investments made with the intention to generate positive, measurable social and environmental impact. Along with that, it provides a financial return. They can be made in both emerging and developed markets and also target a wide range of returns from below market to a market rate depending on investors’ strategic goals.
                                <br />
                                <br />
                                Not just this but impact investing is growing its market to provide and be a part of pressing challenges faced in today’s time. Sustainable agriculture, renewable energy, conservation, microfinance and affordable and accessible basic services from housing to education are also segmented into it.
                                <br />
                                <br />
                                <h5 className="custom1" style={{ fontWeight: "bolder" }}>
                                    Major elements that one should know about!
                                </h5>
                                <ol>
                                    <li>
                                        Intentionality
                                        <br/>
                                        An investor’s intention to have a positive social or environmental impact through investments is essential to impact investing.
                                    </li>
                                    <br />
                                    <li>
                                        Investment with a return expectation
                                        <br />
                                        Impact investments are expected to generate a financial return on capital or, at minimum, a return of capital.
                                    </li>
                                    <br />
                                    <li>
                                        Range of return expectations and asset classes
                                        <br />
                                        Impact investments target financial returns that range from below market (sometimes called concessionary) to risk-adjusted market rate, and can be made across asset classes, including but not limited to cash equivalents, fixed income, venture capital, and private equity.
                                    </li>
                                    <br />
                                    <li>
                                        Impact measurement
                                        <br />
                                        A hallmark of impact investing is the commitment of the investor to measure and report the social and environmental performance and progress of underlying investments, ensuring transparency and accountability while informing the practice of impact investing and building the field.
                                    </li>
                                </ol>


                                The main cause for impact investing is to utilize the money and investment capital for a positive cause. Impact investment may take the form of innumerable asset classes and can result in many specific outcomes.

                                <br /><br />
                                
                                <h5 className="custom1" style={{ fontWeight: "bolder" }}>
                                    Breakthrough to understanding Impact Investing much better

                                </h5>
                                The word being coined in 2007 was in practice and developed years before it. The basic or the main goal of this is to help reduce and eventually nullify the negative effects of business activities on the social environment. Considering that it can also be termed as an extension of philanthropy.
                                <br /><br />
                                Investors who use impact investing as a strategy consider a company's commitment to corporate social responsibility (CSR), or the sense of duty to positively serve society as a whole, before they become involved with that company.
                                <br /><br />
                                This strategy actively seeks to make a positive impact by investing, for example, in nonprofits that benefit the community or in clean-technology enterprises that benefit the environment.
                                <br /><br />
                                The bulk of impact investing is done by institutional investors, including hedge funds, private foundations, banks, pension funds, and other fund managers.
                                <br /><br />
                                However, a range of socially conscious financial service companies, web-based investment platforms, and investor networks now offer individuals an opportunity to participate, too. One major venue is microfinance loans, which provide small-business owners in emerging nations with startup or expansion capital. Women are often the beneficiaries of such loans.
                                <br /><br />
                                There are different sides of any effect contributing deal: the impact investor and the impact investee. The objective is for the two sides to benefit. Impact Investor: Ventures made with the goal to produce quantifiable social effect close by a monetary return Impact Investee: A mission-driven association (revenue-driven, charitable, or mixture) with a market-based system Impact Investing is sighted to numerous potential financial backers since it adjusts trade and sympathy. A few systems underscore monetary return while trying to help society. Different methodologies put social effect first, tolerating returns that change from below-market rate to a simple repayment of principal.
                                <br /><br />
                                Discovering one's place along the range is a vital thought for an impact investor. At the extreme left, one persuaded basically by friendly effect may make a low-interest credit or recoverable award to a foundation. At the opposite end, a monetarily determined methodology may prompt a value interest in a public company dependent on its reconciliation of corporate social obligation (CSR). Impact Investment is similar to a banking institution that helps in expanding economic opportunities for low-income stakeholders, or supporting entrepreneurs in the developing world through a micro-finance fund.
                                <br /><br />
                                ‘Core impact investing’ – which lies at the centre of the spectrum – is the definition of impact investing generally used in India and for the purpose of this report (excluding philanthropy, blended finance, ESG and SRI, CSR etc.). Impact investing is neither impact-first nor returns-first, but rather focused on both simultaneously. Its core focus is on a venture building approach to growing scalable business models that address core challenges of poverty, access, affordability and livelihoods by leveraging market principles and funnelling commercial capital into social enterprises providing solutions for the masses.

                                <img
                                    alt="..."
                                    className="img-center"
                                    src={require("assets/img/blog images/3.png").default}
                                ></img>
                                <br /><br />
                                <h5 className="custom1" style={{ fontWeight: "bolder" }}>
                                    Key Takeaways
                                </h5>
                                <ul>
                                    <li>
                                        Socially responsible (SRI) and environmental, social, & governance (ESG) investing are two approaches to impact investing, although there is still some disagreement over terminology in the investing community.
                                    </li>
                                    <br />
                                    <li>
                                        According to the Global Impact Investing Network, more than 88% of impact investors reported that their investments met or exceeded their expectations.
                                    </li>
                                    <br />
                                    <li>
                                        Studies show that the median impact fund realized a 6.4% return, compared to 7.4% from non-impact funds.
                                    </li>
                                    <br />
                                </ul>

                             
                              
                            </h5>
                        </div>

                    </Container>
                </div>
                <DarkFooter />
            </div>
        </>
    );
}

export default ProfilePage;
