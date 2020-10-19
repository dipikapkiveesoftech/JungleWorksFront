import React, { Component } from "react";
import RightTop from "../../components/rightbar/RightTop";
import RightBottom from "../../components/rightbar/RightBottom";

class CreateFreelancer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBasicInfoActive: false,
      isResumeTabActive: false,
      selectedImg: null,
      selectedFile: null,
      invalid: null,
      fileName: [],
      values: [],
      valuesPorfolio: [],
      addCerRow: [],
      addEduRow: [],
      addEmpRow: [],
      addLangRow: []
    };
  }

  portfolioFileUpload() {
    document.getElementById("myPortfolioFile").click();
  }

  profilePhotoFileUpload() {
    document.getElementById("profilePhotoFileUpload").click();
  }

  fileSelectHandler = (e) => {
    this.state.selectedFile = e.target.files[0];
    if (!this.state.selectedFile.name.match(/\.(doc|docx|odt|pdf|tex|txt|rtf|pptx|ppt)$/)) {
      this.setState({ invalid: 'Please select valid file' })
      return false
    }
    this.state.fileName[0] = this.state.selectedFile.name;
    this.setState({ selectedFile: e.target.files[0], invalid: null })
  }

  imageSelectHandler = (e) => {
    this.state.selectedImg = e.target.files[0];
    if (!this.state.selectedImg.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      this.setState({ invalid: 'Please select valid image' })
      return false
    }
    this.setState({ selectedImg: URL.createObjectURL(e.target.files[0]), invalid: null })
  }

  createUILang() {
    return this.state.values.map((el, i) =>
      <div key={i}>
        <div className="row align-items-end">
          <div className="col-md-6">
            <div className="form-group">
              <label>Language</label>
              <select className="form-control">
                <option></option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Proficiency</label>
              <select className="form-control">
                <option></option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }

  createUIPortfolio() {
    return this.state.valuesPorfolio.map((el, i) =>
      <div key={i}>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label>Portfolio</label>
              <input
                type="text"
                placeholder={this.state.fileName[0]}
                className="form-control"
              />
              <input
                id="myPortfolioFile"
                type="file"
                className="form-control"
                onChange={this.fileSelectHandler}
                hidden
              />
              <button type="button" className="plusBtn btn" onClick={this.portfolioFileUpload}>
                <i
                  className="fa fa-plus-circle"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  addClickLine() {
    this.setState(prevState => ({ values: [...prevState.values, ''] }))
  }

  addClickLinePorfolio() {
    this.setState(prevState => ({ valuesPorfolio: [...prevState.valuesPorfolio, ''] }))
  }

  handleCertificateAddRow() {
    this.setState(prevState => ({ addCerRow: [...prevState.addCerRow, ''] }))
  }
  handleEducationAddRow() {
    this.setState(prevState => ({ addEduRow: [...prevState.addEduRow, ''] }))
  }
  handleEmploymentAddRow() {
    this.setState(prevState => ({ addEmpRow: [...prevState.addEmpRow, ''] }))
  }
  handleLanguageAddRow() {
    this.setState(prevState => ({ addLangRow: [...prevState.addLangRow, ''] }))
  }


  certificationRows() {
    return this.state.addCerRow.map((el, i) =>
      <tr key={i}>
        <td className="text-right">
          <select className="form-control">
            <option>country</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    )
  }
  educationRows() {
    return this.state.addEduRow.map((el, i) =>
      <tr key={i}>
        <td className="text-right">
          <select className="form-control">
            <option>country</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </td>
        <td className="text-right">
          <select className="form-control">
            <option>country</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    )
  }
  employeeRows() {
    return this.state.addEmpRow.map((el, i) =>
      <tr key={i}>
        <td className="text-right"></td>
        <td className="text-right"></td>
        <td>(Optional)</td>
        <td>(Optional)</td>
        <td>
          <div className="yes_no d-flex align-items-center justify-content-center">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customcheck4"
                required=""
              />
              <label
                className="custom-control-label"
                for="customcheck4"
              >
                Yes
          </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customcheck5"
                required=""
              />
              <label
                className="custom-control-label"
                for="customcheck5"
              >
                No
          </label>
            </div>
          </div>
        </td>
      </tr>
    )
  }
  languageRows() {
    return this.state.addLangRow.map((el, i) =>
    <div key={i}>
      <div className="addMore_detail">
        <div className="d-flex align-items-center label_check">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customcheck"
              required=""
            />
            <label
              className="custom-control-label"
              for="customcheck7"
            >
              I would like to take an offical test
        </label>
          </div>
          <select className="form-control">
            <option>Language</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="dev_box">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customcheck1"
                    required=""
                  />
                  <label
                    className="custom-control-label"
                    for="customcheck1"
                  >
                    English
              </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customcheck2"
                    required=""
                  />
                  <label
                    className="custom-control-label"
                    for="customcheck2"
                  >
                    Korean
              </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customcheck3"
                    required=""
                  />
                  <label
                    className="custom-control-label"
                    for="customcheck3"
                  >
                    Japanese
              </label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center lavel_select">
                <label>Level :</label>
                <select className="form-control">
                  <option></option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  onBasicInfoReqActive = () => {
    let { isBasicInfoActive } = this.state;
    this.setState({
      isBasicInfoActive: !isBasicInfoActive
    })
  }

  onResumeTabActive = () => {
    let { isResumeTabActive } = this.state;
    this.setState({
      isResumeTabActive: !isResumeTabActive
    })
  }

  render() {
    let { isBasicInfoActive, isResumeTabActive } = this.state;
    return (
      <>
        <section className="card_sec">
          <div className="bcknd_container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="project_post work_card user_profile">
                  <h4>Freelancer Profile</h4>
                  <form className="post_form">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="save_cancel">
                          <span className="profile_box">
                            <img src={this.state.selectedImg} alt={this.state.invalid} />
                          </span>
                          <div className="form-group upload_file">
                            <label for="addAphoto" className="save_btn btn">
                              <i
                                className="fa fa-plus-circle"
                                aria-hidden="true"
                              ></i>
                              Add a Photo
                            </label>
                            <input
                              type="file"
                              className="form-control-file"
                              id="addAphoto"
                              onChange={this.imageSelectHandler}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <label>
                          About your skills
                          <i
                            className="fa fa-question-circle"
                            aria-hidden="true"
                          ></i>
                        </label>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Example : Web Developer"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option>Select your professional fields</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-end">
                          <div className="col-md-3">
                            <div className="form-group">
                              <label>Country</label>
                              <input
                                type="text"
                                className="form-control gray_bg"
                                placeholder="South Korea"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label>Country Code:</label>
                              <input
                                type="text"
                                className="form-control gray_bg text-center"
                                placeholder="+82"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>Mobile No.</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Example : Web Developer"
                              />
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="form-group">
                              <div className="save_cancel">
                                <button
                                  type="submit"
                                  className="btn cancel_btn verify_btn"
                                >
                                  Verify
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-7">
                            <div className="form-group">
                              <label>Address</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                            <div className="row align-items-end">
                              <div className="col-md-7">
                                <div className="form-group">
                                  <label>City</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="form-group">
                                  <label>Postal Code</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <a className="continue_click">Join a team</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="hourly_limit">
                    <div className="position_rel">
                      <h4>
                        Basic Info
                        <span className="viewDetail">
                          <a
                            className="plus_btn"
                            aria-expanded={isBasicInfoActive ? "true" : "false"} onClick={() => this.onBasicInfoReqActive()}>
                            +
                          </a>
                        </span>
                      </h4>
                    </div>
                    <div className={isBasicInfoActive ? "collapse animaton-height show" : "collapse animaton-height"}>
                      <form className="post_form">
                        <div className="form-group">
                          <label>
                            Write a Professional overview
                            <i
                              className="fa fa-question-circle"
                              aria-hidden="true"
                            ></i>
                          </label>
                          <textarea
                            className="form-control"
                            rows="3"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-7">
                            <div className="row align-items-end">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Language</label>
                                  <select className="form-control">
                                    <option></option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Proficiency</label>
                                  <select className="form-control">
                                    <option></option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            {this.createUILang()}
                            <div className="save_cancel text-right form-group">

                              <button
                                type="button"
                                onClick={this.addClickLine.bind(this)}
                                className="btn cancel_btn add_btn"
                              >
                                <i
                                  className="fa fa-plus-circle"
                                  aria-hidden="true"
                                ></i>
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-group">
                              <label>Portfolio</label>
                              <input
                                type="text"
                                placeholder={this.state.fileName[0]}
                                className="form-control"
                              />
                              <input
                                id="myPortfolioFile"
                                type="file"
                                className="form-control"
                                onChange={this.fileSelectHandler}
                                hidden
                              />
                              <button type="button" className="plusBtn btn" onClick={this.portfolioFileUpload}>
                                <i
                                  className="fa fa-plus-circle"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="form-group">
                              <label>Description</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                        {this.createUIPortfolio()}
                        <div className="save_cancel form-group text-right">
                          <button
                            type="button"
                            onClick={this.addClickLinePorfolio.bind(this)}
                            className="btn cancel_btn add_btn"
                          >
                            <i
                              className="fa fa-plus-circle"
                              aria-hidden="true"
                            ></i>
                            Add
                          </button>
                        </div>
                        <div className="form-group">
                          <p className="clickhere_p">
                            ** You may start using Simplywithus.net without
                            further information, but we strongly advise fill
                            more information to get more clients. If you want to
                            add more information, please{" "}
                            <a className="continue_click">click here</a>
                          </p>
                        </div>
                        <div className="save_cancel form-group text-right">
                          <button type="submit" className="btn save_btn">
                            Save & Go
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="hourly_limit">
                    <div className="position_rel">
                      <h4>
                        Resume [optional]
                        <span className="viewDetail">
                          <a
                            className="plus_btn" aria-expanded={isResumeTabActive ? "true" : "false"} onClick={() => this.onResumeTabActive()}>
                            +
                          </a>
                        </span>
                      </h4>
                    </div>
                    <div className={isResumeTabActive ? "collapse animaton-height show" : "collapse animaton-height"}>
                      <form className="post_form">
                        <div className="addMore_detail create_freelancer">
                          <label className="addMore_lbl">
                            Certification(optional)
                          </label>
                          <div className="">
                            <table className="table text-center">
                              <thead>
                                <tr>
                                  <th scope="col">Year Achieved</th>
                                  <th scope="col">Certificate</th>
                                  <th scope="col">Level</th>
                                  <th scope="col">Issued By</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                {this.certificationRows()}
                              </tbody>
                            </table>
                          </div>
                          <div className="save_cancel text-right">
                            <button
                              type="button"
                              onClick={this.handleCertificateAddRow.bind(this)}
                              className="btn cancel_btn add_btn"
                            >
                              <i
                                className="fa fa-plus-circle"
                                aria-hidden="true"
                              ></i>
                              Add
                            </button>
                          </div>
                        </div>
                        <div className="addMore_detail create_freelancer">
                          <label className="addMore_lbl">
                            Education(optional)
                          </label>
                          <div className="">
                            <table className="table text-center">
                              <thead>
                                <tr>
                                  <th scope="col">Year From</th>
                                  <th scope="col">Year To</th>
                                  <th scope="col">Area of Study(Optional)</th>
                                  <th scope="col">Degree(Optional)</th>
                                  <th scope="col">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                {this.educationRows()}
                              </tbody>
                            </table>
                          </div>
                          <div className="save_cancel text-right">
                            <button
                              type="button"
                              onClick={this.handleEducationAddRow.bind(this)}
                              className="btn cancel_btn add_btn"
                            >
                              <i
                                className="fa fa-plus-circle"
                                aria-hidden="true"
                              ></i>
                              Add
                            </button>
                          </div>
                        </div>
                        <div className="addMore_detail create_freelancer">
                          <label className="addMore_lbl">
                            Employment History (optional)
                          </label>
                          <div className="">
                            <table className="table text-center">
                              <thead>
                                <tr>
                                  <th scope="col">Year From</th>
                                  <th scope="col">Month</th>
                                  <th scope="col">Year To</th>
                                  <th scope="col">Month</th>
                                  <th scope="col">Country</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                  <td className="text-right">
                                    <select className="form-control">
                                      <option>country</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="addMore_detail create_freelancer">
                          <div className="table-responsive">
                            <table className="table text-center">
                              <thead>
                                <tr>
                                  <th scope="col">Company Name</th>
                                  <th scope="col">Position</th>
                                  <th scope="col">Role of Position</th>
                                  <th scope="col">Annual Salary</th>
                                  <th scope="col">Currently Working</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-right"></td>
                                  <td className="text-right"></td>
                                  <td>(Optional)</td>
                                  <td>(Optional)</td>
                                  <td>
                                    <div className="yes_no d-flex align-items-center justify-content-center">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="customcheck4"
                                          required=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="customcheck4"
                                        >
                                          Yes
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="customcheck5"
                                          required=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="customcheck5"
                                        >
                                          No
                                        </label>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                {this.employeeRows()}
                              </tbody>
                            </table>
                          </div>
                          <div className="save_cancel text-right">
                            <button
                              type="button"
                              onClick={this.handleEmploymentAddRow.bind(this)}
                              className="btn cancel_btn add_btn"
                            >
                              <i
                                className="fa fa-plus-circle"
                                aria-hidden="true"
                              ></i>
                              Add
                            </button>
                          </div>
                        </div>
                        <div className="addMore_detail">
                          <div className="form-group">
                            <label className="addMore_lbl">
                              Self Introduction(optional)
                            </label>
                            <textarea
                              className="form-control"
                              rows="3"
                            ></textarea>
                          </div>
                        </div>
                        <div className="addMore_detail">
                          <div className="label_check">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customcheck6"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                for="customcheck6"
                              >
                                {" "}
                                I would like to get job proposal from
                                Headhunter.
                              </label>
                            </div>
                          </div>
                          <div className="dev_box">
                            <label className="wished_lbl">
                              Write your wished working condition
                            </label>
                            <div className="row">
                              <div className="col-md-4 country_select">
                                <div className="d-flex align-items-center lavel_select form-group">
                                  <label>Country :</label>
                                  <select className="form-control">
                                    <option></option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                                <div className="d-flex align-items-center lavel_select form-group">
                                  <label>City :</label>
                                  <select className="form-control">
                                    <option></option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="d-flex align-items-center lavel_select">
                                  <label>Area of Work :</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 text-right">
                                <div className="lavel_select yearly_sal">
                                  <label>
                                    Yearly Salary Expectation in US$
                                  </label>
                                </div>
                                <div className="country_select">
                                  <div className="d-flex align-items-center lavel_select form-group">
                                    <label>From :</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                  <div className="d-flex align-items-center lavel_select form-group">
                                    <label>To :</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="addMore_detail">
                          <div className="d-flex align-items-center label_check">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customcheck7"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                for="customcheck7"
                              >
                                I would like to take an offical test
                              </label>
                            </div>
                            <select className="form-control">
                              <option>Language</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div className="dev_box">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="d-flex align-items-center">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customcheck1"
                                      required=""
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="customcheck1"
                                    >
                                      English
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customcheck2"
                                      required=""
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="customcheck2"
                                    >
                                      Korean
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customcheck3"
                                      required=""
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="customcheck3"
                                    >
                                      Japanese
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="d-flex align-items-center lavel_select">
                                  <label>Level :</label>
                                  <select className="form-control">
                                    <option></option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          {this.languageRows()}
                          <div className="save_cancel text-right form-group">
                            <button
                              type="button"
                              onClick={this.handleLanguageAddRow.bind(this)}
                              className="btn cancel_btn add_btn"
                            >
                              <i
                                className="fa fa-plus-circle"
                                aria-hidden="true"
                              ></i>
                              Add
                            </button>
                          </div>
                        </div>
                        <div className="addMore_detail save_go">
                          <div className="dev_box">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="d-flex align-items-center lavel_select">
                                  <label>Programming Language :</label>
                                  <select className="form-control">
                                    <option></option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="d-flex align-items-center lavel_select">
                                  <label>Level :</label>
                                  <select className="form-control">
                                    <option></option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="save_cancel form-group text-right">
                            <button type="submit" className="btn cancel_btn">
                              Save & Go
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
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

export default CreateFreelancer;
