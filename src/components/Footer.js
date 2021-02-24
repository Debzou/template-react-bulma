import {Footer as F,Container,Content} from 'react-bulma-components';
import React from 'react';
import {Component} from "react"

// Footer
class Footer extends Component {
  render() {
    return (
        <F>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p className="colorwhite">
                <strong className="colorwhite" >StockBot</strong> by <a className="colorwhite" href="https://github.com/Debzou">Debzou </a> and <a className="colorwhite" href="https://github.com/MrWormsy">MrWorsmy </a> 
              </p>
            </Content>
          </Container>
        </F>
      )
  }
};

export default Footer;
 