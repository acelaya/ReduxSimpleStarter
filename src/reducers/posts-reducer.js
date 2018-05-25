import { FETCH_POSTS, CREATE_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      const { data } = action.payload;
      return { ...state, [data.id]: data  };
  }

  return state;
}
