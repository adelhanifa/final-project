import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import './mainCss.css'
import AboutUs from './components/AboutUs'
import CreateUser from './components/CreateUser';
 import CreateGoals from "./components/CreateGoals";
// import './App.css'
import IntroPage from "./components/IntroPage";
function App() {
  return (
    <div className="App">
    <Router>
       <Route path='/' exact component={IntroPage} />
       {/* <Route path='/aboutus' exact component={AboutUs} /> */}
       <Route path='/signup' exact component={CreateUser} />
       <Route path='/interestedgoals' exact component={CreateGoals} />
    </Router>
    </div>
  );
}

export default App;
