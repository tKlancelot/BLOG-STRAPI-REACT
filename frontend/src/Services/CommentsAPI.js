import axios from "axios";
import { URL_COMMENTS } from "../config.js";


const createComment = async (pseudo,content,postId) => {
    try {
        const response = await axios.post(URL_COMMENTS, {
          data: {
              Pseudo: pseudo.toString(),
              Content: content.toString(),
              post:postId
          }
        },{
          headers: {
              'content-type': 'application/json'
            }
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const findAllCommments = () => {
    return axios.get(URL_COMMENTS).then((res) => res.data)
}

export default{
    createComment,findAllCommments
}