import React, { Component } from "react";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";
import MyCouponTable from "./MyCouponTable";

class MyCoupon extends Component {
  render() {
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post">
                  <div className="business_category post_form">
                    <div className="d-flex align-items-center display_select">
                      <label>Display</label>
                      <select className="form-control">
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                      </select>
                    </div>
                    <div className="table-responsive detail_tbl feedback_tbl coupon_tbl">
                      <MyCouponTable />
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

export default MyCoupon;
