import React, { useState } from "react";
import "../../cssComponents/card-display.css";
import SideBar from "./SideBar";
import axios from 'axios';

const CardDisplay = () => {
  const [groupList, setGroupList] = useState([])

  axios.get('/group/')
  .then(res => setGroupList(res.data.group))

  return (
    <div className="body-page mb-3 min-vh-100">
      <div className="bg-dark  p-2">
        <div className="container-fluid d-flex flex-column justify-content-between align-items-center flex-lg-d-flex align-items-center justify-content-center flex-md-row">
          <a href="/">
            <img
              alt="logo"
              src="/assets/img/logo/right-red_white.png"
              className="d-inline-block align-top mylogo"
            />
          </a>
          <h3 style={{ color: "rgb(248 34 73)" }}> Our Groups! </h3>
        </div>
      </div>
      <div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            <div
              className="section_heading text-center wow fadeInUp inLineStyle"
              data-wow-delay="0.2s"
            >
              <h3 style={{ color: "rgb(248 34 73)" }}>
                Our creative <span> groups</span>
              </h3>
              <p>
                Appland is completely creative, lightweight, clean &amp; super
                responsive app landing page.
              </p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row container-fluid" style={{ margin: "0%" }} id="goals-container">
          <div className="col-4 col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <SideBar />
          </div>
          <div className="col-8 col-sm-12 col-md-8 col-lg-9 col-xl-9">
            <div className="row">
              { groupList && 
                groupList.map(item => {
                  return (
                    <div className="col-12 col-sm-12 col-lg-4 col-xl-3 col-md-6" key={item._id}>
                      <div
                        className="single_advisor_profile wow fadeInUp inLineStyle"
                        data-wow-delay="0.2s"
                      >
                        <div className="advisor_thumb">
                          <img
                            src={item.photo}
                            alt=""
                          />
                          <div className="social-info">
                            <a href="/">
                             Join
                            </a>
                          </div>
                        </div>
                        <div className="single_advisor_details_info">
                          <h6 className="text-truncate" title={item.titel}>{item.titel}</h6>
                          <p className="designation">{item.members.length} members</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              {/* <div className="col-4 col-sm-6 col-lg-4 col-xl-3 col-md-6">
                <div
                  className="single_advisor_profile wow fadeInUp inLineStyle"
                  data-wow-delay="0.2s"
                >
                  <div className="advisor_thumb">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                    <div className="social-info">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="single_advisor_details_info">
                    <h6>Samantha Sarah</h6>
                    <p className="designation">Founder &amp; CEO</p>
                  </div>
                </div>
              </div>
               <div className="col-4 col-sm-6 col-lg-4 col-xl-3 col-md-6">
                <div
                  className="single_advisor_profile wow fadeInUp inLineStyle"
                  data-wow-delay="0.3s"
                >
                  <div className="advisor_thumb">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt=""
                    />
                    <div className="social-info">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="single_advisor_details_info">
                    <h6>Nazrul Islam</h6>
                    <p className="designation">UI Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-sm-6 col-lg-4 col-xl-3 col-md-6">
                <div
                  className="single_advisor_profile wow fadeInUp inLineStyle"
                  data-wow-delay="0.4s"
                >
                  <div className="advisor_thumb">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt=""
                    />
                    <div className="social-info">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="single_advisor_details_info">
                    <h6>Riyadh Khan</h6>
                    <p className="designation">Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-sm-6 col-lg-4 col-xl-3 col-md-6">
                <div
                  className="single_advisor_profile wow fadeInUp inLineStyle"
                  data-wow-delay="0.5s"
                >
                  <div className="advisor_thumb">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt=""
                    />
                    <div className="social-info">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="single_advisor_details_info">
                    <h6>Niloy Islam</h6>
                    <p className="designation">Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-sm-6 col-lg-4 col-xl-3 col-md-6">
                <div
                  className="single_advisor_profile wow fadeInUp inLineStyle"
                  data-wow-delay="0.2s"
                >
                  <div className="advisor_thumb">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                    <div className="social-info">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="single_advisor_details_info">
                    <h6>Samantha Sarah</h6>
                    <p className="designation">Founder &amp; CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-sm-6 col-lg-4 col-xl-3 col-md-6"> 
                <div
                  className="single_advisor_profile wow fadeInUp inLineStyle"
                  data-wow-delay="0.2s"
                >
                  <div className="advisor_thumb">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                    <div className="social-info">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="single_advisor_details_info">
                    <h6>Samantha Sarah</h6>
                    <p className="designation">Founder &amp; CEO</p>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
