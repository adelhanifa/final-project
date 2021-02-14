import axios from "axios";
import React from "react";
import "../../cssComponents/group-page.css";
import GroupPageMember from "./GroupPage-member";
import GroupPagePost from "./GroupPage-post";

class GroupPage extends React.Component {
  constructor(props) {
    super(props);
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    this.state = {
      user: loggedInUser,
      group: this.props.location.state,
      posts: [],
      newPost: "",
    };
    if (!this.props.location.state) {
      window.location = "/groups-card";
    }
    axios
      .get("group/" + this.props.location.state)
      .then((res) => {
        let toEdit = {
          title: res.data.group.title,
          description: res.data.group.description || "",
          photo: res.data.group.photo,
        };
        this.setState({ group: res.data.group, toEdit });
      })
      .then(() => {
        let isJoined = this.state.group.members.find(
          (x) => x._id === this.state.user._id
        );
        if (isJoined) {
          isJoined = true;
        } else {
          isJoined = false;
        }
        let isAdmin = this.state.group.admin._id === this.state.user._id;
        this.setState({ isJoined, isAdmin });
      })
      .then(() => {
        if (this.state.isJoined) {
          axios.get("post/" + this.props.location.state).then((res) => {
            this.setState({ posts: res.data.posts });
          });
        }
      });
    // .then(()=> console.log(this.state))
  }

