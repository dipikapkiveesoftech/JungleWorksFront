import React, { Component } from "react";

class ApplyProject extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade post_modal logo_design"
          id="nda"
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
              <div className="modal-body job_offer budget_modal">
                <span className="green_text">Applying to</span>
                <div className="job_detail">
                  <h2>Web Development</h2>
                </div>
                <form className="post_form">
                  <label>
                    <span>Budget : </span>
                    <span>US$1,500.00</span>
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="The amount you bid"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option>Estimated Completion</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="save_cancel">
                    <button
                      type="button"
                      className="btn save_btn"
                      data-dismiss="modal"
                    >
                      OK
                    </button>
                    <button type="button" className="btn cancel_btn">
                      Change
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ApplyProj;
