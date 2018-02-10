

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS':
      return { ...state, news: action.news };

    default:
      return state;
  }
}


