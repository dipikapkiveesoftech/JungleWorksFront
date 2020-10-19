import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
// Redux
import { onReduxRouteChange } from "../../store/action";
import { connect } from "react-redux";

class PackageDesign extends Component {
  onPageRedirectHandle = (redirectTo) => {
    this.props.onRouteChange(redirectTo)
    this.props.history.push(redirectTo)
  }
  render() {
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post">
                  <div className="own_contest">
                    <div className="row">
                      <div className="col-md-6">
                        <h6>How it works?</h6>
                        <p>100% garanteed satisfaction</p>
                      </div>
                      <div className="col-md-6 text-right">
                        <Link to="/contest-detail" className="contest_btn" onClick={() => this.props.onRouteChange("/contest-detail")}>
                          Make it your own contest
                        </Link>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="nav nav-tabs tab_menu"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Logo & Identity
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        illustration
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Packaging & Label
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="video-tab"
                        data-toggle="tab"
                        href="#video"
                        role="tab"
                        aria-controls="video"
                        aria-selected="false"
                      >
                        Video Clip
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="business_card a_pack" onClick={() => this.onPageRedirectHandle("/preferred-design")}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="media">
                              <div className="media_left">
                                <i
                                  className="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="media-body">
                                <h5>Logo and Business Card</h5>
                                <span>From US$399</span>
                                <p>A logo and business card</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <ul className="list-unstyled">
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Logo</a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Business Card</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 text-center">
                            <h3 className="green_text">A Pack</h3>
                            <span>From US$399</span>
                          </div>
                        </div>
                      </div>
                      <div className="business_card b_pack" onClick={() => this.onPageRedirectHandle("/preferred-design")}                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="media">
                              <div className="media_left">
                                <i
                                  className="fa fa-dropbox"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="media-body">
                                <h5>Logo and Business Card</h5>
                                <span>From US$499</span>
                                <p>A logo plus digital and print essentials</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <ul className="list-unstyled">
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Logo</a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Business Card</a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Letterhead & Envelope</a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Facebook cover</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 text-center align-self-center">
                            <h3 className="blue_text">B Pack</h3>
                            <span>From US$499</span>
                          </div>
                        </div>
                      </div>
                      <div className="business_card c_pack"onClick={() => this.onPageRedirectHandle("/preferred-design")}                    >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="media">
                              <div className="media_left">
                                <i
                                  className="fa fa-bookmark"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="media-body">
                                <h5>Logo and Business Card</h5>
                                <span>From US$699</span>
                                <p>
                                  A logo plus digital and print essentials + Wix
                                  or WordPress
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <ul className="list-unstyled">
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Logo</a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Business Card</a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Letterhead & Envelope</a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Facebook cover</a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                <a>Wix or WordPress</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 text-center align-self-center">
                            <h3 className="pink_text">C Pack</h3>
                            <span>From US$699</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <form className="post_form packg_form">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <h5>Packaging & Label</h5>
                            </div>
                            <div className="form-group">
                              <label>Language</label>
                              <select className="form-control">
                                <option></option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>What is your organization name?</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>Select your industry</label>
                              <select className="form-control">
                                <option></option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="exampleFormControlTextarea1">
                                Description
                              </label>
                              <textarea
                                className="form-control"
                                placeholder="Tell the designers about the project that you need designed"
                                rows="3"
                              ></textarea>
                            </div>
                            <div className="form-group upload_file">
                              <label for="exampleFormControlFile1">
                                <i
                                  className="fa fa-cloud-upload"
                                  aria-hidden="true"
                                ></i>
                                Upload referencial files
                              </label>
                              <input
                                type="file"
                                className="form-control-file"
                                id="exampleFormControlFile1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-right save_cancel">
                          <button type="submit" className="btn cancel_btn">
                            Cancel
                          </button>
                          <button type="submit" className="btn save_btn">
                            Save & Continue
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="video"
                      role="tabpanel"
                      aria-labelledby="video-tab"
                    >
                      <form className="post_form packg_form">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <h5>Packaging & Label</h5>
                            </div>
                            <div className="form-group">
                              <label>Language</label>
                              <select className="form-control">
                                <option></option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Select the duration of video clip</label>
                              <select className="form-control">
                                <option>15 sec</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>
                                Add your preferred video style from Youtube
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="exampleFormControlTextarea1">
                                Description
                              </label>
                              <textarea
                                className="form-control"
                                placeholder="Tell the designers about the project that you need designed"
                                rows="3"
                              ></textarea>
                            </div>
                            <div className="form-group upload_file">
                              <label for="exampleFormControlFile1">
                                <i
                                  className="fa fa-cloud-upload"
                                  aria-hidden="true"
                                ></i>
                                Upload referencial files
                              </label>
                              <input
                                type="file"
                                className="form-control-file"
                                id="exampleFormControlFile1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-right save_cancel">
                          <button type="submit" className="btn cancel_btn">
                            Cancel
                          </button>
                          <button type="submit" className="btn save_btn">
                            Save & Continue
                          </button>
                        </div>
                      </form>
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

function mapStateToProps(state) {
  return {
    languageData: state.langaugeStore.languageData,
    language: state.langaugeStore.language,
    activeRoute: state.routeStore.activeRoute,
  };
}
function mapDispatchProps(dispatch) {
  return {
    onRouteChange: (activeRoute) => {
      dispatch(onReduxRouteChange(activeRoute));
    },
  };
}

export default connect(mapStateToProps, mapDispatchProps)(PackageDesign);
