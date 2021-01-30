import axios from "axios";
import React ,{ useState } from "react";

const Contact = () => {
  const [msg, setMsg] = useState('')
  const onSubmitContact = (e) => {
    e.preventDefault();
    const  newContact= {
      name: e.target.name.value,
       email: e.target.email.value,
        subject: e.target.subject.value, 
        message: e.target.message.value
    }
    // setContactForm(contactForm)
    // console.log({ contactForm })
    axios.post('/send-email/contact-form', newContact)
      .then((response) => {
        console.log(response.data)
        if (response.data.status) setMsg(response.data.msg)
        else setMsg(response.data.msg)
      })
      .catch(err => console.log(err))
  }
  return (
    <section id="contact" className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Let's stay in touch</p>
        </div>
        <div className="row contact-info">

          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Address</h3>
              <address> 53502 Düsseldorf, Germany</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">strids-forword@company.com</a></p>
            </div>
          </div>

        </div>

        <div className="form">
          <form onSubmit={onSubmitContact}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  // onChange={e => { setContactForm({ name: e.target.value }) }}
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars" 
                  required
                />
                <div className="validate"></div>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  // onChange={e => { setContactForm({ email: e.target.value }) }}
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                  required
                />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text"
                // onChange={e => { setContactForm({ subject: e.target.value }) }}
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
                required
              />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea
                // onChange={e => { setContactForm({ message: e.target.value }) }}
                className="form-control"
                name="message"
                rows="5"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Message"
                required
              >
              </textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              {
                msg &&
                <div className="sent-message" >{msg}</div>
              }
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>
    </section>
  )
}
export default Contact;