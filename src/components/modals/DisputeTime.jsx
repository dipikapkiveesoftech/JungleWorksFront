import React, { Component } from "react";

class DisputeTime extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade post_modal mob_modal"
          id="dispute-time-modal"
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
              <div className="modal-body end_contract dispute_hour">
                <h4 className="green_text">Dispute hours</h4>
                <p>Would you like to claim selected times?</p>
                <p>
                  <span>A201,</span>
                  <span>A320,</span>
                  <span>A330,</span>
                  <span>A345,</span>
                  <span>A334,</span>
                  <span>A232</span>
                </p>
                <p>
                  <small className="red_text">
                    You are not able to set it 0 when the activity is more than
                    50%
                  </small>
                </p>
                <div className="save_cancel">
                  <button type="button" className="btn save_btn">
                    Claim
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
      </>
    );
  }
}

export default DisputeTime;