  onSubmitEditGroup = (e) => {
    e.preventDefault();
    console.log({ onSubmit: e });
    let toSend = this.state.toEdit;
    // if (this.state.toEdit.title !== this.state.group.title) {
    //   toSend.title = this.state.toEdit.title;
    //   console.log({ toSend });
    // }
    // if (this.state.toEdit.description !== this.state.group.description) {
    //   toSend.description = this.state.toEdit.description;
    //   console.log({ toSend });
    // }
    // if (this.state.toEdit.photo !== this.state.group.photo) {
    //   toSend.photo = this.state.toEdit.photo;
    //   console.log({ toSend });
    // }
    if (toSend.title) {
      console.log({ toSend, id: this.props.location.state });
      const formData = new FormData();
      formData.append("groupImg", toSend.photo);
      formData.append("oldImg", this.state.group.photo);
      formData.append("title", toSend.title);
      formData.append("description", toSend.description);
      console.log({ formData });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios
        .patch("group/" + this.props.location.state, formData, config)
        .then((res) => {
          if (res.data.group) {
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  joinBTN = () => {
    return (
      <span
        className="btn btn-sm btn-info"
        onClick={(e) => {
          axios
            .patch(
              "user/joinNewGroup/" +
                this.state.user._id +
                "/" +
                this.props.location.state
            )
            .then((res) => {
              if (res.data.user) {
                window.location.reload();
              }
            })
            .catch((err) => console.log(err));
        }}
      >
        Join Group
      </span>
    );
  };

  leaveBTN = () => {
    return (
      <span
        className="btn btn-sm btn-danger "
        onClick={(e) => {
          axios
            .patch(
              "user/leaveGroup/" +
                this.state.user._id +
                "/" +
                this.props.location.state
            )
            .then((res) => {
              if (res.data.user) {
                window.location.reload();
              }
            })
            .catch((err) => console.log(err));
        }}
      >
        Leave Group
      </span>
    );
  };

  deleteBTN = () => {
    return (
      <span
        className="btn btn-sm btn-danger "
        onClick={(e) => {
          axios
            .get(
              "group/delete/" +
                this.state.user._id +
                "/" +
                this.props.location.state
            )
            .then((res) => {
              if (res.data.group) {
                window.location = "/groups-card";
              }
            })
            .catch((err) => console.log(err));
        }}
      >
        Delete Group
      </span>
    );
  };

  updateBTN = () => {
    return (
      <button className="btn btn-sm btn-info " type="submit">
        Update Group
      </button>
    );
  };

  saveNewPost = () => {
    this.setState({ newPost: this.state.newPost.trim() });
    if (this.state.newPost) {
      axios
        .post(
          "post/create/" +
            this.state.user._id +
            "/" +
            this.props.location.state,
          { postMsg: this.state.newPost }
        )
        .then((res) => {
          res.data.post.user = this.state.user;
          this.setState({
            posts: [res.data.post, ...this.state.posts],
            newPost: "",
          });
        });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="body-page min-vh-100">
        <div className="bg-dark  p-2">
          <div className="container d-flex flex-column justify-content-between align-items-center flex-lg-row flex-md-row">
            <a href="/">
              <img
                alt="logo"
                src="/assets/img/logo/right-red_white.png"
                className="d-inline-block align-top mylogo"
              />
            </a>
            <h3 className="text-light">Group Page</h3>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="content" className="content content-full-width">
                {/* <!-- begin profile --> */}
                <div className="profile p-0">
                  <div className="profile-header">
                    <div className="profile-header-cover"></div>

                    <div className="profile-header-content">
                      <div className="profile-header-img">
                        <img src={this.state.group.photo} alt="group pic" />
                      </div>

                      <div className="profile-header-info">
                        <h4 className="m-t-10 m-b-5">
                          {this.state.group.title}
                        </h4>
                        <p className="m-b-10">
                          {" "}
                          {this.state.group.description
                            ? this.state.group.description
                            : "no description"}
                        </p>
                        {this.state.isJoined ? (
                          <>
                            {this.state.group.members.length === 1
                              ? this.deleteBTN()
                              : this.leaveBTN()}
                          </>
                        ) : (
                          this.joinBTN()
                        )}
                      </div>
                    </div>

                    <ul className="profile-header-tab nav nav-tabs">
                      {this.state.isJoined && (
                        <li className="nav-item">
                          <a
                            href="#profile-post"
                            className="nav-link active show"
                            data-toggle="tab"
                          >
                            POSTS
                          </a>
                        </li>
                      )}
                      <li className="nav-item">
                        <a
                          href="#profile-about"
                          className={
                            this.state.isJoined
                              ? "nav-link"
                              : "nav-link active show"
                          }
                          data-toggle="tab"
                        >
                          ABOUT
                        </a>
                      </li>
                      {this.state.isJoined && (
                        <li className="nav-item">
                          <a
                            href="#profile-friends"
                            className="nav-link"
                            data-toggle="tab"
                          >
                            MEMBERS
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                {/* <!-- end profile --> */}

                {/* <!-- begin profile-content --> */}
                <div className="profile-content">
                  <div className="tab-content p-0">
                    {/* Posts  */}
                    {this.state.isJoined && (
                      <div
                        className="tab-pane fade active show"
                        id="profile-post"
                      >
                        <ul className="timeline">
                          <li>
                            <div className="timeline-icon">
                              <span>&nbsp;</span>
                            </div>
                            <div className="timeline-body">
                              <div className="tab-content" id="myTabContent">
                                <div
                                  className="tab-pane fade active show"
                                  id="posts"
                                  role="tabpanel"
                                  aria-labelledby="posts-tab"
                                >
                                  <div className="form-group">
                                    <textarea
                                      className="form-control"
                                      id="message"
                                      rows="3"
                                      value={this.state.newPost}
                                      placeholder="What are you thinking? write new post"
                                      onChange={(e) => {
                                        this.setState({
                                          newPost: e.target.value,
                                        });
                                      }}
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="btn-toolbar justify-content-end">
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-primary f-s-12 rounded-corner"
                                    onClick={() => this.saveNewPost()}
                                  >
                                    share
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                          {this.state.posts &&
                            this.state.posts.map((post) => (
                              <GroupPagePost key={post._id} post={post} />
                            ))}
                          <li>
                            <div className="timeline-icon">
                              <span>&nbsp;</span>
                            </div>
                            <div className="timeline-body">Loading...</div>
                          </li>
                        </ul>
                      </div>
                    )}
                    {/* Members  */}
                    {this.state.isJoined && (
                      <div className="tab-pane fade" id="profile-friends">
                        <h4 className="m-t-0 m-b-20 text-light">
                          Memners List ({this.state.group.members.length})
                        </h4>

                        <div className="row row-space-2">
                          {this.state.group.members &&
                            this.state.group.members.map((item) => {
                              return (
                                <GroupPageMember
                                  key={item._id}
                                  member={item}
                                  admin={this.state.group.admin._id}
                                />
                              );
                            })}
                        </div>
                      </div>
                    )}
                    {/* About  */}
                    <div
                      className={
                        this.state.isJoined
                          ? "tab-pane fade"
                          : "tab-pane fade active show"
                      }
                      id="profile-about"
                    >
                      <div className="table-responsive">
                        <form onSubmit={(e) => this.onSubmitEditGroup(e)}>
                          <table className="table table-profile">
                            {this.state.toEdit && (
                              <tbody>
                                {this.state.isAdmin && (
                                  <tr className="highlight">
                                    <td className="field">title</td>
                                    <td>
                                      <input
                                        className=" bg-transparent border-0 text-light"
                                        type="file"
                                        placeholder={this.state.photo}
                                        name="groupImg"
                                        disabled={!this.state.isAdmin}
                                        onChange={(e) => {
                                          let x = this.state.toEdit;
                                          x.photo = e.target.files[0];
                                          this.setState({ toEdit: x });
                                        }}
                                      />
                                    </td>
                                  </tr>
                                )}
                                <tr className="highlight">
                                  <td className="field">Name</td>
                                  <td>
                                    <input
                                      className=" bg-transparent border-0 text-light"
                                      type="text"
                                      name="title"
                                      placeholder="No Group Name"
                                      value={this.state.toEdit.title}
                                      disabled={!this.state.isAdmin}
                                      onChange={(e) => {
                                        let x = this.state.toEdit;
                                        x.title = e.target.value;
                                        this.setState({ toEdit: x });
                                      }}
                                    />
                                  </td>
                                </tr>

                                <tr className="divider">
                                  <td colSpan="2"></td>
                                </tr>

                                <tr className="highlight">
                                  <td className="field">Description</td>
                                  <td>
                                    <input
                                      className=" bg-transparent border-0 text-light"
                                      type="text"
                                      name="description"
                                      placeholder="No Group Description"
                                      value={this.state.toEdit.description}
                                      disabled={!this.state.isAdmin}
                                      onChange={(e) => {
                                        let x = this.state.toEdit;
                                        x.description = e.target.value;
                                        this.setState({ toEdit: x });
                                      }}
                                    />
                                  </td>
                                </tr>
                                <tr className="divider">
                                  <td colSpan="2"></td>
                                </tr>
                                {!this.state.isAdmin && (
                                  <tr className="highlight">
                                    <td className="field">Admin</td>
                                    <td>
                                      <input
                                        className=" bg-transparent border-0 text-light"
                                        type="text"
                                        value={
                                          this.state.group.admin.firstName +
                                          " " +
                                          this.state.group.admin.lastName
                                        }
                                        disabled
                                      />
                                    </td>
                                  </tr>
                                )}
                                {!this.state.isAdmin && (
                                  <tr className="divider">
                                    <td colSpan="2"></td>
                                  </tr>
                                )}

                                <tr className="highlight">
                                  <td className="field">Members</td>
                                  <td>
                                    <input
                                      className=" bg-transparent border-0 text-light"
                                      type="text"
                                      value={this.state.group.members.length}
                                      disabled
                                    />
                                  </td>
                                </tr>

                                <tr className="divider">
                                  <td colSpan="2"></td>
                                </tr>

                                <tr className="highlight">
                                  <td className="field">Created at</td>
                                  <td>
                                    <input
                                      className=" bg-transparent border-0 text-light"
                                      type="text"
                                      value={new Date(
                                        this.state.group.createdAt
                                      ).toLocaleDateString("en-GB")}
                                      disabled
                                    />
                                  </td>
                                </tr>
                                <tr className="divider">
                                  <td colSpan="2"></td>
                                </tr>

                                <tr className="highlight">
                                  <td className="field">&nbsp;</td>
                                  {this.state.isAdmin ? (
                                    <td className="p-t-10 p-b-10">
                                      {this.updateBTN()} &nbsp;
                                      {this.state.group.members.length === 1
                                        ? this.deleteBTN()
                                        : this.leaveBTN()}
                                    </td>
                                  ) : (
                                    <td className="p-t-10 p-b-10">
                                      {this.state.isJoined ? (
                                        <>
                                          {this.state.group.members.length === 1
                                            ? this.deleteBTN()
                                            : this.leaveBTN()}
                                        </>
                                      ) : (
                                        this.joinBTN()
                                      )}
                                    </td>
                                  )}
                                </tr>
                              </tbody>
                            )}
                          </table>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end profile-content --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupPage;
