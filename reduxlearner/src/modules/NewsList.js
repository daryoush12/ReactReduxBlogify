import React from "react";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom';



const mapStateToProps = state => {
  return { articles: state.articles };
};
//Currently we list all posts as they are into a list.
//TODO: Categorise blogs 
//and determine how many posts should be shown per page.
const ConnectedList = ({ articles }) => (
  <Grid>
    {articles.map(el => (
      <div className="app_article" key={el.id} >
       <Grid container direction="row" justify="space-evenly">
        <Grid className = "grid_title"><p>{el.title}</p></Grid> 
        <Grid className = "grid_date"><p>{el.date}</p></Grid>
        <Grid><Link to={"/blogs/"+el.id}>Read</Link></Grid>
        </Grid>
      </div>
      
    ))}
  </Grid>
);
const NewsList = connect(mapStateToProps)(ConnectedList);
export default NewsList;