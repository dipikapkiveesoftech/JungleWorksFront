import React, { Component } from "react";

class RightTop extends Component {
  render() {
    return (
      <>
        <div className="right_bar">
          <h4>Other Business Scope</h4>
          <ul className="list-unstyled">
            <li>
              <a className="dropdown-toggle">Accounting/Counsulting</a>
            </li>
            <li>
              <a className="dropdown-toggle">Design/Art</a>
            </li>
            <li>
              <a className="dropdown-toggle">Writing</a>
            </li>
            <li>
              <a className="dropdown-toggle">Engineer</a>
            </li>
            <li>
              <a className="dropdown-toggle">Sales/Marketing</a>
            </li>
            <li>
              <a className="dropdown-toggle">Legal Service</a>
            </li>
            <li>
              <a className="dropdown-toggle">Admin Support</a>
            </li>
          </ul>
          <div className="showMore_box text-right"></div>
        </div>
      </>
    );
  }
}

export default RightTop;
