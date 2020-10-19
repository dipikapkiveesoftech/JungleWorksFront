import React, { Component } from "react";

class RightFreelancerContent extends Component {
  render() {
    return (
      <>
        <div className="last_activity">
          <small className="green_text">
            Last Activity
            <a className="green_text">2018.08.02</a>
          </small>
        </div>
        <div className="skillBox">
          <div className="d-flex justify-content-between language_btn">
            <a title="">JAVA</a>
            <a title="">C#</a>
            <a title="">HTML</a>
            <a title="">ASP.NET</a>
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

export default RightFreelancerContent;
