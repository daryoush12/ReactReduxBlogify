import React, { Component } from 'react';
import './App.css';
import NewsList from './modules/NewsList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input'
import {restCallArticles} from './modules/RestCaller';
import store from './js/store/index'


class Blogs extends Component {

  render() {
    return (
      <div className="App">
      <Grid container spacing={24}>
        <Grid  item xs={6} >
        <Paper><input type = "text"></input></Paper>
         <Paper  direction="column" justify="space-between" className="articles" ><NewsList/> </Paper>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default Blogs;
