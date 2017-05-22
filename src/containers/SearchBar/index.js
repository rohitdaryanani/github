import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGithubRepos } from '../../actions/index'

import './index.css'


const SearchBar = (props) => {
  let textInput = '';
 
  const searchRepos = (event) => {
    event.preventDefault();

    if(!textInput.value) return;

    props.fetchGithubRepos(textInput.value)
    textInput.value = '';
  }
  return (
    <div className="text-center mt-5 mb-5">
      <p className="mb-4">You can search Github using the search box below </p>
      <form onSubmit={searchRepos}>
        <input
          type="text" 
          placeholder="Search Github Repos"
          ref={(input) => {textInput = input; }}/>
        <input 
          type="submit" 
          value="Search" 
          className="btn btn-secondary ml-2"/>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchGithubRepos }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);