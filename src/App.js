import {Component} from "react"
// My own component
import Home from './Home';
import NavBar from './NavBar';
import FooterPage from './FooterPage';
import About from './About';
// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


// Main
class App extends Component {
  render() {
    return (
      <Router>        
          <NavBar/>
          <Switch>
            {/* Routing */}
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
          <FooterPage/>
      </Router>  
    );
  }
}

export default App;
