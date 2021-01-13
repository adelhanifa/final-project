import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
const CLIENT_ID = '49627037174-g8aljjf4dlo9mjsopbqjgnfeg7m86l55.apps.googleusercontent.com';
class GoogleBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogined: false,
      accessToken: ''
    };
  }
  login = (response) => {
    console.log(response)
    if (response.accessToken) {
      this.setState({
        isLogined: true,
        accessToken: response.accessToken
      });
      let gUser = {
        googleID: response.profileObj.googleId,
        firstName: response.profileObj.name.split(' ')[0],
        lastName: response.profileObj.name.split(' ')[1],
        email: response.profileObj.email,
        profileImg: response.profileObj.imageUrl
      }
      console.log('gUser', gUser)
      axios.post("/user/google-log-in", gUser, {})
        .then(res => {
          console.log('axios res', res)
          localStorage.setItem('loggedInUser', JSON.stringify(res.data.user));
          window.location = '/user/profile'

        })
        .catch(err => {
          console.log({ dataGoogle: err })
        })
    }
    // window.location ='/'
  }
  logout = (response) => {
    console.log(response)
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }
  handleLoginFailure = (response) => {
    // alert('Failed to log in')
  }
  handleLogoutFailure = (response) => {
    // alert('Failed to log out')
  }
  render() {
    return (
      <div>
        { this.state.isLogined ?
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText='Logout'
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          >
          </GoogleLogout> : <GoogleLogin
            clientId={CLIENT_ID}
            buttonText='Login'
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            responseType='code,token'
          />
        }
       
      </div>
    )
  }
}
export default GoogleBtn;