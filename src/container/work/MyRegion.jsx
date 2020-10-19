import React, { Component } from "react";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";

class MyRegion extends Component {
  render() {
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post">
                  <div className="row align-items-end">
                    <div className="col-md-3">
                      <div className="form-group">
                        <label className="green_text">
                          Select your city
                        </label>
                        <select className="form-control">
                          <option>Seoul</option>
                          <option>Busan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label className="green_text">
                          Add your location
                        </label>
                        <input className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label className="green_text">
                          Select your business category
                        </label>
                        <select className="form-control">
                          <option>within 30km</option>
                          <option>within 50km</option>
                          <option>within 80km</option>
                          <option>within 100km</option>
                          <option>Anywhere in the same country</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 post_modal">
                      <div className="save_cancel form-group">
                        <button type="submit" className="btn cancel_btn">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="map_div your_loaction">
                    <label>Please select your location of work</label>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1735769.8535458827!2d77.29538994999999!3d31.820213499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1593056340719!5m2!1shi!2sin"
                      width="100%"
                      height="415"
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </div>
                <div className="project_post">
                  <div className="business_category post_form">
                    <div className="row align-items-end">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="green_text">
                            Select your city
                          </label>
                          <select className="form-control">
                            <option>Seoul</option>
                            <option>Busan</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="green_text">
                            Add your location
                          </label>
                          <input className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="green_text">
                            Select your business category
                          </label>
                          <select className="form-control">
                            <option>within 30km</option>
                            <option>within 50km</option>
                            <option>within 80km</option>
                            <option>within 100km</option>
                            <option>Anywhere in the same country</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3 post_modal">
                        <div className="save_cancel form-group">
                          <button type="submit" className="btn cancel_btn">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center display_select">
                      <label>Display</label>
                      <select className="form-control">
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                      </select>
                      <a className="filter_btn">
                        <i className="fa fa-filter" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div className="table-responsive detail_tbl feedback_tbl">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Hire until</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Project</th>
                            <th scope="col">Address</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2018-02-18</td>
                            <td>US$5,300.00 per month</td>
                            <td>Web development</td>
                            <td>Boltimore USA</td>
                          </tr>
                          <tr>
                            <td>2018-02-18</td>
                            <td>US$5,300.00 per month</td>
                            <td>Cleaning Work</td>
                            <td>Boltimore USA</td>
                          </tr>
                          <tr>
                            <td>2018-02-18</td>
                            <td>US$5,300.00 per month</td>
                            <td>Installation of shower booth</td>
                            <td>Boltimore USA</td>
                          </tr>
                          <tr>
                            <td>2018-02-18</td>
                            <td>US$5,300.00 per month</td>
                            <td>Installation of shower booth</td>
                            <td>Boltimore USA</td>
                          </tr>
                          <tr>
                            <td>2018-02-18</td>
                            <td>US$5,300.00 per month</td>
                            <td>Installation of shower booth</td>
                            <td>Boltimore USA</td>
                          </tr>
                          <tr>
                            <td>2018-02-18</td>
                            <td>US$5,300.00 per month</td>
                            <td>Installation of shower booth</td>
                            <td>Boltimore USA</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center page_div">
                        <li className="page-item">
                          <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link">1</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link">2</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link">3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" aria-label="Next">
                            <span aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
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

export default MyRegion;
