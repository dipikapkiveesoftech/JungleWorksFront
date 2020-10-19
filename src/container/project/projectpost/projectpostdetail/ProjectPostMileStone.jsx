import React, { Component } from "react";

import RightTop from "../../../../components/rightbar/RightTop";
import RightBottom from "../../../../components/rightbar/RightBottom";
// Redux
import { onReduxRouteChange, onReduxProjectConfirmationDataHandle } from "../../../../store/action";
import { connect } from "react-redux";

class ProjectPostMileStone extends Component {
  onPageRedirectHandle = (redirectTo) => {
    let confirmationData = {
      projectType: "milestone",
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
    var newurl =redirectTo + '?projectType=milestone';
    this.props.onProjectConfirmationDataHandle(confirmationData)
    this.props.onRouteChange(redirectTo)
    this.props.history.push(newurl)
  }
  render() {
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post milestone_form post_milston">
                  <div className="milestone_step d-flex align-items-center">
                    <ul
                      className="nav nav-pills justify-content-center"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a className="">
                          STEP 1
                          <i
                            className="fa fa-arrow-circle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="active">
                          STEP 2
                          <i
                            className="fa fa-arrow-circle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="">
                          STEP 3
                          <i
                            className="fa fa-arrow-circle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <h4>Project Post [ Milestone ]</h4>
                      <form className="post_form">
                        <div className="contest_bodr">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label>Scope of Business</label>
                                <select className="form-control">
                                  <option>IT/WEB DEVELOPER</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="form-group">
                                <label>Add Required Skills</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Type required skills and enter to display"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Skills</label>
                            <div className="skill_btn">
                              <a className="green_btn" title="">
                                C#
                              </a>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-md-5">
                              <div className="form-group">
                                <label>Preferred Freelancer Type</label>
                                <select className="form-control">
                                  <option>Individual Developer</option>
                                  <option>Team</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>No. of Freelancer</label>
                                <select className="form-control">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="form-group">
                                <label>Project Period</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="days"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="work_card freelancer_req">
                            <p>
                              Where are you in the lifecycle of this project?
                            </p>
                            <ul
                              className="nav nav-pills mb-3"
                              id="pills-tab"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link active"
                                  id="pills-home3-tab"
                                  data-toggle="pill"
                                  href="#pills-home3"
                                  role="tab"
                                  aria-controls="pills-home3"
                                  aria-selected="true"
                                >
                                  N/A
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-profile3-tab"
                                  data-toggle="pill"
                                  href="#pills-profile3"
                                  role="tab"
                                  aria-controls="pills-profile3"
                                  aria-selected="false"
                                >
                                  I have an idea
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-contact3-tab"
                                  data-toggle="pill"
                                  href="#pills-contact3"
                                  role="tab"
                                  aria-controls="pills-contact3"
                                  aria-selected="false"
                                >
                                  I have design
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-design3-tab"
                                  data-toggle="pill"
                                  href="#pills-design3"
                                  role="tab"
                                  aria-controls="pills-design3"
                                  aria-selected="false"
                                >
                                  Specification
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-archite3-tab"
                                  data-toggle="pill"
                                  href="#pills-archite3"
                                  role="tab"
                                  aria-controls="pills-archite3"
                                  aria-selected="false"
                                >
                                  Architecture
                                </a>
                              </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                              <div
                                className="tab-pane fade show active"
                                id="pills-home3"
                                role="tabpanel"
                                aria-labelledby="pills-home3-tab"
                              >
                                <div className="hourly_limit">
                                  <div className="position_rel">
                                    <h4>
                                      Minimum Requirements for Freelancer
                                      <span className="viewDetail">
                                        <a
                                          className="plus_btn"
                                          data-toggle="collapse"
                                          href="#collapseExample2"
                                          role="button"
                                          aria-expanded="true"
                                          aria-controls="collapseExample2"
                                        >
                                          +
                                        </a>
                                      </span>
                                    </h4>
                                  </div>
                                  <div
                                    className="collapse"
                                    id="collapseExample2"
                                  >
                                    <div className="row align-items-center">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>No.of Star</label>
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
                                          <label>Job Success Score</label>
                                          <select className="form-control">
                                             <option>~60%</option>
                                            <option>61~70%</option>
                                            <option>71~80%</option>
                                            <option>81~90%</option>
                                            <option>90%~</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>Location</label>
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
                                          <label>Years of Experience</label>
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
                                          <label>English Level</label>
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
                                          <label>Due Date Score</label>
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
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-profile3"
                                role="tabpanel"
                                aria-labelledby="pills-profile3-tab"
                              >
                                <div className="hourly_limit">
                                  <div className="position_rel">
                                    <h4>
                                      Minimum Requirements for Freelancer
                                      <span className="viewDetail">
                                        <a
                                          className="plus_btn"
                                          data-toggle="collapse"
                                          href="#collapseExample3"
                                          role="button"
                                          aria-expanded="true"
                                          aria-controls="collapseExample3"
                                        >
                                          +
                                        </a>
                                      </span>
                                    </h4>
                                  </div>
                                  <div
                                    className="collapse show"
                                    id="collapseExample3"
                                  >
                                    <div className="row align-items-center">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>No.of Star</label>
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
                                          <label>Job Success Score</label>
                                          <select className="form-control">
                                              <option>~60%</option>
                                            <option>61~70%</option>
                                            <option>71~80%</option>
                                            <option>81~90%</option>
                                            <option>90%~</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>Location</label>
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
                                          <label>Years of Experience</label>
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
                                          <label>English Level</label>
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
                                          <label>Due Date Score</label>
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
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-contact3"
                                role="tabpanel"
                                aria-labelledby="pills-contact3-tab"
                              >
                                <div className="hourly_limit">
                                  <div className="position_rel">
                                    <h4>
                                      Minimum Requirements for Freelancer
                                      <span className="viewDetail">
                                        <a
                                          className="plus_btn"
                                          data-toggle="collapse"
                                          href="#collapseExample4"
                                          role="button"
                                          aria-expanded="true"
                                          aria-controls="collapseExample4"
                                        >
                                          +
                                        </a>
                                      </span>
                                    </h4>
                                  </div>
                                  <div
                                    className="collapse show"
                                    id="collapseExample4"
                                  >
                                    <div className="row align-items-center">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>No.of Star</label>
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
                                          <label>Job Success Score</label>
                                          <select className="form-control">
                                           <option>~60%</option>
                                            <option>61~70%</option>
                                            <option>71~80%</option>
                                            <option>81~90%</option>
                                            <option>90%~</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>Location</label>
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
                                          <label>Years of Experience</label>
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
                                          <label>English Level</label>
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
                                          <label>Due Date Score</label>
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
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-design3"
                                role="tabpanel"
                                aria-labelledby="pills-design3-tab"
                              >
                                <div className="hourly_limit">
                                  <div className="position_rel">
                                    <h4>
                                      Minimum Requirements for Freelancer
                                      <span className="viewDetail">
                                        <a
                                          className="plus_btn"
                                          data-toggle="collapse"
                                          href="#collapseExample5"
                                          role="button"
                                          aria-expanded="true"
                                          aria-controls="collapseExample5"
                                        >
                                          +
                                        </a>
                                      </span>
                                    </h4>
                                  </div>
                                  <div
                                    className="collapse show"
                                    id="collapseExample5"
                                  >
                                    <div className="row align-items-center">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>No.of Star</label>
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
                                          <label>Job Success Score</label>
                                          <select className="form-control">
                                             <option>~60%</option>
                                            <option>61~70%</option>
                                            <option>71~80%</option>
                                            <option>81~90%</option>
                                            <option>90%~</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>Location</label>
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
                                          <label>Years of Experience</label>
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
                                          <label>English Level</label>
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
                                          <label>Due Date Score</label>
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
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-archite3"
                                role="tabpanel"
                                aria-labelledby="pills-archite3-tab"
                              >
                                <div className="hourly_limit">
                                  <div className="position_rel">
                                    <h4>
                                      Minimum Requirements for Freelancer
                                      <span className="viewDetail">
                                        <a
                                          className="plus_btn"
                                          data-toggle="collapse"
                                          href="#collapseExample6"
                                          role="button"
                                          aria-expanded="true"
                                          aria-controls="collapseExample6"
                                        >
                                          +
                                        </a>
                                      </span>
                                    </h4>
                                  </div>
                                  <div
                                    className="collapse show"
                                    id="collapseExample6"
                                  >
                                    <div className="row align-items-center">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>No.of Star</label>
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
                                          <label>Job Success Score</label>
                                          <select className="form-control">
                                          <option>~60%</option>
                                            <option>61~70%</option>
                                            <option>71~80%</option>
                                            <option>81~90%</option>
                                            <option>90%~</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>Location</label>
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
                                          <label>Years of Experience</label>
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
                                          <label>English Level</label>
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
                                          <label>Due Date Score</label>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right save_cancel">
                            <button type="submit" className="btn save_btn" onClick={() => this.onPageRedirectHandle("/confirm-project")}>
                              Save & Continue
                            </button>
                            <button type="submit" className="btn cancel_btn">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="project_blog project_post text-right">
                  <a href="../Projects/project-blog.html" className="black_btn">
                    Project Blog
                  </a>
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

export default connect(mapStateToProps, mapDispatchProps)(ProjectPostMileStone);
