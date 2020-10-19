import React, { Component } from "react";
import RightTop from "../../../components/rightbar/RightTop";
import RightBottom from "../../../components/rightbar/RightBottom";
import CheckboxCard from "./../../../components/checkboxCard/CheckboxCard.jsx";

import LeftSection from "./LeftSection";
import MiddleSection from "./middlesection/MiddleSection";
import ParticipantSection from "./ParticipantSection";
import ExpensionContest from "./projectType/ExpensionContest";
import ExpensionHourly from "./projectType/ExpensionHourly";
import ExpensionInOffice from "./projectType/ExpensionInOffice";
import ExpensionMilestone from "./projectType/ExpensionMilestone";
import { projectData } from "../../../utils/dummy/ProjectData";

class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxData1: [
        { name: "milestone", title: "Milestone", checked: false },
        { name: "hourly", title: "Hourly", checked: false },
        { name: "inOffice", title: "In Office", checked: false },
        { name: "complex", title: "Complex", checked: false },
        { name: "fullTime", title: "Full Time", checked: false },
      ],
      checkboxData2: [
        { name: "recuritement", title: "Recuritement", checked: false },
        { name: "onGoing", title: "On Going", checked: false },
        { name: "completed", title: "Completed", checked: false },
      ]
    };
  }
  // componentDidMount() {
  //   let datas = projectData.project;
  //   console.log(datas);
  //   // we have to change loggged in user
  //   let selectedProject = datas[Math.floor(Math.random() * datas.length)];
  //   console.log(selectedProject);
  //   this.setState({ selectedProject });
  // }

  openView = (index) => {
    this.setState({
      openStatusIndex: index,
    });
  };

  closeView = (index) => {
    this.setState({
      openStatusIndex: -1,
    });
  };
  onCheckboxChangeHandle = (event, type, index) => {
    let { checkboxData1, checkboxData2 } = this.state;
    let { name, checked } = event.target;
    if (type === "checkboxData1") {
      checkboxData1[index].checked = checked
    }
    if (type === "checkboxData2") {
      checkboxData2[index].checked = checked
    }
    this.setState({
      checkboxData1, checkboxData2
    })
  }


  render() {
    let { openStatusIndex, checkboxData1, checkboxData2 } = this.state;
    let datas = projectData.project;
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-2 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <CheckboxCard title="Project Type" data={checkboxData1} type="checkboxData1" onChange={this.onCheckboxChangeHandle} />
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <CheckboxCard title="Status" data={checkboxData2} type="checkboxData2" onChange={this.onCheckboxChangeHandle} />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                {datas &&
                  datas.map((project, index) => (
                    <>
                      <div className="card_box work_card">
                        <div className="row justify-content-between">
                          <div className="col-md-3">
                            {<LeftSection projectObj={project} />}
                          </div>
                          <div className="col-md-6">
                            <MiddleSection projectObj={project} />
                          </div>
                          <div className="col-md-2 align-self-center">
                            <ParticipantSection projectObj={project} />
                          </div>
                          <div className="col-md-1 text-right">
                            <p className="client_text">{project.projectType}</p>
                          </div>
                        </div>
                        <div className="hourly_limit">
                          <div className="position_rel">
                            {openStatusIndex != index ? (
                              <span className="viewDetail" onClick={() => this.openView(index)} >View Detail  <button className="plus_btn" onClick={() => this.openView(index)}  > + </button> </span>
                            ) : (
                                <h4>  Detail <span className="viewDetail">
                                  <a className="plus_btn" role="button" aria-expanded="true" onClick={() => this.closeView(index)} > +  </a>
                                </span>
                                </h4>
                              )}
                          </div>

                          <div className={index == openStatusIndex ? "collapse show" : "collapse"} >
                            {project.projectType == "Contest" && (
                              <ExpensionContest projectObj={project} />
                            )}
                            {project.projectType == "Hourly" && (
                              <ExpensionHourly projectObj={project} />
                            )}
                            {project.projectType == "Milestone Project" && (
                              <ExpensionMilestone projectObj={project} />
                            )}
                            {project.projectType == "InOffice" && (
                              <ExpensionInOffice projectObj={project} />
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}

                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center page_div">
                    <li className="page-item">
                      <a className="page-link" aria-label="Previous">
                        <span aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link">1</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">3</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" aria-label="Next">
                        <span aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-2 col-md-12">
                <RightTop />
                <RightBottom />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MyProject;
