import {FETCH_DETAILS} from '../actions/index'

export default (state = null, action) => {
  switch(action.type){
    case FETCH_DETAILS:
    return action.payload;
  }
  return state;
}