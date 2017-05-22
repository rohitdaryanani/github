import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGithubRepos } from '../actions/index'

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.searchRepos = this.searchRepos.bind(this);
  }
  
  searchRepos(event) {
    event.preventDefault();
    this.props.fetchGithubRepos(this.textInput.value)
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchGithubRepos }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);