import React, { Component } from "react";

class RightBottom extends Component {
  render() {
    return (
      <>
        <div className="right_bar">
          <h4>Quick Deals</h4>
          <ul className="list-unstyled id_open">
            <li>
              <div className="d-flex justify-content-between">
                <a className="id_name">ID. Q23122234234</a>
                <a className="open_click">OPEN</a>
              </div>
              <span>Wordpress Development with 20 ...</span>
            </li>
            <li>
              <div className="d-flex justify-content-between">
                <a className="id_name">ID. Q23122234234</a>
                <a className="open_click">OPEN</a>
              </div>
              <span>Wordpress Development with 20 ...</span>
            </li>
            <li>
              <div className="d-flex justify-content-between">
                <a className="id_name">ID. Q23122234234</a>
                <a className="open_click">OPEN</a>
              </div>
              <span>Wordpress Development with 20 ...</span>
            </li>
            <li>
              <div className="d-flex justify-content-between">
                <a className="id_name">ID. Q23122234234</a>
                <a className="close_click">CLOSED</a>
              </div>
              <span>Wordpress Development with 20 ...</span>
            </li>
            <li>
              <div className="d-flex justify-content-between">
                <a className="id_name">ID. Q23122234234</a>
                <a className="close_click">CLOSED</a>
              </div>
              <span>Wordpress Development with 20 ...</span>
            </li>
          </ul>
          <div className="showMore_box text-right">
            <a>view more</a>
          </div>
        </div>
      </>
    );
  }
}

export default RightBottom;
