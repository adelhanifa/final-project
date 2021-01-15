import React from 'react';

class GroupPageMember extends React.Component {
    render() {
        return (
            <div className="col-md-6 my-2">
                <div className="p-10 bg-white">
                    <div className="media media-xs overflow-visible">
                        <a className="media-left" href="#:;">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="media-object img-circle" />
                        </a>
                        <div className="media-body valign-middle">
                            <b className="text-inverse">James Pittman</b>
                        </div>
                        <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                                <a href="#:;" className="btn btn-default">Friends</a>
                                <a href="#:;" className="btn btn-default">Chat</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default GroupPageMember;