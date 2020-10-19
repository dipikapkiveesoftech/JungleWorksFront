import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

import LeftSection from "./../LeftSection";
import ParticipantSection from "./../ParticipantSection";
import ExpensionMilestone from "../expansionType/ExpensionMilestone";
// Redux
import { onReduxRouteChange, } from "../../../../store/action";
import { connect } from "react-redux";
class MilestoneFreelancer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onPageRedirectHandle = (redirectTo) => {

        this.props.onRouteChange(redirectTo)
        this.props.history.push(redirectTo)
      }
    render() {
        let { projectObj, index, openStatusIndex } = this.props;
        return (
            <>
                <div className="card_box work_card">
                    <div className="row justify-content-between">
                        <div className="col-md-3">
                            <LeftSection projectObj={projectObj} />
                        </div>
                        <div className="col-md-5">
                            <div className="design_work ">
                                <h3
                                    className="green_text"
                                    onClick={() => this.onPageRedirectHandle("/milestone-report")} 
                                >
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
                        </div>
                        <div className="col-md-2 align-self-center">
                            <ParticipantSection projectObj={projectObj} />
                        </div>
                        <div className="col-md-2 text-right">
                            <p className="client_text">{projectObj.projectType}</p>
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
      onRouteChange: (activeRoute) => {
        dispatch(onReduxRouteChange(activeRoute));
      },
    };
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchProps)(MilestoneFreelancer));
  