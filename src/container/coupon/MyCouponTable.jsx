import React, { Component } from "react";

class MyCouponTable extends Component {
  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-left">
                Date
              </th>
              <th scope="col">Coupon No.</th>
              <th scope="col">Project</th>
              <th scope="col">Used for</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left">03 Aug 2018 21: 58</td>
              <td>09234850982345</td>
              <td></td>
              <td>Available</td>
              <td>$20.00</td>
              <td>
                <button type="submit" className="btn save_btn use_btn">
                  Use
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-left">03 Aug 2018 21: 58</td>
              <td>09234850982345</td>
              <td>KY Project</td>
              <td>Upgrade Fee</td>
              <td>$20.00</td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">03 Aug 2018 21: 58</td>
              <td>09234850982345</td>
              <td>KY Project</td>
              <td>Upgrade Fee</td>
              <td>$20.00</td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">03 Aug 2018 21: 58</td>
              <td>09234850982345</td>
              <td>KY Project</td>
              <td>Upgrade Fee</td>
              <td>$20.00</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default MyCouponTable;
