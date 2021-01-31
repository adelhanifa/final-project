import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
// import './mainCss.css' 
// import './App.css'

import IntroPage from "./components/home-page/IntroPage";
import AboutUs from './components/home-page/AboutUs'
import FormUser from "./components/signin-register/FormUser";
import ConfirmUserEmail from "./components/signin-register/ConfirmUserEmail";
import ProfilePage from "./components/ProfilePage.jsx";
import FormGoals from "./components/signin-register/FormGoals";
import CreateGoals from "./components/groups/CreateGoals";
import GroupPage from "./components/groups/GroupPage";
import CardDisplay from "./components/groups/CardDisplay.jsx";
import FormForgetPassword from "./components/signin-register/FormForgetPassword";
import FormResetPassword from "./components/signin-register/FormResetPassword";
import GroupPageMember from "./components/groups/GroupPage-member";
import GroupPagePost from "./components/groups/GroupPage-post";
// import GoalCard from "./components/groups/GoalCard"

function App() {
let history = useHistory();
  return (
    <div>
      <Router history={history}>
        <Route path='/' exact component={IntroPage} />
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/login/register' exact component={FormUser} />
        <Route path='/user/goals' exact component={FormGoals} />
        <Route path='/user/confirm/:id' exact component={ConfirmUserEmail} />
        <Route path='/user/profile' exact component={ProfilePage} />
        <Route path='/user/createGoal' exact component={CreateGoals} />
        <Route path='/interestedgoals' exact component={CardDisplay} />
        <Route path='/group-page' exact component={GroupPage} /> 
        <Route path='/group-page/post' exact component={GroupPagePost} />
        <Route path='/goal-card' exact component={CardDisplay} />
        <Route path='/group-page/member' exact component={GroupPageMember} />
        <Route path='/user/forget-password' exact component={FormForgetPassword} />
        <Route path='/user/reset/:id' exact component={FormResetPassword} />

      </Router>
    </div>
  );
}

export default App;
