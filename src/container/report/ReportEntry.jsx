import React, { Component } from "react";
import { connect } from "react-redux";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
import { projectData } from "../../utils/dummy/ProjectData";
import { Route, Link } from "react-router-dom";

class ReportEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: "",
      errorMessage : ""
    };
  }

  handleProjectReport = (item) => {
    let { languageData } = this.props;
    if(!item){
        this.setState({errorMessage : languageData.REQUIRED_MESSAGE})
    }
    else{
      const { selectedProject } = { ...this.state };
      this.props.history.push({
        pathname: "/report-main",
        state: { selectedProject: selectedProject },
      });
  }
  };

  selectingTitle = (item) => {
    const { name, value } = item.target;
    if (name == "selectProject") {
      this.setState({
        selectedProject: value,
      });
    }
  };

  render() {
    
    let data = projectData["project"];
    let {selectedProject,errorMessage} = this.state;
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-10 col-md-8">
                <div className="card_box hover_none">
                  <div className="post_form report_box">
                    <div className="row">
                      <div className="col-md-10">
                        <div className="form-group">
                          <label>Select your project</label>
                          <select 
                            className="form-control"
                            name="selectProject"
                            onChange={(e) => this.selectingTitle(e)}
                          >
                            <option>
                              Select Your Project
                            </option>
                            {data &&
                              data.map((x) => (
                                <option key={x.id} value={x.id}>
                                  {x.projectTitle}
                                </option>
                              ))}
                          </select>
                            <span class="error">{errorMessage}</span>
                        </div>
                      </div>
                    </div>
                    <div className="post_modal">
                      <div className="save_cancel">
                        <button
                          type="submit"
                          className="btn save_btn"
                          onClick={() =>
                            this.handleProjectReport(selectedProject)
                          }
                        >
                          Project Report
                        </button>
                        <button
                          type="button"
                          className="btn cancel_btn"
                          onclick="document\.location='../Projects/project-blog.html'"
                        >
                          Project Blog
                        </button>
                      </div>
                    </div>
                    <div className="notice_text">
                      <label>
                        Notice From <b>Simplyonline.io</b>
                      </label>
                      <div>
                        <label>
                          2018 Nov 20 03pm :{" "}
                          <span>
                            We have resolved your dispute and credited $40.00 to
                            your account
                          </span>
                        </label>
                        <label>
                          2018 Nov 19 02pm :{" "}
                          <span>
                            We have received $300.00 for the new event
                          </span>
                        </label>
                        <label>
                          2018 Nov 18 10am :{" "}
                          <span>
                            Project <a className="green_text">H202930283</a> has
                            been expired
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4"></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    languageData: state.langaugeStore.languageData,
  };
}

export default connect(mapStateToProps)(ReportEntry);
