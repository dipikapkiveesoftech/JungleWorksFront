import React, { Component } from "react";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
import { onReduxLangaugeChange } from "../../store/action";
import { connect } from "react-redux";
import queryString from 'query-string';

class ConfirmProject extends Component {

  componentWillMount() {
    let data = localStorage.getItem("langauge");
    let langauge = JSON.parse(data);
    if (langauge) {
      this.props.onLangaugeChange(langauge);
    }
    debugger
   
  }

  onLangaugeDataChange = (language) => {
    localStorage.setItem("langauge", JSON.stringify(language));
    this.props.onLangaugeChange(language);
  };


  render() {
    let { languageData, language,  type, projectConfirmData, location} = this.props;
    const confirmationData = queryString.parse(location.search);

    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post">
                  <div className="confirm_contest">
                    <h4 className="text-center">
                      <i className="fa fa-calculator" aria-hidden="true"></i>
                        {confirmationData.projectType ==="contest" ?
                        languageData.CONFIRM_CONTEST
                        :
                        confirmationData.projectType ==="milestone" ?
                        languageData.CONFIRM_MILESTONE
                        :
                        confirmationData.projectType ==="office" ?
                        languageData.CONFIRM_INOFFICE
                        :
                        languageData.CONFIRM_HOURLY
                        }
                    </h4>
                    <p>
                      <span className="boldText"> {languageData.PROJECT_TITLE} : </span>
                      <span  >Design My logo</span>
                    </p>
                    <p>
                      <span className="boldText">{languageData.PAYMENT_CONFIRMATION_TYPE} : </span>
                      <span>Guranteed</span>
                    </p>
                    <p>
                      <span className="boldText">{languageData.PRIVATE_TEXT} : </span>
                      <span>Yes</span>
                    </p>
                    <p>
                      <span className="boldText">{languageData.AWARDS_TEXT} : </span>
                      <span >1st US$499.00</span>
                      <span className="ml-3" >2nd US$159.00</span>
                      <span className="ml-3" >3rd US$100.00</span>
                    </p>
                    <p>
                      <span className="boldText">{languageData.PROMOTION_TEXT}  : </span>
                      <span>US$79.00</span>
                    </p>
                    <p>
                      <span className="boldText">{languageData.BLIND_TEXT} : </span>
                      <span>US$39.00</span>
                    </p>
                    <h5 className="total_price">Total : US$798.00</h5>
                  </div>
                  <div className="save_cancel text-right">
                    <button type="submit" className="btn cancel_btn">
                    {languageData.CANCEL_TEXT}
                    </button>
                    <button type="submit" className="btn save_btn">
                      {languageData.SAVE_N_CONTINUE}
                    </button>
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

// export default ConfirmContest;
function mapStateToProps(state) {
  return {
    languageData: state.langaugeStore.languageData,
    language: state.langaugeStore.language,
    activeRoute: state.routeStore.activeRoute,
    projectConfirmData:state.projectStore.projectConfirmData

  };
}
function mapDispatchProps(dispatch) {
  return {
    onLangaugeChange: (langauge) => {
      dispatch(onReduxLangaugeChange(langauge));
    },
  };
}

export default connect(mapStateToProps, mapDispatchProps)(ConfirmProject);