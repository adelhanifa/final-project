import React from "react";
import axios from 'axios';

class GroupPagePost extends React.Component {
  constructor(props) {
    super(props);
    console.log('postInfo',this.props.post)
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    this.state = { newComment: " ",user: loggedInUser };
    
    axios.get('comment/'+this.props.post._id)
    .then(res => { 
        this.setState({ comments: res.data.comments })
    })
  }

  getDate = (date) => {
    let d1 = new Date()
    let d2 = new Date(date)
    console.log(d1)
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
    let d1 = new Date()
    let d2 = new Date(time)

    if (d1.getFullYear() === d2.getFullYear()){
      if (d1.getMonth() === d2.getMonth()){
        if (d1.getDate() === d2.getDate()){
          if (d1.getHours() === d2.getHours()){
            if (d1.getMinutes() === d2.getMinutes()){
              return('Now')
            } else {
              return((d1.getMinutes() - d2.getMinutes())+' min ago')
            }
          } else {
            return((d1.getHours() - d2.getHours())+' hours ago')
          }
        }
      }
    }
    return(d2.getHours()+':'+d2.getMinutes())
  }

  onSubmitNewComment = (e) => {
    e.preventDefault();
    console.log({ newComment: this.state.newComment });
  };

  render() {
    console.log('stateInfo',this.state)
    return (
      <li>
        <div className="timeline-time text-light">
          <span className="date">{this.getDate(this.props.post.createdAt)}</span>
          <span className="time">{this.getTime(this.props.post.createdAt)}</span>
        </div>

        <div className="timeline-icon">
          <span>&nbsp;</span>
        </div>

        <div className="timeline-body">
          <div className="timeline-header">
            <span className="userimage">
              <img
                src={this.props.post.user.profileImg}
                alt=""
              />
            </span>
            <span className="username">{this.props.post.user.firstName}&nbsp;{this.props.post.user.lastName}</span>
          </div>
          <div className="timeline-content">
            <p>
              {" "}
              {this.props.post.postMsg}
            </p>
          </div>
          <div className="timeline-likes">
          </div>
          <div className="timeline-footer">
            <a href="/" className="m-r-15 text-inverse-lighter">
              <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like
            </a>&nbsp;&nbsp;&nbsp;
            <a href="/" className="m-r-15 text-inverse-lighter">
              <i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comments
            </a>
          </div>
          <div className="timeline-comment-box">
            <div className="user">
              <img
                src={this.state.user.profileImg}
                alt="pic"
              />
            </div>
            <div className="input">
              <form onSubmit={this.onSubmitNewComment}>
                <div className="input-group">
                  <textarea
                    type="text"
                    name="newComment"
                    onChange={(e) => {
                      console.log(e.target.value);
                      this.setState({ newComment: e.target.value });
                      console.log({ newComment: this.state.newComment });
                    }}
                    className="form-control rounded-corner"
                    placeholder="Write a comment..."
                  ></textarea>
                  <span className="input-group-btn pl-4 d-flex align-items-end">
                    <button
                      className="btn btn-primary f-s-12 rounded-corner"
                      type="submit"
                    >
                      Comment
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default GroupPagePost;
