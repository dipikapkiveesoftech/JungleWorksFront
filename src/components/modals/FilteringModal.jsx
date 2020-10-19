import React, { Component } from "react";

class FilteringModal extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade post_modal mob_modal"
          id="filtering-modal"
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
                <h4 className="green_text">Working Condition</h4>
                <form className="post_form">
                  <div className="form-group">
                    <select className="form-control">
                      <option>Hourly</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option>Minimum Range</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Key words"
                      className="form-control"
                    />
                  </div>
                  <div className="save_cancel text-right mt-3">
                    <button
                      type="button"
                      className="btn save_btn mr-0"
                      data-dismiss="modal"
                    >
                      Confirm
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

export default FilteringModal;
