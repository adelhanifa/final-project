import React from 'react'
import '../cssComponents/form-user.css';
import axios from 'axios';

class FormForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isError: {
        email: '',
      },
      userErrMsg: ''
    }
  }

  formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let regExp = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
    let isError = { ...this.state.isError };

    switch (name) {
      case "email":
        isError.email = regExp.test(value)
          ? ""
          : "Email address is invalid";
        break;
      default:
        break;
    }

    this.setState({
      isError,
      [name]: value
    })
  };

  onSubmitFormUser = (event) => {
    event.preventDefault();

    if (this.state.isError.email ) {
      console.log('form in valid')
    }

    else {
      console.log('form valid')


      axios.get("/user/checkEmailUsed/" + this.state.email)
        .then(res => {
          console.log(res.data)
          if (res.data === false) {
            console.log('This email is not exist, try again.')
            this.setState({ userErrMsg: 'This email is not exist, try again.' })
          }
          else {
            axios.post("/send-email/reset-password", {email: this.state.email})
              .then(res => {
                console.log(res.data)
                this.setState({ userErrMsg: res.data.msg })
              })
              .catch(err => {
                console.log(err.data)
              })
          }
        })
        .catch(err => console.log(err))
    }

  }

  render() {
    if (this.state.user) {
      this.props.history.push('/user/profile')
    }
    const { isError, userErrMsg } = this.state;
    console.log({ err: userErrMsg })
    return (
      <div className="body-page min-vh-100">
        <div className="bg-dark  p-2">
          <div className="container d-flex flex-column justify-content-between align-items-center flex-lg-row flex-md-row">
            <a href="/">
              <img alt="logo" src="/assets/img/logo/right-red_white.png" className="d-inline-block align-top mylogo" />
            </a>
            <h3 className="text-light">Forget Password Page</h3>
          </div>
        </div>

        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3 className="text-danger"> Welcome </h3>
              <p>Be one of the on Target members!</p>

            
              <br />
            </div>

            <div className="col-md-9 register-right">
              
              <div className="tab-content" id="myTabContent">
              
                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <h3 className="register-heading mt-5">To rest your password enter your email address then click <br /><b className="text-danger">the button below</b></h3>
                  <form onSubmit={this.onSubmitFormUser}>
                    <div className="row register-form">
                      <div className="col-md-12">
                        {userErrMsg && (
                          <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <span> {userErrMsg}</span>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                        )}
                        <div className="form-group">
                          <input
                            onChange={this.formValChange}
                            type="email"
                            className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                            placeholder="Enter your email *"
                            name="email"
                            initialvalue={this.state.email}
                            required />
                          {isError.email.length > 0 && (
                            <span className="invalid-feedback">{isError.email}</span>
                          )}
                        </div>

                        <input
                          type="submit"
                          className="btnRegister"
                          initialvalue="Register"
                          value="Send Email Now" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default FormForgetPassword;