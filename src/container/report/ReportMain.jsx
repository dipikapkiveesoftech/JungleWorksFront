import React, { Component } from "react";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
import { projectData } from "../../utils/dummy/ProjectData";
import { Route, Link } from "react-router-dom";
class ReportMain extends Component {
  componentDidMount() {
    const { state } = this.props.location;
    console.log(state);
  }

  render() {
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-10 col-md-12">
                <div className="project_post">
                  <div className="viewAl_project">
                    <div className="row align-items-end">
                      <div className="col-md-6">
                        <label>
                          Sonny:
                          <span className="green_text">
                            Highly Skilled C# Developer
                          </span>
                        </label>
                      </div>
                      <div className="col-md-6 text-right post_modal">
                        <div className="save_cancel">
                          <Link
                            to="/feedback-claims"
                            className="btn save_btn"
                            title=""
                          >
                            View feedbacks and claims
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="gray_box">
                      <p>
                        s simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                      </p>
                    </div>
                    <div className="skill_btn language_btn">
                      <a title="">JAVA</a>
                      <a title="">C#</a>
                      <a title="">HTML</a>
                      <a title="">ASP.NET</a>
                    </div>
                    <div className="post_modal">
                      <div className="text-right save_cancel">
                        <button type="submit" className="btn cancel_btn">
                          Modify
                        </button>
                      </div>
                    </div>
                    <div className="total_income">
                      <div className="row">
                        <div className="col-md-6">
                          <label>
                            <span className="green_text">Total Income :</span>
                            <span className="black_text">US$2,000.00</span>
                            <small>Since 21 Mar 2018</small>
                          </label>
                          <label>
                            <span className="green_text">This Month :</span>
                            <span className="black_text">US$940.00</span>
                          </label>
                          <label>
                            <span className="green_text">This Week :</span>
                            <span className="black_text">US$240.00</span>
                          </label>
                        </div>
                        <div className="col-md-6 complate_rate">
                          <label>
                            <span className="green_text">My Evaluation :</span>
                            <span className="black_text">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                          </label>
                          <label>
                            <span className="green_text">Complete Rate : </span>
                            <span className="black_text">72%</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
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

export default ReportMain;
