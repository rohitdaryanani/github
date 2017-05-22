import {FETCH_FOLLOWERS} from '../actions/index'

export default (state = null, action) => {
  switch(action.type){
    case FETCH_FOLLOWERS:
    return action.payload;
    default:
    return state;
  }
}