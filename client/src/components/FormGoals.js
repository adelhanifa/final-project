import React from 'react'
import '../cssComponents/form-user.css';
import axios from 'axios';

class FormGoals extends React.Component {
    constructor(props) {
        super(props);
        let { _id } = JSON.parse(localStorage.getItem('loggedInUser'))
        let displayGoals = []
        this.state = {
            userId: _id,
            displayGoals: displayGoals,
            userGoal: '',
            goals: ["60021099041de14af00c02ec"]
        }
        axios.get('/goal/')
            .then(res => {
                console.log(res.data)
                displayGoals = res.data
            })
            .then(() => {
                this.setState({ displayGoals: displayGoals })
            })
    }
    handleChange = (evt) => {
        let goalValue = evt.target.value
        let allreadyAdded = this.state.goals.findIndex(x => x === goalValue)

        if (evt.target.checked) {
            console.log(allreadyAdded)
            if (allreadyAdded == -1) {
                this.setState({ goals: [...this.state.goals, goalValue] });

            }
        }
        else {
            console.log(allreadyAdded)
            let newState = this.state.goals;
            newState.splice(allreadyAdded, 1)
            this.setState({ goals: newState });
        }

    }

    handleChangeUser = (e) => {
        let userGoal = e.target.value;
        this.setState({ userGoal })
    }

    onSubmitFormUser = (event) => {
        event.preventDefault();
        if (this.state.userGoal) {
            let newUserGoal = {
                name: this.state.userGoal,
                icon: "fas fa-bullseye"
            }
            axios.post('/goal/create', newUserGoal)
                .then((res) => {
                    // console.log({data:res.data})
                    this.setState({ goals: [...this.state.goals, res.data._id] })
                    // console.log({ state: this.state.displayGoals })
                })
                .then(()=>{
                    axios.patch(`/user/addGoalsForm/${this.state.userId}`,{goals:this.state.goals})
                    .then(res => {
                        console.log({userGoal:res.data})
                    })
                    .catch(err => console.log(err))
                })
                .catch(err => console.log({ err }))
        }
        else {    
        axios.patch(`/user/addGoalsForm/${this.state.userId}`,{goals:this.state.goals})
        .then(res => {
            console.log({else:res.data})
        })
        .catch(err => console.log(err))
         }

    }

    render() {

        if (!this.state.userId) {
            this.props.history.push('/login/register')
        }
        if (this.state.displayGoals.length === 0) {
            return 'Loading ...'
        }
        return (
            <div className="body-page mb-3 min-vh-100">
                <div className="bg-dark  p-2">
                    <div className="container d-flex flex-column justify-content-between align-items-center flex-lg-d-flex align-items-center justify-content-center flex-md-row">
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

                            <br />
                        </div>

                        <div className="col-md-9 register-right">

                            <div >
                                <div >
                                    <h3 className="register-heading mt-2">Choose any catogeray or <br /> create your own target<a href="/user/createGoal" className="text-danger"> Create goal</a></h3>

                                    <form onSubmit={this.onSubmitFormUser} className="row register-form form-check">
                                        <div className="col-md-12">

                                            <h1
                                                className="dark-grey-text mt-5 mb-4"
                                                style={{ color: 'white', textShadow: '2px 2px 4px #000000' }}> I want to revolutionize ... </h1>
                                            <section className="border p-3">

                                                {this.state.displayGoals.map((item, index) => {
                                                    if (index < 7) {
                                                        let inputName = 'goalNR' + index;
                                                        let classes = "btn btn-outline-secondary btn-rounded form-check-label d-flex align-items-center mt-2 px-1 px-sm-4"
                                                        return (
                                                            <div className="btn-group w-100" data-toggle="buttons" key={index}>
                                                                <label className={classes}>
                                                                    <i className={item.icon}></i> <b className="ml-4">{item.name}</b>
                                                                    <input type="checkbox"
                                                                        value={item._id}
                                                                        name={inputName}
                                                                        onChange={this.handleChange}
                                                                        className="form-check-input d-none"
                                                                        autoComplete="off"
                                                                    />
                                                                </label>
                                                            </div>
                                                        )
                                                    }
                                                }

                                                )}
                                                <div className="btn-group w-100" data-toggle="buttons">

                                                    <label className="btn btn-outline-secondary btn-rounded  d-flex align-items-center mt-2 px-1 px-sm-4">
                                                        <i class="fas fa-bullseye"></i>

                                                        <input
                                                            type="text"
                                                            name="userGoal"
                                                            onKeyUp={this.handleChangeUser}
                                                            className="ml-5  border-0 w-75"
                                                            autoComplete="off"
                                                            placeholder="Choose your own life target"
                                                        />
                                                    </label>
                                                </div>
                                            </section>
                                            <input type="submit" className="btnRegister2 " value="Continue" />
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