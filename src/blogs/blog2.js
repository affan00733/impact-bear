import React, { useEffect, useState } from "react";

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
  Form,
  FormGroup,
  Input,
  FormText,
  Label,
} from "reactstrap";

import "../firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  addDoc,
  orderBy,
} from "firebase/firestore";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import "assets/css/custom.css";
function ProfilePage() {
  const [email, setEmail] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [comment, setComment] = useState();
  const [commentDisplay, setCommentDisplay] = useState([]);
  const [pills, setPills] = React.useState("2");
  const db = getFirestore();

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

  useEffect(() => {
    if (emailVal !== "") {
      console.log("email enterd", emailVal);
    } else {
      console.log("email not entered");
    }
    async function getComments() {
      const querySnapshot = await getDocs(
        query(
          collection(db, "comments"),
          orderBy("timestamp"),
          where("id", "==", 2)
        )
      );
      let data = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
      });

      setCommentDisplay(data);
    }

    getComments();
  }, []);

  const emailSubmit = async (e) => {
    e.preventDefault();
    await setEmailVal(email);
    let d = Date.now();
    const docRef = await addDoc(collection(db, "comments"), {
      email: email,
      comments: comment,
      id: 2,
      timestamp: d,
    });

    const querySnapshot = await getDocs(
      query(
        collection(db, "comments"),
        orderBy("timestamp"),
        where("id", "==", 2)
      )
    );
    let data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      data.push(doc.data());
    });

    await setCommentDisplay(data);

    if (emailVal !== "") {
      console.log("email enterd", emailVal);
    } else {
      console.log("email not entered");
    }
    // alert(emailVal);
    setComment("");
  };

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        {/* <ProfilePageHeader /> */}
        <div className="section">
          <Container>
            <div>
              <h2 className="title custom1">
                Jeff Bezos and Greta Thunberg walk into a bar....
              </h2>
              {/* <h3 className="custom1  " style={{ fontWeight: "bolder" }}>The GIIN website</h3> */}
              <h5 className="custom1">
                <i>
                  ‘We need to start to talk about money in ways that dethrone it
                  and make it subject to human ethics and standards of love and
                  decency’
                </i>
                - Joel Solomon
                <br />
                <br />
                Jacqui is a very active individual, enjoying hobbies such as
                badminton, walking and wild swimming. A mother of two grown-up
                daughters, Jacqui grew up in the West Country and worked as a
                nurse for 49 years. Upon retirement, she spent seven years
                travelling around the world on a motorbike and wrote a book,
                'Hit the road Jac!', to share her experiences. In this thrilling
                journey, one event stood out amongst every other, the life
                savings of an elderly couple from the United States was
                catalyzing young entrepreneurs to kick start a renewable energy
                project in Dallol, Ethiopia. The interesting part here was not
                the young entrepreneurs trying to create an impact, but the
                confidence they had on giving the Old Couple a better retirement
                though their venture and create an impact at the same time.
                <br />
                <br />
                Coming of think of it, was such a spirited confidence on a
                renewables venture even justified? For that, lets first
                understand what exactly a venture is
                <br />
                <br />
                What comes first to your mind when you think of a venture?
                <br />
                <br />
                People? Infrastructure? Capital Investment? and to most
                millennials something ‘cool’. However, if we look at every
                for-profit venture a littler closer, they are primarily systems
                that are created in such a way that it has tendency to makes
                profits. This tendency is a function of many things for example
                the economy, competitions, market size just to name few. The
                better such a tendency, the better its affinity to success.
                <br />
                <br />
                <img
                  alt="..."
                  className="img-center"
                  src={require("assets/img/blog images/blog2_1.png").default}
                ></img>
                <br />
                <br />
                Consider Meta, oh well, previously famously known as Facebook,
                which was founded in 2002 and have a glance at the graph below
                displaying its profits from 2009 to 2020. (In the audiobook, I
                will read out a few stats from the graph^) Inevitably, this
                graph speaks for itself of how well Meta has grown over the
                years to now almost to hit its 1 trillion dollar mark in the
                market! It is important, here, for us to understand that even
                though profits are single most element to sustain and grow a
                venture, it is not adequate to help us understand completely
                entire ecosystem of business making. Let's just dive deep into
                understanding what defines a business, at the outset? When you
                look at people working on a business, like Meta, what do you
                think drives them in order to achieve those profits in the first
                place?
                <br />
                <br />
                Without us realising, all the success stories of businesses till
                date that have grown and flourished are actually heavily
                dependent upon the impact the business creates and the way it
                influences the lives of people around by its mere presence. For
                instance Meta aka Facebook helped by providing improved
                interconnectivity of people at a technological level, thus
                people found it easier to communicate, share information and
                meet new people from the comfort of their home; Impact for the
                consumers and profits for Meta.
                <br />
                <br />
                The usual flow of a business coming into existence is- first a
                cause for a business is found, execution is done and then the
                effects are seen. However, when we talk about business trying to
                specifically create an impact, things finely refine in this
                ordinary cycle. An interesting intervention occurs, the effect,
                that is the impact of the business, actually becomes responsible
                to fuel the cause of the business. That means the cause is
                actually dependent on the type of impact the business intends to
                make.
                <br />
                <br />
                The intention of such a business is to generate positive,
                measurable social and environmental impact. Along with that, it
                provides a financial return. They can be made in both emerging
                and developed markets and also target a wide range of returns
                from below market to a market rate depending on investors’
                strategic goals.
                <br />
                <br />
                Investment in such ventures was coined as ‘Impact Investing’ by
                the Rockefeller Foundation and plays a crucial role in this
                situation by helping channelise the capital into the firms that
                intend to create an impact.
                <br />
                <br />
                To top it all, impact investing is a dual form of investing done
                by the heart, for influencing the lives of people and by the
                mind too, for generating lucrative profits. So it's safe to say
                that being an impact investor is a win's-a-win situation.
                <br />
                <br />
                <h5 className="custom1" style={{ fontWeight: "bolder" }}>
                  An Impact Investment is different in four aspects.
                </h5>
                <ol>
                  <li>
                    Intentionality
                    <br />
                    An investor’s intention to have a positive social or
                    environmental impact through investments is essential to
                    impact investing.
                  </li>
                  <br />
                  <li>
                    Investment with a return expectation
                    <br />
                    Impact investments are expected to generate a financial
                    return on capital or, at minimum, a return of capital.
                  </li>
                  <br />
                  <li>
                    Range of return expectations and asset classes
                    <br />
                    Impact investments target financial returns that range from
                    below market (sometimes called concessionary) to
                    risk-adjusted market rate, and can be made across asset
                    classes, including but not limited to cash equivalents,
                    fixed income, venture capital, and private equity.
                  </li>
                  <br />
                  <li>
                    Impact measurement
                    <br />A hallmark of impact investing is the commitment of
                    the investor to measure and report the social and
                    environmental performance and progress of underlying
                    investments, ensuring transparency and accountability while
                    informing the practice of impact investing and building the
                    field.
                  </li>
                </ol>
                Impact investment may take the form of innumerable asset classes
                and can result in many specific outcomes. To place it on the
                Philanthropic Grants vs Socially responsible investing spectrum,
                Impact Investing lies at the centre.
                <br />
                <br />
                Impact investing is growing its market to provide and be a part
                of pressing challenges faced in today’s time. Sustainable
                agriculture, renewable energy, conservation, microfinance and
                affordable and accessible basic services from housing to
                education are also segmented into it.
                <br />
                <br />
                The present generation truly proves to be a promising, fertile
                arena for impact investing tr grow as netizens have become The
                Greta Thunbergs in their own right, and thus their support for
                social structure has been evident than ever before. The cause
                for impact organizations is driven by the differences it makes
                in the lives of people, thus proving that we already are
                surrounded by potential impact investors of the next decade.
                Infact, people have been gradually able to realise this too, for
                we see some trends in the making in the impact investing sector,
                <br />
                <br />
                Like for example Vidhita the
                <br />
                <br />
                Environmental Concerns-
                <br />
                <br />
                Global Warming has resulted in has been a significant increase
                in the number of strategies and ideas to combat this and focus
                on environmental investing, especially in areas such as land use
                and conservation. Corporates are eyeing sustainability and
                intend to achieve it via partnerships with local communities and
                impact capital. Impact capital would play an integral role to
                accelerate the progress rate, by being backed up by innovative
                technologies and helping them scale.
                <br />
                <br />
                Techno-Creativity Space -
                <br />
                <br />
                Digital Marketisation is a whole new ground for fuelling impact
                investing by getting access to remote markets and opportunities.
                Not only would this help support underserved markets but also
                provide access and affordability of goods to the low-income
                population.
                <br />
                <br />
                Normalizing the Gender Hub -
                <br />
                <br />
                In recent times, changes have been seen in order to normalise
                the gender hub worldwide. Right from an impressive 18% increase
                of girl education worldwide to India legalising homosexuality
                via section 377 and over 131 countries, including Iceland,
                Canada, Spain having seen an increase in acceptance rate towards
                the LGBTQ community. It is quite remarkable how we are
                broadening the equality horizons from women and girls to men,
                LGBTQ community and intersectional identities.
                <br />
                <br />
                The list for trends is exhaustive and ever-updating, for people
                today believe that these impacts are the very foundation of
                setting our values. The ideologies of impact businesses/ impact
                investors are not meant to be just etched in the pages of
                history books, but in the lives of people. If the world’s most
                valuable automaker can create an environmental impact and still
                be at the top of the market, what’s stopping the spirited young
                entrepreneurs from Ethiopia? Lets ask ourselves, if profit over
                impact is all the politician and industrialists want in the
                world, why not give it to them?
                <br />
                <br />
              </h5>
            </div>

            <div>
              <h3>
                <b>Comments</b>
              </h3>
              {commentDisplay.map((x, i) => {
                return (
                  <div>
                    <p className="custom1">{x.comments}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <Form onSubmit={emailSubmit}>
                <FormGroup>
                  {emailVal !== "" ? (
                    <p>
                      <b>Email : {emailVal}</b>
                    </p>
                  ) : (
                    <Input
                      aria-describedby="emailHelp"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                  )}

                  <FormText
                    className="text-muted"
                    color="default"
                    id="emailHelp"
                  >
                    We'll never share your email with anyone else.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Input
                    id="exampleInputPassword1"
                    placeholder="give comment"
                    type="text"
                    onChange={(e) => setComment(e.target.value)}
                  ></Input>
                </FormGroup>

                <Button color="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default ProfilePage;
