import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import { Link } from "react-router-dom";

import Carousel3 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// core components
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const items = [
  {
    src: require("assets/img/blog images/blog1.jpeg").default,
    caption: "Is capitalism the solution for poverty in the future ? ",
    redirect : "blog1"
  },
  // {
  //   src: require("assets/img/bg3.jpg").default,
  //   caption: "Somewhere Beyond, United States",
  //   redirect: "landing-page"
  // },
  // {
  //   src: require("assets/img/bg4.jpg").default,
  //   caption: "Yellowstone National Park, United States",
  //   redirect: "/login-page"
  // },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className="title">
            <h1 className="title">Blogs</h1>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <Link
                        to={item.redirect}
                      >
                      <img style={{
                        // height: 400,
                        // width : 730
                      }} src={item.src} alt={item.caption} />
                      <div className="carousel-caption d-none d-md-block">
                        <h3 style={{fontWeight:"bold"}}>{item.caption}</h3>
                      </div>
                    </Link>
                    </CarouselItem>
                    
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
          {/* <Carousel3 responsive={responsive}>
            <div className="photo-container"
              style={{
                padding: 10
            }}
            >
              <img alt="..." src={require("assets/img/ryan.jpg").default}></img>
              <div style={{
                color: "black",
                position: 'absolute',
                height: 40,
                left: 0,
                bottom: 50,
                
              }}>
                <h4
                  style={{
                    fontWeight: "bolder",
                    textAlign: "center",
                    paddingLeft : window.innerHeight * 0.10
                  }}
                >Nature, United States</h4>
              </div>
            </div>

            <div className="photo-container"
              style={{
                padding: 10
              }}
            >
              <img alt="..." src={require("assets/img/ryan.jpg").default}></img>
              <div style={{
                color: "black",
                position: 'absolute',
                height: 40,
                left: 0,
                bottom: 50,

              }}>
                <h4
                  style={{
                    fontWeight: "bolder",
                    textAlign: "center",
                    paddingLeft: window.innerHeight * 0.10
                  }}
                >Nature, United States</h4>
              </div>
            </div>

            <div className="photo-container"
              style={{
                padding: 10
              }}
            >
              <img alt="..." src={require("assets/img/ryan.jpg").default}></img>
              <div style={{
                color: "black",
                position: 'absolute',
                height: 40,
                left: 0,
                bottom: 50,

              }}>
                <h4
                  style={{
                    fontWeight: "bolder",
                    textAlign: "center",
                    paddingLeft: window.innerHeight * 0.10
                  }}
                >Nature, United States</h4>
              </div>
            </div>

            <div className="photo-container"
              style={{
                padding: 10
              }}
            >
              <img alt="..." src={require("assets/img/ryan.jpg").default}></img>
              <div style={{
                color: "black",
                position: 'absolute',
                height: 40,
                left: 0,
                bottom: 50,

              }}>
                <h4
                  style={{
                    fontWeight: "bolder",
                    textAlign: "center",
                    paddingLeft: window.innerHeight * 0.10
                  }}
                >Nature, United States</h4>
              </div>
            </div>
            
          </Carousel3> */}

                  
             
        
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
