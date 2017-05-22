import { combineReducers } from 'redux';
import RepoReducer from './repos'

const rootReducer = combineReducers({
  repos: RepoReducer
});

export default rootReducer;