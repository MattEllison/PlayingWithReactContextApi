import React, { Component } from 'react';

import './App.css';
import Test from './Test';
import HelloWorld from './HelloWorld';

import UserContext from './Context';
class App extends Component {

  state = {
    user: 'Matthew',
    count: 0,
    addOne: () => { this.setState({ count: this.state.count + 1 }) }
  }

  render() {
    return (
      <div className="App">
        <h1>Parent Page - {this.state.count}</h1>
        <UserContext.Provider value={this.state}>
          <Test />
          <HelloWorld />
        </UserContext.Provider>

      </div>
    );
  }
}

export default App;
