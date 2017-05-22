import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGithubRepos } from '../../actions/index'


const SearchBar = (props) => {
  let textInput = '';
 
  const searchRepos = (event) => {
    event.preventDefault();

    props.fetchGithubRepos(textInput.value)
    textInput.value = '';
  }
  return (
    <form onSubmit={searchRepos}>
      <input
        type="text" 
        placeholder="Search Github Repos"
        ref={(input) => {textInput = input; }}/>
      <input 
        type="submit" 
        value="Search" 
        className="btn btn-primary"/>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchGithubRepos }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);