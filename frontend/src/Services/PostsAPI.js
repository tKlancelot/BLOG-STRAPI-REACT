import axios from "axios";
import { API_URL, URL_POSTS } from "../config.js";

function findAll(){
    return(
        fetch(`${URL_POSTS}?populate=*`,{
            method : "GET",
            headers:{
                'Accept':'Application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            return response.data;
        })
    )
}


function findOne(id){
    return(
        fetch(`${URL_POSTS}/${id}?populate=*`)
        .then(res => res.json())
        .then(response => {
            return response.data;
        })
    )
}


function getComments(id){
    return axios.get(`${URL_POSTS}/${id}/comments`).then((res) => res.data);
}

export default {
    findAll,findOne,getComments
}