import React from 'react';
import '../form2.css';
const FormTest2 = () => {
    return (
        <div className="container">
            <div className="row">
                <form action="/action_page.php" className="col-xs-12 col-sm-12 col-md-12">
                    <h2>Please fill all mandatory(*) fields</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" placeholder="Enter Name *" name="name" required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="surname" placeholder="Enter Second Name *" name="secondName" required />
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Enter email *" name="email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password *" name="pwd" required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="pwd" placeholder="Repeat password *" name="Rptpwd" required />
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="remember" /> <span>Remember me</span></label>
                    </div>
                    <button type="submit" className="btn btn-success">Submit <i className="glyphicon glyphicon-send"></i></button>
                </form>
            </div>
        </div>
    )

}

export default FormTest2;