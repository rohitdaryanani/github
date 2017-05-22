import React from 'react'
import { connect } from 'react-redux';

import RepoListItem from '../../components/RepoListItem'

import './index.css'

const RepoList = (props) => {

  const renderRepo = (repo, key) => {
    return(
      <div className="mb-3" key={key}>
        <RepoListItem data={repo} />
      </div>
    )
  }

  if(!props.repos) {
    return <div></div>
  }
  return (
    <div className="repo-list col-md-6">
      {props.repos.map(renderRepo)}
    </div>
  )
}

const mapStateToProps = ({repos}) => {
  return {
    repos
  };
}

export default connect(mapStateToProps)(RepoList);