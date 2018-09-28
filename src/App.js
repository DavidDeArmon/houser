import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import route from './route';
import Header from './components/header/Header';
import {Provider} from'react-redux'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <div className="App">
            <Header/>
            {route}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
