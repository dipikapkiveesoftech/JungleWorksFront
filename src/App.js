import React, {Component} from 'react';
import AllFreelancer from "./container/freelancer/AllFreelancer.jsx";
import AllProjects from "./container/project/allprojects/AllProjects.jsx";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HourlyMain from "./container/freelancer/hourly/HourlyMain.jsx";
import ClientDetail from "./container/client/ClientDetail.jsx";
import ConfirmProject from "./container/contest/ConfirmProject.jsx";
import ContestDetail from "./container/contest/ContestDetail.jsx";
import CreateFreelancer from "./container/freelancer/CreateFreelancer.jsx";
import DisputeMain from "./container/report/dispute/DisputeMain.jsx";
import Evaluation from "./container/evaluation/Evaluation.jsx";
import Feedbacks from "./container/report/feedback/Feedback.jsx";
import FreelancerRegistration from "./container/freelancer/FreelancerRegistration.jsx";
import Footer from './components/navigation/Footer.jsx';
import HelpCenter from "./container/helpCenter/HelpCenter.jsx";
import HelpDetail from "./container/helpCenter/HelpDetail.jsx";
import Home from "./container/home/Home.jsx";
import HourlyReport from "./container/freelancer/hourly/HourlyReport.jsx";

import HourlyFreelancerDetail from "./container/project/projectDetails/HourlyFreelancerDetail/HourlyFreelancerDetail.jsx";
import ContestFreelancerDetail from "./container/project/projectDetails/ContestFreelancerDetail/ContestFreelancerDetail.jsx";
import InOfficeFreelancerDetail from "./container/project/projectDetails/InOfficeFreelancerDetail/InOfficeFreelancerDetail.jsx";
import MilestoneFreelancerDetail from "./container/project/projectDetails/MilestoneFreelancerDetail/MilestoneFreelancerDetail.jsx";

import Invoice from "./container/report/invoice/Invoice.jsx";
import InvoiceDetail from "./container/report/invoice/InvoiceDetail.jsx";
import MilestoneMain from "./container/freelancer/milestone/MileStoneMain";
import MyClient from "./container/report/client/MyClient.jsx";
import MyContest from "./container/contest/MyContest.jsx";
import MyCoupon from "./container/coupon/MyCoupon.jsx";
import MyFreelancer from "./container/freelancer/MyFreelancer/MyFreelancer.jsx";
import MyProject from "./container/project/myproject/MyProject.jsx";
import MyRegion from "./container/work/MyRegion.jsx";
import NavigationBar from './components/navigation/NavigationBar.jsx';
import NoMatch from "./container/NoMatch.jsx";
import Layout from './components/navigation/Layout';
import PackageDesign from "./container/contest/PackageDesign.jsx";
import PreferredDesign from "./container/contest/PreferredDesign.jsx";
import ProjectBlog from "./container/project/ProjectBlog.jsx";
import Profession from "./container/Profession.jsx";
import ProjectPost from "./container/project/projectpost/ProjectPost.jsx";
import ProjectPostHourly from "./container/project/projectpost/projectpostdetail/ProjectPostHourly.jsx";
import ProjectPostMileStone from "./container/project/projectpost/projectpostdetail/ProjectPostMileStone.jsx";
import ProjectPostOffice from "./container/project/projectpost/projectpostdetail/ProjectPostOffice.jsx";
import ReportMain from "./container/report/ReportMain.jsx";
import ReportEntry from "./container/report/ReportEntry.jsx";
import WorkDetail from "./container/freelancer/hourly/WorkDetail.jsx";


class App extends Component {
  render() {
    return(
      <>
      <Router>
        <NavigationBar /> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Layout>
            <Route path="/all-freelancer" component={AllFreelancer} />
            <Route path="/all-projects" component={AllProjects} />
            <Route path="/client-detail" component={ClientDetail} />
            <Route path="/confirm-project" component={ConfirmProject} />
            <Route path="/contest-detail" component={ContestDetail} />
            <Route path="/contest-detail-for-freelancer" component={ContestFreelancerDetail} />
            <Route path="/create-freelancer" component={CreateFreelancer} />
            <Route path="/dispute-main" component={DisputeMain} />
            <Route path="/evaluation" component={Evaluation} /> 
            <Route path="/help-center" component={HelpCenter} />
            <Route path="/help-detail" component={HelpDetail} />
            <Route path="/hourly-report" component={HourlyMain} />
            <Route path="/hourly-detail-for-freelancer" component={HourlyFreelancerDetail} />
            {/* <Route path="/hourly-report" component={HourlyReport} /> */}
            <Route path="/inoffice-detail-for-freelancer" component={InOfficeFreelancerDetail} />
            <Route path="/invoice" component={Invoice} />
            <Route path="/invoiceDetail" component={InvoiceDetail} />
            <Route path="/milestone-detail-for-freelancer" component={MilestoneFreelancerDetail} />
            <Route path="/milestone-report" component={MilestoneMain}/>
            <Route path="/myclient" component={MyClient} />
            <Route path="/mycontest" component={MyContest} />
            <Route path="/mycoupon" component={MyCoupon} />
            <Route path="/my-freelancers" component={MyFreelancer} />
            <Route path="/myproject" component={MyProject} />
            <Route path="/myregion" component={MyRegion} />
            <Route path="/package-design" component={PackageDesign} />
            <Route path="/preferred-design" component={PreferredDesign} />
            <Route path="/project-blog" component={ProjectBlog} />
            <Route path="/profession" component={Profession} />
            <Route path="/project-post" component={ProjectPost} />
            <Route path="/project-post-hourly" component={ProjectPostHourly} />
            <Route path="/project-post-milestone" component={ProjectPostMileStone} />
            <Route path="/project-post-office" component={ProjectPostOffice} />
            <Route path="/report-main" component={ReportMain} />
            <Route path="/report" component={ReportEntry} />
            <Route path="/feedback-claims" component={Feedbacks} />
            <Route path="/freelancer-registration" component={FreelancerRegistration} />
            <Route path="/work-detail" component={WorkDetail} />   
            <Route component={NoMatch} />
            </Layout>
          </Switch>
          <Footer/>
      </Router>
  </>
    ) 
  }
}

export default App;
