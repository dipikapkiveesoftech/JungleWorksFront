import React, { Component } from "react";
import { connect } from "react-redux";
import RightTop from "../../../../components/rightbar/RightTop";
import RightBottom from "../../../../components/rightbar/RightBottom";
import { requiredSkills } from "../../../../utils/dummy/RequiredSkill";
import HourlyFreelancerDetailCard from "./HourlyFreelancerDetailCard";

class HourlyFreelancerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: this.props.selectedProject,
      selectedClient: "",
    };
  }

  handleNavRoute = (type) => {
    const { selectedProject, selectedClient } = { ...this.state };
    //const projectPage = "/project-blog";
    // const clientPage = "/client-detail";
    if (type == "project") {
      this.props.history.push({
        pathname: "/project-blog",
        state: { selectedProject: selectedProject },
      });
    } else {
      this.props.history.push({
        pathname: "/client-detail",
        state: { selectedClient: selectedClient },
      });
    }
  };
  renderSkillName = (item) => {
    let skillname = requiredSkills.filter((x) => x.id == item);
    if (skillname.length > 0) return skillname[0]["skillName"];
    return "";
  };

  render() {
    let { languageData } = this.props;
    let { selectedProject } = this.state;
debugger
    console.log("selectedProject--->", selectedProject);
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="card_box">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-8 left_card">
                      <h3 className="green_text">
                        {" "}
                        {selectedProject.projectTitle}
                      </h3>
                      <h4>
                        {" "}
                        {selectedProject.currency}{" "}
                        {selectedProject.projectAmount}
                      </h4>
                      <p>{selectedProject.projectContents}</p>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a>{selectedProject.projectType}</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            {selectedProject.businessCateogry}
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-md-4 right_card">
                      <div className="project_detail">
                        <div className="d-flex justify-content-between project_no">
                          <a title="">
                            {languageData.PROJECT_NO}:{" "}
                            {selectedProject.projectNo}
                          </a>
                          <a title="">{selectedProject.projectCreatedDate}</a>
                        </div>
                        <div className="applicant">
                          <div className="d-flex milestone">
                            <div className="d-flex align-items-center">
                              <span>
                                <img
                                  src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/applicant.svg"
                                  alt=""
                                />
                              </span>
                              <p>
                                {" "}
                                {selectedProject.applicants}{" "}
                                {languageData.APPLICANTS_TEXT}
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span>
                                <img
                                  src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/milestone.svg"
                                  alt=""
                                />
                              </span>
                              <p>{languageData.MILESTONE_TEXT}</p>
                            </div>
                          </div>
                          <div className="d-flex milestone">
                            <div className="d-flex align-items-center">
                              <span>
                                <img
                                  src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/date.svg"
                                  alt=""
                                />
                              </span>
                              <p>
                                {selectedProject.valid} {languageData.DAYS_TEXT}
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span>
                                <img
                                  src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/time.svg"
                                  alt=""
                                />
                              </span>
                              <p>
                                {selectedProject.remain}{" "}
                                {languageData.DAYS_LEFT}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between language_btn">
                          {/* <a  title="">
                            JAVA
                          </a>
                          <a  title="">
                            C#
                          </a>
                          <a  title="">
                            HTML
                          </a>
                          <a  title="">
                            ASP.NET
                          </a> */}
                          {selectedProject.requiredSkillIds &&
                            selectedProject.requiredSkillIds.map(
                              (id, index) =>
                                index < 4 && <a>{this.renderSkillName(id)}</a>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card_box pointer_none hourly_limit">
                   <HourlyFreelancerDetailCard/>             
                </div>

                <div className="project_blog project_post text-right post_modal">
                  <div className="save_cancel">
                    <button
                      type="submit"
                      className="btn save_btn"
                      onClick={() => this.handleNavRoute("project")}
                    >
                      Project Blog
                    </button>
                    <button type="submit" className="btn cancel_btn">
                      Apply
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

function mapStateToProps(state) {
  return {
    languageData: state.langaugeStore.languageData,
    language: state.langaugeStore.language,
    activeRoute: state.routeStore.activeRoute,
    selectedProject: state.projectStore.selectedProject,
  };
}
function mapDispatchProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchProps)(HourlyFreelancerDetail);
