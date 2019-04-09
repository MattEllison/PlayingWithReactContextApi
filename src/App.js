import React, { Component } from 'react';

import './App.css';
import Test from './Test';

export const UserContext = React.createContext();

class App extends Component {
  state = {
    user: 'hello world'
  }

  render() {
    return (
      <div className="App">
        <h1>Parent Page</h1>
        <UserContext.Provider value={this.state}>
          <Test />
        </UserContext.Provider>

      </div>
    );
  }
}

export default App;
