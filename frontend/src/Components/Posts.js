import React, { useEffect, useState } from 'react';
import CardPost from './CardPost.js';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Pagination from './Pagination';
import PostsAPI from '../Services/PostsAPI.js';

export default function Posts() {

    const [isLoading,setIsLoading] = useState(true);
    const [posts,setPosts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    useEffect(() => {
        fetchAllPosts();
    },[])

    const fetchAllPosts = async () => {
        const data = await PostsAPI.findAll();
        setTimeout(() => {
            setPosts(data);
            setIsLoading(false);
        }, 1000);
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <React.Fragment>
        <div className='all-posts'>
            {isLoading ? (
            <React.Fragment>
                <Skeleton baseColor='#f4f4f492' count={2} height={120} borderRadius={0} enableAnimation={false}/> 
                <Skeleton baseColor='#f4f4f492' count={2} height={120} borderRadius={0} enableAnimation={false}/> 
                <Skeleton baseColor='#f4f4f492' count={2} height={120} borderRadius={0} enableAnimation={false}/> 
            </React.Fragment>
            ) : ( 
            // currentPosts.map((post) => <CardPost post={post} key={post.id} />)
            currentPosts.map((post) => <CardPost post={post} key={post.id} />)
            )}

        </div>
        <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Précédent</button>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(posts.length / postsPerPage)}>Suivant</button>
        </div>
        </React.Fragment>
    );
};

