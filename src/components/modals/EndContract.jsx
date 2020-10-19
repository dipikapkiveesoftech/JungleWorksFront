import React, { Component } from "react";

class EndContract extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade post_modal mob_modal"
          id="end-contract-modal"
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
              <div className="modal-body end_contract">
                <h4 className="green_text">End Contract</h4>
                <p>
                  Are you sure you want to end this contract?
                  <br />
                  You'll be prompted to provide feedback and make any final
                  payments in the following steps
                </p>
                <div className="save_cancel text-center">
                  <button type="button" className="btn save_btn">
                    Pay
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

export default EndContract;
