import React, { Component } from "react";
class WorkGridReportView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { isReportTableViewActive } = this.props
        return (
            <>
                <div className="hourly_limit">
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
                                <div className="col-md-5 text-right post_modal">
                                    <div className="save_cancel">
                                        <button
                                            type="button"
                                            className="btn white_btn"
                                        >
                                            Pause
                                  </button>
                                        <button
                                            type="button"
                                            className="btn gray_btn"
                                        >
                                            Dispute Hours
                                  </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tracked_div candidate_reg">
                            <div className="row">
                                <div className="col-md-7">
                                    <label>Activity</label>
                                    <span>New Candidate Registration</span>
                                    <span>92%</span>
                                </div>
                                <div className="col-md-5">
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
                        <div className="table-responsive post_form work_diary">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="col">7am</th>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck1"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck1"
                                                    >
                                                        7:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
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
                                                    >
                                                        7:00 am
                                        </label>
                                                    <span>49%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
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
                                                    >
                                                        7:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
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
                                                    >
                                                        7:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
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
                                                    >
                                                        7:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
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
                                                    >
                                                        7:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="col">8am</th>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
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
                                                    >
                                                        8:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
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
                                                    >
                                                        8:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck9"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck9"
                                                    >
                                                        8:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck10"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck10"
                                                    >
                                                        8:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck11"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck11"
                                                    >
                                                        8:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck12"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck12"
                                                    >
                                                        8:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="col">9am</th>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck13"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck13"
                                                    >
                                                        9:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck14"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck14"
                                                    >
                                                        9:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck15"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck15"
                                                    >
                                                        9:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck16"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck16"
                                                    >
                                                        9:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck17"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck17"
                                                    >
                                                        9:00 am
                                        </label>
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a
                                                href="Hourly/hourly-report.html"
                                                title=""
                                            >
                                                <img
                                                    src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/capture-view.png"
                                                    alt=""
                                                />
                                                <i
                                                    className="fa fa-search-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customcheck18"
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customcheck18"
                                                    >
                                                        9:00 am
                                        </label>
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

export default WorkGridReportView;
