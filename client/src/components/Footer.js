
import React from "react";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6">
              <img src="assets/img/logo/down-white_red.png" alt="" />
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="fa fa-angle-right"></i>Articels</li>
                <li><i className="fa fa-angle-right"></i>Products</li>
                <li><i className="fa fa-angle-right"></i> Q & A</li>
                <li><i className="fa fa-angle-right"></i>impressum</li>
                <li><i className="fa fa-angle-right"></i>Privacy policy</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="fa fa-angle-right"></i><a href="/"> Home</a></li>
                <li><i className="fa fa-angle-right"></i><a href="/aboutus"> About us</a></li>
                <li><i className="fa fa-angle-right"></i>Services </li>
                <li><i className="fa fa-angle-right"></i> Terms of service</li>
                <li><i className="fa fa-angle-right"></i> Privacy policy</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Musterstraße A1212 <br />
                 Düsseldorf 32323<br />
                    Germany <br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> goalfiy@hotmail.com <br />
              </p>

              <div className="social-links">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-google-plus"></i>
                <i className="fa fa-linkedin"></i>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>Strides Forword</strong>. All Rights Reserved
                   </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>)
}

export default Footer;