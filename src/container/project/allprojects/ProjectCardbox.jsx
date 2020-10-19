import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { requiredSkills } from "../../../utils/dummy/RequiredSkill";
import {
  onReduxLangaugeChange,
  onReduxRouteChange,
  onReduxSelcteProjectChange,
} from "../../../store/action";
import { connect } from "react-redux";

class ProjectCardbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProjectTitle: "",
    };
  }

  componentDidMount() {
    let { location } = this.props;
    if (location && location.pathname) {
      this.props.onRouteChange(location.pathname);
    }
  }
  componentWillMount() {
    let data = localStorage.getItem("langauge");
    let langauge = JSON.parse(data);
    if (langauge) {
      this.props.onLangaugeChange(langauge);
    }
  }

  onLangaugeDataChange = (language) => {
    localStorage.setItem("langauge", JSON.stringify(language));
    this.props.onLangaugeChange(language);
  };

  renderSkillName = (item) => {
    let skillname = requiredSkills.filter((x) => x.id == item);
    if (skillname.length > 0) return skillname[0]["skillName"];
    return "";
  };

  handleProjectTitleClick = (selectedProject) => {
    this.props.onSelcteProjectChange(selectedProject);
    this.props.history.push("/hourly-detail-for-freelancer");
  };

  render() {
    let { selectedProject, skillName, languageData, language } = this.props;
    return (
      <>
        <div className="card_box">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-8 ">
              <div
                onClick={() => this.handleProjectTitleClick(selectedProject)}
              >
                <h3>{selectedProject.projectTitle}</h3>
              </div>
              <h4>
                {selectedProject.currency}
                {selectedProject.projectAmount}
              </h4>
              {/* 
               
              We need to activate when integrating API

               <div className="placeholder" style={{ maxWidth: "80%" }}>
                <div className="animated-background"></div>
              </div>
              <div className="placeholder">
                <div className="animated-background"></div>
              </div> */}
              <p>{selectedProject.projectContents}</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>{selectedProject.projectType}</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {selectedProject.businessCateogry}
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-md-4 ">
              <div className="project_detail">
                <div className="d-flex justify-content-between project_no">
                  <a title="">
                    {languageData.PROJECT_NO}: {selectedProject.projectNo}
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
                        <img src="./assets/img/time.svg" alt="" />
                      </span>
                      <p>
                        {selectedProject.remain} {languageData.DAYS_LEFT}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between language_btn">
                  {skillName &&
                    skillName.map(
                      (id, index) =>
                        index < 4 && <a title="">{this.renderSkillName(id)}</a>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
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
    onLangaugeChange: (langauge) => {
      dispatch(onReduxLangaugeChange(langauge));
    },
    onRouteChange: (activeRoute) => {
      dispatch(onReduxRouteChange(activeRoute));
    },
    onSelcteProjectChange: (selectedProject) => {
      dispatch(onReduxSelcteProjectChange(selectedProject));
    },
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchProps)(ProjectCardbox)
);
