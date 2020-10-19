import React, { Component } from 'react';
import { connect } from "react-redux";
import RightTop from "../../../components/rightbar/RightTop";
import RightBottom from "../../../components/rightbar/RightBottom";
class MileStoneMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      isReportTableViewActive:false
    };
  }
  onTabChangeHandle = (selectedTab) => {
    this.setState({
      activeTab: selectedTab,
    });
  };
  onReportViewChange=()=>{
    let {isReportTableViewActive}=  this.state;
    this.setState({
      isReportTableViewActive: !isReportTableViewActive
    })

  }
  render() {
    let { languageData } = this.props;
    let { activeTab, isReportTableViewActive } = this.state;
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-8">
                <div className="project_post invoice_tab work_card">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" onClick={() => this.onTabChangeHandle(1)}>
                      <a className={activeTab === 1 ? "nav-link active" : "nav-link"}>Milelage </a>
                    </li>
                    <li className="nav-item" onClick={() => this.onTabChangeHandle(2)}>
                      <a className={activeTab === 2 ? "nav-link active" : "nav-link"}>Work Report </a>
                    </li>
                    <li className="nav-item" onClick={() => this.onTabChangeHandle(3)}>
                      <a className={activeTab === 3 ? "nav-link active" : "nav-link"}>Contract Detail </a>
                    </li>
                  </ul>
                  <div className="tab-content workDiary_tab" id="pills-tabContent">
                    <div className={activeTab === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                      <div className="pause_end">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="media align-items-center">
                              <div className="media-left d-flex align-items-center justify-content-center"><i className="fa fa-user" aria-hidden="true"></i></div>
                              <div className="media-body post_modal">
                                <div className="save_cancel">
                                  <button type="button" className="btn white_btn">Pause</button>
                                  <button type="button" className="btn gray_btn">End Contract</button>
                                </div>
                                <h5>James Doe</h5>
                                <p className="green_text">Working Now</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 text-right">
                            <h6>Unpaid Amount</h6>
                            <label className="green_text">$230.00</label>
                            <div className="save_cancel">
                              <button type="button" className="btn save_btn">Pay</button>
                              <button type="button" className="btn cancel_btn">Dispute</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hourly_limit">
                        <div className="position_rel">
                          <h4><span className="viewDetail"><a className="plus_btn" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="true" aria-controls="collapseExample2">+</a></span></h4>
                        </div>
                        <div className="collapse show" id="collapseExample2">
                          <div className="work_hours">
                            <div className="row justify-content-between">
                              <div className="col-md-4">
                                <div className="row">
                                  <div className="col-6">
                                    <span>Budget</span>
                                    <label className="green_text">$150.00</label>
                                  </div>
                                  <div className="col-6">
                                    <span>In Escrow</span>
                                    <label className="green_text">$20.00</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="row">
                                  <div className="col-6">
                                    <span>Milestone Paid</span>
                                    <label className="green_text">$130.00</label>
                                  </div>
                                  <div className="col-6">
                                    <span>Remaining</span>
                                    <label className="green_text">$20.00</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="total_earn">
                                  <span>Total Payments</span>
                                  <label className="green_text">$130.00</label>
                                </div>
                              </div>
                            </div>
                            <div className="current_milston">
                              <div className="row align-items-center">
                                <div className="col-sm-8">
                                  <div className="escrow"><span>Current Milestone</span></div>
                                  <div className="escrow"><span>Task Key :</span>  <span>NYA4</span></div>
                                  <div className="escrow"><span>In Escrow: $20.00</span></div>
                                </div>
                                <div className="col-sm-4 text-right">
                                  <div className="save_cancel">
                                    <button type="button" className="btn save_btn">Create New Milestone</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="task_manage milestone_tble">
                              <div className="table-responsive detail_tbl">
                                <table className="table text-center">
                                  <thead>
                                    <tr>
                                      <th scope="col" className="text-left">Milestone</th>
                                      <th scope="col">Due Date</th>
                                      <th scope="col">Completed</th>
                                      <th scope="col">Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="text-left">1st Project milestone</td>
                                      <td>2018 JAN 23</td>
                                      <td>2018 JAN 23</td>
                                      <td>U$130.00</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hourly_limit">
                        <div className="position_rel">
                          <h4><span className="viewDetail"><a className="plus_btn" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="true" aria-controls="collapseExample3">+</a></span></h4>
                        </div>
                        <div className="collapse show" id="collapseExample3">
                          <div className="task_manage post_modal post_form">
                            <div className="save_cancel d-flex align-items-center">
                              <label className="green_text">Task Management</label>
                              <button type="button" className="btn gray_btn">Issue new task</button>
                            </div>

                            <div className="table-responsive detail_tbl">
                              <table className="table text-center">
                                <thead>
                                  <tr>
                                    <th scope="col" className="text-left">Task</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Key</th>
                                    <th scope="col">Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="text-left">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck19" required="" checked />
                                        <label className="custom-control-label" for="customcheck19">Login</label>
                                      </div>
                                    </td>
                                    <td>Completed</td>
                                    <td>NYA1</td>
                                    <td>03:45</td>
                                  </tr>
                                  <tr>
                                    <td className="text-left">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck20" required="" checked />
                                        <label className="custom-control-label" for="customcheck20">Forgot Password</label>
                                      </div>
                                    </td>
                                    <td>Completed</td>
                                    <td>NYA2</td>
                                    <td>03:45</td>
                                  </tr>
                                  <tr>
                                    <td className="text-left">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck21" required="" checked />
                                        <label className="custom-control-label" for="customcheck21">Search</label>
                                      </div>
                                    </td>
                                    <td>Completed</td>
                                    <td>NYA3</td>
                                    <td>03:45</td>
                                  </tr>
                                  <tr>
                                    <td className="text-left">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck22" required="" checked />
                                        <label className="custom-control-label" for="customcheck22">Push notification</label>
                                      </div>
                                    </td>
                                    <td>Completed</td>
                                    <td>NYA4</td>
                                    <td>03:45</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center page_div">
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                  <span aria-hidden="true"></span>
                                  <span className="sr-only">Previous</span>
                                </a>
                              </li>
                              <li className="page-item active"><a className="page-link" href="#">1</a></li>
                              <li className="page-item"><a className="page-link" href="#">2</a></li>
                              <li className="page-item"><a className="page-link" href="#">3</a></li>
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                  <span aria-hidden="true"></span>
                                  <span className="sr-only">Next</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className={activeTab === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                      <div className="pause_end">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="media align-items-center">
                              <div className="media-left d-flex align-items-center justify-content-center"><i className="fa fa-user" aria-hidden="true"></i></div>
                              <div className="media-body post_modal">
                                <div className="save_cancel">
                                  <button type="button" className="btn white_btn">Pause</button>
                                  <button type="button" className="btn gray_btn">End Contract</button>
                                </div>
                                <h5>James Doe</h5>
                                <p className="green_text">Working Now</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 text-right">
                            <h6>Unpaid Amount</h6>
                            <label className="green_text">$230.00</label>
                            <div className="save_cancel">
                              <button type="button" className="btn save_btn">Pay</button>
                              <button type="button" className="btn cancel_btn">Dispute</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hourly_limit">
                        <div className="position_rel">
                          <h4><span className="viewDetail"><a className="plus_btn" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">+</a></span></h4>
                        </div>
                        <div className="collapse show" id="collapseExample">
                          <div className="pause_dispute">
                            <div className="row">
                              <div className="col-md-7">
                                <div className="tracked_div">
                                  <label>Total: 1:20hrs</label>
                                  <span><span className="blue_box"></span>Tracked 1: 20hrs</span>
                                  <span><span className="red_box"></span>Manual 1: 20hrs</span>
                                </div>
                              </div>
                              <div className="col-md-5 text-right post_modal">
                                <div className="save_cancel">
                                  <button type="button" className="btn white_btn">Pause</button>
                                  <button type="button" className="btn gray_btn">Dispute Hours</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tracked_div candidate_reg">
                            <label>Activity</label>
                            <span>New Candidate Registration</span>
                            <span>92%</span>
                            <span>
                              <button className={!isReportTableViewActive ? "grid-list animation":"grid-list animation active" } onClick={()=> this.onReportViewChange()}>
                                <div className="icon">
                                  <div className="dots">
                                    <i></i><i></i><i></i><i></i>
                                  </div>
                                  <div className="lines">
                                    <i></i><i></i><i></i><i></i>
                                  </div>
                                </div>
                                <div className="text">
                                  <span>Grid</span>
                                  <span>List</span>
                                </div>
                              </button>
                            </span>
                          </div>
                          <div className="table-responsive post_form work_diary">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <th scope="col">7am</th>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck1" required="" />
                                        <label className="custom-control-label" for="customcheck1">7:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck2" required="" />
                                        <label className="custom-control-label" for="customcheck2">7:00 am</label>
                                        <span>49%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck3" required="" />
                                        <label className="custom-control-label" for="customcheck3">7:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck4" required="" />
                                        <label className="custom-control-label" for="customcheck4">7:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck5" required="" />
                                        <label className="custom-control-label" for="customcheck5">7:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck6" required="" />
                                        <label className="custom-control-label" for="customcheck6">7:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="col">8am</th>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck7" required="" />
                                        <label className="custom-control-label" for="customcheck7">8:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck8" required="" />
                                        <label className="custom-control-label" for="customcheck8">8:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck9" required="" />
                                        <label className="custom-control-label" for="customcheck9">8:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck10" required="" />
                                        <label className="custom-control-label" for="customcheck10">8:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck11" required="" />
                                        <label className="custom-control-label" for="customcheck11">8:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck12" required="" />
                                        <label className="custom-control-label" for="customcheck12">8:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="col">9am</th>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck13" required="" />
                                        <label className="custom-control-label" for="customcheck13">9:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck14" required="" />
                                        <label className="custom-control-label" for="customcheck14">9:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck15" required="" />
                                        <label className="custom-control-label" for="customcheck15">9:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck16" required="" />
                                        <label className="custom-control-label" for="customcheck16">9:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck17" required="" />
                                        <label className="custom-control-label" for="customcheck17">9:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a href="../Hourly/hourly-report.html" title=""><img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png" alt="" /><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customcheck18" required="" />
                                        <label className="custom-control-label" for="customcheck18">9:00 am</label>
                                        <span>92%</span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center page_div">
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                  <span aria-hidden="true"></span>
                                  <span className="sr-only">Previous</span>
                                </a>
                              </li>
                              <li className="page-item active"><a className="page-link" href="#">1</a></li>
                              <li className="page-item"><a className="page-link" href="#">2</a></li>
                              <li className="page-item"><a className="page-link" href="#">3</a></li>
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                  <span aria-hidden="true"></span>
                                  <span className="sr-only">Next</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className={activeTab === 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                      <div className="pause_end">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="media align-items-center">
                              <div className="media-left d-flex align-items-center justify-content-center"><i className="fa fa-user" aria-hidden="true"></i></div>
                              <div className="media-body post_modal">
                                <div className="save_cancel">
                                  <button type="button" className="btn white_btn">Pause</button>
                                  <button type="button" className="btn gray_btn">End Contract</button>
                                </div>
                                <h5>James Doe</h5>
                                <p className="green_text">Working Now</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 text-right">
                            <h6>Unpaid Amount</h6>
                            <label className="green_text">$230.00</label>
                            <div className="save_cancel">
                              <button type="button" className="btn save_btn">Pay</button>
                              <button type="button" className="btn cancel_btn">Dispute</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hourly_limit post_form hourly_report">
                        <div className="position_rel">
                          <h4><span className="viewDetail"><a className="plus_btn" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="true" aria-controls="collapseExample4">+</a></span></h4>
                        </div>
                        <div className="collapse show" id="collapseExample4">
                          <div className="work_date">
                            <a href="#" title=""><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                            <span>Thursday, August 16, 2018</span>
                            <a href="#" title=""><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                          </div>
                          <div className="hourly_rate">
                            <div className="row align-items-end">
                              <div className="col-md-8">
                                <div className="d-flex align-items-center">
                                  <label className="green_text feedbk_lbl">Rate:</label>
                                  <span className="rate_box">$6.00</span>
                                  <span>Per Hour</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <label className="green_text feedbk_lbl">Weekly Limit :</label>
                                  <span className="rate_box">40</span>
                                  <span>Per Hour</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <label className="green_text feedbk_lbl"><i className="fa fa-question-circle" aria-hidden="true"></i>Manual Time :</label>
                                  <span className="rate_box">Allowed</span>
                                  <span><a href="#"><i className="fa fa-pencil" aria-hidden="true"></i></a></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <label className="green_text feedbk_lbl">Start Date:</label>
                                  <span>12 August 2018</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <label className="green_text feedbk_lbl">Hired By :</label>
                                  <span>Client ID</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <label className="green_text feedbk_lbl">Contract ID:</label>
                                  <span>H90273423</span>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="save_cancel">
                                  <button type="button" className="btn save_btn">Save Changes</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="work_detail contract_detail">
                            <h5>View History of Contract Changes</h5>
                            <div className="contract_tbl">
                              <div className="table-responsive detail_tbl">
                                <table className="table text-center">
                                  <thead>
                                    <tr>
                                      <th scope="col" className="text-left">Date Time</th>
                                      <th scope="col" className="text-left">Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="text-left">21. Aug  2018</td>
                                      <td className="text-left">Increased hourly rate from $5 to $6</td>
                                    </tr>
                                    <tr>
                                      <td className="text-left">21. Aug  2018</td>
                                      <td className="text-left">Manual Time is disallowed</td>
                                    </tr>
                                    <tr>
                                      <td className="text-left">21. Aug  2018</td>
                                      <td className="text-left">Increased hourly rate from $5 to $6</td>
                                    </tr>
                                    <tr>
                                      <td className="text-left">21. Aug  2018</td>
                                      <td className="text-left">Increased hourly rate from $5 to $6</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center page_div">
                                  <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                      <span aria-hidden="true"></span>
                                      <span className="sr-only">Previous</span>
                                    </a>
                                  </li>
                                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                                  <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                      <span aria-hidden="true"></span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
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
    activeRoute: state.routeStore.activeRoute,
  };
}
function mapDispatchProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchProps)(MileStoneMain);