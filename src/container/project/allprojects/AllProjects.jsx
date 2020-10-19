import React, { Component } from "react";
import RightTop from "../../../components/rightbar/RightTop";
import RightBottom from "../../../components/rightbar/RightBottom";
import CheckboxCard from "./../../../components/checkboxCard/CheckboxCard.jsx";
import ProjectCardbox from "./ProjectCardbox";
import { projectData } from "../../../utils/dummy/ProjectData";
import { requiredSkills } from "../../../utils/dummy/RequiredSkill";
import { onReduxLangaugeChange } from "../../../store/action";
import { connect } from "react-redux";
import Pagenation from "../../../components/Pagenation";

class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: "",
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
    }
  }

  onChangePage = (pageOfItems) => {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  componentDidMount() {
    let datas = projectData.project;
    // we have to change loggged in user
    let selectedProject = datas[Math.floor(Math.random() * datas.length)];
    this.setState({ selectedProject });
  }

  componentWillMount() {
    let data = localStorage.getItem("langauge");
    let langauge = JSON.parse(data);
    if (langauge) {
      this.props.onLangaugeChange(langauge);
    }
  }

  onLangaugeDataChange = (language) => {
    localStorage.setItem("langauge", JSON.stringify(language));
    this.props.onLangaugeChange(language);
  };

  renderProject = (item) => {
    let projects = projectData.project.filter(x => x.id == item.id);
    if (projects.length > 0) {
      return projects[0];
    }
    return {};
  }

  renderSkills = (item) => {

    return item.requiredSkillIds
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
    let data = projectData["project"];
    let { pageOfItems , checkboxData1, checkboxData2 } = this.state;
    console.log("pageOfItems", pageOfItems)
    let { languageData, language } = this.props;
    return (
      <>
        <section className="card_sec" id="333">
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
                {pageOfItems && pageOfItems.length > 0 && pageOfItems.map(project => (
                  <ProjectCardbox selectedProject={this.renderProject(project)} skillName={this.renderSkills(project)} />
                ))}
                <Pagenation items={data} onChangePage={this.onChangePage} initialPage={1} />
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

function mapStateToProps(state) {
  return {
    languageData: state.langaugeStore.languageData,
    language: state.langaugeStore.language,
    activeRoute: state.routeStore.activeRoute,
  };
}
function mapDispatchProps(dispatch) {
  return {
    onLangaugeChange: (langauge) => {
      dispatch(onReduxLangaugeChange(langauge));
    },
  };
}

export default connect(mapStateToProps, mapDispatchProps)(AllProjects);