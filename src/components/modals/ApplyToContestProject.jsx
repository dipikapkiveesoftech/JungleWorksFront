import React, { Component } from "react";

class ApplyToContestProject extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade post_modal logo_design"
          id="logoDesign"
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
                <span className="green_text">Applying to </span>
                <div className="job_detail">
                  <div className="logo_detail">
                    <h2>
                      Logo Design{" "}
                      <span className="green_text">
                        <i
                          className="fa fa-question-circle"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </h2>
                    <label>
                      <span>1st Winning Amount : </span>
                      <span>US$1,500.00</span>
                    </label>
                    <label>
                      <span>2nd Winning Amount : </span>
                      <span>US$500.00</span>
                    </label>
                    <label>
                      <span>3nd Winning Amount : </span>
                      <span>US$500.00</span>
                    </label>
                  </div>
                  <label className="dueDateLbl">
                    <span>Due date :</span>
                    <span>23rd Aug 2019</span>
                  </label>
                  <div className="save_cancel">
                    <button type="button" className="btn save_btn">
                      Apply
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
          </div>
        </div>
      </>
    );
  }
}

export default ApplyToContestProject;
