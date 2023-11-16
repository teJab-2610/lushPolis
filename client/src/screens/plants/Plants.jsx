import "./plantscss.css";
import Navbar from "../components/Navbar.jsx";
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import plantiden from "../../assets/images/plantiden.png";
import "./api.css";
import planthealth from "../../assets/images/planthealth.png";
import plantsearch from "../../assets/images/plantsearch.png";

function Plants() {
  return (
    <>
      <Navbar />
      <div className="bgofapi" style={{ height: "auto" }}>
        <div className="PlantApp" style={{ padding: "6rem" }}>
          <header className="Plantheader">
            <h1>Plant Identification and Search</h1>
          </header>
          <br></br>
          <ul className="Plantnav-links">
            <li>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="Demo_demoDescription__VOYlz Demo_demoCard__7kbhs ">
                  <h2>How to identify a plant?</h2>
                  <br></br>
                  <p className="para">
                    Uncover the mysteries of your garden with our cutting-edge
                    plant identification feature. Simply snap a photo, and let
                    our intelligent system identify your plant, providing you
                    with detailed insights and care tips.
                  </p>
                  <br></br>
                  <div class="Demo_imgContainer__8WxwM">
                    <img src={plantiden} />
                  </div>
                </div>
                <div style={{ paddingLeft: "2rem" }}>
                  <Link to="/plants/identification" className="Plantnav-button">
                    Plant Identification
                  </Link>
                </div>
              </div>
            </li>
            <br />
            <li>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="Demo_demoDescription__VOYlz Demo_demoCard__7kbhs ">
                  <h2>Want to get details of a Plant?</h2>
                  <br></br>
                  <p className="para">
                    Navigate the green world effortlessly! Whether you're a
                    seasoned gardener or just starting, our plant search
                    functionality lets you find detailed information about any
                    plant by simply typing its name. Explore a vast database at
                    your fingertips.
                  </p>
                  <br></br>
                  <div class="Demo_imgContainer__8WxwM">
                    <img src={plantsearch} />
                  </div>
                </div>
                <div style={{ paddingLeft: "2rem" }}>
                  <Link to="/plants/search" className="Plantnav-button">
                    Plant Search
                  </Link>
                </div>
              </div>
            </li>
            <br />
            <li>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="Demo_demoDescription__VOYlz Demo_demoCard__7kbhs ">
                  <h2>Asses your Plants Health</h2>
                  <br></br>
                  <p className="para">
                    Monitor your garden's well-being with our plant health
                    assessment tool. Receive instant evaluations of your plants'
                    health status, identify potential issues, and access
                    personalized recommendations to keep your green companions
                    thriving.
                  </p>
                  <br></br>
                  <div class="Demo_imgContainer__8WxwM">
                    <img src={planthealth} />
                  </div>
                </div>
                <div style={{ paddingLeft: "2rem" }}>
                  <Link
                    to="/plants/health_assessment"
                    className="Plantnav-button"
                  >
                    Health Assessment
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Plants;
