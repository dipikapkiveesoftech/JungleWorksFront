import React, { Component } from "react";
import RightTop from "../../../components/rightbar/RightTop";
import RightBottom from "../../../components/rightbar/RightBottom";
import HourlyFreeLancer from "./freelancerType/HourlyFreeLancer.jsx";
import MilestoneFreelancer from "./freelancerType/MilestoneFreelancer.jsx";
import HourlyAndOfficeFreelancer from "./freelancerType/HourlyAndOfficeFreelancer.jsx";
import InOfficeFreelancer from "./freelancerType/InOfficeFreelancer.jsx";
import { MyFreelancerData } from "../../../utils/dummy/freelancerData";
import CheckboxCard from "./../../../components/checkboxCard/CheckboxCard.jsx";
import Pagenation from "../../../components/Pagenation";

class MyFreelancer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: [],
            checkboxData1: [
                { name: "milestone", title: "Milestone", checked: false },
                { name: "hourly", title: "Hourly", checked: false },
                { name: "inOffice", title: "In Office", checked: false },
                { name: "complex", title: "Complex", checked: false },
                { name: "fullTime", title: "Full Time", checked: false },
            ],
            checkboxData2: [
                { name: "recuritement", title: "Recuritement", checked: false },
                { name: "onGoing", title: "On Going", checked: false },
                { name: "completed", title: "Completed", checked: false },
            ]
        };
    }

    openView = (index) => {
        this.setState({
            openStatusIndex: index,
        });
    };

    closeView = (index) => {
        this.setState({
            openStatusIndex: -1,
        });
    };
    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    getFreelancerType = (project, index) => {
        let { openStatusIndex } = this.state

        if (project.projectType == "Hourly") {
            return (
                <HourlyFreeLancer projectObj={project} openStatusIndex={openStatusIndex} index={index} openView={this.openView} closeView={this.closeView} />
            )
        }
        else if (project.projectType == "Milestone Project") {
            return (
                <MilestoneFreelancer projectObj={project} openStatusIndex={openStatusIndex} index={index} openView={this.openView} closeView={this.closeView} />
            )
        }
        else if (project.projectType == "Hourly & Office") {
            return (
                <HourlyAndOfficeFreelancer projectObj={project} openStatusIndex={openStatusIndex} index={index} openView={this.openView} closeView={this.closeView} />
            )
        }
        return (
            <InOfficeFreelancer projectObj={project} openStatusIndex={openStatusIndex} index={index} openView={this.openView} closeView={this.closeView} />
        )

    }
    onCheckboxChangeHandle = (event, type, index) => {
        let { checkboxData1, checkboxData2 } = this.state;
        let { name, checked } = event.target;
        if (type === "checkboxData1") {
            checkboxData1[index].checked = checked
        }
        if (type === "checkboxData2") {
            checkboxData2[index].checked = checked
        }
        this.setState({
            checkboxData1, checkboxData2
        })
    }

    render() {
        let { pageOfItems, checkboxData1, checkboxData2 } = this.state;
        return (
            <>
                <section className="my-freelancer card_sec">
                    <div className="bcknd_container">
                        <div className="row">
                            <div className="col-lg-2 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <CheckboxCard title="Project Type" data={checkboxData1} type="checkboxData1" onChange={this.onCheckboxChangeHandle} />
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <CheckboxCard title="Status" data={checkboxData2} type="checkboxData2" onChange={this.onCheckboxChangeHandle} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                {pageOfItems && pageOfItems.length > 0 &&
                                    pageOfItems.map((project, index) => (
                                        this.getFreelancerType(project, index)

                                    ))}
                                <Pagenation items={MyFreelancerData.project} onChangePage={this.onChangePage} initialPage={1} />
                            </div>
                            <div className="col-lg-2 col-md-12">
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

export default MyFreelancer;
