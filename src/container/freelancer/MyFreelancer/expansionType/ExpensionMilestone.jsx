import React, { Component } from "react";

class ExpensionMilestone extends Component {
  render() {
    return (
      <>
        <div class="viewMoreDtl">
          <p class=" text-right maxWidth_100">View More Detail</p>
          <div class="week_tbl weekDtl_tbl">
            <table class="table text-center">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Task</th>
                  <th scope="col">State</th>
                  <th scope="col">Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>25th April 2020</td>
                  <td>HTML/CSS</td>
                  <td>
                    <a class="gray_bg">Requested</a>
                  </td>
                  <td>
                    <a class="darkGreen_font">Paid</a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>25th April 2020</td>
                  <td>HTML/CSS</td>
                  <td>
                    <a class="green_bg">Acknowledged</a>
                  </td>
                  <td>
                    <a class="darkGreen_font ">Paid</a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>25th April 2020</td>
                  <td>HTML/CSS</td>
                  <td>
                    <a class="black_bg">In-Progress</a>
                  </td>
                  <td>
                    <a class="blue_bg">Hold</a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>25th April 2020</td>
                  <td>HTML/CSS</td>
                  <td>
                    <a class="pink_bg">Ready</a>
                  </td>
                  <td>
                    <a class="red_bg">Dispute</a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>25th April 2020</td>
                  <td>HTML/CSS</td>
                  <td>
                    <a class="orange_bg">Review</a>
                  </td>
                  <td>
                    <a class="darkGreen_font">Paid</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default ExpensionMilestone;
