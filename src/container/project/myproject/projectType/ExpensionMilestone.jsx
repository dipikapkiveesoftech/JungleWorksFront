import React, { Component } from "react";

class ExpensionMilestone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        epicNo: "#32342",
        epic: "Partition",
        storyData: [{
          dueDate: "25th April 2020",
          stories: "#234234",
          states: "Requested",
          payment: "Paid"
        },
        {
          dueDate: "25th April 2020",
          stories: "#234234",
          states: "Acknowledged",
          payment: "Paid"
        },
        {
          dueDate: "25th April 2020",
          stories: "#234234",
          states: "In-Progress",
          payment: "Hold",
        },
        {
          dueDate: "25th April 2020",
          stories: "#234234",
          states: "Ready",
          payment: "Dispute",
        },
        {
          dueDate: "25th April 2020",
          stories: "#234234",
          states: "Review",
          payment: "Paid",
        },


        ]
      }, {
        epicNo: "#32342",
        epic: "Partition",
        storyData: [
          {
            dueDate: "25th April 2020",
            stories: "#234234",
            states: "Acknowledged",
            payment: "Paid"
          },
          {
            dueDate: "25th April 2020",
            stories: "#234234",
            states: "Requested",
            payment: "Paid"
          },

          {
            dueDate: "25th April 2020",
            stories: "#234234",
            states: "In-Progress",
            payment: "Hold",
          },
          {
            dueDate: "25th April 2020",
            stories: "#234234",
            states: "Ready",
            payment: "Dispute",
          },
          {
            dueDate: "25th April 2020",
            stories: "#234234",
            states: "Review",
            payment: "Paid",
          },


        ]
      }, {
        epicNo: "#32342",
        epic: "Partition",
        storyData: [
          {
            dueDate: "25th April 2020",
            stories: "#234234",
            states: "In-Progress",
            payment: "Hold",
          },
          {
            dueDate: "25th April 2020",
            stories: "#234234",
            states: "Requested",
            payment: "Paid"
          },
          {
            dueDate: "25th April 2020",
            stories: "#234234",
            states: "Acknowledged",
            payment: "Paid"
          },

          {
            dueDate: "25th April 2020",
            stories: "#234234",
            states: "Ready",
            payment: "Dispute",
          },
          {
            dueDate: "25th April 2020",
            stories: "#234234",
            states: "Review",
            payment: "Paid",
          },
        ]
      }],
      expandedIndex: null,
    };
  }
  onExpansionHandle = (index) => {
    let { expandedIndex } = this.state;
    if (expandedIndex === index) {
      this.setState({
        expandedIndex: null

      })
    }
    else {
      this.setState({
        expandedIndex: index
      })
    }
  }
  getStoryStates = (states) => {
    if (states === "Requested") { return <a class="gray_bg">{states}</a> }
    if (states === "Acknowledged") { return <a class="green_bg">{states}</a> }
    if (states === "In-Progress") { return <a class="black_bg">{states}</a> }
    if (states === "Ready") { return <a class="pink_bg">{states}</a> }
    if (states === "Review") { return <a class="orange_bg">{states}</a> }
  }
  getPaymentType = (payment) => {
    if (payment === "Paid") { return <a class="darkGreen_font">{payment}</a> }
    if (payment === "Hold") { return <a class="blue_bg">{payment}</a> }
    if (payment === "Dispute") { return <a class="red_bg">{payment}</a> }
  }
  render() {
    let { data, expandedIndex } = this.state;
    return (
      <>
        <div class="viewMoreDtl">

          <div className="d-flex  justify-content-between align-items-center"> <h6><b>Project Name Here</b></h6><p class=" text-right maxWidth_100">View More Detail</p></div>
          <div class="week_tbl weekDtl_tbl">
            <table class="table text-center">
              <thead>
                <tr>
                  <th scope="col">Epic No.</th>
                  <th scope="col">Epic</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Stories</th>
                  <th scope="col">States</th>
                  <th scope="col">Payment</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length > 0 && data.map((epicData, epicIdx) =>
                  <tr key={epicIdx}>
                    <td>{epicData.epicNo}</td>
                    <td>{epicData.epic}  <button className="table-colleps-btn" onClick={() => this.onExpansionHandle(epicIdx)}><span className="plus-minus">{epicIdx === expandedIndex ? "-" : "+"}</span></button> </td>
                    {/* <i class="fa fa-minus" aria-hidden="true"></i> */}

                    <td colSpan="4">
                      <div className={epicIdx === expandedIndex ? "milestone-inner-table-main-div expanded" : "milestone-inner-table-main-div "}>
                        <table class={"table text-center  "}>
                          {/* {epicIdx === 0 &&
                          <thead>
                            <tr>
                              <th scope="col">Due Date</th>
                              <th scope="col">Stories</th>
                              <th scope="col">States</th>
                              <th scope="col">Payment</th>
                            </tr>
                          </thead>} */}
                          <tbody>
                            {epicData && epicData.storyData && epicData.storyData.length > 0 && epicData.storyData.map((storyObj, storyIndex) =>
                              <tr key={storyIndex}>
                                <td>{storyObj.dueDate}</td>
                                <td>{storyObj.stories} </td>
                                <td>{this.getStoryStates(storyObj.states)}</td>
                                <td>{this.getPaymentType(storyObj.payment)} </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default ExpensionMilestone;
