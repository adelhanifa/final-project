import React from "react";

const TeamWorker = () => {
    return (
        <section id="speakers">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Team's Members</h2>
            <p>We are happy that you are using our services</p>
          </div>
  
          <div className="row justify-content-lg-center">
            <div className="col-lg-4 col-md-6">
              <div className="speaker" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/intro-bg2.png" alt="Speaker 1" className="img-fluid"/>
                <div className="details">
                  <h3><a href="speaker-details.html">Asreen Ilyas</a></h3>
                  <p>Web-developer</p>
                  <div className="social">
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-facebook"></i></a>
                    <a href="/"><i className="fa fa-google-plus"></i></a>
                    <a href="https://www.linkedin.com/in/asreen-ilyas-31b10719a"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="speaker" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/intro-bg2.png" alt="Speaker 2" className="img-fluid"/>
                <div className="details">
                  <h3><a href="/speaker-details.html">Adel Hanifa</a></h3>
                  <p>Web-developer</p>
                  <div className="social">
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-facebook"></i></a>
                    <a href="/"><i className="fa fa-google-plus"></i></a>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
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
