import React, { Component } from "react";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
import Pagenation from "../../components/Pagenation";
import { onReduxLangaugeChange } from "../../store/action";
import { connect } from "react-redux";
import ContractChangeTable from "./ContractChangeTable";

class MyContest extends Component {
  componentWillMount() {
    let data = localStorage.getItem("langauge");
    let langauge = JSON.parse(data);
    if (langauge) {
      this.props.onLangaugeChange(langauge);
    }
  }

  onLangaugeDataChange = (language) => {
    localStorage.setItem("langauge", JSON.stringify(language));
    this.props.onLangaugeChange(language);
  };
  render() {
    let { languageData, language } = this.props;
    console.log(language);
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post invoice_tab work_card">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        {languageData.MY_CONTEST}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        {languageData.CANDIDATES_TEXT}
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-content workDiary_tab pb-0"
                    id="pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="hourly_limit post_form hourly_report">
                        <div className="myContest">
                          <div className="hourly_rate">
                            <div className="work_date save_cancel">
                              <span>{languageData.DUE_DATE}: 2017 Aug 21</span>
                              <button
                                type="button"
                                className="btn save_btn"
                                data-toggle="modal"
                                data-target="#create-milage-modal"
                              >
                                <i
                                  className="fa fa-calendar"
                                  aria-hidden="true"
                                ></i>
                                {languageData.EXTEND_DUE_DATE}
                              </button>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="d-flex align-items-center">
                                  <label className="boldText">
                                    {languageData.PROJECT_TITLE} :{" "}
                                  </label>
                                  <span>Design My logo</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <label className="boldText">
                                    {languageData.PAYMENT_CONFIRMATION_TYPE} :{" "}
                                  </label>
                                  <span>Guranteed</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <label className="boldText">Private : </label>
                                  <span>Yes</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  {language == "korean" ? (
                                    <label className="boldText mr-4">
                                      {languageData.AWARDS_TEXT}:{" "}
                                    </label>
                                  ) : (
                                    <label className="boldText ">
                                      {languageData.AWARDS_TEXT}:{" "}
                                    </label>
                                  )}

                                  <span className="mr-3">1st</span>
                                  <span className="rate_box">499.00</span>
                                  <span>
                                    <a>
                                      <i
                                        className="fa fa-pencil"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </span>
                                </div>
                                <div className="d-flex align-items-center award_lbl">
                                  <span className="mr-3">2nd</span>
                                  <span className="rate_box">169.00</span>
                                  <span>
                                    <a>
                                      <i
                                        className="fa fa-pencil"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </span>
                                </div>
                                <div className="d-flex align-items-center award_lbl">
                                  <span className="mr-3">3rd</span>
                                  <span className="rate_box">100.00</span>
                                  <span>
                                    <a>
                                      <i
                                        className="fa fa-pencil"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="d-flex align-items-center">
                                  <label className="boldText">
                                    {languageData.PROMOTION_TEXT}:{" "}
                                  </label>
                                  <span>US$79.00</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <label className="boldText">
                                    {languageData.BLIND_TEXT} :
                                  </label>
                                  <span>US$39.00</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right total_price">
                              <span>{languageData.TOTAL_TEXT}: US$798.00</span>
                              <div className="save_cancel">
                                <button
                                  type="button"
                                  className="btn cancel_btn"
                                >
                                  {languageData.ADD_MORE_SERVICES}
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="work_detail contract_detail">
                            <h5>{languageData.CONTRACT_HISTORY}</h5>
                            <div className="contract_tbl">
                              <small className="red_text">
                                This is your last free contest
                              </small>
                              <div className="table-responsive detail_tbl">
                                <ContractChangeTable />
                              </div>
                              <Pagenation />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="task_manage candidate_tbl">
                        <div className="d-flex align-items-center justify-content-end display_select">
                          <label>Sort</label>
                          <select className="form-control">
                            <option>Interesting</option>
                            <option>Deactivate</option>
                          </select>
                        </div>
                        <div className="table-responsive detail_tbl"></div>
                        <Pagenation />
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
    language: state.langaugeStore.language,
    activeRoute: state.routeStore.activeRoute,
  };
}
function mapDispatchProps(dispatch) {
  return {
    onLangaugeChange: (langauge) => {
      dispatch(onReduxLangaugeChange(langauge));
    },
  };
}

export default connect(mapStateToProps, mapDispatchProps)(MyContest);
