import axios from 'axios';
import React from 'react';
import '../../cssComponents/group-page.css';
import GroupPageMember from './GroupPage-member';
import GroupPagePost from './GroupPage-post';

class GroupPage extends React.Component {
    constructor(props) {
        super(props);
        let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        this.state = {
          user: loggedInUser,
          group: this.props.location.state
        }
        axios.get('group/'+this.props.location.state)
        .then(res => {
           this.setState({ group: res.data.group })
        })
        .then(()=> {
            let isJoined = this.state.group.members.find(x => x._id === this.state.user._id)
            if (isJoined) {
                isJoined = true;
            } else {
                isJoined =false;
            }
            let isAdmin = this.state.group.admin._id === this.state.user._id
            this.setState({ isJoined, isAdmin })
        })
        .then(()=> console.log(this.state))
      }
    render() {
        let test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        return (
            <div className="body-page min-vh-100">

                <div className="bg-dark  p-2">
                    <div className="container d-flex flex-column justify-content-between align-items-center flex-lg-row flex-md-row">
                        <a href="/">
                            <img alt="logo" src="/assets/img/logo/right-red_white.png" className="d-inline-block align-top mylogo" />
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
                                                <img src={this.state.group.photo} alt="" />
                                            </div>

                                            <div className="profile-header-info">
                                                <h4 className="m-t-10 m-b-5">{this.state.group.titel}</h4>
                                                <p className="m-b-10"> {this.state.group.description ? this.state.group.description : 'no description'}</p>
                                                {this.state.isJoined ?
                                                    <span className="btn btn-sm btn-danger mb-2">Leave Group</span>
                                                :
                                                    <span className="btn btn-sm btn-info mb-2">Join Group</span>
                                                }
                                            </div>

                                        </div>

                                        <ul className="profile-header-tab nav nav-tabs">
                                            {this.state.isJoined && <li className="nav-item"><a href="#profile-post" className="nav-link active show" data-toggle="tab">POSTS</a></li>}
                                            <li className="nav-item"><a href="#profile-about" className={this.state.isJoined ? 'nav-link' : 'nav-link active show'} data-toggle="tab">ABOUT</a></li>
                                            {this.state.isJoined && <li className="nav-item"><a href="#profile-friends" className="nav-link" data-toggle="tab">MEMBERS</a></li>}
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- end profile --> */}

                                {/* <!-- begin profile-content --> */}
                                <div className="profile-content">

                                    <div className="tab-content p-0">
                                        {/* Posts  */}
                                        {this.state.isJoined &&
                                        <div className="tab-pane fade active show" id="profile-post">

                                            <ul className="timeline">
                                                {
                                                    test.map((index) => { return <GroupPagePost key={index}/> })
                                                }
                                                <li>
                                                    <div className="timeline-icon">
                                                        <   span>&nbsp;</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        Loading...
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>
                                        }
                                        {/* Members  */}
                                        {this.state.isJoined &&
                                        <div className="tab-pane fade" id="profile-friends">
                                            <h4 className="m-t-0 m-b-20 text-light">Memners List (14)</h4>

                                            <div className="row row-space-2">
                                                {
                                                    test.map((index) => { return <GroupPageMember key={index} /> })
                                                }


                                            </div>
                                        </div>
                                        }
                                        {/* About  */}
                                        <div className={this.state.isJoined ? "tab-pane fade" : "tab-pane fade active show"} id="profile-about">
                                            <div className="table-responsive">
                                                <table className="table table-profile">
                                                    
                                                    <tbody>
                                                        <tr className="highlight">
                                                            <td className="field">Name</td>
                                                            <td><input className=" bg-transparent border-0 text-light" type="text" value="Add Mood Message" disabled={!this.state.isAdmin}/></td>
                                                        </tr>
                                                       
                                                        <tr className="divider">
                                                            <td colSpan="2"></td>
                                                        </tr>

                                                        <tr className="highlight">
                                                            <td className="field">Description</td>
                                                            <td><input className=" bg-transparent border-0 text-light" type="text" value="Add Description" disabled={!this.state.isAdmin}/></td>
                                                        </tr>
                                                        <tr className="divider">
                                                            <td colSpan="2"></td>
                                                        </tr>
                                                        <tr className="highlight">
                                                            <td className="field">Name</td>
                                                            <td><input className=" bg-transparent border-0 text-light" type="text" value="Add Mood Message" disabled={!this.state.isAdmin}/></td>
                                                        </tr>
                                                       
                                                        <tr className="divider">
                                                            <td colSpan="2"></td>
                                                        </tr>

                                                        <tr className="highlight">
                                                            <td className="field">Description</td>
                                                            <td><input className=" bg-transparent border-0 text-light" type="text" value="Add Description" disabled={!this.state.isAdmin}/></td>
                                                        </tr>
                                                        <tr className="divider">
                                                            <td colSpan="2"></td>
                                                        </tr>
                                                        
                                                        <tr className="highlight">
                                                            <td className="field">&nbsp;</td>
                                                            {this.state.isAdmin ?
                                                            <td className="p-t-10 p-b-10">
                                                                <button type="submit" className="btn btn-primary width-150 mx-2">Update</button>
                                                                <button type="submit" className="btn btn-danger btn-white-without-border width-150 mx-2">Cancel</button>
                                                            </td>
                                                            :
                                                            <td className="p-t-10 p-b-10">
                                                                { this.state.isJoined ?
                                                                <button type="submit" className="btn btn-danger width-150 mx-2">Leave Group</button>
                                                                :
                                                                <button type="submit" className="btn btn-primary btn-white-without-border width-150 mx-2">Join Group</button>
                                                                }
                                                            </td>
                                                                
                                                            }
                                                        </tr>
                                                    </tbody>
                                                </table>
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
        )
    }

}

export default GroupPage;