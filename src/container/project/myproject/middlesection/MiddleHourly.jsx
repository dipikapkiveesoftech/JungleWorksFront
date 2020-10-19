import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onReduxLangaugeChange,
  onReduxRouteChange,
  onReduxSelcteProjectChange,
} from "../../../../store/action";
import { Link, withRouter } from "react-router-dom";
class MiddleHourly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectType: "",
    };
  }

  openMilestoneMain = (selectedProject) => {
    this.props.onSelcteProjectChange(selectedProject)
    this.props.history.push({
      pathname: "/hourly-detail-for-freelancer",
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
        <div class="design_work">
          <h3           class="green_text font_arial" onClick={() => this.openMilestoneMain(projectObj)}           >
             { projectObj && projectObj["projectTitle"]}
          </h3>
          <div className="client_rating clientBox">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <span>J</span>
                <p>Total : 234 hours</p>
                <p className="ml-1">Amount : US$234,00</p>
              </div>
              <div className="d-flex align-items-center">
                <span className="freelancer_img">
                  <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/freelancer_img.png" alt="" />
                </span>
                <p>Total : 234 hours</p> {' '}
                <p className="ml-1">Amount : US$234,00</p>
              </div>
              {/* <div className="d-flex align-items-center">
                <span className="freelancer_img">
                  <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/freelancer_img2.png" alt="" />
                </span>
                <p>Total : 234 hours</p>
                <p>Amount US$234,00</p>
              </div> */}
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

export default withRouter(connect(mapStateToProps, mapDispatchProps)(MiddleHourly));