import React, { Component } from "react";

class ExtensionInOffice extends Component {
  render() {
    return (
      <>
        <div class="terms_box">
          <div class="myContest">
            <div class="work_date save_cancel">
              <span>Terms</span>
            </div>
            <div class="hourly_rate">
              <div class="d-flex align-items-center">
                <label class="titleBold">Location : </label>
                <span>unit 234, Medi Street, Vitoria Australia</span>
              </div>
              <div class="d-flex align-items-center">
                <label class="titleBold">Attendance : </label>
                <span>3 days per wee</span>
              </div>
              <div class="d-flex align-items-center">
                <label class="titleBold">Equipment : </label>
                <span>Provided by project owner</span>
              </div>
              <div class="d-flex align-items-center">
                <label class="titleBold">Weekend Rate : </label>
                <span>Saturday: 150% </span>
                <span>Sundady: 200%</span>
              </div>
            </div>
          </div>
          <div class="work_date">
            <a title="">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <span>13th April ~ 18th April 2020</span>
            <a title="">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
          <div class="week_tbl">
            <table class="table text-center">
              <thead>
                <tr>
                  <th class="text-left" scope="col">
                    3/7
                  </th>
                  <th scope="col">Mon</th>
                  <th scope="col">Tue</th>
                  <th scope="col">Wed</th>
                  <th scope="col">Thur</th>
                  <th scope="col">Fri</th>
                  <th scope="col" class="red_text">
                    Sat
                  </th>
                  <th scope="col" class="red_text">
                    Sun
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left"></td>
                  <td>13/4</td>
                  <td>13/4</td>
                  <td>13/4</td>
                  <td>13/4</td>
                  <td>13/4</td>
                  <td>13/4</td>
                  <td>13/4</td>
                </tr>
                <tr>
                  <td class="text-left">Sonny</td>
                  <td>
                    <span class="green_dot"></span>
                  </td>
                  <td></td>
                  <td>
                    <span class="green_dot"></span>
                  </td>
                  <td></td>
                  <td>
                    <span class="green_dot"></span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default ExtensionInOffice;
