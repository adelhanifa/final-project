import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import CreateGroupForm from "./CreateGroupForm";
import "../../cssComponents/side-bar-groups.css";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <div className="ui inverted vertical pointing menu row">
        <Link to="/" className="item active" width="100%">
          Home{" "}
        </Link>
        <Link to="/" className="item">More Info</Link>
        <Link className="item" onClick={handleShow}>
          Create group
        </Link>
        <Link to="/" className="item">All groups</Link>
        <Link to="/" className="item">Members</Link>
        <Link to="/user/profile" className="item">My profile</Link>
        <Link to="/" className="item">About</Link>
      </div>

      <h2 className="text-danger"> Books </h2>

      <div className="d-grid" style={{width: '200px'}}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUg1LRLJmKce23RrOHBqtyeJ4uOa6wMGpoig&usqp=CAU"
          alt="book"
          width="207px"
          height="200px"
          className="col-12"
          style={{ marginTop: "20px" }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUktax8b7fku4LT3puuLe5o0hpiTXHEfhFFA&usqp=CAU"
          alt="book"
          width="207px"
          height="200px"
          className="col-12"
          style={{ marginTop: "20px" }}
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqKBAcUp0D4Bf9iVeeYUMv-Da5BG8C4_yJw&usqp=CAU"
          alt="book"
          width="207px"
          height="200px"
          className="col-12"
          style={{ marginTop: "20px" }}
        />
      </div>
      <br />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="model-group">
          <Modal.Title className="text-center text-danger">
            Create group
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="model-group">
          <CreateGroupForm />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default SideBar;
