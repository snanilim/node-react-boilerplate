
import axios from 'axios';

export function fetchNews(){
    return (dispatch)=>{
      axios.get('/api/news', {
          headers: {
              'Content-Type': 'application/json',
          },
      }).then((response)=>{
          dispatch({
              type: 'FETCH_NEWS_SUCCESS',
              news: response.data
          });

      }).catch(function(err){
      
      })
    }
}

