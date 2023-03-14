import React from "react";
import Form from "./components/form";
import CV from "./components/cv";
import "./App.css";

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      information: {
        personalInformation: {},
        experienceInformation: {},
        educationInformation: {},
      }
    }
    this.informationUpdated = this.informationUpdated.bind(this);
    this.loadExampleButtonClicked = this.loadExampleButtonClicked.bind(this);
  }

  informationUpdated(information) {
    this.setState({
      information: information
    });
  }

  loadExampleButtonClicked() {
    console.log('load example button clicked');
  }

  render() {
    return(
      <div>
        <header className="appHeader"><h1>{"CV Creator"}</h1></header>
        <Form onInformationUpdate={this.informationUpdated} onExampleButtonClicked={this.loadExampleButtonClicked}/>
        <CV cvInformation={this.state.information}/>
      </div>
    );
  }
}

export default App;
