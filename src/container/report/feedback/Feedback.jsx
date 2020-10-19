import React, { Component } from "react";
import RightTop from "../../../components/rightbar/RightTop";
import RightBottom from "../../../components/rightbar/RightBottom";
import Pagenation from "../../../components/Pagenation";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      claimTableData: [{
        claim_id: "201829-01",
        project_id: "201829-01	",
        required: "Dispute",
        amount: "$240.00",
        date: "2018-02-18",
      }, {
        claim_id: "201829-01",
        project_id: "201829-01	",
        required: "Refund",
        amount: "$240.00",
        date: "2018-02-18",
      }, {
        claim_id: "201829-01",
        project_id: "201829-01	",
        required: "Refund",
        amount: "$240.00",
        date: "2018-02-18",
      }, {
        claim_id: "201829-01",
        project_id: "201829-01	",
        required: "Dispute",
        amount: "$240.00",
        date: "2018-02-18",
      }, {
        claim_id: "201829-01",
        project_id: "201829-01	",
        required: "Refund",
        amount: "$240.00",
        date: "2018-02-18",
      }, {
        claim_id: "201829-01",
        project_id: "201829-01	",
        required: "Refund",
        amount: "$240.00",
        date: "2018-02-18",
      }, {
        claim_id: "201829-01",
        project_id: "201829-01	",
        required: "Refund",
        amount: "$240.00",
        date: "2018-02-18",
      },
      ],
      feedbackTableData: [{
        date: "2018-02-18",
        project_id: "201829-01",
        client: "MR. Jaames Bond",
        evaluation: [1, 2, 3, 4, 5],
        reason: "Completed Project",
        status: "completed",
      }, {
        date: "2018-02-18",
        project_id: "201829-01",
        client: "MR. Jaames Bond",
        evaluation: [1, 2, 3],
        reason: "Cheated he is a good developer",
        status: "other",
      }, {
        date: "2018-02-18",
        project_id: "201829-01",
        client: "MR. Jaames Bond",
        evaluation: [1, 2, 3, 4],
        reason: "He is not able to do requirements",
        status: "other",
      }, {
        date: "2018-02-18",
        project_id: "201829-01",
        client: "MR. Jaames Bond",
        evaluation: [1, 2],
        reason: "He is not able to do requirements",
        status: "other",
      }, {
        date: "2018-02-18",
        project_id: "201829-01",
        client: "MR. Jaames Bond",
        evaluation: [1, 2, 3, 4, 5],
        reason: "Completed Project",
        status: "completed",
      }, {
        date: "2018-02-18",
        project_id: "201829-01",
        client: "MR. Jaames Bond",
        evaluation: [1, 2, 3],
        reason: "Cheated he is a good developer",
        status: "other",
      }, {
        date: "2018-02-18",
        project_id: "201829-01",
        client: "MR. Jaames Bond",
        evaluation: [1, 2, 3, 4],
        reason: "He is not able to do requirements",
        status: "other",
      }
      ],
      cliamPageOfItems: [],
      feedbackPageOfItems: [],
    };
  }
  onTabChangeHandle = (selectedTab) => {
    this.setState({
      activeTab: selectedTab,
    });
  };
  onClaimTableChangePage = (pageOfItems) => {
  
    this.setState({ cliamPageOfItems: pageOfItems });
    
  }
  onFeedbackTableChangePage = (pageOfItems) => {
  
    this.setState({ feedbackPageOfItems: pageOfItems });
    
  }
  render() {
    let { activeTab, claimTableData, cliamPageOfItems, feedbackTableData , feedbackPageOfItems} = this.state;
    return (
      <>
        <section class="card_sec">
          <div class="bcknd_container">
            <div class="row">
              <div class="col-lg-10 col-md-8">
                <div className="project_post">
                  <div className="">
                    <ul className="nav nav-pills mb-3"                    >
                      <li className="nav-item" onClick={() => this.onTabChangeHandle(1)}>
                        <a className={activeTab === 1 ? "nav-link active" : "nav-link"}>FEEDBACK </a>
                      </li>
                      <li className="nav-item" onClick={() => this.onTabChangeHandle(2)}>
                        <a className={activeTab === 2 ? "nav-link active" : "nav-link"}>CLAIMS </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div className={activeTab === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                        <div className="table-responsive detail_tbl feedback_tbl">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Project Id</th>
                                <th scope="col">Client</th>
                                <th scope="col">Evaluation</th>
                                <th scope="col" className="text-left"> Reason</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {feedbackPageOfItems && feedbackPageOfItems.length > 0 ? feedbackPageOfItems.map((data, idx) =>
                                <tr key={idx}>
                                  <td>{data.date}</td>
                                  <td>{data.project_id}</td>
                                  <td>{data.client}</td>
                                  <td>
                                    <label>
                                      {data.evaluation && data.evaluation.length > 0 &&
                                        data.evaluation.map((ratiing) =>
                                          <i className="fa fa-star" aria-hidden="true"  ></i>)
                                      }
                                    </label>
                                  </td>
                                  <td>{data.reason}</td>
                                  <td>
                                    {data.status === "completed" ?
                                      <button type="submit" className="btn cancel_btn" disabled> Complete</button>
                                      :
                                      <button type="submit" className="btn red_btn" > Feedback </button>
                                    }
                                  </td>
                                </tr>)
                                :
                                <tr >
                                  <td colSpan="6" className="text-center">There is no data data to display</td>
                                </tr>
                              }
                            </tbody>
                          </table>
                        </div>
                        <Pagenation items={feedbackTableData} onChangePage={this.onFeedbackTableChangePage} initialPage={1} />
                      </div>
                      <div className={activeTab === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                        <div className="table-responsive detail_tbl feedback_tbl">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Claim ID</th>
                                <th scope="col">Project Id</th>
                                <th scope="col">Required</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cliamPageOfItems && cliamPageOfItems.length > 0 ? cliamPageOfItems.map((data, idx) =>
                                <tr key={idx}>
                                  <td>{data.date}</td>
                                  <td>{data.claim_id}</td>
                                  <td>{data.project_id}</td>
                                  <td>{data.required}</td>
                                  <td>{data.amount}</td>
                                  <td>
                                    <button type="submit" className="btn red_btn" >Reject</button>
                                    <button type="submit" className="btn cancel_btn">Count Offer</button>
                                    <button type="submit" className="btn save_btn" >Accept </button>
                                  </td>
                                </tr>)
                                :
                                <tr >
                                  <td colSpan="6" className="text-center">There is no data data to display</td>
                                </tr>
                              }
                            </tbody>
                          </table>
                        </div>
                        <Pagenation items={claimTableData} onChangePage={this.onClaimTableChangePage} initialPage={1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
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

export default Feedback;
