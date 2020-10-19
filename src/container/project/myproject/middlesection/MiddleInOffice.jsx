import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onReduxLangaugeChange,
  onReduxRouteChange,
  onReduxSelcteProjectChange,
} from "../../../../store/action";
import { Link, withRouter } from "react-router-dom";
class MiddleInOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectType: "",
    };
  }

  openMilestoneMain = (selectedProject) => {
    this.props.onSelcteProjectChange(selectedProject)
    this.props.history.push({
      pathname: "/inoffice-detail-for-freelancer",
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
        <div className="design_work maxWidth_100">
          <h2            className="green_text font_arial"     onClick={() => this.openMilestoneMain(projectObj)}       >
            {projectObj["projectTitle"]}
          </h2>
          <div className="week_tbl">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">3/7</th>
                  <th scope="col">Mon</th>
                  <th scope="col">Tue</th>
                  <th scope="col">Wed</th>
                  <th scope="col">Thur</th>
                  <th scope="col">Fri</th>
                  <th scope="col" className="red_text">
                    Sat
                  </th>
                  <th scope="col" className="red_text">
                    Sun
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Sonny</td>
                  <td>
                    <span className="green_dot"></span>
                  </td>
                  <td></td>
                  <td>
                    <span className="green_dot"></span>
                  </td>
                  <td></td>
                  <td>
                    <span className="green_dot"></span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
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

export default withRouter(connect(mapStateToProps, mapDispatchProps)(MiddleInOffice));