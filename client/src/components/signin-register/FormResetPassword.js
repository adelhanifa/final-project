import React from 'react'
import '../../cssComponents/form-user.css';
import axios from 'axios';

class FormResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      password2: '',
      isError: {
        password: '',
        password2: ''
      },
      userErrMsg: ''
    }
  }

  formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "password":
        isError.password =
          value.length < 6 ? "Atleast 6 characaters required" : "";
        break;
      case "password2":
        isError.password2 =
          value !== this.state.password  ? "Password does not match" : "";
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

    if (this.state.isError.password || this.state.isError.password2) {
      console.log('form in valid')
    }

    else {
      console.log('form valid')
        axios.post("/user/reserPasword/"+this.props.match.params.id, {password: this.state.password})
          .then(res => {
            console.log(res.data)
            if (res.data.err){
              this.setState({ userErrMsg: res.data.status })
            }
            else{
              this.setState({ userErrMsg: res.data.status })
              this.props.history.push({ 
                pathname: '/login/register',
                state:  res.data.status
              });
            }
          })
          .catch(err => {
            console.log(err.data)
          })
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
            <h3 className="text-light">Reset Password Page</h3>
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
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <h3 className="register-heading mt-5">Enter your new Password</h3>
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
                            type="password"
                            onChange={this.formValChange}
                            className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                            placeholder="Enter New Password *"
                            name="password"
                            initialvalue={this.state.password}
                            required />
                          {isError.password.length > 0 && (
                            <span className="invalid-feedback">{isError.password}</span>
                          )}
                        </div>
                        
                        <div className="form-group">
                          <input
                            type="password"
                            onChange={this.formValChange}
                            className={isError.password2.length > 0 ? "is-invalid form-control" : "form-control"}
                            placeholder="Enter Password Again *"
                            name="password2"
                            initialvalue={this.state.password2}
                            required />
                          {isError.password2.length > 0 && (
                            <span className="invalid-feedback">{isError.password2}</span>
                          )}
                        </div>

                        <input
                          type="submit"
                          className="btnRegister"
                          initialvalue="Register"
                          value="Reset Now" />
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
export default FormResetPassword;