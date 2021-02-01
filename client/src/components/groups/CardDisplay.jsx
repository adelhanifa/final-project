import React, { useState, useEffect } from "react";
import "../../cssComponents/card-display.css";
import SideBar from "./SideBar";
import axios from "axios";

const CardDisplay = (props) => {
  const [groupList, setGroupList] = useState([])

  useEffect(()=>{
     axios.get('/group/')
    .then(res => setGroupList(res.data.group))
  }, [])
 

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
        <div
          className="row container-fluid"
          style={{ margin: "0%" }}
          id="goals-container"
        >
          <div className="col-4 col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <SideBar />
          </div>
          <div className="col-8 col-sm-12 col-md-8 col-lg-9 col-xl-9">
            <div className="row">
              {groupList &&
                groupList.map((item) => {
                  return (
                    <div
                      className="col-12 col-sm-12 col-lg-4 col-xl-3 col-md-6"
                      key={item._id}
                    >
                      <div
                        className="single_advisor_profile wow fadeInUp inLineStyle"
                        data-wow-delay="0.2s"
                      >
                        <div className="advisor_thumb">
                          <img src={item.photo} alt="" />
                          <div className="social-info">
                            <span type="button"  onClick={() =>props.history.push({ pathname: '/group-page', state: item._id})}>
                             Show Group
                            </span>
                          </div>
                        </div>
                        <div className="single_advisor_details_info">
                          <h6 className="text-truncate" title={item.titel}>
                            {item.titel}
                          </h6>
                          <p className="designation">
                            {item.members.length} members
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
