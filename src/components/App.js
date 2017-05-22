import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import RepoList from '../containers/RepoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchBar />
          <div className="row">
            <RepoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
