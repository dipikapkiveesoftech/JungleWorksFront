import React, { Component } from "react";
import MiddleMilestone from "./MiddleMilestone";
import MiddleContest from "./MiddleContest";
import MiddleHourly from "./MiddleHourly";
import MiddleInOffice from "./MiddleInOffice";

class MiddleSection extends Component {
  render() {

    let {projectObj} ={...this.props};   
    return (
      <>
          { 
            projectObj.projectType == "Milestone Project" &&
            <MiddleMilestone projectObj={projectObj}  /> 
          }
          { 
            projectObj.projectType == "Contest" &&
            <MiddleContest projectObj={projectObj} /> 
          }
          { 
            projectObj.projectType == "InOffice" &&
            <MiddleInOffice projectObj={projectObj} /> 
          }
          { 
            projectObj.projectType == "Hourly" &&
            <MiddleHourly projectObj={projectObj} /> 
          }
      </>
    );
  }
}

export default MiddleSection;
