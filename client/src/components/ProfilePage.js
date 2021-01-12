import React from 'react';
import '../cssComponents/profile.css';
import { connect } from 'react-redux';
import HeaderProfile from './HeaderProfile';
import axios from 'axios';

class ProfilePage extends React.Component {
    state = { isLogedIn: false }
    componentDidMount() {
        console.log({propsUser:this.props})
        // axios.get('')
    }
    render() {
        if (this.props.isSignedIn) {
            console.log(this.props)
            return (
                <>
                    <div className="body-page">
                        <HeaderProfile />
                        <h1 className="m-3 text-center text-danger">User Profile Page</h1>
                        <div className="container profile" >
                            <div className="row gutters">
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="card h-100 mycard">
                                        <div className="card-body">
                                            <div className="account-settings">
                                                <div className="user-profile">
                                                    <div className="user-avatar">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin" />
                                                    </div>
                                                    <h5 className="user-name">Yuki Hayashi</h5>
                                                    <h6 className="user-email">yuki@Maxwell.com</h6>
                                                </div>
                                                <div className="about">
                                                    <h5 className="mb-2 text-primary">About</h5>
                                                    <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                    <div className="card h-100 mycard">
                                        <div className="card-body">
                                            <div className="row gutters">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <h6 className="mb-3 text-danger">Personal Details</h6>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label for="fullName">First Name</label>
                                                        <input type="text" className="form-control myform-control" id="fullName" placeholder="Enter full name" />
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label for="phone">Last Name</label>
                                                        <input type="text" className="form-control myform-control" id="phone" placeholder="Enter phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label for="eMail">Email</label>
                                                        <input type="email" className="form-control myform-control" id="eMail" placeholder="Enter email ID" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row gutters">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <h6 className="mb-3 text-danger">Interessted Goals</h6>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label for="Street">goals</label>
                                                        <input type="name" className="form-control myform-control" id="Street" placeholder="Enter Street" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row gutters">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="text-right">
                                                        <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                                                        <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >

                    </div>
                </>
            )
        } else {
            this.props.history.push('/')
            return 'error'
        }
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        isSignedIn: state.user.isSignedIn
    }
}

export default connect(mapStateToProps, {})(ProfilePage);