import React from 'react';
import Navigation from '../Components/Navigation.js';
import Posts from '../Components/Posts.js';
import Presentation from '../Components/Presentation.js';


const Home = () => {
    return (
        <div>
            <Navigation/>
            <Presentation title="blog strapi/react"/>
            <Posts/>
        </div>
    );
};

export default Home;