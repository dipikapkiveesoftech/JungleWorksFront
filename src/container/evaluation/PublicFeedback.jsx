import React, { Component } from "react";

class PublicFeedback extends Component {
  render() {
    return (
      <>
        <label className="green_text feedbk_lbl">Public Feedback</label>
        <p>
          This feedback will be shared on your freelancer's profile only after
          they've left feedback for you.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <label>Skills</label>
          <div className="rating">
            <input type="radio" id="star5" name="rating" value="5" />
            <label for="star5">5 stars</label>
            <input type="radio" id="star4" name="rating" value="4" />
            <label for="star4">4 stars</label>
            <input type="radio" id="star3" name="rating" value="3" />
            <label for="star3">3 stars</label>
            <input type="radio" id="star2" name="rating" value="2" />
            <label for="star2">2 stars</label>
            <input type="radio" id="star1" name="rating" value="1" />
            <label for="star1">1 star</label>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label>Quality of Work</label>
          <div className="rating">
            <input type="radio" id="star10" name="rating2" value="10" />
            <label for="star10">5 stars</label>
            <input type="radio" id="star9" name="rating2" value="9" />
            <label for="star9">4 stars</label>
            <input type="radio" id="star8" name="rating2" value="8" />
            <label for="star8">3 stars</label>
            <input type="radio" id="star7" name="rating2" value="7" />
            <label for="star7">2 stars</label>
            <input type="radio" id="star6" name="rating2" value="6" />
            <label for="star6">1 star</label>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label>Availability</label>
          <div className="rating">
            <input type="radio" id="star15" name="rating3" value="5" />
            <label for="star15">5 stars</label>
            <input type="radio" id="star14" name="rating3" value="4" />
            <label for="star14">4 stars</label>
            <input type="radio" id="star13" name="rating3" value="3" />
            <label for="star13">3 stars</label>
            <input type="radio" id="star12" name="rating3" value="2" />
            <label for="star12">2 stars</label>
            <input type="radio" id="star11" name="rating3" value="1" />
            <label for="star11">1 star</label>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label>Adherence to Schedule</label>
          <div className="rating">
            <input type="radio" id="star16" name="rating4" value="5" />
            <label for="star16">5 stars</label>
            <input type="radio" id="star17" name="rating4" value="4" />
            <label for="star17">4 stars</label>
            <input type="radio" id="star18" name="rating4" value="3" />
            <label for="star18">3 stars</label>
            <input type="radio" id="star19" name="rating4" value="2" />
            <label for="star19">2 stars</label>
            <input type="radio" id="star20" name="rating4" value="1" />
            <label for="star20">1 star</label>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label>Communication</label>
          <div className="rating">
            <input type="radio" id="star21" name="rating5" value="5" />
            <label for="star21">5 stars</label>
            <input type="radio" id="star22" name="rating5" value="4" />
            <label for="star22">4 stars</label>
            <input type="radio" id="star23" name="rating5" value="3" />
            <label for="star23">3 stars</label>
            <input type="radio" id="star24" name="rating5" value="2" />
            <label for="star24">2 stars</label>
            <input type="radio" id="star25" name="rating5" value="1" />
            <label for="star25">1 star</label>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label>Cooperation</label>
          <div className="rating">
            <input type="radio" id="star26" name="rating6" value="5" />
            <label for="star26">5 stars</label>
            <input type="radio" id="star27" name="rating6" value="4" />
            <label for="star27">4 stars</label>
            <input type="radio" id="star28" name="rating6" value="3" />
            <label for="star28">3 stars</label>
            <input type="radio" id="star29" name="rating6" value="2" />
            <label for="star29">2 stars</label>
            <input type="radio" id="star30" name="rating6" value="1" />
            <label for="star30">1 star</label>
          </div>
        </div>
        <div className="total_score">
          <label className="feedbk_lbl">Total Score: 0.00</label>
          <p>
            Share your experience with this freelancer to the Simplyonline
            community
          </p>
          <div className="milestone_form">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </>
    );
  }
}

export default PublicFeedback;
