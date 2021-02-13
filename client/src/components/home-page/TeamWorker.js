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
              <img src="assets/img/team1.jpg" alt="Speaker 1" className="img-fluid" />
              <div className="details">
                <h3><a target="_blank" rel="noreferrer"  href="https://asreen.github.io/cv_portfolios/myPortfolioAsreen/index.html">Asreen Ilyas</a></h3>
                <p>Web-developer</p>
                <div className="social">
                  <a target="_blank" rel="noreferrer"  href="mailto:asreen.ilyas44@gmail.com" className="mr-2"><i className="fa fa-envelope"></i></a>
                  <a target="_blank" rel="noreferrer"  href="https://github.com/ASREEN" className="mr-2"><i className="fab fa-github"></i></a>
                  <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/asreen-ilyas-31b10719a" className="mr-2"><i className="fab fa-linkedin"></i></a>
                  <a target="_blank" rel="noreferrer"  href="https://www.xing.com/profile/Asreen_Ilyas" className="mr-2"><i className="fab fa-xing"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker" data-aos="fade-up" data-aos-delay="200">
              <img src="assets/img/team2.jpg" alt="Speaker 2" className="img-fluid" />
              <div className="details">
                <h3><a target="_blank" rel="noreferrer"  href="https://adelhanifa.github.io/portfolio/">Adel Hanifa</a></h3>
                <p>Web-developer</p>
                <div className="social">
                  <a target="_blank" rel="noreferrer"  href="mailto:adelhanifa@outlook.de" className="mr-2"><i className="fa fa-envelope"></i></a>
                  <a target="_blank" rel="noreferrer"  href="https://github.com/adelhanifa" className="mr-2"><i className="fab fa-github"></i></a>
                  <a target="_blank" rel="noreferrer"  href="https://de.linkedin.com/in/adel-hanifa-006288197" className="mr-2"><i className="fab fa-linkedin"></i></a>
                  <a target="_blank" rel="noreferrer"  href="https://www.xing.com/profile/Adel_Hanifa" className="mr-2"><i className="fab fa-xing"></i></a>
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
