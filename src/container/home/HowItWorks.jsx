import React, { Component } from "react";
import { connect } from "react-redux";
import { onReduxLangaugeChange } from "../../store/action";

class HowItWorks extends Component {
  render() {
    let { languageData, language } = this.props;
    return (
      <>
        <section className="work_sec">
          <div className="container-fluid">
            <h3 className="white_text text-center">{languageData.ULTIMATE_SOLUTION}</h3>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="deal_box">
                  <h5 className="white_text subtitle">{languageData.TRUSTABLE_TITLE}</h5>
                  <p className="white_text contents">
                   {languageData.TRUSTABLE_FIRST}
                  </p>
                  <p className="white_text contents">
                  {languageData.TRUSTABLE_SECOND}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="deal_box">
                  <h5 className="white_text subtitle">{languageData.FLEXIBILITY_TITLE}</h5>
                  <p className="white_text contents">
                   {languageData.FLEXIBILITY_FIRST}
                  </p>
                  <p className="white_text contents">
                   {languageData.FLEXIBILITY_SECOND}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="deal_box">
                  <h5 className="white_text subtitle">
                  {languageData.POWERFUL_SECURITY_TITLE}
                  </h5>
                  <p className="white_text contents">
                    {languageData.POWERFUL_SECURITY_FIRST}
                  </p>
                  <p className="white_text contents">
                  {languageData.POWERFUL_SECURITY_SECOND}
                  </p>
                </div>
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

export default connect(mapStateToProps, mapDispatchProps)(HowItWorks);