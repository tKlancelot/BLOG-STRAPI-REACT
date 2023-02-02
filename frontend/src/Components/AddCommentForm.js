import React from 'react';

const AddCommentForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
    }

    const handleChange = (event) => {
        console.log(event.currentTarget.value)
        const value = currentTarget.value;
    }

    return (
        <form onSubmit={handleSubmit} className="form" action="" method='post'>
            <div className="form__row">
                <input type="text" name="pseudo" id="" required placeholder='pseudo' onChange={handleChange}/>
            </div>
            <div className="form__row">
                <textarea name="commentaire" id="commentaire" required placeholder='commentaire' onChange={handleChange}></textarea>
            </div>
            <div className="form__row --submit">
                <input type="submit" id="submit" value='envoyer'/>
            </div>
        </form>
    );
};

export default AddCommentForm;