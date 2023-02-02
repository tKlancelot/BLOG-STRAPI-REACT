import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {  useEffect, useState } from 'react';
import SinglePost from '../Components/SinglePost.js';
import PostsAPI from '../Services/PostsAPI.js';

const Single = () => {

    const {id} = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [post,setPost] = useState([]);


    useEffect(() => {
        fetchOne();
    },[])

    const fetchOne = async () => {
        const data = await PostsAPI.findOne(id);
        console.log(id);
        setTimeout(() => {
            setPost(data);
            setIsLoading(false);
        }, 1000);
    }

    return (
        <div>
            {isLoading ? 
            <p>loading ...</p>
            : 
            <React.Fragment>
                <SinglePost post={post} key={post.id}/>
            </React.Fragment>
            }
        </div>
    );
};

export default Single;