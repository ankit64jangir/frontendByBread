import React from "react";
import "./Mainpage.css";
import Upperpage from "../Upperpage/Upperpage";

function Mainpage() {
  return (
    <div> 
    <Upperpage />
    <div className="areamain">
      <h1 className="textmain ">
        With #TweetsFromHome, express your love for your favourite creator.
      </h1>
      <p className="subtextmain">
        Choose the top tweets that you absolutely admire to create your version
        of their #TweetsFromHome wall and simply share on Twitter.
      </p>
      <div className="d-flex justify-content-center">
        <div className="col-sm-4">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search your favourite creator"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center btnTopmargin">
        <button
          type="button"
          className="btn btn-primary btn-lg btnStyle"
          style={{ borderRadius: "30px", backgroundColor: "#2AA3EF" }}
        >
          Sign In to continue
        </button>
      </div>
    </div>
    </div>
  );
}

export default Mainpage;
