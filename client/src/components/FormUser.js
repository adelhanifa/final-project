import React from 'react'
import '../form-user.css'
const FormUser = () => {
  return (
    <form>
      <div className="container register">
        <div className="row">



          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>Be one of the on Target members!</p>
            <input type="submit" name="" value="Login" /><br />
          </div>
          <div className="col-md-9 register-right">
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sign in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Sign Up</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">You have an account!! sign in</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="First Name *" name="firstname" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Last Name *" name="lastname" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password *" name="password" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Confirm Password *" name="confirm-password" />
                    </div>
                    <div className="form-group">
                      <div className="maxl">
                        <label className="radio inline">
                          <input type="radio" name="gender" value="male" />
                          <span> Male </span>
                        </label>
                        <label className="radio inline">
                          <input type="radio" name="gender" value="female" />
                          <span>Female </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Your Email *" defaultValue="example@xx.de" />
                    </div>
                    <div className="form-group">
                      <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" />
                    </div>
                    <div class="form-group">
                      <select class="form-control">
                        <option class="hidden" selected disabled>Please select your Sequrity Question</option>
                        <option>What is your Birthdate?</option>
                        <option>What is Your old Phone Number</option>
                        <option>What is your Pet Name?</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Enter Your Answer *" value="" />
                    </div>
                    <input type="submit" class="btnRegister" value="Register" />
                  </div>
                </div>
              </div>
              <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h3 class="register-heading">You don't have account yet!! Sign up</h3>
                <div class="row register-form">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="First Name *" value="" />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Last Name *" value="" />
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control" placeholder="Email *" value="" />
                    </div>
                    <div class="form-group">
                      <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Password *" value="" />
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                    </div>
                    <div class="form-group">
                      <select class="form-control">
                        <option class="hidden" selected disabled>Please select your Sequrity Question</option>
                        <option>What is your Birthdate?</option>
                        <option>What is Your old Phone Number</option>
                        <option>What is your Pet Name?</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="`Answer *" value="" />
                    </div>
                    <input type="submit" class="btnRegister" value="Register" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </form>
  )
}
export default FormUser;