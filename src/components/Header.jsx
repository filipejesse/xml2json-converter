import React, { Component } from 'react';
import { Container, Hero, HeroBody, Title } from 'bloomer';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xmlFile: ""
        }
        this.handler = this.handler.bind(this);
    }
    handler(state) {
        this.setState(state);
    }

    render() {
        return (
            <Hero isColor='info' style={{marginTop: 10, fontSize: 30, marginBottom: 10}}>
                
                <HeroBody>
                    <Container hasTextAlign='centered'>
                        <Title>XML to Json</Title>
                    </Container>
                </HeroBody>
            </Hero>
                
        );
    }
}

export default Header;
