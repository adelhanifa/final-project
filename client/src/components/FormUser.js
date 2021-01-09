import React from 'react'
import '../form-user.css';
import axios from 'axios';
import formValid from "../formValid";
class FormUser extends React.Component {
  constructor(props) {
    super(props);
    this.regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      interests: [],
      isError: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
        // files:{
        //   profileImage: '',
        //   imagePreviewUrl:''
        // }
      
      }
    }
  }

  onSubmitSignIn = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log({ name, value })
    let user = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    console.log({ user });
    this.setState(user)
    // console.log(this.state)
  }

  handleImage =(e) => {
    var fd = new FormData()
    console.log({fd})
    fd.append('files',this.state.files,this.state.files.profileImage)
    var statebody = Object.assign({},this.state,{files:null})
    fd.append('state',JSON.stringify(statebody))
    axios.post('/api/',fd)
                .then((res)=>{
        console.log(res)
    }).catch((e)=>{
        console.log(e)
    })
}

handleFiles(e){
    this.setState({files:e.target.files})
}

  onSubmitFormUser = (event) => {
    event.preventDefault();
    let newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      email: this.state.email,
      profileImage: this.state.profileImage
    }

    
    if (formValid(this.state)) {
      console.log(this.state)
    } else {
      console.log("Form is invalid!");
    }
    console.log({ state: this.state })

  }

  render() {
    return (
      <>
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <p>Be one of the on Target members!</p>
              <button className="ui red google button">
                <i className="google icon" />
                Sign in using google
             </button>
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
                          className="form-control"
                          placeholder="Enter your email *"
                          name="email"
                          initialvalue={this.state.email}
                          onChange={e => { this.setState({ email: e.target.value }) }} />
                      </div>
                      <div className="form-group">
                        <input type="password"
                          className="form-control"
                          placeholder="Password *"
                          name="password"
                          initialvalue={this.state.password}
                          onChange={e => { this.setState({ password: e.target.value }) }}
                        />
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
                            onChange={e => { this.setState({ firstName: e.target.value }) }}
                            type="text"
                            className="form-control"
                            placeholder="First Name *"
                            name="firstName"
                            initialvalue={this.state.firstName} />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={e => { this.setState({ lastName: e.target.value }) }}
                            type="text"
                            className="form-control"
                            placeholder="Last Name *"
                            name="lastName"
                            initialvalue={this.state.lastName} />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={e => { this.setState({ password: e.target.value }) }}
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            name="password"
                            initialvalue={this.state.password} />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={e => { this.setState({ email: e.target.value }) }}
                            type="email"
                            className="form-control"
                            placeholder="Enter your email *"
                            name="email"
                            initialvalue={this.state.email} />
                        </div>
                        <div className="form-group ">
                          <input
                            onChange= {this.handleImage}
                            type="file"
                            className="form-control"
                            placeholder="Chosse a picture *"
                            name="profileImage"
                            initialvalue={this.state.profileImage} />
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
export default FormUser;