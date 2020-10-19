import React, { Component } from "react";

class CreateMilelage extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade post_modal mob_modal logo_design"
          id="create-milage-modal"
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
              <div className="modal-body text-center create_milestone">
                <h4 className="green_text">Create New Milestone</h4>
                <form className="post_form">
                  <div className="form-group">
                    <input
                      type="date"
                      placeholder="Due Date"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Amount"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="save_cancel">
                    <button type="button" className="btn save_btn">
                      OK
                    </button>
                    <button
                      type="button"
                      className="btn cancel_btn"
                      data-dismiss="modal"
                    >
                      Cancel
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

export default CreateMilelage;
