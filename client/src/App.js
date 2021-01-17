import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
// import './mainCss.css'
// import './App.css'

import IntroPage from "./components/IntroPage";
import AboutUs from './components/AboutUs'
import FormUser from "./components/FormUser";
import ProfilePage from "./components/ProfilePage";
import FormGoals from "./components/FormGoals";
import CreateGoals from "./components/CreateGoals";
import GroupPage from "./components/GroupPage";
import CardDisplay from "./components/CardDisplay";
import TestProfilePage from "./components/TestProfilePage";

// import CreateUser from './components/CreateUser';
// import FormTest from "./components/FormTest";
// import FormUser2 from "./components/FormUser2";
// import FormTest2 from "./components/FormTest2";


function App() {
let history = useHistory();
  return (
    <div>
      <Router history={history}>
        <Route path='/' exact component={IntroPage} />
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/login/register' exact component={FormUser} />
        <Route path='/user/goals' exact component={FormGoals} />
        <Route path='/user/profile' exact component={ProfilePage} />
        <Route path='/user/createGoal' exact component={CreateGoals} />
        <Route path='/interestedgoals' exact component={CardDisplay} />
        <Route path='/group-page' exact component={GroupPage} />
        <Route path='/test' exact component={TestProfilePage} />

      </Router>
    </div>
  );
}

export default App;
