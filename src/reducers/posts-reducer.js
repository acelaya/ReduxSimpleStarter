import { FETCH_POSTS, CREATE_POSTS } from '../actions';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case CREATE_POSTS:
      return action.payload.data;
  }

  return state;
}
