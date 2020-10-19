import React, { Component } from "react";

class AcceptJobOffer extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade post_modal"
          id="searchAssistant"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <a className="footer_logo">
                  <img
                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/logo2.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">x</span>
                </button>
              </div>
              <div className="modal-body job_offer">
                <span className="green_text">
                  Accept Job offer{" "}
                  <i className="fa fa-question-circle" aria-hidden="true"></i>
                </span>
                <div className="job_detail">
                  <h2>Web Development ...</h2>
                  <label>
                    <span>Amount : </span>
                    <span>US$1,500.00</span>
                  </label>
                  <label>
                    <span>1st Milestone :</span>
                    <span>US$300.00</span>
                  </label>
                  <label>
                    <span>Due date :</span>
                    <span>23rd Aug 2019</span>
                  </label>
                </div>
              </div>
              <div className="save_cancel">
                <button type="button" className="btn save_btn">
                  Accept
                </button>
                <button
                  type="button"
                  className="btn cancel_btn"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AcceptJobOffer;
