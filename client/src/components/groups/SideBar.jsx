import React from "react";
import { Link } from "react-router-dom";
import "../../cssComponents/side-bar-groups.css";
const SideBar = () => {
  return (
    <React.Fragment>
      <div className="ui inverted vertical pointing menu row">
        <Link to="/" className="item active" width="100%">Home </Link>
        <Link className="item">More Info</Link>
        <Link className="item">Create group</Link>
        <Link className="item">All groups</Link>
        <Link className="item">Members</Link>
        <Link className="item">Settings</Link>
        <Link className="item">About</Link>
      </div>

      <h2 className="text-danger"> Books </h2>
    
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUg1LRLJmKce23RrOHBqtyeJ4uOa6wMGpoig&usqp=CAU"
          alt="book"
          width="207px"
          height="200px"
          style={{ marginTop: "20px" }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUktax8b7fku4LT3puuLe5o0hpiTXHEfhFFA&usqp=CAU"
          alt="book"
          width="207px"
          height="200px"
          style={{ marginTop: "20px" }}
        />
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHmMS5eLPJr2_jN7vECkaNh78Hok5_KtFrw&usqp=CAU"
          alt="book"
          width="207px"
          height="200px"
          style={{ marginTop: "20px" }}
        /> */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqKBAcUp0D4Bf9iVeeYUMv-Da5BG8C4_yJw&usqp=CAU"
          alt="book"
          width="207px"
          height="200px"
          style={{ marginTop: "20px" }}
        />
      </div>
      <br/>
    </React.Fragment>
  );
};

export default SideBar;
