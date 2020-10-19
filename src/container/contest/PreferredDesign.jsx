import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
// Redux
import { onReduxRouteChange, onReduxProjectConfirmationDataHandle } from "../../store/action";
import { connect } from "react-redux";


class PreferredDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max : 5,
      min : 1,
      currentData:0,
      isCheckedValidate : false
    };
  }

  checkValidationCheckbox(event) {
    let isSelected = event.currentTarget.checked;
   // let isCheckedValidate = false;
    console.log(`currentData is: ${this.state.currentData}`);
    if (isSelected) {
      if (this.state.currentData < this.state.max) {
        this.setState({ currentData: this.state.currentData + 1 });
      } else {
        event.preventDefault();
        event.currentTarget.checked = false;
        console.log("5 over");
      }
    } else {
      if (this.state.currentData > this.state.min) {
        this.setState({ currentData: this.state.currentData - 1 });
        console.log("5 over");

      } else {
        console.log('Not allowed to uncheck. Less than or equal to min')
        //  event.preventDefault();
        // event.currentTarget.checked = true;
       }
       console.log("5 over");
    }
    this.setState({isCheckedValidate : event.currentTarget.checked})
    return;
  }
  
  onPageRedirectHandle = (redirectTo) => {
  
    if(!this.checkValidationCheckbox){
       
       console.log("five limits");
       return
    }
    let confirmationData = {
      projectType: "contest",
      title: "Design My logo",
      confirmationType: "Guranteed",
      privateText: "yes",
      award: {
        first: "1st US$499.00",
        second: "2nd US$159.00",
        third: "3rd US$100.00",
      },
      promotion: "US$79.00",
      blind: "US$39.00",
      total: " US$798.00"
    }
    var newurl =redirectTo + '?projectType=contest';
    this.props.onProjectConfirmationDataHandle(confirmationData)
    this.props.onRouteChange(redirectTo)
    this.props.history.push(newurl)
  }
  render() {
    return (
      <>
        <section class="card_sec">
          <div class="bcknd_container">
            <div class="row">
              <div class="col-lg-9 col-md-12">
                <div class="project_post style_place">
                  <div class="style_label">
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <label>You can select maxium 5 styles</label>
                      </div>
                      <div class="col-md-6">
                        <div class="text-right save_cancel">
                          <button type="button" class="btn cancel_btn">
                            Cancel
                          </button>
                          <button
                            type="button"
                            class="btn save_btn"
                            onClick={() => this.onPageRedirectHandle("/confirm-project")}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="style_box">
                    <div class="row align-items-center">
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="exampleCheck"
                          id="exampleCheck1"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck2"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck2">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck3"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck3">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck4"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck4">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck5"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck5">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck6"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck6">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck7"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck7">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck8"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck8">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck9"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck9">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck10"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck10">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck11"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck11">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck12"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck12">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck13"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck13">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck14"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck14">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck15"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck15">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="checkbox"
                          name="exampleCheck"
                          class="form-check-input"
                          id="exampleCheck16"
                          onChange={this.checkValidationCheckbox.bind(this)}
                        />
                        <label class="form-check-label" for="exampleCheck16">
                          <img src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/placeholder_mg.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-12">
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
    onRouteChange: (activeRoute) => {
      dispatch(onReduxRouteChange(activeRoute));
    },
    onProjectConfirmationDataHandle: (data) => {
      dispatch(onReduxProjectConfirmationDataHandle(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchProps)(PreferredDesign);
