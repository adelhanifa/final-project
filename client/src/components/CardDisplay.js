import React from 'react';
import '../cssComponents/group-page.css';

const CardDisplay = () => {
    return (
        <div className="container">    
            <div className="row">

                {/* <!-- Single Advisor--> */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
                        {/* <!-- Team Thumb--> */}
                        <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            {/* <!-- Social Info--> */}
                            <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
                        </div>
                        {/* <!-- Team Details--> */}
                        <div className="single_advisor_details_info">
                            <h6>Samantha Sarah</h6>
                            <p className="designation">Founder &amp; CEO</p>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    )
}

export default CardDisplay