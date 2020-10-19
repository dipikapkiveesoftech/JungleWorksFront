import React, { Component } from "react";
import RightTop from "../../../../components/rightbar/RightTop";
import RightBottom from "../../../../components/rightbar/RightBottom";
// Redux
import { onReduxRouteChange, onReduxProjectConfirmationDataHandle } from "../../../../store/action";
import { connect } from "react-redux";

class ProjectPostHourly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLifecycleStage: 1,
      isMinReqSkillActive: false,
      skillName: "",
      skills: ["C#"],
      fields :{},
      errorMessage : {}
    };
  }
  onLifecycleStateChange = (stage) => {
    this.setState({
      selectedLifecycleStage: stage,
    });
  };
  onMinRequSecActive = () => {
    let { isMinReqSkillActive } = this.state;
    this.setState({
      isMinReqSkillActive: !isMinReqSkillActive
    })
  }
  onFormControlValueChange = (event) => {
    let value = event.target.value;
    this.setState({
      skillName: value
    })
  }

  onFormSubmitHandle=(event)=>{
    event.preventDefault();
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
  onSkillAddHandel = (event) => {
    if (event.key === 'Enter') {
        let { skillName, skills } = this.state;
        let { keyCode } = event;
       if (keyCode === 13 && skillName) {
         skills.push(skillName)
         this.setState({
           skills: skills,
            skillName: ""
          })
       }
    }
    else{
      return null;
    }
  }

  onPageRedirectHandle = (redirectTo) => {

    if(this.handleValidation()){
        let confirmationData = {
          projectType: "hourly",
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
        var newurl =redirectTo + '?projectType=hourly';
        this.props.onProjectConfirmationDataHandle(confirmationData)
        this.props.onRouteChange(redirectTo)
        this.props.history.push(newurl)
      }
    else{
      return;
    }
  }

  render() {
    let { selectedLifecycleStage, isMinReqSkillActive, skillName, skills } = this.state;
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
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <h4>Project Post [ Hourly ]</h4>
                      <form className="post_form" onSubmit={this.onFormSubmitHandle}>
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
                                  name="skillName"
                                  value={skillName}
                                  onChange={this.onFormControlValueChange}
                                  onKeyDown={this.onSkillAddHandel}
                                 // onKeyUp={this.onSkillAddHandel}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Skills</label>
                            <div className="skill_btn">
                              {skills && skills.length > 0 && skills.map((skill, index) =>
                                <a className="green_btn" title={skill}>
                                  {skill}
                                </a>
                              )}

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
                                <label>Maximum Week Hour</label>
                                <div className="d-flex align-items-center perWeek_text">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                  />
                                  <span>Hours Per Week</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="work_card freelancer_req">
                            <p>
                              Where are you in the lifecycle of this project?
                            </p>
                            <ul className="nav nav-pills mb-3" id="pills-tab"                            >
                              <li className="nav-item" onClick={() => this.onLifecycleStateChange(1)}>
                                <a className={selectedLifecycleStage === 1 ? "nav-link active" : "nav-link"} >N/A </a>
                              </li>
                              <li className="nav-item" onClick={() => this.onLifecycleStateChange(2)}>
                                <a className={selectedLifecycleStage === 2 ? "nav-link active" : "nav-link"} >I have an idea </a>
                              </li>
                              <li className="nav-item" onClick={() => this.onLifecycleStateChange(3)}>
                                <a className={selectedLifecycleStage === 3 ? "nav-link active" : "nav-link"} >I have design </a>
                              </li>
                              <li className="nav-item" onClick={() => this.onLifecycleStateChange(4)}>
                                <a className={selectedLifecycleStage === 4 ? "nav-link active" : "nav-link"} >Specification </a>
                              </li>
                              <li className="nav-item" onClick={() => this.onLifecycleStateChange(5)}>
                                <a className={selectedLifecycleStage === 5 ? "nav-link active" : "nav-link"} >Architecture </a>
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
                                        <a className="plus_btn" aria-expanded={isMinReqSkillActive ? "true" : "false"} onClick={() => this.onMinRequSecActive()}>
                                          +
                                        </a>
                                      </span>
                                    </h4>
                                  </div>
                                  <div className={isMinReqSkillActive ? "collapse animaton-height show" : "collapse animaton-height"} >
                                    <div className="row align-items-center">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>No.of Star</label>
                                          <select className="form-control">
                                            <option>1</option>
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

export default connect(mapStateToProps, mapDispatchProps)(ProjectPostHourly);