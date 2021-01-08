import React from 'react'
import '../formuser.css'
const FormUser = () => {
    return (
        <div className="main-w3layouts wrapper" id="userForm">
            <h1>Creative SignUp Form</h1>
            <div className="main-agileinfo">
                <div className="agileits-top">
                    <form action="#" method="post" style={{color:'#aaa'}}>
                        <input className="text" type="text" name="Username" placeholder="Username" required="" />
                        <input className="text email" type="email" name="email" placeholder="Email" required="" />
                        <input className="text" type="password" name="password" placeholder="Password" required="" />
                        <input className="text w3lpass" type="password" name="password" placeholder="Confirm Password" required="" />
                        <div className="wthree-text">
                            <label className="anim">
                                <input type="checkbox" className="checkbox" required="" />
                                <span>I Agree To The Terms & Conditions</span>
                            </label>
                            <div className="clear"> </div>
                        </div>
                        <input type="submit" value="SIGNUP" />
                    </form>
                    <p>Don't have an Account? <a href="/signup"> Login Now!</a></p>
                </div>
            </div>
         
            <ul className="colorlib-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    )
}
export default FormUser;