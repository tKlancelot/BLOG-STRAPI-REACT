import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config.js';
import AddCommentForm from './AddCommentForm.js';
import Navigation from './Navigation.js';
import Presentation from './Presentation.js';
import CommentsAPI from '../Services/CommentsAPI.js';

const SinglePost = ({post}) => {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const [comments,setComments] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetchComments();
    },[])

    const fetchComments = async() => {
        const data = await CommentsAPI.findAllCommments();
        try{
            setTimeout(() => {
                setComments(data);
                setIsLoading(false);
                console.log(data)
                console.log(comments)
            }, 1000);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <Navigation/>
            <Presentation title={post.attributes.Title}/>
            <div className='single-post'>
                <div className="single-post__flap">
                    <div className="single-post__flap__left">
                        {post.attributes.Picture && (
                            <img src={ API_URL + post.attributes.Picture.data.attributes.url} alt={post.attributes.Picture.data.attributes.alternativeText} />
                        )}
                    </div>
                    <div className="single-post__flap__right">

                        <h4>{new Date(post.attributes.createdAt).toLocaleDateString('fr-FR',options)}</h4>
                        <p>{post.attributes.ShortDesc}</p>
                    </div>
                </div>
                <div className="single-post__comments">
                    <div className="single-post__comments__header">
                        <h2>commentaires</h2>
                    </div>
                    <div className="single-post__comments__left">
                        <AddCommentForm fetchComments={fetchComments} id={post.id}/>
                    </div>
                    <div className="single-post__comments__right">
                        <ul>
                        { isLoading ? <p>loading</p> : comments.data.map(comment => {
                                return(
                                    <li key={comment.id}>
                                        <p>{comment.attributes.Pseudo}</p>
                                        <p>{comment.attributes.Content}</p>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div className="single-post__footer">
                    <Link to='/'>
                        <button>retour</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SinglePost;