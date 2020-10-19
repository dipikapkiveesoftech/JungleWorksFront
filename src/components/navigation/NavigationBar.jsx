import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// Redux
import { onReduxLangaugeChange, onReduxRouteChange } from "../../store/action";
import { connect } from "react-redux";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleActive: false,
      activeDropdownColleps: false,
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

  componentDidMount() {
    let { location } = this.props;
    if (location && location.pathname) {
      this.props.onRouteChange(location.pathname)
    }
  }

  onToggleCollepsHandle = (isActive) => {
    this.setState({
      isToggleActive: isActive
    })

  }
  onDropDownMenuSelectHandle = (id) => {
    let { activeDropdownColleps } = this.state;
    if (activeDropdownColleps === id) {
      this.setState({
        activeDropdownColleps: null
      })
    }
    else {
      this.setState({
        activeDropdownColleps: id
      })
    }


  }
  render() {
    let { isToggleActive, activeDropdownColleps } = this.state;
    let { languageData, language, activeRoute, location } = this.props;
    if (location && location.pathname) {
      if (activeRoute !== location.pathname) {
        this.props.onRouteChange(location.pathname)
      }
    }

    // console.log("languageData----->", languageData, "langauge--------->", language)
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand" onClick={() => this.props.onRouteChange("/")}>
            <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/logo.png" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={() => this.onToggleCollepsHandle(true)} >
            <span className="navbar-toggler-icon">
              {/* <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg> */}
              <i class="fa fa-bars" aria-hidden="true"></i>

            </span>

          </button>
          <div className={isToggleActive ? "collapse navbar-collapse active" : "collapse navbar-collapse"} id="navbarSupportedContent"      >
            <div className="header-colleps-main" onClick={() => this.onToggleCollepsHandle(false)}></div>
              <div className="user-profile-view">
                <div className="profile-data">
                  <img src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png"></img>
                  <span> Sonny</span>
                </div>
                <button className="navbar-toggler" type="button" onClick={() => this.onToggleCollepsHandle(false)} >
                  <span className="navbar-toggler-icon"> <i class="fa fa-times" aria-hidden="true"></i> </span>
                </button>
              </div>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn" >
                  <i className="fa fa-search" aria-hidden="true" type="submit"></i>
                </button>
              </form>
              <ul className="navbar-nav mr-auto">
                <li className={activeDropdownColleps === 1 ? "nav-item dropdown active-colleps" : "nav-item dropdown "} onClick={() => this.onDropDownMenuSelectHandle(1)}>
                  <a className="nav-link dropdown-toggle" id="navDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"                >
                    <span className="link_label">{languageData.PROJECT}</span>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navDropdown">
                    <Link to="/all-projects" className="dropdown-item" onClick={() => this.props.onRouteChange("/all-projects")}>
                      {languageData.ALL_PROJECTS}
                    </Link>
                    <Link to="/package-design" className="dropdown-item" onClick={() => this.props.onRouteChange("/package-design")}>
                      {languageData.PACKAGE_DESIGN}
                    </Link>
                    <Link to="/contest-detail" className="dropdown-item" onClick={() => this.props.onRouteChange("/contest-detail")}>
                      {languageData.DESIGN_CONTEST}
                    </Link>
                    <Link to="/myproject" className="dropdown-item" onClick={() => this.props.onRouteChange("/myproject")}>
                      {languageData.MY_PROJECTS}
                    </Link>
                    <Link to="project-post" className="dropdown-item" onClick={() => this.props.onRouteChange("/project-post")}>
                      {languageData.MY_PROPOSAL}
                    </Link>
                    <Link to="project-post" className="dropdown-item" onClick={() => this.props.onRouteChange("/project-post")}>
                      {languageData.POST_A_PROJECT}
                    </Link>
                  </div>
                </li>
                <li className={activeDropdownColleps === 2 ? "nav-item dropdown active-colleps" : "nav-item dropdown"} onClick={() => this.onDropDownMenuSelectHandle(2)}>
                  <a
                    className="nav-link dropdown-toggle"

                    id="navDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="link_label"> {languageData.FREELANCER}</span>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navDropdown2">
                    <Link to="/all-freelancer" className="dropdown-item" onClick={() => this.props.onRouteChange("/all-freelancer")}>
                      {languageData.ALL_FREELANCERS}
                    </Link>
                    <Link to="/my-freelancers" className="dropdown-item" onClick={() => this.props.onRouteChange("/my-freelancers")}>
                      {languageData.MY_FREELANCERS}
                    </Link>
                  </div>
                </li>
                <li className={activeDropdownColleps === 3 ? "nav-item dropdown active-colleps" : "nav-item dropdown"} onClick={() => this.onDropDownMenuSelectHandle(3)}>
                  <a
                    className="nav-link dropdown-toggle"

                    id="navDropdown3"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="link_label">  {languageData.HOW_IT_WORKS}</span>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navDropdown3">
                    <a className="dropdown-item" >
                      {languageData.PROJECT}
                    </a>
                    <a className="dropdown-item" >
                      {languageData.CONTEST}
                    </a>
                    <a className="dropdown-item" >
                      {languageData.HOURLY_WORK}
                    </a>
                    <a className="dropdown-item" >
                      {languageData.WORK_AT_OFFICE}
                    </a>
                    <a className="dropdown-item" >
                      {languageData.WORK_WITH_MANAGER}
                    </a>
                    <a className="dropdown-item" >
                      {languageData.DISPUTE}
                    </a>
                  </div>
                </li>
                <li className={activeDropdownColleps === 4 ? "nav-item dropdown active-colleps" : "nav-item dropdown"} onClick={() => this.onDropDownMenuSelectHandle(4)}>
                  <a
                    className="nav-link dropdown-toggle"

                    id="navDropdown4"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="link_label">   {languageData.REPORTS}  </span>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navDropdown4">
                    <Link to="/report" className="dropdown-item" onClick={() => this.props.onRouteChange("/report")}>
                      {languageData.MY_REPORTS}
                    </Link>
                    <Link to="/invoice" className="dropdown-item" onClick={() => this.props.onRouteChange("/invoice")}>
                      {languageData.TRANSACTION}
                    </Link>
                    <Link to="/feedback-claims" className="dropdown-item" onClick={() => this.props.onRouteChange("/feedback-claims")}>
                      {languageData.FEEDBACK}
                    </Link>
                    <Link to="/mycoupon" className="dropdown-item" onClick={() => this.props.onRouteChange("/mycoupon")}>
                      {languageData.MY_COUPON}
                    </Link>
                    <Link to="/myclient" className="dropdown-item" onClick={() => this.props.onRouteChange("/mycoupon")}>
                      {languageData.MY_COUPON}
                    </Link>
                  </div>
                </li>
                <li className={activeDropdownColleps === 5 ? "nav-item dropdown active-colleps" : "nav-item dropdown"} onClick={() => this.onDropDownMenuSelectHandle(5)}>
                  <a
                    className="nav-link dropdown-toggle"

                    id="navDropdown5"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="link_label">{languageData.SERVICES}</span>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navDropdown5">
                    <Link to="/" className="dropdown-item" onClick={() => this.props.onRouteChange("/")} >
                      {languageData.COMMUNICATION_MANAGER}
                    </Link>
                    <Link to="/" className="dropdown-item" onClick={() => this.props.onRouteChange("/")} >
                      {languageData.HEADHUNTING_MANAGER}
                    </Link>
                  </div>
                </li>
                <li className={activeDropdownColleps === 6 ? "nav-item dropdown active-colleps" : "nav-item dropdown"} onClick={() => this.onDropDownMenuSelectHandle(6)}>
                  <a
                    className="nav-link dropdown-toggle"

                    id="navDropdown6"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="link_label">  {languageData.COMMUNITY}</span>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navDropdown6">
                    <Link to="/" className="dropdown-item" onClick={() => this.props.onRouteChange("/")}>
                      {languageData.CHANNEL}
                    </Link>
                    <Link to="/help-center" className="dropdown-item" onClick={() => this.props.onRouteChange("/help-center")}>
                      {languageData.HELP_CENTER}
                    </Link>
                    <Link to="/" className="dropdown-item" onClick={() => this.props.onRouteChange("/")}>
                      {languageData.CONTACT_US}
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={() => this.props.onRouteChange("/")}>
                    <span className="link_label"> {languageData.LOGIN}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={() => this.props.onRouteChange("/")}>
                    <span className="link_label"> {languageData.SIGNUP}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/project-post" className="nav-link" onClick={() => this.props.onRouteChange("/project-post")}>
                    <span className="link_label"> {languageData.POST_A_JOB}</span>
                  </Link>
                </li>
                <li className={activeDropdownColleps === 7 ? "nav-item dropdown active-colleps" : "nav-item dropdown"} onClick={() => this.onDropDownMenuSelectHandle(7)}>
                  <a
                    className="nav-link dropdown-toggle"

                    id="navDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="link_label">{languageData.LANGAUGE}</span>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navDropdown">
                    <span className={language === "english" ? "dropdown-item active  cusor-pointer" : "dropdown-item cusor-pointer"} onClick={() => this.onLangaugeDataChange("english")}>
                      {languageData.ENGLISH}
                    </span>
                    <span className={language === "korean" ? "dropdown-item active cusor-pointer" : "dropdown-item cusor-pointer"} onClick={() => this.onLangaugeDataChange("korean")}>
                      {languageData.KOREAN}
                    </span>
                    <span className={language === "japanese" ? "dropdown-item active cusor-pointer" : "dropdown-item cusor-pointer"} onClick={() => this.onLangaugeDataChange("japanese")}>
                      {languageData.JAPANESE}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          {/* </div> */}
        </nav>
      </header>
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
    onRouteChange: (activeRoute) => {
      dispatch(onReduxRouteChange(activeRoute));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(NavigationBar));
