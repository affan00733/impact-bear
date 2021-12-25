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
          where("id", "==", 1)
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
      id: 1,
      timestamp: d,
    });

    const querySnapshot = await getDocs(
      query(
        collection(db, "comments"),
        orderBy("timestamp"),
        where("id", "==", 1)
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
    setComment("")
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
                Why did the world suddenly turn green?
              </h2>
              {/* <h3 className="custom1  " style={{ fontWeight: "bolder" }}>The GIIN website</h3> */}
              <h5 className="custom1">
                Before we start, I would like to ask all of you a question ?
                Lets suppose I place an big red apple in front of you, what is
                the first though that comes to your mind when you see the apple
                ? Could you friends guess that for me? hmmm… something to eat?
                AND … Sweet…. But Diabetic friendly? ………Good Immunity? Do we see
                a pattern in here? Eat? Diabitic friendly, Immunity , arnt these
                all the utilities of apple and not the apple itself. We look at
                apple as a function of our utility and perception. In fact I
                would like to extend that and say we look at the world in terms
                of our utility and perception and billion dollar companies are
                no exeption. Lets take a case of google.
                <br />
                <br />
                Google frames itself as a multifaceted technology company which
                seems reasonable enough as in addition to its search engine,
                google has a plethora of softwares in the market not to mention
                robotic cars, wearable tech etc. However, if we have a close
                look at their revenues, 95% of Google’s revenue comes from
                search advertising which is due to the fact that they are
                monopolists in the search engine market owning upto 68% of the
                total market. What if I told you the rise of ESG investing is to
                a good extent attributed to the same reason why google lies as
                not being a monopoly?
                <br />
                <br />
                Google knows that bragging about their great monopoly invites
                being audited, scrutinized and attacked. By representing itself
                as just part of the market and not the market itself, Google
                validates its ‘social licence’ which enables it to grow even
                further. Furthermore, due to COVID’s impact, the perception and
                not the direct connection aggregated and set a new standard for
                such a ‘social licence’. Private equity players have realised
                you can’t IPO a business unless it’s got a really strong
                sustainability or ESG story so they are all hiring heads of ESG
                or sustainability at very senior levels  to oversee their
                portfolios. A company’s relationship with the planet either
                through their product or their behaviour not only enables them
                with market goodwill, but also helps gain a competitive
                advantage over some of the other companies that may not be
                beaten purely on price.
                <br />
                <br />
                According to a survey conducted by Natixis Investment Managers,
                institutions applying impact investing rose from a mere 6% in
                2019 to staggering 34% in 2021 which along with the ‘social
                licence’ aspect (Most firms refer to this as organizational
                values) , could be attributed to diversification of their
                portfolio, enhanced downside protection, direct indexing
                technology which in its turn is quite revolutionary as it allows
                you to seamlessly integrate your personal values across your
                assets with the push of a button, evolving data and analytics
                and the most important of them all, better storytelling.
                <br />
                <br />
                Storytelling has to be one of the most underrated aspect of ESG
                growth with Australian bush fires and severe droughts in Taiwan
                and Latin America being not just centers of impact, but also
                centers of impactful story telling. The biggest one however has
                to be Mr.NoMoreNiceGuy, Donald Trump.
                <br />
                <br />
                Even before President Trump took office, ESG was a political
                football, with attempts to ban the filing of most ESG
                shareholder resolutions as part of the 2017 Financial Choice
                Act. The Trump administration went even farther, providing
                anti-ESG recommendations, thereby prohibiting the introduction
                of values-based investment into the country's retirement funds.
                Ironically, I feel the Trump administration had a favourable
                impact on ESG. The president's words frequently sparked
                widespread outrage, resulting in increased political and social
                awareness. For example, the #MeToo and Black Lives Matter
                movements sparked a national conversation. According to the
                United States Forum for Sustainable and Responsible Investment,
                total U.S.-domiciled assets under management using ESG
                investment strategies surged by 42 percent under the Trump
                administration, from $12 trillion in 2018 to $17.1 trillion in
                early 2020.
                <br />
                <br />
                Considering such a rise in ESG investing, we believe the current
                phase of impact investments could be compared to lets say
                coronavirus without government restriction. Not to compare
                climate change and poverty with a global pandemic but just think
                about this. Without the government restrictions in place, would
                the businesses around us stop their profit making machines ? Its
                quite natural to think that the effects of coronavirus would
                have been 10 times more devastating without a barrier to hold
                these machine. It is also important to understand that to strive
                in local and global competition, one has to be a profit making
                machine or else you just wont survive. That’s exactly why its
                easier to market oneself as sustainable than actually be
                sustainable. We will elaborate on this in future episodes
                however one must understand that true change in ESG investing
                would happen only after government interventions into this
                space. The biggest driver of ESG investing is yet come. Sooner
                than later, governments will realize climate change being five
                times as more deadly than the current pandemic and we pledge to
                be part of this transition.
                <br />
                <br />
                Whether it's Greta Thunberg, or Extinction Rebellion, or all the
                student organizations pushing for [change]—or whether it's that
                feeling that we've maybe crossed a tipping point, the rise in
                awareness has been unprecedented for the greater good. The
                average board tenure is five to seven years and some of these
                net-zero targets are set out for 2050. Essentially, there is no
                accountability for that so want to see steps for 2025, 2030, etc
                We want a gradual transition not a disruptive one, however, only
                time will tell if the market actually created an impact or all
                of it was just a big illusion to accelerate sales.
                
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
