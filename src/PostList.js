import React, {useState, useEffect} from 'react';
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
            <div key={index} className="post">
                <div className="post-title">{post.title}</div>
                <div>{post.body}</div>
            </div>
        )
    };

    return(
        <div>
            {list.length > 0 && list.map(renderPost)}
        </div>
    )
}