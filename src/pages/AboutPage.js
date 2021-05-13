import {Section, Container, Heading} from 'react-bulma-components';
import {Component} from "react"

// About page
class AboutPage extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <Heading>About us</Heading>
                    <Heading subtitle> Ah </Heading>
                </Container>
            </Section>
        );
    }
}

export default AboutPage;
