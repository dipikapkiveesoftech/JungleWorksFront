import React, { Component } from "react";

class HelpDetail extends Component {
  render() {
    return (
      <>
        <section className="help_sec">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Jungleworks Help Center</a>
                </li>
                <li className="breadcrumb-item">
                  <a>Getting started</a>
                </li>
                <li className="breadcrumb-item">
                  <a>Intro to Slack</a>
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-md-8">
                <h3 className="head_h3">What is Jungleworks?</h3>
                <p>
                  Slack is a channel-based messaging platform. With Slack,
                  people can work together more effectively, connect all their
                  software tools and services, and find the information they
                  need to do their best work — all within a secure,
                  enterprise-grade environment.
                </p>
                <p>
                  <iframe
                    src="https://www.youtube.com/embed/yHaLOoXA0vU"
                    width="560"
                    height="315"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </p>
                <h4 className="bodr_line head_h4">Your Slack workspace</h4>
                <p>
                  A Slack workspace is <a>made up of channels</a>, where team
                  members can communicate and work together. Keep reading to
                  learn about four key features of Slack.
                </p>
                <h4 className="head_h4">💬 Organized conversations</h4>
                <p>
                  In Slack, team members <a>send messages</a> and{" "}
                  <a>share files</a> in channels. <a>Create channels</a> for
                  teams, projects, office locations, or anything else that’s
                  relevant to your organization. You can make channels private
                  for conversations that shouldn’t be open to all members, or
                  you can <a>use shared channels</a> to collaborate with
                  external organizations from your own workspaces.
                </p>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled scroll_menu">
                  <li className="active">
                    <a title="">Your Slack workspace</a>
                  </li>
                  <li>
                    <a title="">Your team in Slack</a>
                  </li>
                  <li>
                    <a title="">Slack's pricing plans</a>
                  </li>
                  <li>
                    <a title="">Get to work in Slack</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HelpDetail;
