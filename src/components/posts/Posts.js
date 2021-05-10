import {getPost, getPosts} from "../../services/api.services";
import {useState, useEffect} from 'react';
import Post from '../post/Post';

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState(null);

    useEffect(() => {
        getPosts().then(val => setPosts([...val.data]));
    }, []);

    const allInfo = (id) => {setSinglePost(posts.find(el => el.id === id))}

    return (
        <div>
            <h1>Posts</h1>
            <h2>{singlePost ? singlePost : 'Click on Post'}</h2>

            {
                posts.map(item => <Post key={item.id} info={item} allInfo={allInfo}/>)
            }
        </div>
    );
}