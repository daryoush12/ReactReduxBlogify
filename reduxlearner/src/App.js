import React, { Component } from 'react';
import './App.css';
import NewsList from './modules/NewsList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {restCallArticles} from './modules/RestCaller';

const mapStateToProps = state => {
  return { articles: state.articles };
};

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: ""
    };
  }

componentDidMount(){
  restCallArticles();
  console.log("Hello world.");
}

  render() {
    return (
      <div className="App">
      <Grid container spacing={24}>
      <Grid item xs={2}>
          <Paper className="test">
            <p className="av_name">Daryoush Farsimadan</p>
          </Paper>
        </Grid>
        <Grid  direction="column" justify="space-between" className="articles" item xs={6} >
          <NewsList/>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default App;
