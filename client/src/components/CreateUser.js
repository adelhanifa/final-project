import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username
        }
        console.log(user);

        axios.post('/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }
    render() {
        return (
            <div className="row">
                <Form onSubmit={this.onSubmit} className="card col col-8 m-3">
                    <h3>Here we go !</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter user name"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter user name"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Example file input" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        continue
                    </Button>
                    <h2 className="text-center">OR</h2>
                    <Button variant='info' type="submit">Sign up with google</Button>
                </Form>

            </div>
        )
    }
}