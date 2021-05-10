import {useState, useEffect} from 'react';
import axiosInstance from '../../services/api'

function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosInstance.get('/posts')
    }, [])

    return (
        <div>


        </div>
    );
}

export default Posts;


