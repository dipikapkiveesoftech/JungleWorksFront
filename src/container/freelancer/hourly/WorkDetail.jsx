import React, { Component } from "react";
import RightTop from "../../../components/rightbar/RightTop";
import RightBottom from "../../../components/rightbar/RightBottom";
import { connect } from "react-redux";
class WorkDetail extends Component {
  render() {
    let { languageData } = this.props;
    let { selectedProjectType, postType } = this.props;
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post">
                  <div className="work_date text-center">
                    <a title="">
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                    <span>Thursday, August 16, 2018</span>
                    <a title="">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="screen_capture">
                    <img src="../../img//capture-view.png" alt="" />
                  </div>
                  <div className="work_detail">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="">
                          <label className="green_text">Activity</label>
                        </div>
                        <div className="">
                          <label className="green_text">Memo : </label>
                          <span>
                            Make the identical all functionality for 2
                          </span>
                        </div>
                        <div className="">
                          <label className="green_text">
                            Activity Window:{" "}
                          </label>
                          <span>kyproject - Microsoft Visual Studio</span>
                        </div>
                        <div className="">
                          <label className="green_text">
                            Activity Level :{" "}
                          </label>
                          <span>78%</span>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="table-responsive detail_tbl">
                          <table className="table text-center">
                            <thead>
                              <tr>
                                <th scope="col" className="text-left">
                                  Time
                                </th>
                                <th scope="col">Keyboard</th>
                                <th scope="col">Mouse</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">20:10:19 AM</td>
                                <td>42</td>
                                <td>21</td>
                              </tr>
                              <tr>
                                <td className="text-left">20:10:19 AM</td>
                                <td>31</td>
                                <td>21</td>
                              </tr>
                              <tr>
                                <td className="text-left">20:10:19 AM</td>
                                <td>105</td>
                                <td>21</td>
                              </tr>
                              <tr>
                                <td className="text-left">20:10:19 AM</td>
                                <td>21</td>
                                <td>21</td>
                              </tr>
                              <tr>
                                <td className="text-left">20:10:19 AM</td>
                                <td>21</td>
                                <td>21</td>
                              </tr>
                              <tr>
                                <td className="text-left">20:10:19 AM</td>
                                <td>254</td>
                                <td>5</td>
                              </tr>
                              <tr>
                                <td className="text-left">20:10:19 AM</td>
                                <td>21</td>
                                <td>5</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
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


function mapStateToProps(state) {
  return {
    languageData: state.langaugeStore.languageData,
  };
}
function mapDispatchProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchProps)(WorkDetail);