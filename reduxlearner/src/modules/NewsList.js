import React from "react";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";



const mapStateToProps = state => {
  return { articles: state.articles };
};
const ConnectedList = ({ articles }) => (
  <Grid>
    {articles.map(el => (
      <Paper className="app_article" key={el.id} >
       <Grid container direction="row" justify="space-evenly">
        <Grid className = "grid_title"><p>{el.title}</p></Grid> 
        <Grid className = "grid_date"><p>{el.date}</p></Grid>
        <Button variant="outlined">Read</Button>
        </Grid>
      </Paper>
      
    ))}
  </Grid>
);
const NewsList = connect(mapStateToProps)(ConnectedList);
export default NewsList;