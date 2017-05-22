import { combineReducers } from 'redux';
import ReposReducer from './repos'
import RepoReducer from './repo'

const rootReducer = combineReducers({
  repos: ReposReducer,
  repo: RepoReducer

});

export default rootReducer;