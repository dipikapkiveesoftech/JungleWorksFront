import React, { Component } from "react";
import {projectData} from "../../../utils/dummy/ProjectData";
import { connect } from "react-redux";

class LeftSection extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }


  // shouldComponentUpdate=(nextProp, previousState)=> {
  //   if(nextProp.projectArr !==this.props.projectArr) {
  //     let {selectedProject} = this.props.projectArr; 
  //     console.log(selectedProject);
  //     let projectNo = selectedProject.map(x=>x.id==selectedProject.id)
  //     this.setState({
  //       projectNo 
  //     })
  //   } 
  //   return true;
  // }
 
  render() {
    let {projectObj} = {...this.props}
    let { languageData } = this.props;
    let { selectedProjectType, postType } = this.state;
    console.log("ProjectPost--->", languageData);
    return (
      <>
        <div className="project_no">
        <small>Project No.: {projectObj["projectNo"]}</small>
          <h4>{languageData.PROJECT_BUDGET}</h4>
          <h4>US${projectObj["projectAmount"]}</h4>

          {
            projectObj && projectObj["projectStatus"] == "Completed" ?
             <div class="due_date d-flex align-items-center pink_text">
            	<i class="fa fa-clock-o" aria-hidden="true"></i><span>{languageData.COMPLETED_TEXT}</span>
          </div> 
          : 
          <div className="due_date d-flex align-items-center korean">
            <i className="fa fa-clock-o" aria-hidden="true"></i> 
            <span>{languageData.TARGET_COMPLETION} : {projectObj["remain"]} {languageData.DAYS_LEFT}</span>
          </div>
          }

        </div>
      </>
    );
  }
}


function mapStateToProps(state) {
  return {
    languageData: state.langaugeStore.languageData,
  };
}
function mapDispatchProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchProps)(LeftSection);