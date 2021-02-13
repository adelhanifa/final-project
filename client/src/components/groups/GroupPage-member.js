import React from 'react';

class GroupPageMember extends React.Component {
    render() {
        let member = this.props.member
        let you = JSON.parse(localStorage.getItem('loggedInUser'))._id === member._id
        let isAdmin = this.props.admin === member._id
       return (
            <div className="col-md-6 my-2">
                <div className="p-10 bg-white">
                    <div className="media media-xs overflow-visible">
                        <div className="media-left">
                            <img src={member.profileImg} alt="" className="media-object img-circle" />
                        </div>
                        <div className="media-body valign-middle">
                            {you ? 'you' : <b className="text-inverse">{member.firstName} {member.lastName}</b>}&nbsp;{isAdmin && '(Group Admin)' }
                        </div>
                        <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                            {you ? '' : <a href="#:;" className="btn btn-default" title={member._id}>Chat</a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default GroupPageMember;