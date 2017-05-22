import React from 'react';

const RepoListItem = (props) => {
  return (
    <div className="card repolist-item" onClick={ () => props.getRepoDetail(props.data)}>
      <div className="card-block">
        {props.data.full_name}
      </div>
    </div>
  )
}

export default RepoListItem;