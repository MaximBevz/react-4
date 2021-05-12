import './App.css';
import Characters from "./components/characters/Characters";
import Inventory from "./components/inventory/Inventory";
import Home from "./components/home/Home";
import CharacterInfo from "./components/character-info/CharacterInfo";

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
              <div><Link to={'/'}>Home</Link></div>
              <div><Link to={'/characters'}> to Characters</Link></div>
              <div><Link to={'/inventory'}> to Inventory</Link></div>

              <Switch>
                  <Route exact path={'/'} render={() => <Home />}/>
                  <Route path={'/inventory'} render={(props) => <Inventory {...props}/>}/>
                  <Route exact path={'/characters'} render={(props) => <Characters {...props}/>}/>
                  <Route exact path={'/characters/:id'} render={(props) => {
                     let {match:{params:{id}}} = props;
                      return <CharacterInfo characterId={id}
                  />
                  }}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
