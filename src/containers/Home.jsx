import React, { Component } from 'react';
import { Column, Columns, Container, Notification } from 'bloomer';
import Xml2Json from '../components/Xml2Json';
class Home extends Component {
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
            <Container isFluid>
                <Container style={{marginTop: 10, fontSize: 30}}>
                    <Notification>XML to Json</Notification>
                </Container>
                <Container>
                    <Columns>
                        <Column>
                                <Xml2Json handler={this.handler} xmlFile={this.state.xmlFile}/>
                            
                        </Column>
                    </Columns>
                </Container>
            </Container>
        );
    }
}

export default Home;
