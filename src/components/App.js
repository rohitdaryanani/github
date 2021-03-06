import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import RepoList from '../containers/RepoList';
import RepoDetails from '../containers/RepoDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchBar />
          <div className="row">
            <RepoList />
            <RepoDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
