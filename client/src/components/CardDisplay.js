import React from 'react';
import '../cssComponents/group-page.css';

const CardDisplay = () => {
    return (
        <div class="container">    
            <div class="row">

                {/* <!-- Single Advisor--> */}
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                        {/* <!-- Team Thumb--> */}
                        <div class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            {/* <!-- Social Info--> */}
                            <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
                        </div>
                        {/* <!-- Team Details--> */}
                        <div class="single_advisor_details_info">
                            <h6>Samantha Sarah</h6>
                            <p class="designation">Founder &amp; CEO</p>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    )
}

export default CardDisplay