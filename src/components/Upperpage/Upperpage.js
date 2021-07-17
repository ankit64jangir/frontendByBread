import React from "react";
import "./Upperpage.css";
import macScreen from "../../assets/Component 27.png";
import phoneScreen from "../../assets/Component 14.png";

function Upperpage() {
  return (
    <div class="backgroundStyle" style={{ marginBottom: "100px" }}>
      <div class="container ">
        <div class="row">
          <div class="col-sm">
            <div className="middleDiv">
              <h1 className="superfan">
                Become a true <span style={{ color: "#2AA3EF" }}>SUPERFAN</span>
              </h1>
              <p className="supportyour">
                Support your favourite creator by sharing their #TweetsFromHome
                wall with your loved ones and grow their community.
              </p>
              <div style={{ marginBottom: "20px" }}>
                <i class="fas fa-search"></i>&nbsp;&nbsp;
                <input
                  type="text"
                  class="inputstyle"
                  placeholder="Search your favourite creator"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg btnStyle"
                style={{ borderRadius: "30px", backgroundColor: "#2AA3EF" }}
              >
                View Tweets From Home
              </button>
            </div>
          </div>
          <div class="col-sm">
            <div class="thumbnail">
              <img className="vert-move" src={macScreen} alt="Lights" style={{ width: "100%" }} />
            </div>
          </div>
        </div>

        <div>
          <h1 className="creatorspower">
            Creators <span style={{ color: "#1157A0" }}>are powerful</span>
          </h1>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <div class="thumbnail smartphone">
              <div class="content">
                <img
                  src={phoneScreen}
                  alt="Lights"
                  style={{ width: "100%", height: "520px" }}
                />
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div className="middleDiv2">
              <h1 className="shapeculture">CREATORS SHAPE CULTURE.</h1>
              <p className="twointhree">
                2 in 3 twitter users agree that creators change and shape
                culture
              </p>
              <div className="badgepill">
                <span class="badge badgehiarmy" style={{ color: "black" }}>
                  #HiArmy
                </span>{" "}
                &nbsp;&nbsp;
                <span class="badge badgeeveryday" style={{ color: "black" }}>
                  #everydays
                </span>
                <br />
                <span class="badge badgeteam" style={{ color: "black" }}>
                  #teamtrees
                </span>{" "}
                &nbsp;&nbsp;
                <span class="badge badgebts" style={{ color: "black" }}>
                  #BTS
                </span>
                <br />
                <span class="badge badgebot" style={{ color: "black" }}>
                  #botarmy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upperpage;
