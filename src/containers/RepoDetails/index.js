import React from 'react';
import {connect} from 'react-redux';

import './index.css';

const RepoDetails = ({repo, followers}) => {
  if (!repo) return <div></div>

  let followersCount = 0;

  if (followers){
    followersCount = followers.data.length;
  }

  return (
    <div className="col-md-6">
      <div className="card" style={{width: 20 + 'rem'}}>
        <img className="card-img-top" src={repo.owner.avatar_url} alt="" />
        <p>{repo.avatar_url}</p>
        <div className="card-block">  
          <h4 className="card-title">{repo.full_name}</h4>
          <p className="card-text">{repo.description}</p>
          <p className="card-text"><span>Language: </span>{repo.language}</p>
          <p className="card-text"><span>Followers: </span>{followersCount}</p>
        </div>  
        <div className="card-block">
          <a href={repo.html_url} className="card-link">Go to repo</a>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({repo, followers}) =>{
  return {
    repo,
    followers
  }
}

export default connect(mapStateToProps)(RepoDetails);