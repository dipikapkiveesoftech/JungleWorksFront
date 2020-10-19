import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onReduxLangaugeChange,
  onReduxRouteChange,
  onReduxSelcteProjectChange,
} from "../../../../store/action";
import { Link, withRouter } from "react-router-dom";

class MiddleMilestone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectType: "",
    };
  }

  openMilestoneMain = (selectedProject) => {
    this.props.onSelcteProjectChange(selectedProject)
    this.props.history.push({
      pathname: "/milestone-detail-for-freelancer",
      state: { selectedProject: selectedProject },
    });
  };

  render() {
    let { projectObj } = { ...this.props };
    let { languageData } = this.props;
    let projectType  = projectObj.projectType;
    console.log("projectType------>",projectType);
    return (
      <>
        <div className="design_work ">
          <h3 className="green_text" onClick={() => this.openMilestoneMain(projectObj)}          >
            {projectObj && projectObj["projectTitle"]}
          </h3>
          <div className="progress_bar">
            <div className="progress_value">
              <label>
                Tasks : <span>19</span>
              </label>
              <label>
                Completed : <span>16</span>
              </label>
            </div>
            <div className="progress">
              <div
                className="progress-bar blue_bar transition-width "
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="progress_bar">
            <div className="progress_value">
              <label>Milelage Payout</label>
              <div className="text-center"></div>
            </div>
            <div className="progress">
              <div
                className="progress-bar green_bar transition-width "
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <small>$2,500.00</small>
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
    activeRoute: state.routeStore.activeRoute,
  };
}
function mapDispatchProps(dispatch) {
  return {
    onSelcteProjectChange: (selectedProject) => {
      dispatch(onReduxSelcteProjectChange(selectedProject));
    },

  };
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(MiddleMilestone));
