import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import NewsArticle from './modules/NewsArticle';
import store from './js/store/index'

const mapStateToProps = state => {
    return { articles: state.articles };
  };


class Blog extends Component {

    componentWillMount(){
        console.log(this.props.match.params.id);
    }
    render() {
        return (
         
             <NewsArticle id = {this.props.match.params.id}/>
        
        );
    }
}

export default Blog;