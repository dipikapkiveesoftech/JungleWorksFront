import React, { Component } from "react";
import ImageBanner from "./ImageBanner";
import HowItWorks from "./HowItWorks";
import MakeTheMost from "./MakeTheMost";

class Home extends Component {
  render() {
    return (
      <>
        <ImageBanner/>
        <HowItWorks/>
        <MakeTheMost/>
      </>
    );
  }
}

export default Home;
