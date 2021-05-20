import {useState, useEffect} from 'react';
import './Posts.css';
import axiosInstance from '../../services/api';
import Post from "../post/Post";

function Posts(input, init) {

    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState(null);
    //
    useEffect(() => {
        axiosInstance.get('/posts').then(value => setPosts([...value.data]));
    }, []);

    // const search = (id) => {
    //     let findedPosts = posts.find(value => value.id === id);
    //     console.log(findedPosts);
    //     setSinglePost(findedPosts)
    // }

    const search = (id) => {
        let findedPost = posts.find(value => value.id === id);
        console.log(findedPost);
        setSinglePost(findedPost);
    }


    return (
        <div className={'wrap'}>
            {/*<Post/>*/}

            <div className={'users-box'}>
                {
                    posts.map((value) => <Post
                        key={value.id}
                        item={value}
                        search={search}/>)
                }
            </div>
            <div className={'single-user-box'}>
                {
                    singlePost ? (<h2>{singlePost.id} - {singlePost.title}</h2>) : (<div>user not defined</div>)
                    // singlePost && <h2>{singlePost.id} - {singlePost.title}</h2>
                    // <h2>{singlePost?.id} - {singlePost?.title}</h2>
                }

            </div>


        </div>
    );
}

export default Posts;


