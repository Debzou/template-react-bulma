import {Hero,Footer,Container,Content} from 'react-bulma-components';
import React from 'react';
import {Component} from "react"

// Footer
class FooterPage extends Component {
  render() {
    return (
    <Hero size="fullheight">
      <Hero.Head renderAs="header" />
      <Hero.Body />
      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p className="colorwhite">
                <strong className="colorwhite" >StockBot</strong> by <a className="colorwhite" href="https://github.com/Debzou">Debzou </a> and <a className="colorwhite" href="https://github.com/MrWormsy">MrWorsmy </a> 
              </p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
  </Hero>)
  }
};

export default FooterPage;
 