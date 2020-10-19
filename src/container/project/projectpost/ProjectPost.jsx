import React, { Component } from "react";
import { connect } from "react-redux";
import RightTop from "../../../components/rightbar/RightTop";
import RightBottom from "../../../components/rightbar/RightBottom";
import { Route, Link } from "react-router-dom";
class ProjectPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postType: "newPost",
      selectedProject: "",
      projectType: "",
      fields :{},
      errorMessage : {}
    };
  }

  handleValidation(){
      let { languageData } = this.props;
      let { postType } = this.state;
      let fields = this.state.fields;
      let errorMessage ={};
      let formIsValid = true;

      if(!fields["projectType"]){
        formIsValid =false;
        errorMessage["projectType"] = languageData.REQUIRED_MESSAGE
      }
      if(postType == "newPost" && !fields["createNewPost"]){
        formIsValid =false;
        errorMessage["createNewPost"] = languageData.REQUIRED_MESSAGE
      }
      if(postType == "useExisting" && !fields["existingPost"]){
        formIsValid =false;
        errorMessage["existingPost"] = languageData.REQUIRED_MESSAGE
      }
      this.setState({errorMessage: errorMessage});
      return formIsValid;
  }
  handleChange(fieldData,e){
    let errorMessage ={};
    let fields = this.state.fields;
    fields[fieldData]=e.target.value;
    if(fields["projectType"] != 0){
      errorMessage["projectType"] = null;
    }
    else if(fields["createNewPost"] != 0){
      errorMessage["createNewPost"] = null;
    }
    else if(fields["existingPost"] != 0){
      errorMessage["existingPost"] = null;
    }
    else{
      this.setState({fields : fields[fieldData]});
    }
    this.setState({errorMessage: errorMessage});
  }
  handleProjectPost = (selectedProject) => {
    let projectType = this.state.fields.projectType;
    let redirectTo = ""

    if(this.handleValidation()){
      if (projectType === "milestone") {
            redirectTo = "/project-post-milestone"
          }
          else if  (projectType === "hourly") {
            redirectTo = "/project-post-hourly"
          }
          else if  (projectType === "hourlyInOffice") {
            redirectTo = "/project-post-office"
          }
          else if  (projectType === "inOffice") {
            redirectTo = "/project-post-office"
          }
          else if  (projectType === "contest") {
            redirectTo = "/contest-detail"
          }
          else {
            redirectTo = "/project-post-hourly"
          }

        this.props.history.push({
          pathname: redirectTo,
          state: { selectedProject: selectedProject },
        });
      }
      else{
        return
      }
  };
  postTypeHandle = (postType) => {
    this.setState({
      postType: postType,
    });
  };
  onFormValueChange = (fieldData,event) => {

    // let fields = this.state.fields;
    // fields[fieldData]=event.target.value;
    // this.setState({fields});

    let { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  render() {
    let { languageData } = this.props;
    let { selectedProjectType, postType, projectType } = this.state;
    //console.log("ProjectPost--->", languageData);
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post">
                  <h4>{languageData.POST_A_PROJECT}</h4>
                  <form className="post_form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            {languageData.SELECT_PROJECTY_TYPE}{" "}
                            <i
                              className="fa fa-question-circle"
                              aria-hidden="true"
                            ></i>
                          </label>
                          <select className="form-control" name="projectType" value={this.state.fields["projectType"]} 
                          //onChange={this.onFormValueChange}>
                          onChange={this.handleChange.bind(this,"projectType")}>
                            <option value="">{languageData.SELECT_PROJECTY_TYPE}</option>
                            <option value="milestone" className="contentList">
                              {languageData.MILESTONE_TEXT}
                            </option>
                            <option value="hourly" className="contentList">
                              {languageData.HOURLY_TEXT}
                            </option>
                            <option value="hourlyInOffice" className="contentList">
                              {languageData.HOURLYNOFFICE}
                            </option>
                            <option value="inOffice" className="contentList">
                              {languageData.IN_OFFICE}
                            </option>
                            <option value="contest" className="contentList">
                              {languageData.CONTEST}
                            </option>
                          </select>
                          <span class="error">{this.state.errorMessage["projectType"]}</span>
                        </div>
                        <div className="form-group">
                          <div
                            className="custom-control custom-radio"
                            onClick={() => this.postTypeHandle("newPost")}
                          >
                            <input
                              type="radio"
                              value={"newPost"}
                              name="posType"
                              className="custom-control-input"
                              checked={postType === "newPost"}
                            />
                            <label
                              className="custom-control-label"
                              for="customControlValidation1"
                            >
                              {languageData.CREATE_A_NEW_POST}
                            </label>
                          </div>
                          <input
                            type="text"
                            name="createNewPost"
                            value={this.state.fields["createNewPost"]}
                            className="form-control"
                            onChange={this.handleChange.bind(this,"createNewPost")}
                            disabled={postType !== "newPost"}
                          />
                            <span class="error" hidden={postType !== "newPost"}>{this.state.errorMessage["createNewPost"]}</span>
                        </div>
                        <div className="form-group">
                          <div
                            className="custom-control custom-radio"
                            onClick={() => this.postTypeHandle("useExisting")}
                          >
                            <input
                              type="radio"
                              value={"useExisting"}
                              name="postType"
                              className="custom-control-input"
                              checked={postType === "useExisting"}
                              onChange={this.handleChange.bind(this,"createNewPost")}
                            />
                            <label
                              className="custom-control-label"
                              for="customControlValidation2"
                            >
                              {languageData.REUSING_EXISTING_A_POST}
                            </label>
                          </div>
                          <select
                            className="form-control"
                            name="existingPost"
                            value={this.state.fields["existingPost"]}
                            onChange={this.handleChange.bind(this,"existingPost")}
                            disabled={postType !== "useExisting"}
                          >
                            <option></option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                          <span class="error" hidden={postType !== "useExisting"}>{this.state.errorMessage["existingPost"]}</span>
                        </div>
                        
                        <div className="btnSpaceTop save_cancel">
                          <button type="button" className="btn cancel_btn">
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn save_btn"
                            onClick={() =>
                              this.handleProjectPost(selectedProjectType)
                            }
                          >
                            Save & Continue
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="map_div">
                          <label>Please select your location of work</label>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1735769.8535458827!2d77.29538994999999!3d31.820213499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1593056340719!5m2!1shi!2sin"
                            width="100%"
                            height="150"
                            frameborder="0"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                          ></iframe>
                        </div>
                        <div className="help_box">
                          <h5>Need Extra Help?</h5>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customcheck1"
                              />
                              <label
                                className="custom-control-label"
                                for="customcheck1"
                              >
                                <span>
                                  <img
                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/search-assistant.svg"
                                    alt=""
                                  />
                                </span>
                                Search Assistant
                              </label>
                            </div>
                            <a
                              title=""
                              data-toggle="modal"
                              data-target="#searchAssistant"
                            >
                              View
                            </a>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customcheck2"
                              />
                              <label
                                className="custom-control-label"
                                for="customcheck2"
                              >
                                <span>
                                  <img
                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/nda.svg"
                                    alt=""
                                  />
                                </span>
                                NDA
                              </label>
                            </div>
                            <a title="" data-toggle="modal" data-target="#nda">
                              View
                            </a>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customcheck3"
                              />
                              <label
                                className="custom-control-label"
                                for="customcheck3"
                              >
                                <span>
                                  <img
                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/urgent.svg"
                                    alt=""
                                  />
                                </span>
                                Urgent
                              </label>
                            </div>
                            <a
                              title=""
                              data-toggle="modal"
                              data-target="#urgent"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="yesno_box">
                      <div className="yesno_bodr">
                        <p>Test service cost you 10% of the</p>
                        <div className="yes_no d-flex">
                          <p>
                            total project value...You can read more{" "}
                            <a>detail here</a>. Would like to take this service?
                          </p>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customcheck4"
                            />
                            <label
                              className="custom-control-label"
                              for="customcheck4"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customcheck5"
                            />
                            <label
                              className="custom-control-label"
                              for="customcheck5"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
  };
}
function mapDispatchProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchProps)(ProjectPost);
