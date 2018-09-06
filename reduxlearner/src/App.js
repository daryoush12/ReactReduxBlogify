import React, { Component } from 'react';
import './App.css';
import NewsList from './modules/NewsList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {restCallArticles,restCallArticlebyId} from './modules/RestCaller';
import { BrowserRouter as Router, Route, Link, AppLayout } from "react-router-dom";
import Blog from './blog';
import blogs from './blogs';
import store from './js/store/index'
import NewsArticle from './modules/NewsArticle';


class App extends Component {

componentDidMount(){
  restCallArticles();
  restCallArticlebyId(37);
}

  render() {
    return (
      <Router>
        <div>
      <Route exact path="/" component={blogs}/>
      <Route path="/blogs/:id" component={NewsArticle}/>
      </div>
      </Router>
    );
  }
}

export default App;
