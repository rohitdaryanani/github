import React from 'react'
import { connect } from 'react-redux';

import RepoListItem from '../../components/RepoListItem'

const RepoList = (props) => {

  const renderRepo = (repo, key) => {
    return(
      <div className="col-md-4" key={key}>
        <RepoListItem data={repo} />
      </div>
    )
  }

  if(!props.repos) {
    return <div>Search Repos To Begin</div>
  }
  return (
    <div className="row">
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