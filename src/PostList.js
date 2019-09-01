import React, { useEffect, useReducer} from 'react';
import Post from "./Post";
import  axios from 'axios';
import PostListReducer, {SET_LIST} from './PostList.reducer';


export default () => {


    const [reducerList, dispatch] = useReducer(PostListReducer, []);

    const getList = async()=>{
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');

      dispatch({
          type: SET_LIST,
          list: data
      });


    };

    useEffect(()=>{
        getList()
    }, []);

    const renderPost = (post, index) => {
        return(
            <Post key={index} post={post}/>
        )
    };

    return(
        <div>
            {reducerList.length > 0 && reducerList.map(renderPost)}
        </div>
    )
}