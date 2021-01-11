import React from 'react'
import '../cssComponents/form-user.css';
import axios from 'axios';
import formValid from "../formValid";
import GoogleBtn from './GoogleBtn';
import {connect} from 'react-redux';
import {signInUser} from "../actions"
 import history from "../history";
class FormUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      },
      emailUsed: false
    }
  }

  formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
    let isError = { ...this.state.isError };

    switch (name) {
      case "firstName":
        isError.firstName =
          value.length < 4 ? "Atleast 4 characaters required" : "";
        break;
      case "lastName":
        isError.lastName =
          value.length < 4 ? "Atleast 4 characaters required" : "";
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
      this.props.signInUser(user) 
      axios.post('/user/log-in', user)
      .then(res => {
        console.log({data:res.data})
        // this.props.signInUser(res.data) 
        history.push('/user/profile');

      })

        
    }
   
  }

  handleFiles = (e) => {
    console.log({ fileImg: e.target.files[0] })
    let fileImg = e.target.files[0];
    // this.verifyImage(fileImg)
    this.setState({ profileImg: fileImg })
  }

  onSubmitFormUser = (event) => {
    event.preventDefault();
    console.log({ image: this.state.profileImg })

    const formData = new FormData()
    formData.append('profileImg', this.state.profileImg)
    formData.append('firstName', this.state.firstName)
    formData.append('lastName', this.state.lastName)
    formData.append('password', this.state.password)
    formData.append('email', this.state.email)

    console.log({ formData })

    axios.post("/user/create", formData, {})
    .then(res => {
      console.log(res)
      console.log(typeof res.data)
      if (typeof res.data === 'string'){
        this.setState({emailUsed: true})
        console.log(this.state.emailUsed)
      }
      else {
        window.location ='/'
      }
      
    })
    .catch(err => {
      console.log(err.data) 
    })


    if (formValid(this.state)) {
      console.log(this.state)
      // axios.post('/user/signup', newUser)
    } else {
      console.log("Form is invalid!");
    }
    console.log({ state: this.state })
  }

  render() {
    const { isError, emailUsed } = this.state;
    console.log(emailUsed)
    return (
      <>
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <p>Be one of the on Target members!</p>
              {/* <button className="ui red google button" >
                <i className="google icon" />
                Sign in using google
             </button> */}
              <GoogleBtn/>
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
                  {emailUsed ? 
                    <h2>This email is already exist, try to log in.</h2>
                    :
                    ''
                  }
                  <form onSubmit={this.onSubmitSignIn} className="row register-form">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="email"
                          className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                          placeholder="Enter your email *"
                          name="email"
                          initialvalue={this.state.email}
                          onChange={this.formValChange} />
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
                        />
                        {isError.password.length > 0 && (
                          <span className="invalid-feedback">{isError.password}</span>
                        )}
                      </div>
                    </div>
                    
                    <input type="submit" className="btnRegister" value="Register" />
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
                            onChange={this.formValChange} />
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
                            initialvalue={this.state.lastName} />
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
                            initialvalue={this.state.password} />
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
                            initialvalue={this.state.email} />
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
                          />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister"
                          initialvalue="Register" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default connect(null, {signInUser})(FormUser);