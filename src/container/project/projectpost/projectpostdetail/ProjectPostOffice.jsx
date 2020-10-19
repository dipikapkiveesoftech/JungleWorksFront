import React, { Component } from "react";

import RightTop from "../../../../components/rightbar/RightTop";
import RightBottom from "../../../../components/rightbar/RightBottom";
// Redux
import { onReduxRouteChange, onReduxProjectConfirmationDataHandle } from "../../../../store/action";
import { connect } from "react-redux";

class ProjectPostOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields :{},
      errorMessage : {}
    };
  }
    handleValidation(){
      let { languageData } = this.props;
      let fields = this.state.fields;
      let errorMessage ={};
      let formIsValid = true;
  
      if(!fields["itWebDevloper"]){
        formIsValid =false;
        errorMessage["itWebDevloper"] = languageData.REQUIRED_MESSAGE
        
      }
      this.setState({errorMessage: errorMessage});
      return formIsValid;
  }
  
    handleChange(fieldData,e){
      let errorMessage ={};
      let fields = this.state.fields;
      fields[fieldData]=e.target.value;
      if(fields[fieldData] != 0 || ''){
        errorMessage["itWebDevloper"] = null;
        this.setState({errorMessage: errorMessage});
        return
      }
      else{
        this.setState({fields});
      }
    }

  onPageRedirectHandle = (redirectTo) => {
    if(this.handleValidation()){
        let confirmationData = {
          projectType: "office",
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
        var newurl =redirectTo + '?projectType=office';
        this.props.onProjectConfirmationDataHandle(confirmationData)
        this.props.onRouteChange(redirectTo)
        this.props.history.push(newurl)
      }
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
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <h4>Project Post [ In Office ]</h4>
                      <form className="post_form">
                        <div className="contest_bodr">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label>Scope of Business</label>
                                <select className="form-control"
                                    name="itWebDevloper" 
                                    value={this.state.fields["itWebDevloper"]}
                                    onChange={this.handleChange.bind(this,"itWebDevloper")}>
                                  <option value="">IT/WEB DEVELOPER</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                                <span class="error">{this.state.errorMessage["itWebDevloper"]}</span>
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
                          <div className="">
                            <label>Monthly Salary</label>
                            <div className="row align-items-center">
                              <div className="col-3">
                                <div className="form-group">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="form-group">
                                <span>~</span>
                              </div>
                              <div className="col-3">
                                <div className="form-group">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group">
                                <div className="d-flex">
                                  <label>Position Available</label>
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
                                      Until Hire
                                    </label>
                                  </div>
                                </div>
                                <input type="date" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Job Title</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Detail"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="text-right save_cancel">
                            <button type="button" className="btn save_btn" onClick={() => this.onPageRedirectHandle("/confirm-project")}>
                              Save & Continue
                            </button>
                            <button type="button" className="btn cancel_btn">
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

export default connect(mapStateToProps, mapDispatchProps)(ProjectPostOffice);
