import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";


function App() {
  return (
      <Router>
          <div className="App">
              <div><Link to={'users'}> to users</Link></div>
              <div><Link to={'posts'}> to posts</Link></div>

              <Switch>
                  <Route path={'/users'} render={() => <Users /> }/>
                  <Route path={'/posts'} render={() => <Posts />}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
