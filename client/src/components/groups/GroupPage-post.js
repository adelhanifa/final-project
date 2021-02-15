import axios from "axios";
import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

class GroupPagePost extends React.Component {
  constructor(props) {
    super(props);
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    this.state = {
      newComment: "",
      editPostMsg: "",
      user: loggedInUser,
      post: this.props.post,
      visible: false,
      editebale: false,
      postAuthor: loggedInUser._id === this.props.post.user._id
    };
    axios.get("comment/" + this.props.post._id).then((res) => {
      this.setState({ comments: res.data.comments });
    });
  }

  getDate = (date) => {
    let d1 = new Date();
    let d2 = new Date(date);
    if (d1.getFullYear() === d2.getFullYear()) {
      if (d1.getMonth() === d2.getMonth()) {
        if (d1.getDate() - d2.getDate() === 0) {
          return "Today";
        } else if (d1.getDate() - d2.getDate() === 1) {
          return "Yesterday";
        }
      }
    }
    return d2.toLocaleDateString("en-GB");
  };

  getTime = (time) => {
    let d1 = new Date();
    let d2 = new Date(time);
    if (d1.getFullYear() === d2.getFullYear()) {
      if (d1.getMonth() === d2.getMonth()) {
        if (d1.getDate() === d2.getDate()) {
          if (d1.getHours() === d2.getHours()) {
            if (d1.getMinutes() === d2.getMinutes()) {
              return "Now";
            } else {
              return d1.getMinutes() - d2.getMinutes() + " min ago";
            }
          } else {
            return d1.getHours() - d2.getHours() + " hours ago";
          }
        }
      }
    }
    return d2.toLocaleTimeString("en-GB").slice(0, 5);
  };

  saveNewComment = () => {
    this.setState({ newComment: this.state.newComment.trim() });
    if (this.state.newComment) {
      axios
        .post(
          "comment/create/" + this.state.user._id + "/" + this.state.post._id,
          { commentMsg: this.state.newComment }
        )
        .then((res) => {
          res.data.comment.user = this.state.user;
          this.setState({
            comments: [res.data.comment, ...this.state.comments],
            newComment: "",
          });
        });
    }
  };

  render() {
    return (
      <li>
        <div className="timeline-time text-light">
          <span className="date">
            {this.getDate(this.state.post.createdAt)}
          </span>
          <span className="time">
            {this.getTime(this.state.post.createdAt)}
          </span>
        </div>
        <div className="timeline-icon">
          <span>&nbsp;</span>
        </div>
        <div className="timeline-body">
          <div className="timeline-header">
            <span className="userimage">
              <img src={this.state.post.user.profileImg} alt="profileImg" />
            </span>
            <span className="username">
              {this.state.post.user.firstName}&nbsp;
              {this.state.post.user.lastName}
            </span>
            <div className="pull-right">
              {this.state.postAuthor && <>
              {this.state.editebale ? (
                <>
                  <button
                    className="btn btn-danger btn-xs"
                    title="Delete"
                    onClick={() => this.props.deletePost(true)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button
                    className="btn btn-success btn-xs"
                    title="Save"
                    onClick={() => {
                      let newPost = this.state.editPostMsg.trim();
                      if (newPost) {
                        if (newPost !== this.state.post.postMsg) {
                          axios
                            .patch("post/" + this.state.post._id, {
                              postMsg: newPost,
                            })
                            .catch((err) => console.log(err));
                        }
                        this.setState({
                          editebale: !this.state.editebale,
                          editPostMsg: "",
                          post: { ...this.state.post, postMsg: newPost },
                        });
                      }
                    }}
                  >
                    <i className="fas fa-check"></i>
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-info btn-xs"
                  title="Edit"
                  onClick={() =>
                    this.setState({
                      editebale: !this.state.editebale,
                      editPostMsg: this.state.post.postMsg,
                    })
                  }
                >
                  <i className="fas fa-pencil-alt"></i>
                </button>
              )}
              </>}
            </div>
          </div>
          <div className="timeline-content">
            {this.state.editebale ? (
              <textarea
                className="form-control"
                id="message"
                rows="3"
                value={this.state.editPostMsg}
                placeholder="What are you thinking? write new post"
                onChange={(e) => {
                  this.setState({
                    editPostMsg: e.target.value,
                  });
                }}
              ></textarea>
            ) : (
              <p> {this.state.post.postMsg}</p>
            )}
          </div>
          <div className="timeline-likes">
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <i className="far fa-comment-dots fa-fw fa-lg m-r-3"></i>
                    Comments
                  </Accordion.Toggle>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>
                    Like
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {this.state.comments &&
                      this.state.comments.map((comment) => {
                        let commentAuthor = this.state.user._id === comment.user._id
                        return (
                          <div className="ui comments" key={comment._id}>
                            <div className="comment">
                              <div className="avatar">
                                <img
                                  src={comment.user.profileImg}
                                  alt="picUser"
                                />
                              </div>
                              <div className="content">
                                <div className="author">
                                  {comment.user.firstName}
                                  <div className="pull-right">
                                    <div className="metadata">
                                      <span className="date">
                                        {this.getDate(comment.createdAt)}
                                      </span>
                                      <span className="time">
                                        {this.getTime(comment.createdAt)}
                                      </span>
                                    </div>
                                    {commentAuthor && <span
                                      className="ml-1  btn btn-link text-danger"
                                      style={{
                                        padding: "0",
                                        fontSize: "revert",
                                      }}
                                      onClick={() => {
                                        axios.get("comment/delete/" +this.state.user._id +"/" +comment._id)
                                        .then(()=> {
                                          let comments = this.state.comments.filter(x => x._id !== comment._id)
                                          this.setState({comments: comments})
                                        })
                                      }}
                                    >
                                      <i className="far fa-trash-alt"></i>
                                    </span> }
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="text">
                                    {comment.commentMsg}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    <div className="timeline-comment-box">
                      <div className="user">
                        <img src={this.state.user.profileImg} alt="pic" />
                      </div>

                      <div className="input">
                        <div className="input-group">
                          <input
                            type="text"
                            value={this.state.newComment}
                            name="newComment"
                            onChange={(e) => {
                              this.setState({ newComment: e.target.value });
                            }}
                            className="form-control rounded-corner"
                            placeholder="Write a comment..."
                          />
                          <span className="input-group-btn pl-4 d-flex align-items-end">
                            <button
                              className="btn btn-primary f-s-12 rounded-corner"
                              type="submit"
                              onClick={() => this.saveNewComment()}
                            >
                              Comment
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </li>
    );
  }
}
export default GroupPagePost;
