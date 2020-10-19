import React, { Component } from "react";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
import RightSection from "./RightSection";
import PublicFeedback from "./PublicFeedback";

class Evaluation extends Component {
  render() {
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="card_box hover_none pfont_14">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-8 left_card">
                      <h3 className="green_text">
                        Homepage design for 40 pages
                      </h3>
                      <h4>US$2,400.00</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five
                      </p>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a >project</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            design
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-md-4 right_card">
					   <RightSection/>
				    </div>
                  </div>
                  <div className="post_form feedbk_box">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-5">
                        <div className="form-group">
                          <label className="green_text feedbk_lbl">
                            Reason for ending contract
                          </label>
                          <select className="form-control">
                            <option></option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="feedbk_bar">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-md-7">
                          <p>
                            How likely are you to recommend this freelancer to a
                            friend or a colleague?
                          </p>
                          <div className="progress_bar">
                            <div className="d-flex justify-content-between">
                              <label>Not at all likely</label>
                              <label>Extremely likely</label>
                            </div>
                            <div className="slidecontainer">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value="0"
                                className="slider"
                                id="myRange"
                              />
                              <div className="d-flex justify-content-between">
                                <label>
                                  <span id="demo"></span>%
                                </label>
                                <label>100%</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="public_feedbk">
						<PublicFeedback/>
					</div>
                  </div>
                </div>
                <div className="project_blog project_post post_modal end_cancel">
                  <p>
                    Ending this contract will permanently lock your freelancer's
                    Work Diary for this project. We'll let your freelancer know
                    the job is done and send you a final statement for any
                    unpaid work.
                  </p>
                  <div className="save_cancel">
                    <button type="submit" className="btn save_btn">
                      End
                    </button>
                    <button type="submit" className="btn cancel_btn">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <RightTop />
                <RightBottom />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Evaluation;
