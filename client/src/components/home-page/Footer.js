import React from "react";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6">
              <img className="myFootrLogo" src="assets/img/logo/down-white_red.png" alt="" />
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

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Contact Us</h4>
              <ul>
                <li>Musterstraße A123<br />Düsseldorf 12345 Germany <br /></li>
                <li><strong>Phone:</strong> +49 123 456 7890<br /></li>
                <li><strong>Email:</strong> <br />ontarget.yourplatform@gmail.com <br /></li>
                <li>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-skype"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-google-plus"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-linkedin"></i>
                  <i className="fab fa-xing"></i>
                  <i className="fab fa-github"></i>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>on Target </strong>. All Rights Reserved
                   </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>)
}

export default Footer;