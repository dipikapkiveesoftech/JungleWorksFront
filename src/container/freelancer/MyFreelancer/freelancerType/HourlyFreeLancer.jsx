import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

import LeftSection from "./../LeftSection";
import ParticipantSection from "./../ParticipantSection";
import ExpensionHourly from "../expansionType/ExpensionHourly";
// Redux
import { onReduxRouteChange, } from "../../../../store/action";
import { connect } from "react-redux";

class HourlyFreeLancer extends Component {
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
                <div className="hourly-freelancer card_box work_card">
                    <div className="row justify-content-between">
                        <div className="col-md-3">
                            {<LeftSection projectObj={projectObj} />}
                        </div>
                        <div className="col-md-8">
                            <div className="hourly-design design_work maxWidth_100">
                                <div className="row justify-content-between">
                                    <div className="col-md-8">
                                        <h2 className="green_text font_arial" onClick={() => this.onPageRedirectHandle("/hourly-report")}          >
                                            {projectObj["projectTitle"]}
                                        </h2>
                                    </div>
                                    <div className="col-md-4">
                                        <ParticipantSection projectObj={projectObj} />
                                    </div>
                                </div>
                                <div className="week_tbl">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col"><span className="main-text">Mon</span> <span className="sub-text">7/23</span></th>
                                                <th scope="col"><span className="main-text">Tue</span> <span className="sub-text">7/23</span></th>
                                                <th scope="col"><span className="main-text">Wed</span> <span className="sub-text">7/23</span></th>
                                                <th scope="col"><span className="main-text">Thru</span> <span className="sub-text">7/23</span></th>
                                                <th scope="col"><span className="main-text">Fri</span> <span className="sub-text">7/23</span></th>
                                                <th scope="col"><span className="main-text">Sat</span> <span className="sub-text">7/23</span></th>
                                                <th scope="col"><span className="main-text">Sun</span> <span className="sub-text">7/23</span></th>
                                                <th scope="col"><span className="main-text">Hours</span> </th>
                                                <th scope="col"><span className="main-text">Rate</span></th>
                                                <th scope="col"><span className="main-text">Amount</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="active">03:45</td>
                                                <td className="active">03:45</td>
                                                <td className="active">03:45</td>
                                                <td className="active"> ... </td>
                                                <td className="active">03:45</td>
                                                <td> </td>
                                                <td></td>
                                                <td>23:45</td>
                                                <td>$10.00/hr</td>
                                                <td>$2,000.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 text-right">
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
  
  export default withRouter(connect(mapStateToProps, mapDispatchProps)(HourlyFreeLancer));
  