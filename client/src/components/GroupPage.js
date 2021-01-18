// import React from 'react';
// import '../cssComponents/group-page.css';
// import GroupPageMember from './GroupPage-member';
// import GroupPagePost from './GroupPage-post';

// class GroupPage extends React.Component {
//     render() {
//         let test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//         return (
//             <div className="body-page min-vh-100">

//                 <div className="bg-dark  p-2">
//                     <div className="container d-flex flex-column justify-content-between align-items-center flex-lg-row flex-md-row">
//                         <a href="/">
//                             <img alt="logo" src="/assets/img/logo/right-red_white.png" className="d-inline-block align-top mylogo" />
//                         </a>
//                         <h3 className="text-light">Sign In Page</h3>
//                     </div>
//                 </div>

//                 <div className="container">
//                     <div className="row">

//                         <div className="col-md-12">

//                             <div id="content" className="content content-full-width">

//                                 {/* <!-- begin profile --> */}
//                                 <div className="profile p-0">
//                                     <div className="profile-header">

//                                         <div className="profile-header-cover"></div>

//                                         <div className="profile-header-content">

//                                             <div className="profile-header-img">
//                                                 <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
//                                             </div>

//                                             <div className="profile-header-info">
//                                                 <h4 className="m-t-10 m-b-5">Sean Ngu</h4>
//                                                 <p className="m-b-10">UXUI + Frontend Developer</p>
//                                                 <a href="#" className="btn btn-sm btn-info mb-2">Edit Profile</a>
//                                             </div>

//                                         </div>

//                                         <ul className="profile-header-tab nav nav-tabs">
//                                             <li className="nav-item"><a href="#profile-post" className="nav-link active show" data-toggle="tab">POSTS</a></li>
//                                             <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
//                                             <li className="nav-item"><a href="#profile-friends" className="nav-link" data-toggle="tab">MEMBERS</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 {/* <!-- end profile --> */}

//                                 {/* <!-- begin profile-content --> */}
//                                 <div className="profile-content">

//                                     <div className="tab-content p-0">
//                                         {/* Posts  */}
//                                         <div className="tab-pane fade active show" id="profile-post">

//                                             <ul className="timeline">
//                                                 {
//                                                     test.map((index) => { return <GroupPagePost /> })
//                                                 }
//                                                 <li>
//                                                     <div className="timeline-icon">
//                                                         <   span>&nbsp;</span>
//                                                     </div>
//                                                     <div className="timeline-body">
//                                                         Loading...
//                                                     </div>
//                                                 </li>
//                                             </ul>

//                                         </div>
//                                         {/* Members  */}
//                                         <div className="tab-pane fade" id="profile-friends">
//                                             <h4 className="m-t-0 m-b-20 text-light">Memners List (14)</h4>

//                                             <div className="row row-space-2">
//                                                 {
//                                                     test.map((index) => { return <GroupPageMember /> })
//                                                 }


//                                             </div>
//                                         </div>
//                                         {/* About  */}
//                                         <div className="tab-pane fade" id="profile-about">
//                                             <div className="table-responsive">
//                                                 <table className="table table-profile">
//                                                     <thead>
//                                                         <tr>
//                                                             <th></th>
//                                                             <th>
//                                                                 <h4>Micheal    Meyer <small>Lorraine Stokes</small></h4>
//                                                             </th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr className="highlight">
//                                                             <td className="field">Mood</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="Add Mood Message" disabled/></td>
//                                                         </tr>
//                                                         <tr className="divider">
//                                                             <td colspan="2"></td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td className="field">Mobile</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="+1-(847)- 367-8924" disabled/></td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td className="field">Home</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="Add Number" disabled/></td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td className="field">Office</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="Add Number" disabled/></td>
//                                                         </tr>
//                                                         <tr className="divider">
//                                                             <td colspan="2"></td>
//                                                         </tr>
//                                                         <tr className="highlight">
//                                                             <td className="field">About Me</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="Add Description" disabled/></td>
//                                                         </tr>
//                                                         <tr className="divider">
//                                                             <td colspan="2"></td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td className="field">Country/Region</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="United State" disabled/></td>    
//                                                         </tr>
//                                                         <tr>
//                                                             <td className="field">City</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="Los Angeles" disabled/></td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td className="field">State</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="Add State" disabled/></td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td className="field">Website</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="Add Webpage" disabled/></td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td className="field">Gender</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="Male" disabled/></td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td className="field">Birthdate</td>
//                                                             <td><input className=" bg-transparent border-0 text-light" type="text" value="04/11/1989" disabled/></td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td className="field">Language</td>
//                                                             <td>
//                                                             <input className=" bg-transparent border-0 text-light" type="text" value="English" disabled/></td>
//                                                         </tr>
//                                                         <tr className="divider">
//                                                             <td colspan="2"></td>
//                                                         </tr>
//                                                         <tr className="highlight">
//                                                             <td className="field">&nbsp;</td>
//                                                             <td className="p-t-10 p-b-10">
//                                                                 <button type="submit" className="btn btn-primary width-150">Update</button>
//                                                                 <button type="submit" className="btn btn-white btn-white-without-border width-150 m-l-5">Cancel</button>
//                                                             </td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </div>

//                                     </div>

//                                 </div>
//                                 {/* <!-- end profile-content --> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

// export default GroupPage;