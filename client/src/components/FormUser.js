import React from 'react'
import '../cssComponents/form-user.css';
import axios from 'axios';
// import formValid from "../formValid";
import GoogleBtn from './GoogleBtn';
import { connect } from 'react-redux';
import { signInUser } from "../actions"
import HeaderProfile from './HeaderNavbar'

class FormUser extends React.Component {
  constructor(props) {
    super(props);
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    this.state = {
      user: loggedInUser,
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      profileImg: '',
      isError: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        profileImg: ''
      }
    }
  }

  // componentDidMount() {
  //   axios.get("/user/checkLogInUser/")
  //     .then(res => {
  //       console.log(res.data)
  //       if (res.data.isLogedIN === true) {

  //       }
  //       else {

  //       }
  //     })
  //     .catch(err => console.log(err))
  // }

  formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let regExp = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
    let isError = { ...this.state.isError };

    switch (name) {
      case "firstName":
        isError.firstName =
          value.length < 2 ? "Atleast 2 characaters required" : "";
        break;
      case "lastName":
        isError.lastName =
          value.length < 2 ? "Atleast 2 characaters required" : "";
        break;
      case "email":
        isError.email = regExp.test(value)
          ? ""
          : "Email address is invalid";
        break;
      case "password":
        isError.password =
          value.length < 6 ? "Atleast 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({
      isError,
      [name]: value
    })
  };

  onSubmitSignIn = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log({ name, value })
    let user = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    if (this.state.isError.email && this.state.isError.password) return " "
    else {
      this.setState(user);
      console.log({ state: this.state })
      // this.props.signInUser(user)
      axios.post('/user/log-in', user)
        .then(res => {
          console.log({ data: res.data })
          // this.props.signInUser(res.data)
          localStorage.setItem('loggedInUser', JSON.stringify(res.data.user));
          this.props.history.push('/user/profile')
        })
    }
    console.log({ loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) })
  }

  handleFiles = (e) => {
    console.log({ fileImg: e.target.files[0] })
    let fileImg = e.target.files[0];
    // this.verifyImage(fileImg)
    this.setState({ profileImg: fileImg })
  }

  onSubmitFormUser = (event) => {
    event.preventDefault();

    if (this.state.isError.firstName || this.state.isError.lastName ||
      this.state.isError.email || this.state.isError.password ||
      this.state.isError.profileImg) {
      console.log('form in valid')
    }

    else {
      console.log('form valid')

      console.log({ image: this.state.profileImg })
      const formData = new FormData()
      formData.append('profileImg', this.state.profileImg)
      formData.append('firstName', this.state.firstName)
      formData.append('lastName', this.state.lastName)
      formData.append('password', this.state.password)
      formData.append('email', this.state.email)
      console.log({ formData })

      axios.get("/user/checkEmailUsed/" + this.state.email)
        .then(res => {
          console.log(res.data)
          if (res.data === true) {
            console.log('This email is already exist, try to log in.')
            let isError = this.state.isError
            isError.email = 'This email is already exist, try to log in.'
            this.setState({ isError })
          }
          else {
            axios.post("/user/create", formData, {})
              .then(res => {
                console.log(res.data)
                if (res.data.err) {
                  console.log(res.data.err)
                }
                else {
                  console.log('isLoged in :' + res.data.status)
                  console.log('userInfo :' + res.data.user)
                  this.props.history.push('/login/register')
                }

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
    const { isError } = this.state;

    return (
      <div className="body-page">
       <div className="bg-dark b-3 text-danger text-center"><h3>Sign In Page</h3></div>
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <p>Be one of the on Target members!</p>

              <GoogleBtn />
              <br />
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
                  <h3 className="register-heading mt-2"> You have an account!! <b className="text-danger"> Sign in</b></h3>

                  <form onSubmit={this.onSubmitSignIn} className="row register-form">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="email"
                          className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                          placeholder="Enter your email *"
                          name="email"
                          initialvalue={this.state.email}
                          onChange={this.formValChange}
                          required />
                        {isError.email.length > 0 && (
                          <span className="invalid-feedback">{isError.email}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input type="password"
                          className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                          placeholder="Password *"
                          name="password"
                          initialvalue={this.state.password}
                          onChange={this.formValChange}
                          required />
                        {isError.password.length > 0 && (
                          <span className="invalid-feedback">{isError.password}</span>
                        )}
                      </div>
                    </div>

                    <input type="submit" className="btnRegister" value="Log IN" />
                  </form>
                </div>
                <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <h3 className="register-heading">You don't have account yet!!<b className="text-danger">Sign up</b></h3>
                  <form onSubmit={this.onSubmitFormUser}>
                    <div className="row register-form">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className={isError.firstName.length > 0 ? "is-invalid form-control" : "form-control"}
                            placeholder="First Name *"
                            name="firstName"
                            initialvalue={this.state.firstName}
                            onChange={this.formValChange}
                            required />
                            {isError.firstName.length > 0 && (
                            <span className="invalid-feedback">{isError.firstName}</span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            onChange={this.formValChange}
                            type="text"
                            className={isError.lastName.length > 0 ? "is-invalid form-control" : "form-control"}
                            placeholder="Last Name *"
                            name="lastName"
                            initialvalue={this.state.lastName}
                            required />
                          {isError.lastName.length > 0 && (
                            <span className="invalid-feedback">{isError.lastName}</span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            onChange={this.formValChange}
                            className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                            placeholder="Password *"
                            name="password"
                            initialvalue={this.state.password}
                            required />
                          {isError.password.length > 0 && (
                            <span className="invalid-feedback">{isError.password}</span>
                          )}
                        </div>
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
                        <div className="form-group ">
                          <input
                            onChange={this.handleFiles}
                            type="file"
                            className="form-control"
                            placeholder="Chosse a picture *"
                            name="profileImg"
                            initialvalue={this.state.profileImg}
                            accept="image/*"
                            required />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister"
                          initialvalue="Register"
                          value="Register Now" />
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
export default connect(null, { signInUser })(FormUser);