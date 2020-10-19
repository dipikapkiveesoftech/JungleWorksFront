import React, { Component } from "react";

class RightSection extends Component {
  render() {
    return (
      <>
        <div className="project_detail">
          <div className="d-flex justify-content-between project_no">
            <a title="">Project No.: 20918240192384</a>
            <a title="">2018.08.02</a>
          </div>
          <div className="applicant">
            <div className="d-flex milestone">
              <div className="d-flex align-items-center">
                <span>
                  <img
                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/applicant.svg"
                    alt=""
                  />
                </span>
                <p>7 applicants</p>
              </div>
              <div className="d-flex align-items-center">
                <span>
                  <img src="img/milestone.svg" alt="" />
                </span>
                <p>Milestone</p>
              </div>
            </div>
            <div className="d-flex milestone">
              <div className="d-flex align-items-center">
                <span>
                  <img src="img/date.svg" alt="" />
                </span>
                <p>30 days</p>
              </div>
              <div className="d-flex align-items-center">
                <span>
                  <img src="img/time.svg" alt="" />
                </span>
                <p>3 days left</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between language_btn">
            <a title="">JAVA</a>
            <a title="">C#</a>
            <a title="">HTML</a>
            <a title="">ASP.NET</a>
          </div>
        </div>
      </>
    );
  }
}

export default RightSection;
