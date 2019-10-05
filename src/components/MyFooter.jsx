import React, { Component } from 'react';
import { Column, Columns, Container, Footer, Content } from 'bloomer';
class MyFooter extends Component {
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
            <Footer id='footer'>
                <Container>
                    <Content>
                        <Columns>
                            <Column>
                                <p>
                                    Powered by <a href="https://filipejesse.github.io">Filipe Jessé</a>
                                </p>
                            </Column>
                        </Columns>
                    </Content>
                </Container>
            </Footer>
        );
    }
}

export default MyFooter;
