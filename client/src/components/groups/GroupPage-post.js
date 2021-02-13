import axios from "axios";
import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

class GroupPagePost extends React.Component {
  constructor(props) {
    super(props);
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    this.state = { newComment: " ", user: loggedInUser, visible: false };
    axios.get("comment/" + this.props.post._id).then((res) => {
      this.setState({ comments: res.data.comments });
    });
  }

  getDate = (date) => {
    let d1 = new Date()
    let d2 = new Date(date)
    if (d1.getFullYear() === d2.getFullYear()){
      if (d1.getMonth() === d2.getMonth()){
        if (d1.getDate() - d2.getDate() === 0){
          return('Today')
        } else if (d1.getDate() - d2.getDate() === 1){
          return('Yesterday')
        }
      }
    }
    return(d2.toLocaleDateString('en-GB'))
  }

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
    return(d2.getHours()+':'+d2.getMinutes())
  }

  saveNewComment = () => {
    this.setState({ newComment: this.state.newComment.trim() })
    if (this.state.newComment){
        axios.post('comment/create/'+this.state.user._id+'/'+this.props.post._id, { commentMsg: this.state.newComment })
        .then(res => { 
            res.data.comment.user = this.state.user;
            this.setState({ comments: [res.data.comment, ...this.state.comments], newComment: '' })
        })
    } 
  }

  render() {
    console.log(this.state)
    return (
      <li>
        <div className="timeline-time text-light">
          <span className="date">
            {this.getDate(this.props.post.createdAt)}
          </span>
          <span className="time">
            {this.getTime(this.props.post.createdAt)}
          </span>
        </div>
        <div className="timeline-icon">
          <span>&nbsp;</span>
        </div>
        <div className="timeline-body">
          <div className="timeline-header">
            <span className="userimage">
              <img src={this.props.post.user.profileImg} alt="profileImg" />
            </span>
            <span className="username">
              {this.props.post.user.firstName}&nbsp;
              {this.props.post.user.lastName}
            </span>
          </div>
          <div className="timeline-content">
            <p> {this.props.post.postMsg}</p>
          </div>
          <div className="timeline-likes"></div>
          <div className="timeline-footer">
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <i class="far fa-comment-dots fa-fw fa-lg m-r-3"></i>
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
                        return (
                          <div className="ui comments" key={comment._id}>
                            <h3 className="ui dividing header">Comments</h3>
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
                                </div>
                                <div className="metadata">
                                  <span className="date">
                                    {this.getDate(comment.createdAt)}
                                  </span>
                                  <span className="time">
                                    {this.getTime(comment.createdAt)}
                                  </span>
                                </div>
                                <div className="text">{comment.commentMsg}</div>
                                {/* <div className="actions"> */}

                                {/* </div> */}
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
                                onClick={()=> this.saveNewComment()}
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
