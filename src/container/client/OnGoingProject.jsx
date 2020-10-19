import React, { Component } from "react";
import { onReduxLangaugeChange } from "../../store/action";
import { connect } from "react-redux";
class OnGoingProject extends Component {
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
        <div className="work_detail contract_detail">
          <div className="table-responsive detail_tbl">
            <table className="table text-center">
              <tbody>
                <tr>
                  <td className="text-left">1. Home page design work</td>
                  <td className="text-left">
                    <a className="black_btn">{languageData.HOURLY_TEXT}</a>
                  </td>
                  <td className="text-left">Average working hour</td>
                  <td className="text-left">7hours per day</td>
                </tr>
                <tr>
                  <td className="text-left">2. YYA projects</td>
                  <td className="text-left">
                    <a className="black_btn">{languageData.MILESTONE_TEXT}</a>
                  </td>
                  <td className="text-left">Estimated complete date</td>
                  <td className="text-left">2018.09.10</td>
                </tr>
                <tr>
                  <td className="text-left">3. Professional A project Lo...</td>
                  <td className="text-left">
                    <a className="black_btn">{languageData.CONTEST}</a>
                  </td>
                  <td className="text-left">Estimated complete date</td>
                  <td className="text-left">2018.09.10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-right">
          <a className="green_text view_more">{languageData.VIEW_MORE}</a>
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

export default connect(mapStateToProps, mapDispatchProps)(OnGoingProject);
