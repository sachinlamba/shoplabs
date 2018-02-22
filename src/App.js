import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="iframe-div">
          <iframe className="iframe-df"
            src="https://console.dialogflow.com/api-client/demo/embedded/b391e62e-588b-48a0-b250-25690d5b8c41">
          </iframe>
        </div>
        <div className="layoutResizer"></div>
        <div className="userSays">
          <div style={{paddingTop: "15px"}} className="list-sent">Say like this :</div>
          <ul className="list-para">
            <li className="list-sent">show available products</li>
            <li className="list-sent">Register me as ****@***.*** with password *****</li>
            <li className="list-sent">login me by  ****@***.*** and ********</li>
            <li className="list-sent">logout me</li>
            <li className="list-sent">View product list</li>
            <li className="list-sent">open product second | details of first product</li>
            <li className="list-sent">if in 'product list', say like - add five of fifth product to my cart</li>
            <li className="list-sent">if in 'product details', say like - add 5 of these to my cart</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
