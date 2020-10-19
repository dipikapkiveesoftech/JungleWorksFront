import React, { Component } from "react";

class ExtensionOngoing extends Component {
  render() {
    return (
      <>
        <div className="work_detail contract_detail">
          <div className="table-responsive detail_tbl">
            <table className="table text-center">
              <tbody>
                <tr>
                  <td className="text-left">1. Home page design work</td>
                  <td className="text-left">
                    <a className="black_btn">Hourly</a>
                  </td>
                  <td className="text-left">Average working hour</td>
                  <td className="text-left">7hours per day</td>
                </tr>
                <tr>
                  <td className="text-left">2. YYA projects</td>
                  <td className="text-left">
                    <a className="black_btn">Project</a>
                  </td>
                  <td className="text-left">Estimated complete date</td>
                  <td className="text-left">2018.09.10</td>
                </tr>
                <tr>
                  <td className="text-left">3. Professional A project Lo...</td>
                  <td className="text-left">
                    <a className="black_btn">Contest</a>
                  </td>
                  <td className="text-left">Estimated complete date</td>
                  <td className="text-left">2018.09.10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-right">
          <a className="green_text view_more">View More</a>
        </div>
      </>
    );
  }
}

export default ExtensionOngoing;
