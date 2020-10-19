import React, { Component } from "react";

class LeftSection extends Component {
  render() {
    return (
      <>
        <div className="project_no client_profile">
          <div className="d-flex">
            <span>
              <img
                src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/client_img.jpg"
                alt=""
              />
            </span>
            <div>
              <h5 onclick="document.location='../Client/client-detail.html'">
                Bigpie123
              </h5>
              <label
                className="red_text"
                onclick="document.location='../Client/client-detail.html'"
              >
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </label>
              <h6>South Korea</h6>
            </div>
          </div>
          <div className="design_work">
            <div className="progress_bar">
              <div className="progress">
                <div
                  className="progress-bar green_bar"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="text-right">
              <a className="green_text review_skill">Review & Skill</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LeftSection;
