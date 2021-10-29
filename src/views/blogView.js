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
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg,
    CardHeader
} from "reactstrap";
import { Link } from "react-router-dom";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import "assets/css/custom.css"
function ProfilePage() {
    // const [pills, setPills] = React.useState("2");
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
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
                    <div className="section section-tabs">
                      
                        <Container>
                            <h1 className="category">Blogs</h1>
                            <Row>
                                <Col className="ml-auto mr-auto" md="10" xl="6">
                                    {/* <p className="category">Tabs with Icons on Card</p> */}
                                    <Link
                                    to="/blog1"
                                    >
                                    <Card
                                        className="h-30 w-55"
                                    >
                                        <CardImg 
                                            top
                                            width="250px" height="300px"
                                            src={require("assets/img/blog images/blog1.jpeg").default} alt="Card image cap" />
                                        <CardBody>
                                                <CardTitle tag="h5">Is capitalism the solution for poverty in the future ?</CardTitle>
                                            {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText> */}
                                            <CardText>
                                                <small className="text-muted">Uploaded on 15th october 2021</small>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                    </Link>
                                </Col>
                                <Col className="ml-auto mr-auto" md="10" xl="6">
                               
                                    
                                
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <DarkFooter />
            </div>
        </>
    );
}

export default ProfilePage;
