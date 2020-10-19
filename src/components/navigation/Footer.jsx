import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer_sec">
          <div className="container">
            <div className="text-center">
              <a className="footer_logo">
                <img
                  src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/logo_foot.png"
                  alt=""
                />
              </a>
            </div>
            <div className="row">
              <div className="col-md-4 foot_logos">
                <h5>Family site</h5>
                <div className="row">
                  <div className="col-4">
                    <a title="">
                      <img
                        src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/jungle_toons.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a title="">
                      <img
                        src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/jungle_news.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a title="">
                      <img
                        src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/jungle_work.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a title="">
                      <img
                        src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/jungle_video.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a title="">
                      <img
                        src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/simpotal.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-6">
                <div className="footer_menu">
                  <div className="row">
                    <div className="col-md-4">
                      <a title="">About Us</a>
                      <a title="">Trust & Safety</a>
                      <a title="">Help & Support</a>
                    </div>
                    <div className="col-md-4">
                      <a title="">Terms of Service</a>
                      <a title="">Privacy Policy</a>
                      <a title="">DeskTop App</a>
                    </div>
                    <div className="col-md-4">
                      <a title="">Cookie Policy</a>
                      <a title="">Business Cooperation</a>
                      <a title="">Enterprise Solutions</a>
                    </div>
                  </div>
                  <p>
                    Office: 1 Raffles Place #44-01A , One Raffles Place Tower
                    One, Singapore 048616 © 2020 Simplyonline Pte. Ltd.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-lg-2">
                <h5>Social media</h5>
                <div className="social_icon">
                  <a title="">
                    <img
                      src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/t.png"
                      alt=""
                    />
                  </a>
                  <a title="">
                    <img
                      src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/yahoo.png"
                      alt=""
                    />
                  </a>
                  <a title="">
                    <img
                      src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/zalo.png"
                      alt=""
                    />
                  </a>
                  <a title="">
                    <img
                      src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/line.png"
                      alt=""
                    />
                  </a>
                  <a title="">
                    <img
                      src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/fb.png"
                      alt=""
                    />
                  </a>
                  <a title="">
                    <img
                      src="https://dxnqsgisijbjj.cloudfront.net/jungleworks/image/insta.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
