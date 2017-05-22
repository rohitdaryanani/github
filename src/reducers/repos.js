import {FETCH_REPOS} from '../actions/index'

export default (state = null, action) => {
  switch(action.type){
    case FETCH_REPOS:
    return action.payload.data.items;
  }
  return state;
}
