import React from "react";

const TeamWorker = () => {
    return (
        <section id="speakers">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Event Speakers</h2>
            <p>Here are some of our speakers</p>
          </div>
  
          <div class="row justify-content-lg-center">
            <div class="col-lg-4 col-md-6">
              <div class="speaker" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/intro-bg2.png" alt="Speaker 1" class="img-fluid"/>
                <div class="details">
                  <h3><a href="speaker-details.html">Brenden Legros</a></h3>
                  <p>Quas alias incidunt</p>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="speaker" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/intro-bg2.png" alt="Speaker 2" class="img-fluid"/>
                <div class="details">
                  <h3><a href="/speaker-details.html">Hubert Hirthe</a></h3>
                  <p>Consequuntur odio aut</p>
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
