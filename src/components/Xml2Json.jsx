import React, { Component } from 'react';
import { Column, Box, Button } from 'bloomer';
var convert = require('xml-js');

class Xml2Json extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    }
    this.getFileXml = this.getFileXml.bind(this);
    this.getFileJson = this.getFileJson.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      file: ''
    });
  }

  getFileXml() {
    let temp = document.getElementById("xml").value;
    console.log(temp);
    let result = convert.xml2json(temp, {compact: true, spaces: 4})
    console.log(result);
    this.setState({file: result});

    this.props.handler({xmlFile: this.state.file});

    document.getElementById("json").value = result;

  }

  getFileJson() {
    let temp = document.getElementById("json").value;
    console.log(temp);
    let result = convert.json2xml(temp, {compact: true, ignoreComment: true, spaces: 4})
    console.log(result);
    this.setState({file: result});

    this.props.handler({xmlFile: this.state.file});

    document.getElementById("xml").value = result;

  }

  render() {
    return (
      <Box>  
        <Column>
          <div className="field"> 
              <div className="control">
                <textarea className="textarea is-info" id="xml" placeholder="XML" rows="10"></textarea>
              </div>
          </div>
        </Column>
        <Column>
          <div className="menu-row" >
            <Button isColor='info' onClick={this.getFileXml}>Convert to Json</Button>
          </div>
        </Column>
        <Column>
          <div className="field">
              <div className="control">
                  <textarea className="textarea is-info" id="json" placeholder="json" rows="10"></textarea>
              </div>
          </div>
        </Column>
        <Column>
          <div className="menu-row" >
            <Button isColor='info' onClick={this.getFileJson}>Convert to Xml</Button>
          </div>
        </Column>
      </Box>
    )
  }

}

export default Xml2Json;
