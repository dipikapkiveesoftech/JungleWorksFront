import React, { Component } from "react";
import { connect } from "react-redux";

class HourlyFreelancerDetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: this.props.selectedProject,
      selectedClient: "",
      isCollepsDataActive:true
    };
  }

  onCollepsDataHandle=()=>{

    let { isCollepsDataActive } = this.state;
    this.setState({
      isCollepsDataActive: !isCollepsDataActive
    })
  }

  render() {
    let { languageData } = this.props;
    let { selectedProject ,isCollepsDataActive} = this.state;
    console.log("selectedProject--->", selectedProject);
    return (
      <>
        <div className="position_rel">
          <h4>
            Detail
            <span className="viewDetail">
              <a  className="plus_btn" aria-expanded={isCollepsDataActive ? "true" : "false"} onClick={() => this.onCollepsDataHandle()}              >
                +
              </a>
            </span>
          </h4>
        </div>
        <div className={isCollepsDataActive ? "collapse animaton-height show" : "collapse animaton-height"}>
          <div className="row">
            <div className="col-md-9">
              <div className="time_limit">
                <div className="per_week">
                  <label className="green_text">Time Limit:</label>{" "}
                  <span>{selectedProject.timeLimit}</span>
                </div>
                <div className="per_week">
                  <label className="green_text">Closing Date:</label>{" "}
                  <span>12th Aug 2019</span>
                </div>
                <label className="green_text">Condition:</label>
                <ol>
                  <li>
                    <span>{selectedProject.developerType}</span>
                  </li>
                  <li>
                    <span>Asian Region</span>
                  </li>
                  <li>
                    <span>Entry Level: {selectedProject.hourlyRate}</span>
                  </li>
                  <li>
                    <span>{selectedProject.englishLevel}</span>
                  </li>
                  <li>
                    <span>
                      Others: I need a good skill of C# developer with more than
                      5 years of experience
                    </span>
                  </li>
                </ol>
                <div className="project_desc">
                  <label className="green_text">Project Description</label>
                  <p>
                      {selectedProject.projectContents}
                  </p>
                  <div className="form-group upload_file">
                    <label for="exampleFormControlFile1">
                      <a>
                        <i
                          className="fa fa-cloud-download"
                          aria-hidden="true"
                        ></i>
                        sampleImage.jpg
                      </a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="client_rating">
                <p className="client_text">Client</p>
                <div
                  className="d-flex align-items-center"
                  // onClick={() => this.handleNavRoute("client")}
                >
                  <span>J</span>
                  <p className="client_name">Jerry Mcguaer</p>
                </div>
                <div className="client_star">
                  <span>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </span>
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
    selectedProject: state.projectStore.selectedProject,
  };
}
function mapDispatchProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchProps)(HourlyFreelancerDetailCard);
