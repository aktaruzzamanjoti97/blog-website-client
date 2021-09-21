import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";


function App() {

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
           <Login />
        </Route>
        <Route path="/write">
          <Write /> 
        </Route>
        <Route path="/settings">
           <Settings /> 
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
