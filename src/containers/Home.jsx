import React, { Component } from 'react';
import { Column, Columns, Container } from 'bloomer';
import Xml2Json from '../components/Xml2Json';
import Header from '../components/Header';
import MyFooter from '../components/MyFooter';
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
                <Header />
                
                {/* <Container style={{marginTop: 10, fontSize: 30, marginBottom: 10}}>
                    <Notification>XML to Json</Notification>
                </Container> */}
                <Container>
                    <Columns>
                        <Column>
                                <Xml2Json handler={this.handler} xmlFile={this.state.xmlFile}/>
                            
                        </Column>
                    </Columns>
                </Container>
                <MyFooter />
            </Container>
        );
    }
}

export default Home;
