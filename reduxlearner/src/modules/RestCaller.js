import axios from 'axios';
import store from '../js/store/index'
import { addArticle } from "../js/action/index";

export const restCallArticles = () => {
    axios
    .get("http://localhost:8080/Blogify/api/posts")
    .then(function(response) {
      response.data._embedded.posts.map(obj => {
      store.dispatch((addArticle({id: obj.id, title: obj.title, date: obj.date, imageurl: ("http://localhost:8080/Blogify/images/"+obj.imageUrl)})))    
      })
    })
    .catch(function(error) {
      console.log(error);
    });
}

export const restCallArticlebyId = (id) => {
    console.log(id);
}

