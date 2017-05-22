import React, {Component} from 'react'

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.searchRepos = this.searchRepos.bind(this);
  }
  
  searchRepos(event) {
    event.preventDefault();
    this.textInput.value = '';
  }

  render() {
    return (
      <form action="" onSubmit={this.searchRepos}>
        <input 
          type="text" 
          placeholder="Search Github Repos"
          ref={(input) => { this.textInput = input; }}/>
        <input 
          type="submit" 
          value="Search" 
          className="btn btn-primary"/>
      </form>
    )
  }
}

export default SearchBar;