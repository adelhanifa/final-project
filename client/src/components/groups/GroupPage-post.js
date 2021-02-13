import React from "react";

class GroupPagePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: " " };
  }
  onSubmitComment = (e) => {
    e.preventDefault();
    console.log({ comment: this.state.comment });
  };
  render() {
    return (
      <li>
        <div className="timeline-time text-light">
          <span className="date">today</span>
          <span className="time">04:20</span>
        </div>

        <div className="timeline-icon">
          <span>&nbsp;</span>
        </div>

        <div className="timeline-body">
          <div className="timeline-header">
            <span className="userimage">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt=""
              />
            </span>
            <span className="username">Sean Ngu</span>
            <span className="pull-right text-muted">18 Views</span>
          </div>
          <div className="timeline-content">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              faucibus turpis quis tincidunt luctus. Nam sagittis dui in nunc
              consequat, in imperdiet nunc sagittis.
            </p>
          </div>
          <div className="timeline-likes">
            <div className="stats-right">
              <span className="stats-text">259 Shares</span>
              <span className="stats-text">21 Comments</span>
            </div>
            <div className="stats">
              <span className="fa-stack fa-fw stats-icon">
                <i className="fa fa-circle fa-stack-2x text-danger"></i>
                <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
              </span>
              <span className="fa-stack fa-fw stats-icon">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
              </span>
              <span className="stats-total">4.3k</span>
            </div>
          </div>
          <div className="timeline-footer">
            <a href="/" className="m-r-15 text-inverse-lighter">
              <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like
            </a>
            <a href="/" className="m-r-15 text-inverse-lighter">
              <i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment
            </a>
            <a href="/" className="m-r-15 text-inverse-lighter">
              <i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share
            </a>
          </div>
          <div className="timeline-comment-box">
            <div className="user">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt="pic"
              />
            </div>
            <div className="input">
              <form onSubmit={this.onSubmitComment}>
                <div className="input-group">
                  <textarea
                    type="text"
                    name="comment"
                    onChange={(e) =>{
                        console.log(e.target.value) 
                        this.setState({ comment: e.target.value })
                        console.log({ comment: this.state.comment });
                    }
                    }
                    className="form-control rounded-corner"
                    placeholder="Write a comment..."
                  ></textarea>
                  <span className="input-group-btn p-l-10">
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
