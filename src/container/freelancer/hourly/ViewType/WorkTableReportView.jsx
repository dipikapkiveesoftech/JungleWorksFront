import React, { Component } from "react";
class WorkTableReportView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 2,
        };
    }

    render() {
        let { isReportTableViewActive } = this.props;

        return (
            <>
                <div className="hourly_limit post_form hourly_report">
                    <div className="position_rel">
                        <h4>
                            <span className="viewDetail">
                                <a
                                    className="plus_btn"
                                    data-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="true"
                                    aria-controls="collapseExample"
                                >
                                    +
                              </a>
                            </span>
                        </h4>
                    </div>
                    <div className="collapse show" id="collapseExample">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="work_date">
                                    <a title="">
                                        <i
                                            className="fa fa-angle-left"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <span>Thursday, August 16, 2018</span>
                                    <a title="">
                                        <i
                                            className="fa fa-angle-right"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <select className="form-control world_select">
                                    <option>My Local Time</option>
                                    <option>USD</option>
                                </select>
                            </div>
                        </div>
                        <div className="pause_dispute">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="tracked_div">
                                        <label>Total: 1:20hrs</label>
                                        <span>
                                            <span className="blue_box"></span>Tracked 1:
                                    20hrs
                                  </span>
                                        <span>
                                            <span className="red_box"></span>Manual 1:
                                    20hrs
                                  </span>
                                    </div>
                                </div>
                                <div className="col-md-5 text-right">
                                    <div className="candidate_reg">
                                        <button className={!isReportTableViewActive ? "grid-list animation ml-auto" : "grid-list animation active ml-auto"} onClick={() => this.props.onReportViewChange()}>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="task_manage post_modal">
                            <div className="detail_tbl check_tble">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Task</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Activity</th>
                                            <th scope="col">Active Window</th>
                                            <th scope="col">Activity Level</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="selected">
                                            <td>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customcheck1"
                                                            required=""
                                                            checked
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            for="customcheck1"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>6:30 pm</td>
                                            <td>
                                                <span className="blue_box"></span>
                                            </td>
                                            <td>New Candidate Registration</td>
                                            <td>New Candidate Registration</td>
                                            <td>92%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customcheck2"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            for="customcheck2"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>6:30 pm</td>
                                            <td>
                                                <span className="blue_box"></span>
                                            </td>
                                            <td>New Candidate Registration</td>
                                            <td>New Candidate Registration</td>
                                            <td>92%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customcheck3"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            for="customcheck3"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>6:30 pm</td>
                                            <td>
                                                <span className="blue_box"></span>
                                            </td>
                                            <td>New Candidate Registration</td>
                                            <td>New Candidate Registration</td>
                                            <td>92%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customcheck4"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            for="customcheck4"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>6:30 pm</td>
                                            <td>
                                                <span className="blue_box"></span>
                                            </td>
                                            <td>New Candidate Registration</td>
                                            <td>New Candidate Registration</td>
                                            <td>
                                                <a className="tool_tip blue_text">
                                                    <b>70%</b>
                                                    <span>
                                                        This indicates the average activity in
                                                        Key board and mouse movement
                                        </span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customcheck5"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            for="customcheck5"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>6:30 pm</td>
                                            <td>
                                                <span className="red_box"></span>
                                            </td>
                                            <td>New Candidate Registration</td>
                                            <td>New Candidate Registration</td>
                                            <td>92%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customcheck6"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            for="customcheck6"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>6:30 pm</td>
                                            <td>
                                                <span className="blue_box"></span>
                                            </td>
                                            <td>New Candidate Registration</td>
                                            <td>New Candidate Registration</td>
                                            <td>92%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customcheck7"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            for="customcheck7"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>6:30 pm</td>
                                            <td>
                                                <span className="blue_box"></span>
                                            </td>
                                            <td>New Candidate Registration</td>
                                            <td>New Candidate Registration</td>
                                            <td>
                                                <a className="tool_tip red_text">
                                                    <b>92%</b>
                                                    <span>
                                                        This indicates the low activity in Key
                                                        board and mouse movement
                                        </span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customcheck8"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            for="customcheck8"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>6:30 pm</td>
                                            <td>
                                                <span className="blue_box"></span>
                                            </td>
                                            <td>New Candidate Registration</td>
                                            <td>New Candidate Registration</td>
                                            <td>92%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
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
                </div>

            </>
        );
    }
}

export default WorkTableReportView;
