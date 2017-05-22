import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetails, getFollowers } from '../../actions/index'

import RepoListItem from '../../components/RepoListItem'

import './index.css'

const RepoList = (props) => {

  const getRepoDetail = (data) => {
    props.getDetails(data);
    props.getFollowers(data.owner.followers_url);
  }

  const renderRepo = (repo, key) => {
    return(
      <div className="mb-3" key={key}>
        <RepoListItem data={repo} getRepoDetail={getRepoDetail} />
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getDetails, getFollowers }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);