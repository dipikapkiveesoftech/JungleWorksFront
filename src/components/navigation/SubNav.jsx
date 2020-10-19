import React, { Component } from "react";
import { onReduxLangaugeChange } from "../../store/action";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
const imageUrl = "https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/";
class SubNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Client",
      designIcon: "DesignBlack.svg",
      webIcon: "WebBlack.svg",
      accountingIcon: "AccountingBlack.svg",
      marketingBlackIcon: "marketingBlack.svg",
      videoPhotIcon: "VideoGoodBlack.svg",
      engineeringIcon: "compassBlack.svg",
      translationIcon: "TranslationBlack.svg",
      planingIcon: "WritingBlack.svg",
      legalAssistantIcon: "LawBlack.svg",
      adminIcon: "ClipBlack.svg",
      internationalTradeIcon: "InternationalTradeBlack.svg",
      customerServiceIcon: "headsetBlack.svg",
      teachingIcon: "onlineTeachingBlack.svg",
      highBudgetIcon: "BudgetWhite.svg",
    };
  }
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
  onIconChange(name, icon) {
    this.setState({ [name]: icon });
  }
  getPageTitle = () => {
    let { languageData, activeRoute } = this.props;
    let pageTitle = "Client";
    if (activeRoute) {

      if (activeRoute === "/client-detail") {
        pageTitle = languageData.CLIENT_INFO;
      } else if (activeRoute === "/confirm-project") {
        pageTitle = languageData.CONFIRM_PROJECT;
      } else if (activeRoute === "/mycontest") {
        pageTitle = languageData.MY_CONTEST;
      } else if (activeRoute === "/mycoupon") {
        pageTitle = languageData.MY_COUPON;
      } else if (activeRoute === "/myproject") {
        pageTitle = languageData.MY_PROJECT;
      } else if (activeRoute === "/my-freelancers") {
        pageTitle = languageData.MY_FREELANCERS;
      } else if (activeRoute === "/package-design") {
        pageTitle = languageData.PACKAGE_DESIGN;
      } else if (activeRoute === "/all-projects") {
        pageTitle = languageData.ALL_PROJECTS;
      } else if (activeRoute === "/all-freelancer") {
        pageTitle = languageData.ALL_FREELANCERS;
      } else if (activeRoute === "/project-blog") {
        pageTitle = languageData.PROJECT_BLOG;
      } else if (activeRoute === "/profession") {
        pageTitle = languageData.PROFESSION_TEXT;
      } else if (activeRoute === "/project-post") {
        pageTitle = languageData.POST_A_PROJECT;
      } else if (activeRoute === "/project-post-hourly") {
        pageTitle = languageData.POST_A_PROJECT_HOURLY;
      } else if (activeRoute === "/project-post-milestone") {
        pageTitle = languageData.POST_A_PROJECT_MILESTONE;
      } else if (activeRoute === "/project-post-office") {
        pageTitle = languageData.POST_A_PROJECT_INOFFICE;
      } else if (activeRoute === "/report-main") {
        pageTitle = languageData.REPORTS;
      } else if (activeRoute === "/report") {
        pageTitle = languageData.REPORTS;
      } else if (activeRoute === "/dispute-main") {
        pageTitle = languageData.DISPUTE;
      } else if (activeRoute === "/freelancer-registration") {
        pageTitle = languageData.FREELANCER_REGISTRATION;
      } else if (activeRoute === "/contest-detail") {
        pageTitle = languageData.CONTEST_DETAIL;
      } else if (activeRoute === "/hourly-report") {
        pageTitle = languageData.HOURLY_REPORT;
      } else if (activeRoute === "/milestone-report") {
        pageTitle = languageData.MILESTONE_REPORT;
      } else if (activeRoute === "/work-detail") {
        pageTitle = languageData.WORK_DETAIL;
      } else if (activeRoute === "/hourly-report") {
        pageTitle = languageData.HOURLY_REPORT;
      } else if (activeRoute === "/hourly-detail-for-freelancer") {
        pageTitle = languageData.HOURLY_DETAIL;
      } else if (activeRoute === "/contest-detail-for-freelancer") {
        pageTitle = languageData.CONTEST_DETAIL;
      } else if (activeRoute === "/inoffice-detail-for-freelancer") {
        pageTitle = languageData.IN_OFFICE_DETAIL;
      } else if (activeRoute === "/milestone-detail-for-freelancer") {
        pageTitle = languageData.MILESTONE_DETAIL;
      } else if (activeRoute === "/invoice") {
        pageTitle = languageData.INVOICE;
      } else if (activeRoute === "/feedback-claims") {
        pageTitle = languageData.FEEDBACK;
      } else if (activeRoute === "/myregion") {
        pageTitle = languageData.MY_REGION;
      } else if (activeRoute === "/help-center") {
        pageTitle = languageData.HELP_CENTER;
      } else if (activeRoute === "/help-detail") {
        pageTitle = languageData.HELP_DETAIL;
      } else if (activeRoute === "/evaluation") {
        pageTitle = languageData.EVALUATION;
      } else if (activeRoute === "/invoiceDetail") {
        pageTitle = languageData.INVOICE_DETAIL;
      } else if (activeRoute === "/preferred-design") {
        pageTitle = languageData.PREFERRED_DESIGN;
      } else {
        pageTitle = "Home";
      }
    }

    return pageTitle;
  };

  getSubTitle() {
    let { languageData, activeRoute } = this.props;
    let subTitle = "Client";
    if (activeRoute) {
      if (activeRoute === "/client-detail") {
        subTitle = languageData.CLIENT_INFO;
      } else if (activeRoute === "/confirm-project") {
        subTitle = languageData.CONFIRM_PROJECT;
      } else if (activeRoute === "/mycontest") {
        subTitle = "My Contest";
      } else if (activeRoute === "/mycoupon") {
        subTitle = "My Coupon";
      } else if (activeRoute === "/myproject") {
        subTitle = "My Project";
      } else if (activeRoute === "/my-freelancers") {
        subTitle = languageData.MY_FREELANCERS;
      } else if (activeRoute === "/package-design") {
        subTitle = "Package Design : Logo, Illustration, Packaging, Video Clip";
      } else if (activeRoute === "/all-projects") {
        subTitle = languageData.ALL_PROJECTS_SUB;
      } else if (activeRoute === "/all-freelancer") {
        subTitle = "Find the most suitable project type";
      } else if (activeRoute === "/project blog") {
        subTitle = "Project Blog";
      } else if (activeRoute === "/profession") {
        subTitle = "Profession";
      } else if (activeRoute === "/project-post") {
        subTitle = "Project Post";
      } else if (activeRoute === "/project-post-hourly") {
        subTitle = "Project Post Hourly";
      } else if (activeRoute === "/project-post-milestone") {
        subTitle = "Project Post Milestone";
      } else if (activeRoute === "/project-post-office") {
        subTitle = "Project Post InOffice";
      } else if (activeRoute === "/report-main") {
        subTitle = "Report";
      } else if (activeRoute === "/report") {
        subTitle = "Report";
      } else if (activeRoute === "/dispute-main") {
        subTitle = "Dispute";
      } else if (activeRoute === "/freelancer-registration") {
        subTitle = "Freelancer Registration";
      } else if (activeRoute === "/contest-detail") {
        subTitle = "Dontest Detail";
      } else if (activeRoute === "/hourly-report") {
        subTitle = languageData.HOURLY_REPORT;
      } else if (activeRoute === "/milestone-report") {
        subTitle = languageData.MILESTONE_REPORT;
      } else if (activeRoute === "/work-detail") {
        subTitle = "Work Detail";
      } else if (activeRoute === "/hourly-report") {
        subTitle = "Hourly Report";
      } else if (activeRoute === "/hourly-detail-for-freelancer") {
        subTitle = languageData.HOURLY_DETAIL;
      } else if (activeRoute === "/contest-detail-for-freelancer") {
        subTitle = languageData.CONTEST_DETAIL;
      } else if (activeRoute === "/inoffice-detail-for-freelancer") {
        subTitle = languageData.IN_OFFICE_DETAIL;
      } else if (activeRoute === "/milestone-detail-for-freelancer") {
        subTitle = languageData.MILESTONE_DETAIL;
      } else if (activeRoute === "/invoice") {
        subTitle = "Invoice";
      } else if (activeRoute === "/myregion") {
        subTitle = "My Region";
      } else if (activeRoute === "/feedback-claims") {
        subTitle = languageData.FEEDBACK;
      }
      else if (activeRoute === "/help-center") {
        subTitle = "Help Center";
      } else if (activeRoute === "/help-detail") {
        subTitle = "Help Detail";
      } else if (activeRoute === "/evaluation") {
        subTitle = "Evaluation";
      } else if (activeRoute === "/invoiceDetail") {
        subTitle = "Invoice Detail";
      } else if (activeRoute === "/preferred-design") {
        subTitle = "Preferred Design";
      } else {
        subTitle = "Home";
      }
    }

    return subTitle;
  }

  render() {
    let { languageData, language } = this.props;
    let {
      designIcon,
      highBudgetIcon,
      webIcon,
      accountingIcon,
      marketingBlackIcon,
      videoPhotIcon,
      engineeringIcon,
      translationIcon,
      planingIcon,
      legalAssistantIcon,
      adminIcon,
      internationalTradeIcon,
      customerServiceIcon,
      teachingIcon,
    } = this.state;
    let pageTitle = this.getPageTitle();
    let subTitle = this.getSubTitle();
    let isDisplayProjectNavMenu = false;

    if(pageTitle == languageData.ALL_PROJECTS || pageTitle == languageData.MY_PROJECT) {
      isDisplayProjectNavMenu = true;
    }

    console.log(
      "pageTitle----->",
      languageData,
      "subTitle--------->",
      subTitle
    );
    return (
      <>
        <div className="back_end">
          <div className="bcknd_container">
            {language == "korean" ? (
              <div className="project_head">
                <h1 className="korean">{pageTitle}</h1>
                <h4 className="koreanh4">{subTitle}</h4>
              </div>
            ) : (
                <div className="project_head">
                  <h1>{pageTitle}</h1>
                  <h4>{subTitle}</h4>
                </div>
              )}
              
              <nav className={`navbar navbar-expand-lg category_nav ${isDisplayProjectNavMenu ? 'visibility-visible' : 'visibility-hidden'}`}>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupported"
                  aria-controls="navbarSupported"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupported">
                  <ul className="navbar-nav ml-auto" >
                    <li className="nav-item dropdown product_search dropdown-toggle">
                      <a
                        className="nav-link"
                        id="navbarDropdown2"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="link_label">
                          {languageData.PROJECT_SEARCH}
                        </span>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown2"
                      >
                        <li className="nav-item dropdown">
                          <a className="nav-link">
                            {/* <span>
                              <img
                                src={imageUrl + highBudgetIcon}
                                alt=""
                              />
                            </span> */}
                            {languageData.HIGH_BUDGET}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img
                                src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/lowBudgetBlack.svg"
                                alt=""
                              />
                            </span> */}
                            {languageData.LOW_BUDGET}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/CountdownBlack.svg" alt="" />
                            </span> */}
                            {languageData.END_SOON}
                          </a>
                        </li>
                        <li>
                          <Link to="/myregion">
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/CountdownBlack.svg" alt="" />
                            </span> */}
                            {languageData.JOBS_NEARBY}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown  dropdown-toggle">
                      <a
                        className="nav-link"
                        id="navbarDropdown3"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="link_label">
                          {languageData.CATEGORY_TEXT}
                        </span>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown3"
                      >
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/WebBlack.svg" alt="" />
                            </span> */}
                            {languageData.WEB_DEVELOPMENT}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/DesignBlack.svg" alt="" />
                            </span> */}
                            {languageData.DESIGN_TEXT}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/VideoGoodBlack.svg" alt="" />
                            </span> */}
                            {languageData.PHOTO_VIDEO}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/compassBlack.svg" alt="" />
                            </span> */}
                            {languageData.ENGINEERING_TEXT}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/WritingBlack.svg" alt="" />
                            </span> */}
                            {languageData.TUTORIAL_TEXT}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/TranslationBlack.svg" alt="" />
                            </span> */}
                            {languageData.TRANSLATION}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/AccountingBlack.svg" alt="" />
                            </span> */}
                            {languageData.ACCOUNTING_TEXT}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/marketingBlack.svg" alt="" />
                            </span> */}
                            {languageData.MARKETING_TEXT}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/LawBlack.svg" alt="" />
                            </span> */}
                            {languageData.LEGAL_ASSITANCE}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/ClipBlack.svg" alt="" />
                            </span> */}
                            {languageData.ADMIN}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/InternationalTradeBlack.svg" alt="" />
                            </span> */}
                            {languageData.INTERNATIONAL_TRADE}
                          </a>
                        </li>
                        <li>
                          <a>
                            {/* <span>
                              <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/headsetBlack.svg" alt="" />
                            </span> */}
                            {languageData.CUSTOMER_SERVICE}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <form className="form-inline">
                    <input
                      className="form-control"
                      type="search"
                      placeholder=" Search Project"
                      aria-label="Search"
                    />
                    <button className="btn blue_btn" type="submit">
                      View
                    </button>
                  </form>
                </div>
              </nav>
          </div>
        </div>
      </>
    );
  }
}

// export default SubNav;
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

export default connect(mapStateToProps, mapDispatchProps)(SubNav);
