/**
 * In the following React template, modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
 * You are free to add classes and styles, but make sure you leave the element ID's as they are.
 */
 import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
class Counter extends React.Component <{}, {value: number}> {
  constructor(props) {
    super(props);
    this.state = {
      value:1
    };
    
  }
  onclick = () => {
    this.setState({value: this.state.value+1});
  }

  render() {
    return (
      <div id="mainArea">
        <p>button count: <span>Count: { this.state.value}</span></p>
        <button id="mainButton" onClick={this.onclick}>Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('test-02')
);