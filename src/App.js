import {Component} from "react"
// My own component
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
          <Footer/>
      </Router>  
    );
  }
}

export default App;
