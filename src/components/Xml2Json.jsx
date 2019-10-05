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
    let textIn = document.getElementById("xml").value;
    let result;
    try {
      result = convert.xml2json(textIn, {compact: true, spaces: 4})
    } catch {
      console.log("invalid argument");
      document.getElementById("boxXml").innerHTML = "Xml inválido!";
    }

    console.log(result);
    this.setState({file: result});

    this.props.handler({xmlFile: this.state.file});
    if(result != null){
      document.getElementById("boxXml").innerHTML = "";
      document.getElementById("boxJson").innerHTML = "";
      document.getElementById("json").value = result;
    }  

  }

  getFileJson() {
    let textIn = document.getElementById("json").value;
    let result;
    try {
      result = convert.json2xml(textIn, {compact: true, ignoreComment: true, spaces: 4})
    } catch {
      console.log("invalid argument");
      document.getElementById("boxJson").innerHTML = "Json inválido!";
    }

    this.setState({file: result});
    this.props.handler({xmlFile: this.state.file});

    if(result != null){
      document.getElementById("boxXml").innerHTML = "";
      document.getElementById("boxJson").innerHTML = "";
      document.getElementById("xml").value = result;
    }  

  }

  render() {
    return (
      <Box>  
        <Column>
          <div className="field"> 
              <div className="control">
                <textarea className="textarea is-info" id="xml" placeholder="XML" rows="10"></textarea>
              </div>
              <span id="boxXml" style={{color: "red"}}></span>
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
              <span id="boxJson" style={{color: "red"}}></span>
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
