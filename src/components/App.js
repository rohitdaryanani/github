import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import RepoList from '../containers/RepoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <RepoList />
      </div>
    );
  }
}

export default App;
