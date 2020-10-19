import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
// Redux
import { onReduxRouteChange, onReduxProjectConfirmationDataHandle } from "../../store/action";
import { connect } from "react-redux";

class ContestDetail extends Component {
  onPageRedirectHandlePage = (redirectTo) => {
    this.props.onRouteChange(redirectTo)
    this.props.history.push(redirectTo)
  }
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errorMessage: {},
      isContestDetailActive: false,
    };
  }

  onPageRedirectHandle = (redirectTo) => {
    if (!this.handleValidation()) {
      return
    }
    else {
      let confirmationData = {
        projectType: "contest",
        title: "Design My logo",
        confirmationType: "Guranteed",
        privateText: "yes",
        award: {
          first: "1st US$499.00",
          second: "2nd US$159.00",
          third: "3rd US$100.00",
        },
        promotion: "US$79.00",
        blind: "US$39.00",
        total: " US$798.00"
      }
      var newurl = redirectTo + '?projectType=contest';
      this.props.onProjectConfirmationDataHandle(confirmationData)
      this.props.onRouteChange(redirectTo)
      this.props.history.push(newurl)
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleValidation() {
    let { languageData } = this.props;
    let fields = this.state.fields;
    let errorMessage = {};
    let formIsValid = true;

    //Name
    if (!fields["contestTitle"]) {
      formIsValid = false;
      errorMessage["contestTitle"] = languageData.REQUIRED_MESSAGE
    }

    this.setState({ errorMessage: errorMessage });
    return formIsValid;
  }

  onContestDetailReqActive = () => {
    let { isContestDetailActive } = this.state;
    this.setState({
      isContestDetailActive: !isContestDetailActive
    })
  }

  render() {
    let { isContestDetailActive } = this.state;
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post">
                  <h3 className="contest_title">Contest Detail</h3>
                  <div className="post_form packg_form">
                    <div className="contest_bodr">
                      <div className="contest_width">
                        <div className="form-group">
                          <label>Contest Title</label>
                          <input type="text" className="form-control" name="contestTitle" value={this.state.fields["contestTitle"]}
                            onChange={this.handleChange.bind(this, "contestTitle")} />
                          <span class="error">{this.state.errorMessage["projectType"]}</span>
                        </div>
                        </div>
                        <div className="contest_width">
                          <div className="form-group">
                            <label>Select Design Type</label>
                            <div className="row">
                              <div className="col-md-9">
                                <select className="form-control">
                                  <option>Select Design Type</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div className="col-md-3">
                                <button onClick={() => this.onPageRedirectHandlePage("/preferred-design")} type="button" className="btn save_btn"                        >
                                  Select Design Style
                                </button>
                              </div>
                            </div>
                            </div>
                            <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <textarea
                                  className="form-control"
                                  placeholder="Please, write your comment"
                                  rows="3"
                                ></textarea>
                              </div>
                            </div>
                        </div>
                        <div className="contest_range">
                          <h4 className="heading_h4">Design Preference :</h4>
                          <div className="row justify-content-between">
                            <div className="col-md-6">
                              <div className="d-flex align-items-center custom_range">
                                <label>Male</label>
                                <div className="range_slider">
                                  <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="20"
                                    className="slider"
                                    id="myRange"
                                  />
                                </div>
                                <label>Female</label>
                              </div>
                              <div className="d-flex align-items-center custom_range">
                                <label>Young</label>
                                <div className="range_slider">
                                  <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="20"
                                    className="slider"
                                    id="myRange2"
                                  />
                                </div>
                                <label>Mutual</label>
                              </div>
                              <div className="d-flex align-items-center custom_range">
                                <label>Modern</label>
                                <div className="range_slider">
                                  <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="20"
                                    className="slider"
                                    id="myRange3"
                                  />
                                </div>
                                <label>Classic</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="d-flex align-items-center custom_range">
                                <label>Luxury</label>
                                <div className="range_slider">
                                  <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="20"
                                    className="slider"
                                    id="myRange4"
                                  />
                                </div>
                                <label>Public</label>
                              </div>
                              <div className="d-flex align-items-center custom_range">
                                <label>Simple</label>
                                <div className="range_slider">
                                  <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="20"
                                    className="slider"
                                    id="myRange5"
                                  />
                                </div>
                                <label>Complex</label>
                              </div>
                              <div className="d-flex align-items-center custom_range">
                                <label>Abstract</label>
                                <div className="range_slider">
                                  <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="20"
                                    className="slider"
                                    id="myRange6"
                                  />
                                </div>
                                <label>Abstract</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hourly_limit">
                      <div className="position_rel">
                        <h4>
                          Contest Options
                          <span className="viewDetail">
                            <a
                              className="plus_btn"
                              aria-expanded={isContestDetailActive ? "true" : "false"} onClick={() => this.onContestDetailReqActive()}>
                              +
                            </a>
                          </span>
                        </h4>
                      </div>
                      <div className={isContestDetailActive ? "collapse animaton-height show" : "collapse animaton-height"}>
                        <div className="contest_bodr">
                          <div className="row">
                            <div className="col-md-6">
                              <h4 className="heading_h4">Guaranteed :</h4>
                              <div className="yes_no d-flex justify-content-between">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customcheck"
                                    required
                                  />
                                  <label
                                    className="custom-control-label"
                                    for="customcheck"
                                  >
                                    Yes
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customcheck2"
                                    required
                                  />
                                  <label
                                    className="custom-control-label"
                                    for="customcheck2"
                                  >
                                    No
                                    </label>
                                </div>
                              </div>
                              <p>
                                Guaranteed design contest means more designs and
                                more creativity, but no refund.
                                </p>
                            </div>
                            <div className="col-md-6">
                              <p className="green_text desc_p">Description</p>
                              <p>
                                By choosing this option, you’re letting designers
                                know that you’re all in and fully committed to
                                choosing a design. You won’t be able to request a
                                refund but you will:
                                </p>
                              <p>Have more designers participating</p>
                              <p>Receive 50% more designs on average</p>
                              <p>Get a wider range of creativity</p>
                            </div>
                          </div>
                        </div>
                        <div className="contest_bodr">
                          <div className="row">
                            <div className="col-md-6">
                              <h4 className="heading_h4">Private Contest :</h4>
                              <div className="yes_no d-flex justify-content-between">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customcheck3"
                                    required
                                  />
                                  <label
                                    className="custom-control-label"
                                    for="customcheck3"
                                  >
                                    Yes
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customcheck4"
                                    required
                                  />
                                  <label
                                    className="custom-control-label"
                                    for="customcheck4"
                                  >
                                    No
                                    </label>
                                </div>
                              </div>

                              <div className="form-group upload_file">
                                <p>
                                  Requires designers to sign a confidentiality
                                  agreement (use our NDA or upload your own)
                                  </p>
                                <label for="exampleFormControlFile1">
                                  <i
                                    className="fa fa-upload"
                                    aria-hidden="true"
                                  ></i>
                                </label>
                                <input
                                  type="file"
                                  className="form-control-file"
                                  id="exampleFormControlFile1"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <p className="green_text desc_p">Description</p>
                              <p>
                                By choosing this option, your design contest won’t
                                be visible outside of simplyonline.io.
                                </p>
                              <p>
                                Keeps your contest and designs out of Google (and
                                other) search engine results
                                </p>
                            </div>
                          </div>
                        </div>
                        <div className="contest_bodr">
                          <div className="row">
                            <div className="col-md-6">
                              <h4 className="heading_h4">
                                Add 2nd, 3rd places prize
                                </h4>
                              <div className="yes_no d-flex justify-content-between">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customcheck5"
                                    required
                                  />
                                  <label
                                    className="custom-control-label"
                                    for="customcheck5"
                                  >
                                    Yes
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customcheck6"
                                    required
                                  />
                                  <label
                                    className="custom-control-label"
                                    for="customcheck6"
                                  >
                                    No
                                    </label>
                                </div>
                              </div>

                              <div className="d-flex align-items-center inline_form">
                                <div className="d-flex align-items-center">
                                  <label>2nd place</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="US$"
                                  />
                                </div>
                                <div className=" d-flex align-items-center">
                                  <label>3rd place</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="US$"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <p className="green_text desc_p">Description</p>
                              <p>
                                Additional award increases chances for the designers
                                to win and therefore attracts more designers
                                </p>
                            </div>
                          </div>
                        </div>
                        <div className="contest_bodr">
                          <div className="promotion_box">
                            <div className="row">
                              <div className="col-md-6">
                                <h4 className="heading_h4">Promotion</h4>
                                <div className="yes_no d-flex justify-content-between">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customcheck7"
                                      required
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="customcheck7"
                                    >
                                      Promoted
                                    </label>
                                  </div>
                                  <label>US$79</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <p className="green_text desc_p">Description</p>
                                <p>
                                  Promote your project within our social channels of
                                  more users, attract more designers for the best
                                  results. Includes Facebook, Twitter, LinkedIn and
                                  Google+.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="promotion_box">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="yes_no d-flex justify-content-between">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customcheck8"
                                      required
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="customcheck7"
                                    >
                                      Featured contest
                                    </label>
                                  </div>
                                  <label>US$49</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  Your contest will be prominently featured in the
                                  top of the contest list as well as on the Home
                                  page! It means that you will receive up to 40%
                                  more designs!
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="promotion_box">
                            <div className="row align-items-center">
                              <div className="col-md-6">
                                <div className="yes_no d-flex justify-content-between">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customcheck9"
                                      required
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="customcheck9"
                                    >
                                      Blind
                                    </label>
                                  </div>
                                  <label>US$39</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  Increase Creativity - block designers from seeing
                                  each other entries
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="save_cancel text-right">
                        <button type="submit" className="btn cancel_btn">
                          Cancel
                          </button>
                        <button onClick={() => this.onPageRedirectHandle("/confirm-project")} type="submit" className="btn save_btn"                        >
                          Calculate
                          </button>
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
    onProjectConfirmationDataHandle: (data) => {
      dispatch(onReduxProjectConfirmationDataHandle(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchProps)(ContestDetail);
