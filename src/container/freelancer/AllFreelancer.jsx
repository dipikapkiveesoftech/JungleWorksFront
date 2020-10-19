import React, { Component } from "react";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
import CheckboxCard from "./../../components/checkboxCard/CheckboxCard.jsx";
import LeftFreelancerContent from "./freelancerContents/LeftFreelancerContent";
import MiddleFreelancerContent from "./freelancerContents/MiddleFreelancerContent";
import RightFreelancerContent from "./freelancerContents/RightFreelancerContent";
import ExtensionLeft from "./freelancerContents/extension/extensionSections/ExtensionLeft";
import ExtensionOngoing from "./freelancerContents/extension/extensionSections/ExtensionOngoing";
import ExtensionPrevious from "./freelancerContents/extension/extensionSections/ExtensionPrevious";
import ExtensionReview from "./freelancerContents/extension/extensionSections/ExtensionReview";
import { FreelancerData } from "../../utils/dummy/freelancerData";

class AllFreelancer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: [],
      mainExpansionPanelId: -1,
      subExpansionPanelId: -1,
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
      ],
    };
  }
  componentDidMount() {
    let datas = FreelancerData.freelancer;
    // we have to change loggged in user
    let selectedProject = datas[Math.floor(Math.random() * datas.length)];
    console.log(selectedProject);
    this.setState({ selectedProject });
  }
  onMainExpansionPanelHandle = (index) => {
    this.setState({
      mainExpansionPanelId: index,
    });
  };


  onSubExpansionPanelHandle = (index) => {
    this.setState({
      subExpansionPanelId: index,
    });
  };

  onCheckboxChangeHandle = (event, type, index) => {
    let { checkboxData1, checkboxData2 } = this.state;
    let { name, checked } = event.target;
    if (type === "checkboxData1") {
      checkboxData1[index].checked = checked;
    }
    if (type === "checkboxData2") {
      checkboxData2[index].checked = checked;
    }
    this.setState({
      checkboxData1,
      checkboxData2,
    });
  };
  render() {
    let {
      mainExpansionPanelId,
      subExpansionPanelId,
      checkboxData1,
      checkboxData2,
    } = this.state;
    let datas = FreelancerData.freelancer;
    return (
      <>
        <section className="card_sec freelancer-card">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-2 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <CheckboxCard
                      title="Project Type"
                      data={checkboxData1}
                      type="checkboxData1"
                      onChange={this.onCheckboxChangeHandle}
                    />
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <CheckboxCard
                      title="Status"
                      data={checkboxData2}
                      type="checkboxData2"
                      onChange={this.onCheckboxChangeHandle}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                {datas &&
                  datas.map((freelancer, index) => (
                    <>
                      <div className="card_box work_card client_detail">
                        <div className="row justify-content-between">
                          <div className="col-md-3 col_3">
                            <LeftFreelancerContent freelancerObj={freelancer} />
                          </div>
                          <div className="col-md-5 col_5">
                            <MiddleFreelancerContent
                              freelancerObj={freelancer}
                            />
                          </div>
                          <div className="col-md-4 text-right">
                            <RightFreelancerContent
                              freelancerObj={freelancer}
                            />
                          </div>
                        </div>
                        <div className="hourly_limit heigh_skill">
                          <div className="position_rel">
                            {/* {mainExpansionPanelId != index ? ( */}
                            <span className="viewDetail" onClick={() => this.onMainExpansionPanelHandle(mainExpansionPanelId === index ? -1 : index)} >
                              View Detail
                                <button className="plus_btn" aria-expanded={mainExpansionPanelId === index ? true : false}   >
                                +
                                </button>
                            </span>
                            {/* ) : ( */}
                            <div className={index == mainExpansionPanelId ? "collapse animaton-height show" : "collapse animaton-height"}  >
                              <div className="row">
                                <div className="col-md-3 col_3">
                                  <ExtensionLeft freelancerObj={freelancer} />
                                </div>
                                <div className="col-md-9 col_9">
                                  <div className="position_rel">
                                    <h4 className="green_text">
                                      Ongoing Projects
                                        <span className="viewDetail" onClick={() => this.onSubExpansionPanelHandle(subExpansionPanelId === (index + 1) ? -1 :index + 1)}>
                                        <a className="plus_btn" role="button" aria-expanded={subExpansionPanelId === (index + 1) ? true : false} > + </a>
                                      </span>
                                    </h4>
                                  </div>
                                  <div className={subExpansionPanelId === (index + 1) ? "collapse animaton-height show" : "collapse animaton-height"}                                      >
                                    <ExtensionOngoing freelancerObj={freelancer} />
                                  </div>
                                  <div className="position_rel">
                                    <h4 className="green_text">
                                      Previous Projects
                                          <span className="viewDetail" onClick={() => this.onSubExpansionPanelHandle(subExpansionPanelId === (index + 2) ? -1 :index + 2)}>
                                        <a className="plus_btn" role="button" aria-expanded={subExpansionPanelId === (index + 2) ? true : false} > + </a>
                                      </span>
                                    </h4>
                                  </div>
                                  <div className={subExpansionPanelId === (index + 2) ? "collapse animaton-height show" : " animaton-height collapse"}  >
                                    <ExtensionPrevious freelancerObj={freelancer} />
                                  </div>
                                  <div className="position_rel">
                                    <h4 className="green_text">
                                      Review
                                          <span className="viewDetail" onClick={() => this.onSubExpansionPanelHandle(subExpansionPanelId === (index + 3) ? -1 :index + 3)}>
                                        <a className="plus_btn" role="button" aria-expanded={subExpansionPanelId === (index + 3) ? true : false} > + </a>
                                      </span>
                                    </h4>
                                  </div>
                                  <div className={subExpansionPanelId === (index + 3) ? "collapse animaton-height show" : "collapse animaton-height"}                                      >
                                    <ExtensionReview freelancerObj={freelancer} />
                                    <nav aria-label="Page navigation example">
                                      <ul className="pagination justify-content-center page_div">
                                        <li className="page-item">
                                          <a
                                            className="page-link"
                                            aria-label="Previous"
                                          >
                                            <span aria-hidden="true"></span>
                                            <span className="sr-only">
                                              Previous
                                              </span>
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
                                          <a
                                            className="page-link"
                                            aria-label="Next"
                                          >
                                            <span aria-hidden="true"></span>
                                            <span className="sr-only">
                                              Next
                                              </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* )} */}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
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

export default AllFreelancer;
