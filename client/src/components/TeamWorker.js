import React from "react";

const TeamWorker = () => {
    return (
        <section id="speakers">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Team's Members</h2>
            <p>We are happy that you are using our services</p>
          </div>
  
          <div class="row justify-content-lg-center">
            <div class="col-lg-4 col-md-6">
              <div class="speaker" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/intro-bg2.png" alt="Speaker 1" class="img-fluid"/>
                <div class="details">
                  <h3><a href="speaker-details.html">Asreen Ilyas</a></h3>
                  <p>Web-developer</p>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href="https://www.linkedin.com/in/asreen-ilyas-31b10719a"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="speaker" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/intro-bg2.png" alt="Speaker 2" class="img-fluid"/>
                <div class="details">
                  <h3><a href="/speaker-details.html">Adel Hanifa</a></h3>
                  <p>Web-developer</p>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>   
          </div>
        </div>
  
      </section>
    )
}

export default TeamWorker;
