import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
// import './mainCss.css'
// import './App.css'

import IntroPage from "./components/IntroPage";
import AboutUs from './components/AboutUs'
import FormUser from "./components/FormUser";
import ProfilePage from "./components/ProfilePage";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
import FormGoals from "./components/FormGoals";
=======
import CreateGoals from "./components/CreateGoals";
import GroupPage from "./components/GroupPage";

// import CreateUser from './components/CreateUser';
// import FormTest from "./components/FormTest";
// import FormUser2 from "./components/FormUser2";
>>>>>>> 35313e29a13b62861816c84846ef7ebd98d70888
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
        <Route path='/create/goal' exact component={CreateGoals} />
        <Route path='/interestedgoals' exact component={CreateGoals} />
        <Route path='/group-page' exact component={GroupPage} />
      </Router>
    </div>
  );
}

export default App;
