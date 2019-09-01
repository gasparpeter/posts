import React, {useState, useEffect} from 'react';
import Post from "./Post";
import  axios from 'axios';

export default () => {

    const [list, setList] = useState([]);

    const getList = async()=>{
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setList(data);
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
            {list.length > 0 && list.map(renderPost)}
        </div>
    )
}