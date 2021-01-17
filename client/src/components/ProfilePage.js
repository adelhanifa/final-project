import React from 'react';
import '../cssComponents/profile.css';
import { Navbar } from 'react-bootstrap'

class ProfilePage extends React.Component {
    constructor() {
        super()
        let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        this.state = { user: loggedInUser }
    }

    render() {
        console.log({ id: this.state.user._id })
        if (this.state.user) {
            let { firstName, lastName, email, profileImg, goals } = this.state.user
            console.log({ goals })
            return (
                <>
                    <div className="body-page min-vh-100">
                        <div className="bg-dark  p-2">

                            <div className="container d-flex flex-column justify-content-between align-items-center flex-lg-row flex-md-row">
                                <Navbar.Brand href="/">
                                    <img
                                        alt="logo"
                                        src="/assets/img/logo/right-red_white.png"
                                        className="d-inline-block align-top mylogo"
                                    />{' '}
                                </Navbar.Brand>
                                <h3 className="text-light">User Profile Page</h3>
                            </div>
                        </div>
                        <div className="container profile " >
                            <div className="row gutters">
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="card h-100 mycard">
                                        <div className="card-body">
                                            <div className="account-settings">
                                                <div className="user-profile">
                                                    <div className="user-avatar">
                                                        <img src={profileImg} alt={firstName} />
                                                    </div>
                                                    <h5 className="user-name text-light font-weight-bolder">{firstName} {lastName}</h5>
                                                    <h6 className="user-email text-light font-weight">{email}</h6>
                                                </div>
                                                <div className="about">
                                                    <h5 className="mb-2 text-primary">About</h5>
                                                    <p>I'm {firstName} {lastName}. I have many Life goals, that I want to share with others </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                    <form className="card h-100 mycard">
                                        <div className="card-body">
                                            <div className="row gutters">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <h6 className="mb-3 text-danger font-weight-bolder">Personal Details</h6>
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12">
                                                    <div className="form-group ml-3">
                                                        <label for="fullName">First Name</label>
                                                        <input
                                                            type="text"
                                                            initialvalue={firstName}
                                                            className="form-control myform-control"
                                                            id="fullName"
                                                            placeholder={firstName} />
                                                    </div>
                                                </div>

                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12">
                                                    <div className="form-group ml-3">
                                                        <label for="phone">Last Name</label>
                                                        <input
                                                            type="text"
                                                            initialvalue={lastName}
                                                            className="form-control myform-control"
                                                            id="phone"
                                                            placeholder={lastName} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12">
                                                    <div className="form-group ml-3">
                                                        <label for="eMail">Email</label>
                                                        <input
                                                            type="email"
                                                            initialvalue={email}
                                                            className="form-control myform-control"
                                                            id="eMail"
                                                            placeholder={email} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <h6 className="mb-3 text-danger font-weight-bolder">Interessted Goals</h6>
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12">
                                                    <div className="form-group ml-3">
                                                        <label for="Street">Add another goal</label>
                                                        <input
                                                            type="text"
                                                            className="form-control myform-control"
                                                            id="Street"
                                                            placeholder="Enter your life goal!" />
                                                    </div>
                                                </div>

                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12">
                                                    <h5 className="text-danger">Your Life Targets:</h5>
                                                    <div className="form-group ml-3">
                                                        {goals &&
                                                            <ul>
                                                                {goals.map((goal, index) => {
                                                                    return <li
                                                                        key={index}
                                                                        className="p-2 m-2">
                                                                        <i className={goal.icon}></i>
                                                                        <i className="ml-2">{goal.name}</i>
                                                                    </li>
                                                                })}
                                                            </ul>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gutters">

                                            </div>
                                            <div className="row gutters">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="text-right">
                                                        <button type="button" id="submit" name="submit" className="btn btn-secondary m-3">Cancel</button>
                                                        <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div >
                        <br/>
                    <br/><br/>
                    <br/>
                    </div>
                    
                </>
            )
        } else {
            this.props.history.push('/login/register')
            return 'error'
        }
    }
}


export default ProfilePage;