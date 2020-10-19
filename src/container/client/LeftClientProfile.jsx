import React, { Component } from "react";
import { onReduxLangaugeChange } from "../../store/action";
import { connect } from "react-redux";

class LeftClientProfile extends Component {

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
        <div className="d-flex">
          <span>
            <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/client_img.jpg" alt="" />
          </span>
          <div>
            <h5>Bigpie123</h5>
            <label className="green_text">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </label>
            <h6>{languageData.SEOUL_TEXT}</h6>
          </div>
        </div>
        <h5>{languageData.TOTAL_TEXT} : US$23,000.00</h5>
        <div className="post_modal">
          <div className="save_cancel">
            <button type="submit" className="btn cancel_btn">
             {languageData.SET_PRFERRED_CLIENT}
            </button>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchProps)(LeftClientProfile);