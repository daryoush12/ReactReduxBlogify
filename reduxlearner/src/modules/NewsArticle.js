import React from "react";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import Interweave from "interweave";
import moment from 'moment';

  const mapStateToProps = state => {
    return {articles: state.articles};
  };
  //Currently we are reading redux store articles and looping through it.
  //TODO: Implement another rest call for singular posts?
  const ConnectedArticle = ({ articles, match }) => (
    <Grid direction ="column" jusitfy="space-evenly">
      {articles.map(el => {
          if(el.id == match.params.id){
              return(
            <Paper className="app_article" key={el.id} >
            <Grid container direction="row" justify="space-evenly">
             <Grid className = "grid_title"><h1>{el.title}</h1></Grid> 
             <Grid className = "grid_date"><p>Posted on {moment(el.date).format("MMM Do YYYY")}</p></Grid>
             </Grid>
             <Grid dangerouslySetInnerHTML={{__html: el.content}}></Grid>
           </Paper>
              )}
          else {
              return( <div>Blog does not exist!</div>)
             
          }
      } 
      )}
    </Grid>
  );
  const NewsArticle = connect(mapStateToProps)(ConnectedArticle);
  export default NewsArticle;