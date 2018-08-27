import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import store from './js/store/index'

class App extends Component {

componentWillMount(){
  axios
  .get("http://localhost:8080/Blogify/api/posts")
  .then(function(response) {
    response.data._embedded.posts.map(obj => {
      console.log(obj.title + "  "+obj.desc);
    })
  })
  .catch(function(error) {
    console.log(error);
  });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
