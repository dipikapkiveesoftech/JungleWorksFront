import React, { Component } from "react";

class ExtensionReview extends Component {
  render() {
    return (
      <>
        <div className="client_review">
          <label className="green_text">
            Project Title. -- 2<span className="red_text">$50.0 USD</span>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </label>
          <p>
            “Deep did an amazing job as always, this time I couldn't release the
            payment due to freelancer website problems which are not resolved
            for over a month, and ID verification which I could not provide
            especially with Freelancer history of privacy violation. I informed
            Deep that I am unwilling to take a picture with a silly code and my
            ID to satisfy Freelancer requirements and he fully understood my
            concerns. The only reason I was using Freelancer.com is to deal with
            Deep and I would give him any project as he is proactive,
            understandable and the quality of his work is outstanding.
          </p>
          <p>
            I would apologize to Deep for any delay in finalizing his payment,
            and I would recommend him to any other employer, please find his
            work in the website below
          </p>
          <label className="flag_usa">
            Mohamed A. Bahrain 4
            <span>
              <img
                src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/flag_usa.png"
                alt=""
              />
            </span>
            3 weeks ago.
          </label>
        </div>
        <div className="client_review review_title">
          <label className="green_text">
            Project Title. -- 2<span className="red_text">$50.0 USD</span>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </label>
          <p>
            I would apologize to Deep for any delay in finalizing his payment,
            and I would recommend him to any other employer, please find his
            work in the website below
          </p>
          <label className="flag_usa">
            Mohamed A. Bahrain 4
            <span>
              <img
                src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/flag_usa.png"
                alt=""
              />
            </span>
            3 weeks ago.
          </label>
        </div>
        <div className="text-right">
          <a className="green_text view_more">View More</a>
        </div>
      </>
    );
  }
}

export default ExtensionReview;
