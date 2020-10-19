import React, { Component } from "react";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";

class FreelancerRegistration extends Component {
  render() {
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post freelancer_reg">
                  <h4>
                    <a className="logo_head">
                      <img
                        src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/logo2.png"
                        alt=""
                      />
                    </a>
                  </h4>
                  <form className="post_form">
                    <div className="row align-items-end">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>About your service</label>
                          <select className="form-control">
                            <option>About your service</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <select className="form-control">
                            <option>About your service</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="dev_box">
                      <div className="d-flex align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customcheck1"
                            required
                          />
                          <label
                            className="custom-control-label"
                            for="customcheck1"
                          >
                            Desktop Software
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customcheck2"
                            required
                          />
                          <label
                            className="custom-control-label"
                            for="customcheck2"
                          >
                            Web Development
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-end">
                      <div className="col-md-4">
                        <div className="your_skill">
                          <label>About your skills</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="skill_btn">
                      <a title="">C#</a>
                    </div>
                    <label>
                      <small>Drag your skill the levels below</small>
                    </label>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="exp_box">
                          <a href="" className="exp_click">
                            1~3 years
                          </a>
                          <div className="skill_btn d-flex row">
                            <a className="d-flex justify-content-between align-items-center">
                              C# <span>x</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="exp_box">
                          <a href="" className="exp_click">
                            4~6 years
                          </a>
                          <div className="skill_btn d-flex row">
                            <a className="d-flex justify-content-between align-items-center">
                              C# <span>x</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="exp_box">
                          <a href="" className="exp_click">
                            7~10 years
                          </a>
                          <div className="skill_btn d-flex row">
                            <a className="d-flex justify-content-between align-items-center">
                              C# <span>x</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="exp_box">
                          <a href="" className="exp_click">
                            More than 10 years
                          </a>
                          <div className="skill_btn d-flex row">
                            <a className="d-flex justify-content-between align-items-center">
                              C# <span>x</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="save_cancel">
                      <button type="submit" className="btn save_btn">
                        Save & Continue
                      </button>
                      <button type="submit" className="btn outline_btn">
                        I want to create a client account
                      </button>
                    </div>
                  </form>
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

export default FreelancerRegistration;
