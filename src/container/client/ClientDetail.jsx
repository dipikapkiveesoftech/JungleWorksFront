import React, { Component } from "react";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
import Pagenation from "../../components/Pagenation";
import LeftClientProfile from "./LeftClientProfile";
import OnGoingProject from "./OnGoingProject";
import Review from "./Review";
import { onReduxLangaugeChange } from "../../store/action";
import { connect } from "react-redux";

class ClientDetail extends Component {
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
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="card_box work_card hover_none client_detail">
                  <div className="row justify-content-between">
                    <div className="col-md-3 col_3">
                      <div className="project_no client_profile">
                        <LeftClientProfile />
                      </div>
                    </div>
                    <div className="col-md-9 col_9">
                      <div className="row justify-content-between">
                        <div className="col-md-8">
                          <div className="design_work">
                            <h2 className="green_text">Kjj Trading Co., Ltd</h2>
                            <p>I need a good developer</p>
                          </div>
                        </div>
                        <div className="col-md-4 text-right last_activity">
                          <small className="green_text">
                            {languageData.LAST_ACTIVITY}
                            <a className="green_text">2018.08.02</a>
                          </small>
                        </div>
                      </div>
                      <div className="hourly_limit">
                        <div className="position_rel">
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
                        </div>
                        <div className="collapse show" id="collapseExample">
                          <div className="position_rel">
                            <h4 className="green_text">
                              {languageData.ONGOING_PROJECT}
                              <span className="viewDetail">
                                <a
                                  className="plus_btn"
                                  data-toggle="collapse"
                                  href="#collapseExample2"
                                  role="button"
                                  aria-expanded="true"
                                  aria-controls="collapseExample2"
                                >
                                  +
                                </a>
                              </span>
                            </h4>
                          </div>
                          <div className="collapse show" id="collapseExample2">
                            <OnGoingProject />
                          </div>

                          <div className="position_rel">
                            <h4 className="green_text">
                              {languageData.REVIEW_TEXT}
                              <span className="viewDetail">
                                <a
                                  className="plus_btn"
                                  data-toggle="collapse"
                                  href="#collapseExample3"
                                  role="button"
                                  aria-expanded="true"
                                  aria-controls="collapseExample3"
                                >
                                  +
                                </a>
                              </span>
                            </h4>
                          </div>
                          <div className="collapse show" id="collapseExample3">
                            <Review />
                            <Pagenation />
                          </div>
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

export default connect(mapStateToProps, mapDispatchProps)(ClientDetail);
