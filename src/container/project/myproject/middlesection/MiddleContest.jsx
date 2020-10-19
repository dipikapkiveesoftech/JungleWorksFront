import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onReduxLangaugeChange,
  onReduxRouteChange,
  onReduxSelcteProjectChange,
} from "../../../../store/action";
import { Link, withRouter } from "react-router-dom";
class MiddleContest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectType: "",
    };
  }

  openMilestoneMain = (selectedProject) => {
    this.props.onSelcteProjectChange(selectedProject)
    this.props.history.push({
      pathname: "/contest-detail-for-freelancer",
      state: { selectedProject: selectedProject },
    });
  };

  render() {
    let { projectObj } = { ...this.props };
    let { languageData } = this.props;
    let projectType = projectObj.projectType;
    console.log("projectType------>", projectType);

    return (
      <>

        <div className="design_work">
          <h3 className="green_text" onClick={() => this.openMilestoneMain(projectObj)}       >
            {projectObj && projectObj["projectTitle"]}
          </h3>
          <div className="progress_value award_value d-flex align-items-center">
            <label>
              1st Award<span>US$2,000.00</span>
            </label>
            <label>
              2nd Award<span>US$1,000.00</span>
            </label>
            <label>
              3rd Award<span>US$1,000.00</span>
            </label>
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

export default withRouter(connect(mapStateToProps, mapDispatchProps)(MiddleContest));