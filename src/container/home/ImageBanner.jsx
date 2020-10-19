import React, { Component } from "react";
import { Link } from "react-router-dom";
import { onReduxLangaugeChange } from "../../store/action";
import { connect } from "react-redux";
const imageUrl = "https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/";
class ImageBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    let { languageData, language } = this.props;
    console.log(language);
    let {
      designIcon,
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
    return (
      <>
        <section className="icons_sec">
          <div className="container-fluid">
            <div className="tool_icon ">
              <ul className="list-unstyled row align-items-end justify-content-center">
                <li onMouseEnter={() => this.onIconChange("designIcon", "designColor.svg")} onMouseLeave={() => this.onIconChange("designIcon", "DesignBlack.svg")}  >
                  <Link to="/all-projects" className="link">
                    <span className="icon">   <img src={imageUrl + designIcon} alt="" /></span>
                    <span className="title">{languageData.DESIGN_TEXT}</span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("webIcon", "WebColor.svg")} onMouseLeave={() => this.onIconChange("webIcon", "WebBlack.svg")} >
                  <Link to="/all-projects" className="link">
                    <span className="icon"><img src={imageUrl + webIcon} alt="" /></span>
                    <span className="title"> {languageData.WEB_DEVELOPMENT} </span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("accountingIcon", "AccountingColor.svg")} onMouseLeave={() => this.onIconChange("accountingIcon", "AccountingBlack.svg")} >
                  <Link to="/all-projects" className="link">
                    <span className="icon"> <img src={imageUrl + accountingIcon} alt="" /> </span>
                    <span className="title">{languageData.ACCOUNTING_TEXT} </span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("marketingBlackIcon", "marketingColor.svg")} onMouseLeave={() => this.onIconChange("marketingBlackIcon", "marketingBlack.svg")} >
                  <Link to="/all-projects" className="link">
                    <span className="icon">  <img src={imageUrl + marketingBlackIcon} alt="" /></span>
                    <span className="title">{languageData.MARKETING_TEXT}</span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("videoPhotIcon", "VideoGoodColor.svg")} onMouseLeave={() => this.onIconChange("videoPhotIcon", "VideoGoodBlack.svg")}  >
                  <Link to="/all-projects" className="link">
                    <span className="icon"> <img src={imageUrl + videoPhotIcon} alt="" /></span>
                    <span className="title">{languageData.PHOTO_VIDEO}</span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("engineeringIcon", "compassColor.svg")} onMouseLeave={() => this.onIconChange("engineeringIcon", "compassBlack.svg")} >
                  <Link to="/all-projects" className="link">
                    <span className="icon"> <img src={imageUrl + engineeringIcon} alt="" /> </span>
                    <span className="title"> {languageData.ENGINEERING_TEXT} </span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("translationIcon", "TranslationColor.svg")} onMouseLeave={() => this.onIconChange("translationIcon", "TranslationBlack.svg")}                >
                  <Link to="/all-projects" className="link">
                    <span className="icon"><img src={imageUrl + translationIcon} alt="" /></span>
                    <span className="title">{languageData.TRANSLATION}</span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("planingIcon", "WritingColor.svg")} onMouseLeave={() => this.onIconChange("planingIcon", "WritingBlack.svg")} >
                  <Link to="/all-projects" className="link">
                    <span className="icon"><img src={imageUrl + planingIcon} alt="" /></span>
                    <span className="title"> {languageData.PLANNING}</span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("teachingIcon", "onlineTeachingColor.svg")} onMouseLeave={() => this.onIconChange("teachingIcon", "onlineTeachingBlack.svg")} >
                  <Link to="/all-projects" className="link">
                    <span className="icon"> <img src={imageUrl + teachingIcon} alt="" /></span>
                    <span className="title">{languageData.TUTORIAL_TEXT}</span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("legalAssistantIcon", "LawColor.svg")} onMouseLeave={() => this.onIconChange("legalAssistantIcon", "LawBlack.svg")}                >
                  <Link to="/all-projects" className="link">
                    <span className="icon"> <img src={imageUrl + legalAssistantIcon} alt="" /> </span>
                    <span className="title">  {languageData.LEGAL_ASSITANCE} </span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("adminIcon", "ClipColor.svg")} onMouseLeave={() => this.onIconChange("adminIcon", "ClipBlack.svg")}                >
                  <Link to="/all-projects" className="link">
                    <span className="icon"><img src={imageUrl + adminIcon} alt="" /></span>
                    <span className="title">{languageData.ADMIN}</span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("internationalTradeIcon", "InternationalTradeColor.svg")} onMouseLeave={() => this.onIconChange("internationalTradeIcon", "InternationalTradeBlack.svg")}                >
                  <Link to="/all-projects" className="link">
                    <span className="icon">  <img src={imageUrl + internationalTradeIcon} alt="" /> </span>
                    <span className="title">  {languageData.INTERNATIONAL_TRADE} </span>
                  </Link>
                </li>
                <li onMouseEnter={() => this.onIconChange("customerServiceIcon", "headsetColor.svg")} onMouseLeave={() => this.onIconChange("customerServiceIcon", "headsetBlack.svg")}                >
                  <Link to="/all-projects" className="link">
                    <span className="icon">  <img src={imageUrl + customerServiceIcon} alt="" /> </span>
                    <span className="title"> {languageData.CUSTOMER_SERVICE} </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="banner_sec">
          <ul className="cb-slideshow">
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
          <div className="container-fluid">
            {language == "korean" ? (
              <div className="banner_text">
                <h2 className="pink_text korean">
                  {languageData.BANNER_MAIN_FIRST}
                </h2>
                <h2 className="pink_text korean">
                  {languageData.BANNER_MAIN_SECOND}
                </h2>
                <div className="blackBackground">
                  <p className="pink_text_p korean">
                    {languageData.BANNER_MAIN_THIRD}
                  </p>
                  <p className="pink_text_d korean">
                    {languageData.BANNER_MAIN_FORTH}
                  </p>
                </div>
                <a className="go_btn" title="">
                  다운로드
                </a>
              </div>
            ) : (
                <div className="banner_text">
                  <h2 className="pink_text">{languageData.BANNER_MAIN_FIRST}</h2>
                  <h2 className="pink_text">{languageData.BANNER_MAIN_SECOND}</h2>
                  <div className="blackBackground">
                    <p className="pink_text_p">
                      {languageData.BANNER_MAIN_THIRD}
                    </p>
                    <p className="pink_text_d">
                      {languageData.BANNER_MAIN_FORTH}
                    </p>
                  </div>
                  <a className="go_btn" title="">
                    다운로드
                </a>
                </div>
              )}

            <div className="row">
              <div className="col-md-4">
                <div className="banner_text">
                  {/* <h2 className="black_text">전문가를 고용하세요!</h2>
                  <span>프로젝트 관리 프로그램을 활용하여 실시간 채팅 및 파일 업무관리 관리 다양한 관리툴을 무료로 사용하실수 있습니다.</span> */}
                  {/* <a className="go_btn"  title="">
                    DOWNLOAD
                  </a> */}
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="banner_text quick_deal">
                  <h2 className="white_text">전문가를 고용하세요!</h2>
                  <span className="white_text">NO NEED TO LOGIN!</span>
                  <a className="go_btn"  title="">
                    GO!
                  </a>
                </div>
              </div> */}
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
  };
}
function mapDispatchProps(dispatch) {
  return {
    onLangaugeChange: (langauge) => {
      dispatch(onReduxLangaugeChange(langauge));
    },
  };
}

export default connect(mapStateToProps, mapDispatchProps)(ImageBanner);
