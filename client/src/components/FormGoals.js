import React from 'react'
import '../cssComponents/form-user.css';
import axios from 'axios';
import GoogleBtn from './GoogleBtn';


class FormGoals extends React.Component {
    constructor(props) {
        super(props);
        let {_id} = JSON.parse(localStorage.getItem('loggedInUser'))
        this.state = {
            userId: _id,
            goals: [],
            goal: '',
            isError: {
                goal: '',
            }
        }
    }

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        let isError = { ...this.state.isError };
        switch (name) {
            case "goal":
                isError.goal =
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


    onSubmitFormUser = (event) => {
        event.preventDefault();

        if (this.state.isError.goal) {
            console.log('form is not valid')
        }

        else {
            console.log('form is valid')
           
            axios.patch(`/user/addGoalsForm/${this.state.userId}`)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }

    }

    render() {
        if (!this.state.userId) {
            this.props.history.push('/login/register')
        }
        const { isError } = this.state;

        return (
            <div className="body-page">
                <div className="bg-dark  p-2">
                    <div className="container d-flex flex-column justify-content-between align-items-center flex-lg-row flex-md-row">
                        <a href="/">
                            <img alt="logo" src="/assets/img/logo/right-red_white.png" className="d-inline-block align-top mylogo" />
                        </a>
                        <h3 className="text-light">Set your life goals ! </h3>
                    </div>
                </div>

                <div className="container register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            <h3 className="text-danger"> Welcome </h3>
                            <p>Achieve your goals by sharing them !</p>
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
export default FormGoals