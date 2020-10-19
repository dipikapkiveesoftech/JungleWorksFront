import React, { Component } from "react";

class PauseModal extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade post_modal mob_modal"
          id="pause-project-modal"
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
              <div className="modal-body end_contract pause_project">
                <div className="post_form">
                  <h4 className="green_text">Pause Project</h4>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Write the reason of pause"
                    ></textarea>
                    <small className="red_text">
                      You must enter the reason
                    </small>
                  </div>

                  <div className="save_cancel">
                    <button type="button" className="btn save_btn">
                      Pause
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

export default PauseModal;
