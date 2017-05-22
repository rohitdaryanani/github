import React from 'react';

const RepoListItem = ({data}) => {
  return (
    <div className="card">
      <div className="card-block">
        {data.full_name}
      </div>
    </div>
  )
}

export default RepoListItem;