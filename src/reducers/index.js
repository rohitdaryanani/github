import { combineReducers } from 'redux';
import ReposReducer from './repos'
import RepoReducer from './repo'
import FollwersReducer from './followers'

const rootReducer = combineReducers({
  repos: ReposReducer,
  repo: RepoReducer,
  followers: FollwersReducer

});

export default rootReducer;