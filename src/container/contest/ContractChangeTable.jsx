import React, { Component } from "react";
import { onReduxLangaugeChange } from "../../store/action";
import { connect } from "react-redux";
class ContractChangeTable extends Component {
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
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col" className="text-left">
                {languageData.FREELANCER}
              </th>
              <th scope="col" className="text-left">
                {languageData.SUBMITTED_WORKS}
              </th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          
          <tr>
              <td className="text-left">
                Jack Donnel
                <i
                  className="fa fa-thumbs-up green_text"
                  aria-hidden="true"
                ></i>
              </td>
              <td className="text-left">
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
              </td>
              <td className="text-left">
                <button className="btn btn-danger btn-sm">
                  {languageData.DEACTIVATE_TEXT}
                </button>
              </td>
              <td className="text-left">
                <button className="btn btn-dark btn-sm">
                  {languageData.SHORTLIST_TEXT}
                </button>
              </td>
              <td className="text-left">
                <button className="btn btn-dark btn-sm">Message</button>
              </td>
              <td className="text-left">
                <button className="btn btn-dark btn-sm">Award</button>
              </td>
            </tr>
            <tr>
              <td className="text-left">
                Jack Donnel
                <i
                  className="fa fa-thumbs-up green_text"
                  aria-hidden="true"
                ></i>
              </td>
              <td className="text-left">
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
              </td>
              <td className="text-left">
                <button className="btn btn-danger btn-sm">
                  {languageData.DEACTIVATE_TEXT}
                </button>
              </td>
              <td className="text-left">
                <button className="btn btn-dark btn-sm">
                  {languageData.SHORTLIST_TEXT}
                </button>
              </td>
              <td className="text-left">
                <button className="btn btn-dark btn-sm">Message</button>
              </td>
              <td className="text-left">
                <button className="btn btn-dark btn-sm">Award</button>
              </td>
            </tr>

            <tr>
              <td className="text-left">
                Jack Donnel
                <i
                  className="fa fa-thumbs-up green_text"
                  aria-hidden="true"
                ></i>
              </td>
              <td className="text-left">
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
                <label>
                  <img src="/assets/img/placeholder_logo2.svg" alt="" />
                </label>
              </td>
              <td className="text-left">
                <button className="btn btn-danger btn-sm">
                  {languageData.DEACTIVATE_TEXT}
                </button>
              </td>
              <td className="text-left">
                <button className="btn btn-dark btn-sm">
                  {languageData.SHORTLIST_TEXT}
                </button>
              </td>
              <td className="text-left">
                <button className="btn btn-dark btn-sm">Message</button>
              </td>
              <td className="text-left">
                <button className="btn btn-dark btn-sm">Award</button>
              </td>
            </tr>


          </tbody>
        </table>
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

export default connect(mapStateToProps, mapDispatchProps)(ContractChangeTable);
