import React, { Component } from "react";
import RightTop from "../components/rightbar/RightTop";
import RightBottom from "../components/rightbar/RightBottom";
class Profession extends Component {
  render() {
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post professio_nal">
                  <h4>Professional Area</h4>
                  <div className="d-flex">
                    <ul className="aside_menu list-unstyled">
                      <li className="active">
                        <a>Design</a>
                      </li>
                      <li>
                        <a>Information Technology</a>
                      </li>
                      <li>
                        <a>Administration</a>
                      </li>
                      <li>
                        <a>Accounting</a>
                      </li>
                      <li>
                        <a>Business Management</a>
                      </li>
                      <li>
                        <a>Sales</a>
                      </li>
                      <li>
                        <a>Construction</a>
                      </li>
                      <li>
                        <a>Education</a>
                      </li>
                      <li>
                        <a>Media</a>
                      </li>
                      <li>
                        <a>Medical</a>
                      </li>
                      <li>
                        <a>Production</a>
                      </li>
                    </ul>
                    <div className="right_content">
                      <div className="dev_box post_form">
                        <div className="d-flex align-items-center">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customcheck1"
                              required=""
                            />
                            <label
                              className="custom-control-label"
                              for="customcheck1"
                            >
                              Graphic Design
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customcheck2"
                              required=""
                            />
                            <label
                              className="custom-control-label"
                              for="customcheck2"
                            >
                              Publishing
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customcheck3"
                              required=""
                            />
                            <label
                              className="custom-control-label"
                              for="customcheck3"
                            >
                              Industrial Design
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customcheck4"
                              required=""
                            />
                            <label
                              className="custom-control-label"
                              for="customcheck4"
                            >
                              Character/Comics/Animation
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customcheck5"
                              required=""
                            />
                            <label
                              className="custom-control-label"
                              for="customcheck5"
                            >
                              Fashion Design
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="skill_name">
                        <a>Graphic Design</a>
                        <a>Industrial Design</a>
                        <div className="save_cancel text-right">
                          <button type="submit" className="btn save_btn">
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
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

export default Profession;
