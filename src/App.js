import './App.css';
import React from "react";

let t = "";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Punctuation Only
          <h2><span id="space">Input</span> <span id="space">Output</span></h2>
          <Worker></Worker>
      </header>
    </div>
  );
}

function findPunctuation(str) {
    let text = "";
    if (str.match(/[.,-/#!$%^&*;:{}=\-_`~()]/g) != null) {
        str.match(/[.,-/#!$%^&*;:{}=\-_`~()]/g).forEach(function(x){text += x;});
    }
    return text;
}

class Worker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        t = event.target.value;
    }

    render() {
        return (
            <header>
                <textarea className="App-input" onresize={false} value={this.state.value} onChange={this.handleChange} />
                <textarea className="App-output" readOnly={true} value={findPunctuation(t)} />
            </header>
        );
    }
}

export default App;
