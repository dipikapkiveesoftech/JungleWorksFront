import React, { Component } from "react";

class HelpCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
  }
  onTabChangeHandle = (selectedTab) => {
    this.setState({
      activeTab: selectedTab,
    });
  };
  render() {
    let { activeTab } = this.state;
    return (
      <>
        <section className="help_sec">
          <div className="container">
            <div className="help_center">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li
                  className={activeTab === 1 ? "nav-item active" : "nav-item"}
                  onClick={() => this.onTabChangeHandle(1)}
                >
                  <a
                    className={activeTab === 1 ? "nav-link active" : "nav-link"}
                  >
                    Getting Started
                  </a>
                </li>
                <li
                  className={activeTab === 2 ? "nav-item active" : "nav-item"}
                  onClick={() => this.onTabChangeHandle(2)}
                >
                  <a
                    className={activeTab === 2 ? "nav-link active" : "nav-link"}
                  >
                    Using Jungletalk
                  </a>
                </li>
                <li
                  className={activeTab === 3 ? "nav-item active" : "nav-item"}
                  onClick={() => this.onTabChangeHandle(3)}
                >
                  <a
                    className={activeTab === 3 ? "nav-link active" : "nav-link"}
                  >
                    Setting
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className={
                    activeTab === 1
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="help_list">
                    <h4>
                      <img
                        src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/JungleNewsHumanOnly.png"
                        alt=""
                      />
                      Intro to Jungleworks
                    </h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="help_list">
                    <h4>
                      <img
                        src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/JungleNewsHumanOnly.png"
                        alt=""
                      />
                      Intro to Slack
                    </h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="help_list">
                    <h4>
                      <img src="../img/JungleNewsHumanOnly.png" alt="" />
                      Intro to Slack
                    </h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeTab === 2
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="help_list">
                    <h4>
                      <img src="../img/JungleNewsHumanOnly.png" alt="" />
                      Intro to Slack
                    </h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="help_list">
                    <h4>
                      <img src="../img/JungleNewsHumanOnly.png" alt="" />
                      Intro to Slack
                    </h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="help_list">
                    <h4>
                      <img src="../img/JungleNewsHumanOnly.png" alt="" />
                      Intro to Slack
                    </h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeTab === 3
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="help_list">
                    <h4>
                      <img src="../img/JungleNewsHumanOnly.png" alt="" />
                      Intro to Slack
                    </h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="help_list">
                    <h4>
                      <img src="../img/JungleNewsHumanOnly.png" alt="" />
                      Intro to Slack
                    </h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="help_list">
                    <h4>
                      <img src="../img/JungleNewsHumanOnly.png" alt="" />
                      Intro to Slack
                    </h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <a title="">
                              <b>What is</b> Slack?
                            </a>
                          </li>
                          <li>
                            <a title="">
                              <b>Working in</b> Slack
                            </a>
                          </li>
                          <li>
                            <a title="">
                              About Slack's <b>features</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>desktop</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              The Slack experience for <b>mobile</b>
                            </a>
                          </li>
                          <li>
                            <a title="">
                              Understand your <b>actions</b> in Slack
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HelpCenter;
