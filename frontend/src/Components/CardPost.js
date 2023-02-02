import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config.js';

const CardPost = ({post}) => {

    const seconds = post.attributes.ReadingTime;
    const minutes = Math.ceil(seconds / 60);

    return (
        <div className='card-post'>
            <div className="card-post__header">
                {post.attributes.Picture && (
                    <img src={ API_URL + post.attributes.Picture.data.attributes.url} alt={post.attributes.Picture.data.attributes.alternativeText} />
                )}
            </div>
            <div className="card-post__body">
                <h2>{post.attributes.Title}</h2>
                <p>{post.attributes.ShortDesc.substring(0,96)} ...</p>
                <p className='text-small'>{minutes} minute{minutes <= 1 ? '' : 's'} de lecture</p>
            </div>
            <div className="card-post__footer">
                <Link to={`/post/${post.id}`}>
                    <button>Lire plus</button>
                </Link>
            </div>

        </div>
    );
};

export default CardPost;