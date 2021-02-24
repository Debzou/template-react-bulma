import {Component} from "react"
import{Navbar} from "react-bulma-components"
import { Link } from "react-router-dom";


// NavBar
class NavBar extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleBurger = this.handleBurger.bind(this);
  }

  // Activate burger or Disabled burger
  handleBurger(){
    this.state.active ? this.setState({active: false}) : this.setState({active: true});
  }

  // Render html
  render() {
    return (
      <Navbar active={this.state.active}>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            <img src="/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </Navbar.Item>
          <Navbar.Burger onClick={this.handleBurger} />
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>            
              <Link className="navbar-item navitemStyle"  to="/">Home</Link>            
          </Navbar.Container>
          <Navbar.Container position="end">            
            <Link className="navbar-item navitemStyle" to="/about">About us</Link>           
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  } 
}

export default NavBar;