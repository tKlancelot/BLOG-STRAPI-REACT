import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommentsAPI from '../Services/CommentsAPI.js';

const AddCommentForm = (props) => {

    const [comment,setComment] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        CommentsAPI.createComment(comment.pseudo,comment.content,props.id);
        setComment("");
        props.fetchComments();
    }

    const handleChange = ({currentTarget}) => {
        // destructuration des données de currentTarget
        const {value,name} = currentTarget;
        setComment({
            // rajouter l'existant à la variable comment 
            ...comment,
            [name] : value
        })
    }

    useEffect(() => {

    },[comment])

    return (
        <form onSubmit={handleSubmit} className="form" action="" method='post'>
            <div className="form__row">
                <input type="text" name="pseudo" id="" required placeholder='pseudo' onChange={handleChange} value={comment.pseudo || ''}/>
            </div>
            <div className="form__row">
                <textarea name="content" id="content" required placeholder='commentaire' onChange={handleChange} value={comment.content || ''}></textarea>
            </div>
            <div className="form__row --submit">
                <input type="submit" id="submit" value='envoyer'/>
            </div>
        </form>
    );
};

export default AddCommentForm;